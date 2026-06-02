// ============= script.js =============
// ---- Partículas de fondo ----
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
const finalCanvas = document.getElementById('finalCanvas');
const ctxFinal = finalCanvas.getContext('2d');
const stepCanvas = document.getElementById('stepCanvas');
const ctxStep = stepCanvas.getContext('2d');
const stepDescription = document.getElementById('stepDescription');
const stepCounter = document.getElementById('stepCounter');
const prevBtn = document.getElementById('prevStep');
const nextBtn = document.getElementById('nextStep');
const btnStart = document.getElementById('btnStart');

let currentFilter = 'todas';
let currentDrawing = null;
let currentStepIndex = 0;

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

// ---- Modal ----
function openModal(d) {
  currentDrawing = d;
  currentStepIndex = 0;

  // Configurar cabecera
  modalTitle.textContent = d.title;
  modalCategory.textContent = d.category.charAt(0).toUpperCase() + d.category.slice(1);
  modalDifficulty.innerHTML = 'dificultad ' + difficultyHTML(d.difficulty);
  modalIcon.textContent = d.icon;

  // Ajustar tamaño de canvases
  finalCanvas.width = finalCanvas.clientWidth || 400;
  finalCanvas.height = finalCanvas.clientHeight || 300;
  stepCanvas.width = stepCanvas.clientWidth || 400;
  stepCanvas.height = stepCanvas.clientHeight || 300;

  // Dibujar resultado final (todos los pasos acumulados)
  ctxFinal.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
  if (d.drawFinal) {
    d.drawFinal(ctxFinal, finalCanvas.width, finalCanvas.height);
  }

  // Mostrar primer paso
  showStep(0, true); // true = limpiar canvas de paso

  modalOverlay.classList.add('open');
}

function showStep(index, clearFirst = true) {
  if (!currentDrawing) return;
  const steps = currentDrawing.steps;
  if (index < 0 || index >= steps.length) return;

  currentStepIndex = index;
  const step = steps[index];

  // Actualizar descripción
  stepDescription.innerHTML = step.text;

  // Actualizar contador
  stepCounter.textContent = `Paso ${index+1} / ${steps.length}`;

  // Dibujar paso actual en el canvas de paso
  // Limpiamos y redibujamos todos los pasos desde el inicio hasta el actual (acumulativo)
  if (clearFirst) ctxStep.clearRect(0, 0, stepCanvas.width, stepCanvas.height);
  // Redibujamos desde el paso 0 hasta el actual
  for (let i = 0; i <= index; i++) {
    steps[i].draw(ctxStep, stepCanvas.width, stepCanvas.height);
  }

  // Estado de botones
  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === steps.length - 1);
}

// Eventos de navegación
prevBtn.addEventListener('click', () => {
  if (currentStepIndex > 0) showStep(currentStepIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentStepIndex < currentDrawing.steps.length - 1) showStep(currentStepIndex + 1);
});

// Cerrar modal
function closeModal() {
  modalOverlay.classList.remove('open');
  currentDrawing = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

// Botón "A dibujar"
btnStart.addEventListener('click', () => {
  closeModal();
  if (currentDrawing) {
    const card = document.querySelector(`.card[data-id="${currentDrawing.id}"]`);
    if (card) {
      card.style.transition = '0.2s';
      card.style.transform = 'scale(1.06)';
      setTimeout(() => card.style.transform = '', 300);
    }
  }
});

// Inicio
render('todas');
