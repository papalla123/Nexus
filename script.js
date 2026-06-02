// script.js
// Renderiza la galería a partir del array 'paintings' definido en data.js

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  if (!gallery) return;

  paintings.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.id = p.id;

    card.innerHTML = `
      <div class="card-media">
        <img src="${p.image}" alt="${escapeHtml(p.title)} — ${escapeHtml(p.artist)}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(p.title)}</h3>
        <p class="card-sub">${escapeHtml(p.artist)} — <span class="muted">${escapeHtml(p.year)}</span></p>
        <p class="card-desc">${escapeHtml(p.description)}</p>

        <details class="details">
          <summary>Historia</summary>
          <p>${escapeHtml(p.history)}</p>
        </details>

        <details class="details">
          <summary>Curiosidades</summary>
          <p>${escapeHtml(p.curiosities)}</p>
        </details>

        <details class="details">
          <summary>Opinión del experto</summary>
          <p class="expert">${escapeHtml(p.expertOpinion)}</p>
        </details>
      </div>
    `;

    gallery.appendChild(card);
  });
});

// pequeña función para evitar inyección de HTML accidental
function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
