document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalYear = document.getElementById('modalYear');
    const modalDescription = document.getElementById('modalDescription');
    const modalHistory = document.getElementById('modalHistory');
    const modalCuriosities = document.getElementById('modalCuriosities');
    const modalExpert = document.getElementById('modalExpert');
    const testimonialGrid = document.getElementById('testimonialGrid');

    // Renderizar tarjetas
    paintings.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = (index * 0.1) + 's';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/1a1a2e/d4af37?text=${encodeURIComponent(p.title)}'" />
            <div class="card-info">
                <h3>${p.title}</h3>
                <p>${p.author}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });

    // Renderizar testimonios
    testimonials.forEach((t, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.style.animationDelay = (index * 0.15) + 's';
        card.innerHTML = `
            <p class="quote">${t.quote}</p>
            <p class="name">${t.name}</p>
            <p class="role">${t.role}</p>
        `;
        testimonialGrid.appendChild(card);
    });

    // Abrir modal
    function openModal(p) {
        modalImage.style.backgroundImage = `url(${p.image})`;
        modalTitle.textContent = p.title;
        modalAuthor.textContent = p.author;
        modalYear.textContent = p.year;
        modalDescription.textContent = p.description;
        modalHistory.textContent = p.history;
        modalCuriosities.textContent = p.curiosities;
        modalExpert.textContent = p.expert;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);
    }

    // Cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(e) {
        if (e.key === 'Escape') closeModal();
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Smooth scroll para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
