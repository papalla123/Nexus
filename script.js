document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const grid = document.getElementById('grid');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalYear = document.getElementById('modalYear');
    const modalDescription = document.getElementById('modalDescription');
    const modalHistory = document.getElementById('modalHistory');
    const modalCuriosities = document.getElementById('modalCuriosities');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // ===== PARTÍCULAS =====
    function createParticles() {
        const container = document.getElementById('particles');
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 15) + 's';
            container.appendChild(particle);
        }
    }
    createParticles();

    // ===== RENDERIZAR TARJETAS =====
    paintings.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = index * 0.15 + 's';
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

    // ===== INTERSECCIÓN PARA ANIMACIONES =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .timeline-item, .testimonial-card').forEach(el => {
        observer.observe(el);
    });

    // ===== MODAL =====
    function openModal(p) {
        modalImage.style.backgroundImage = `url(${p.image})`;
        modalTitle.textContent = p.title;
        modalAuthor.textContent = `Artista: ${p.author}`;
        modalYear.textContent = p.year;
        modalDescription.textContent = p.description;
        modalHistory.textContent = p.history;
        modalCuriosities.textContent = p.curiosities;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Cerrar con tecla Escape
        document.addEventListener('keydown', handleEscape);
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(e) {
        if (e.key === 'Escape') closeModal();
    }

    close.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // ===== LÍNEA DEL TIEMPO =====
    const timelineContainer = document.getElementById('timeline');
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.style.animationDelay = index * 0.2 + 's';
        div.innerHTML = `
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p class="date">${item.year}</p>
                <p>${item.description}</p>
            </div>
        `;
        timelineContainer.appendChild(div);
        observer.observe(div);
    });

    // ===== TESTIMONIOS =====
    const testimonialGrid = document.getElementById('testimonials');
    testimonials.forEach((t, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.style.animationDelay = index * 0.2 + 's';
        card.innerHTML = `
            <p class="quote">"${t.quote}"</p>
            <p class="author">— ${t.author}</p>
            <p class="role">${t.role}</p>
        `;
        testimonialGrid.appendChild(card);
        observer.observe(card);
    });

    // ===== MENÚ HAMBURGUESA =====
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // ===== HEADER SCROLL =====
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== SCROLL SUAVE PARA ENLACES =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});
