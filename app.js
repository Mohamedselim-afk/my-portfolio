// Mohamed Selim Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Helper: Animate section entrance
    function revealSection(section) {
        if (!section.classList.contains('visible')) {
            section.classList.add('visible');
            // Stagger children if present
            const stagger = section.querySelector('.stagger-children');
            if (stagger) {
                stagger.classList.add('visible');
            }
        }
    }

    // Animate all sections on scroll
    const allSections = document.querySelectorAll('main section');
    allSections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => revealSection(section)
        });
    });

    // Animate profile image on Home section load
    const homeSection = document.getElementById('home');
    const profileImageDiv = homeSection.querySelector('.profile-image');
    ScrollTrigger.create({
        trigger: homeSection,
        start: 'top 90%',
        onEnter: () => profileImageDiv.classList.add('visible')
    });

    // Staggered animation for About, Skills, Projects, Contact
    ['about','skills','projects','contact'].forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const content = section.querySelector('.stagger-children');
            if (content) {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 80%',
                    onEnter: () => content.classList.add('visible')
                });
            }
        }
    });

    // Smooth scroll and animate section on nav click
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {y: targetSection, offsetY: 60},
                        ease: 'power3.inOut',
                        onStart: () => {
                            // Remove and re-add .visible for re-animation
                            targetSection.classList.remove('visible');
                            setTimeout(() => revealSection(targetSection), 200);
                        }
                    });
                }
            }
        });
    });

    // Project and skill card hover handled by CSS

    // Contact form validation and animation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                gsap.to(contactForm, {
                    x: [-10, 10, -10, 10, 0],
                    duration: 0.1,
                    ease: 'power1.inOut'
                });
                alert('Please fill in all fields');
                return;
            }
            gsap.to(contactForm, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    alert('Thank you! I will get back to you soon.');
                    contactForm.reset();
                    gsap.to(contactForm, {
                        opacity: 1,
                        duration: 0.5
                    });
                }
            });
        });
    }
}); 