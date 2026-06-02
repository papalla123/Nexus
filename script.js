// ============= script.js =============
// ---- Partículas de fondo (animación 3D ligera) ----
const canvasParticles = document.createElement('canvas');
document.getElementById('particles-canvas').appendChild(canvasParticles);
const ctxp = canvasParticles.getContext('2d');
let particles = [];

function resizeParticles() {
  canvasParticles.width = window.innerWidth;
  canvasParticles.height = window.innerHeight;
}
window.addEventListener('resize', resizeParticles);
resizeParticles();

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvasParticles.width;
    this.y = Math.random() * canvasParticles.height;
    this.z = Math.random() * 200;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.speedZ = (Math.random() - 0.5) * 0.2;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.z += this.speedZ;
    if (this.z > 200 || this.z < 0) this.speedZ *= -1;
    if (this.x < 0 || this.x > canvasParticles.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvasParticles.height) this.speedY *= -1;
  }
  draw() {
    const scale = 1 + this.z/400;
    const alpha = this.opacity * (1 - Math.abs(this.z-100)/150);
    ctxp.beginPath();
    ctxp.arc(this.x, this.y, this.size * scale, 0, Math.PI*2);
    ctxp.fillStyle = `rgba(247, 151, 30, ${alpha})`;
    ctxp.fill();
  }
}

for (let i = 0; i < 100; i++) particles.push(new Particle());

function animateParticles() {
  ctxp.clearRect(0, 0, canvasParticles.width, canvasParticles.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ---- Variables de la app ----
const grid = document.getElementById('grid');
const filters = document.querySelectorAll('.filters button');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDifficulty = document.getElementById('modalDifficulty');
const modalIcon = document.getElementById('modalIcon');
const stepList = document.getElementById('stepList');
const btnStart = document.getElementById('btnStart');
const refCanvas = document.getElementById('refCanvas');
const ctxRef = refCanvas.getContext('2d');

let currentFilter = 'todas';

function difficultyHTML(level) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="dot ${i <= level ? 'fill' : ''}"></span>`;
  }
  return html;
}

function createCard(d) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.category = d.category;
  card.dataset.id = d.id;

  card.innerHTML = `
    <div class="icon">${d.icon}</div>
    <div class="title">${d.title}</div>
    <div class="difficulty">${difficultyHTML(d.difficulty)}</div>
    <div class="click-hint">✎ ver pasos</div>
  `;
  card.addEventListener('click', () => openModal(d));
  return card;
}

function render(filter) {
  grid.innerHTML = '';
  const filtered = filter === 'todas' ? drawings : drawings.filter(d => d.category === filter);
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-msg" style="grid-column:1/-1;text-align:center;padding:3rem;color:#606080;">
      <span style="font-size:3rem;display:block;">🔍</span>No hay dibujos aquí</div>`;
    return;
  }
  filtered.forEach(d => grid.appendChild(createCard(d)));
}

// Filtros
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render(currentFilter);
  });
});

// Modal
function openModal(d) {
  modalTitle.textContent = d.title;
  modalCategory.textContent = d.category.charAt(0).toUpperCase() + d.category.slice(1);
  modalDifficulty.innerHTML = 'dificultad ' + difficultyHTML(d.difficulty);
  modalIcon.textContent = d.icon;

  stepList.innerHTML = '';
  d.steps.forEach((step, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="step-num">${idx+1}</span><span class="step-desc">${step}</span>`;
    stepList.appendChild(li);
  });

  // Dibujar referencia en canvas
  refCanvas.width = refCanvas.clientWidth || 300;
  refCanvas.height = refCanvas.clientHeight || 200;
  if (d.drawReference) {
    d.drawReference(ctxRef, refCanvas.width, refCanvas.height);
  } else {
    ctxRef.clearRect(0,0,refCanvas.width,refCanvas.height);
    ctxRef.fillStyle = '#ffffff20';
    ctxRef.fillRect(0,0,refCanvas.width,refCanvas.height);
  }

  btnStart.onclick = () => {
    modalOverlay.classList.remove('open');
    // feedback visual
    const card = document.querySelector(`.card[data-id="${d.id}"]`);
    if (card) {
      card.style.transition = '0.2s';
      card.style.transform = 'scale(1.06)';
      setTimeout(() => card.style.transform = '', 300);
    }
  };

  modalOverlay.classList.add('open');
}

function closeModal() { modalOverlay.classList.remove('open'); }

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

// Inicio
render('todas');
