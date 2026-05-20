/**
 * Mysterious Kayden - Core Interaction Engine
 * Handles navigation, scroll observers, and particle physics.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sidebar Navigation Logic ---
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const mainContent = document.querySelector('.main-content');

    const toggleSidebar = (forceClose = false) => {
        if (forceClose || sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mainContent.style.transform = 'translateX(0)';
        } else {
            sidebar.classList.add('active');
            // Slight push effect for avant-garde feel
            if(window.innerWidth > 768) {
                mainContent.style.transform = 'translateX(100px)';
            }
        }
    };

    if(openBtn) openBtn.addEventListener('click', () => toggleSidebar(false));
    if(closeBtn) closeBtn.addEventListener('click', () => toggleSidebar(true));

    // Close sidebar when clicking a navigation link
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => toggleSidebar(true));
    });

    // --- 2. Scroll Animation Observer (Intersection Observer API) ---
    // Targets elements to fade/slide in as they enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Grab all elements needing animation
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .mystic-card');
    animatedElements.forEach(el => {
        // Add base class for CSS styling if not present
        el.classList.add('scroll-anim');
        scrollObserver.observe(el);
    });

    // --- 3. Particle Physics (particles.js configuration) ---
    // Simulating violet magical dust and orange inferno embers
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": {
                    "value": ["#8A2BE2", "#FF4500", "#00FA9A"] // Violet, Orange, Emerald
                },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": false // Disabled for a floating dust/ember look
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "top", // Embers float up
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "bubble" },
                    "onclick": { "enable": true, "mode": "repulse" },
                    "resize": true
                },
                "modes": {
                    "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 1, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 }
                }
            },
            "retina_detect": true
        });
    }
});
                             
