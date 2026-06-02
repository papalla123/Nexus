document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalYear = document.getElementById('modalYear');
    const modalDescription = document.getElementById('modalDescription');
    const modalHistory = document.getElementById('modalHistory');

    // Renderizar tarjetas
    paintings.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <div class="card-info">
                <h3>${p.title}</h3>
                <p>${p.author}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });

    // Abrir modal
    function openModal(p) {
        modalImage.style.backgroundImage = `url(${p.image})`;
        modalTitle.textContent = p.title;
        modalAuthor.textContent = p.author;
        modalYear.textContent = p.year;
        modalDescription.textContent = p.description;
        modalHistory.textContent = p.history;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    close.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Smooth scroll para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
