/**
 * script.js — Punto de entrada de la aplicación.
 * Inyecta estilos, renderiza la galería, gestiona la búsqueda y el modal.
 */

import { obras } from "./data.js";
import { styles } from "./style.js";

/* ============ 1. INYECCIÓN DE ESTILOS ============ */
function injectStyles() {
  const styleTag = document.createElement("style");
  styleTag.id = "app-styles";
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

/* ============ 2. REFERENCIAS DEL DOM ============ */
const refs = {};

function cacheRefs() {
  refs.gallery = document.getElementById("galleryContainer");
  refs.search = document.getElementById("searchInput");
  refs.noResults = document.getElementById("noResults");
  refs.modal = document.getElementById("modal");
  refs.modalContent = document.getElementById("modalContent");
  refs.modalClose = document.getElementById("modalClose");
  refs.header = document.getElementById("siteHeader");
}

/* ============ 3. UTILIDAD: ALTURA DE GRID (Masonry) ============ */
const ROW_HEIGHT = 10;   // debe coincidir con grid-auto-rows
const ROW_GAP = 18;      // debe coincidir con el gap (1.8rem ≈ 18px)

function resizeCard(card) {
  const img = card.querySelector(".card-image");
  if (!img) return;
  // Relación de aspecto natural de la imagen para un layout suntuoso
  const ratio = img.naturalHeight / img.naturalWidth || 1.3;
  const colWidth = card.getBoundingClientRect().width;
  const targetHeight = colWidth * ratio;
  const span = Math.ceil(
    (targetHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP)
  );
  card.style.gridRowEnd = `span ${span}`;
}

function resizeAllCards() {
  document.querySelectorAll(".card").forEach(resizeCard);
}

/* ============ 4. RENDER DE LA GALERÍA ============ */
function renderGallery(lista) {
  refs.gallery.innerHTML = "";

  if (!lista.length) {
    refs.noResults.hidden = false;
    return;
  }
  refs.noResults.hidden = true;

  const fragment = document.createDocumentFragment();

  lista.forEach((obra, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 0.07}s`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver detalles de ${obra.titulo}`);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img class="card-image" src="${obra.imagenUrl}"
             alt="${obra.titulo}, por ${obra.artista}" loading="lazy" />
        <span class="card-frame"></span>
        <div class="card-overlay">
          <p class="card-artist">${obra.artista}</p>
          <h3 class="card-title">${obra.titulo}</h3>
          <p class="card-year">${obra.ano}</p>
        </div>
      </div>
    `;

    // Recalcular altura cuando la imagen cargue
    const img = card.querySelector(".card-image");
    if (img.complete) {
      requestAnimationFrame(() => resizeCard(card));
    } else {
      img.addEventListener("load", () => resizeCard(card), { once: true });
    }

    // Abrir modal (clic y teclado)
    card.addEventListener("click", () => openModal(obra));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(obra);
      }
    });

    fragment.appendChild(card);
  });

  refs.gallery.appendChild(fragment);
}

/* ============ 5. BÚSQUEDA ============ */
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // elimina acentos
}

function handleSearch(e) {
  const q = normalize(e.target.value.trim());
  if (!q) {
    renderGallery(obras);
    return;
  }
  const filtradas = obras.filter(
    (o) =>
      normalize(o.titulo).includes(q) || normalize(o.artista).includes(q)
  );
  renderGallery(filtradas);
}

/* ============ 6. MODAL ============ */
function openModal(obra) {
  const curiosidadesHTML = obra.curiosidades
    .map((c) => `<li>${c}</li>`)
    .join("");

  refs.modalContent.innerHTML = `
    <div class="modal-media">
      <img src="${obra.imagenUrl}" alt="${obra.titulo}, por ${obra.artista}" />
    </div>
    <div class="modal-info">
      <p class="modal-artist">${obra.artista}</p>
      <h2 class="modal-title">${obra.titulo}</h2>
      <p class="modal-year">${obra.ano}</p>

      <p class="modal-desc">${obra.descripcion}</p>

      <div class="modal-block">
        <h4 class="modal-block-title">Contexto Histórico</h4>
        <p>${obra.historia}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Curiosidades</h4>
        <ul class="modal-curiosities">${curiosidadesHTML}</ul>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">La Mirada del Experto</h4>
        <div class="modal-expert">
          <p>${obra.opinionExperto}</p>
        </div>
      </div>
    </div>
  `;

  refs.modal.classList.add("open");
  refs.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  refs.modalClose.focus();
}

function closeModal() {
  refs.modal.classList.remove("open");
  refs.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindModalEvents() {
  refs.modalClose.addEventListener("click", closeModal);

  // Cerrar al hacer clic en el backdrop
  refs.modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/* ============ 7. HEADER AL HACER SCROLL ============ */
function bindHeaderScroll() {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        refs.header.classList.toggle("scrolled", window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ============ 8. INICIALIZACIÓN ============ */
function init() {
  injectStyles();
  cacheRefs();
  renderGallery(obras);
  bindModalEvents();
  bindHeaderScroll();

  refs.search.addEventListener("input", handleSearch);

  // Recalcular layout masonry al redimensionar la ventana
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeAllCards, 150);
  });
}

document.addEventListener("DOMContentLoaded", init);
