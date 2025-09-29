// Mohamed Selim Portfolio Interactions
document.addEventListener('DOMContentLoaded', () => {
    // GSAP ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    // Sticky Navigation
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');

    const stickyNav = () => {
        if (window.scrollY > heroSection.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    window.addEventListener('scroll', stickyNav);

    // Scroll-triggered section animations
    const animateSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.fromTo(section, 
                { 
                    opacity: 0, 
                    y: 50 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    };

    // Skill cards animation with tech stack hover effect
    const animateSkillCards = () => {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            gsap.fromTo(card, 
                { 
                    opacity: 0, 
                    scale: 0.8 
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%'
                    }
                }
            );

            // Hover interaction
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    duration: 0.3
                });
            });
        });
    };

    // Project cards interaction
    const animateProjectCards = () => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            gsap.fromTo(card, 
                { 
                    opacity: 0, 
                    y: 50 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%'
                    }
                }
            );

            // Hover and click interactions
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    duration: 0.3
                });
            });
        });
    };

    // Smooth scrolling for navigation links
    const setupSmoothScroll = () => {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: targetSection,
                            offsetY: 50
                        },
                        ease: 'power3.inOut'
                    });
                }
            });
        });
    };

    // Contact form with validation and submission simulation
    const setupContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const nameInput = contactForm.querySelector('input[type="text"]');
                const emailInput = contactForm.querySelector('input[type="email"]');
                const messageInput = contactForm.querySelector('textarea');

                // Basic validation
                if (nameInput.value.trim() === '' || 
                    emailInput.value.trim() === '' || 
                    messageInput.value.trim() === '') {
                    
                    // Shake animation for form
                    gsap.to(contactForm, {
                        x: [-10, 10, -10, 10, 0],
                        duration: 0.1,
                        ease: 'power1.inOut'
                    });

                    alert('Please fill in all fields');
                    return;
                }

                // Simulate form submission
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
    };

    // Initialize all animations and interactions
    const init = () => {
        animateSections();
        animateSkillCards();
        animateProjectCards();
        setupSmoothScroll();
        setupContactForm();
    };

    // Use GSAP ScrollTrigger for scroll-based animations
    init();
}); 