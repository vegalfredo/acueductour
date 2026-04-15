/* =============================================
   ACUEDUCTOUR TRANSPORTE — script.js
   ============================================= */

/* --- VIDEO: volumen bajo por defecto --- */
const promoVideo = document.querySelector('#video video');
if (promoVideo) promoVideo.volume = 0.1;

/* --- NAVBAR: cambia estilo al hacer scroll --- */
const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
});

/* --- MENÚ MÓVIL --- */
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', menu.classList.contains('open'));
});

// Cierra el menú al hacer clic en un enlace
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
});

/* --- CARRUSEL CON CONTROLES --- */
(function () {
    const track     = document.getElementById('carouselTrack');
    const prevBtn   = document.getElementById('prevBtn');
    const nextBtn   = document.getElementById('nextBtn');
    const dotsWrap  = document.getElementById('carouselDots');

    if (!track) return;

    const slides    = track.querySelectorAll('.carousel-slide');
    const total     = slides.length;
    let current     = 0;
    let autoTimer;

    // Crear dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    }

    function getSlideWidth() {
        return slides[0].offsetWidth + 24; // ancho + gap (margin 12px * 2)
    }

    function goTo(index) {
        current = index;
        const offset = getSlideWidth() * current;
        const centerOffset = (track.parentElement.offsetWidth - slides[0].offsetWidth) / 2;
        track.style.transform = `translateX(calc(${centerOffset}px - ${offset}px))`;
        dotsWrap.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() {
        goTo((current + 1) % total);
    }
    function prev() {
        goTo((current - 1 + total) % total);
    }

    nextBtn.addEventListener('click', () => { next(); resetAuto(); });
    prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

    function startAuto() {
        autoTimer = setInterval(next, 4000);
    }
    function resetAuto() {
        clearInterval(autoTimer);
        startAuto();
    }

    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
    });

    // Init
    goTo(0);
    startAuto();

    // Recalcular al redimensionar
    window.addEventListener('resize', () => goTo(current));
})();

/* --- CONTADOR ANIMADO (hero stats) --- */
(function () {
    const counters = document.querySelectorAll('.stat-num[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            const duration = 1800;
            const step = 16;
            const increment = target / (duration / step);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target.toLocaleString('es-MX');
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current).toLocaleString('es-MX');
                }
            }, step);

            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
})();

/* --- ANIMACIONES FADE-IN al hacer scroll --- */
(function () {
    const targets = document.querySelectorAll(
        '.diff-item, .service-card, .testimonio, .nosotros-text, .nosotros-img, .contacto-text, .contacto-cta-box, .dato'
    );

    targets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Delay escalonado para grupos de elementos
                const siblings = [...entry.target.parentElement.children];
                const delay = siblings.indexOf(entry.target) * 80;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));
})();
