// ========================= DOM ELEMENTS =========================
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const navToggle = document.getElementById('nav-toggle');
const logoLink = document.getElementById('logo-link');
const themeToggle = document.getElementById('theme-toggle');
const pages = document.querySelectorAll('.page');
const allNavLinks = document.querySelectorAll('[data-page]');

// ========================= THEME TOGGLE =========================
function getStoredTheme() {
    return localStorage.getItem('theme') || 'dark';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme immediately (before DOM ready to prevent flash)
(function() {
    const storedTheme = getStoredTheme();
    if (storedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();

// Toggle handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// ========================= PAGE NAVIGATION =========================
function navigateTo(pageName) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        // Small delay to allow CSS transition
        requestAnimationFrame(() => {
            targetPage.classList.add('active');
            // Reset scroll position
            window.scrollTo({ top: 0, behavior: 'instant' });
            // Re-trigger scroll animations
            observeAnimations();
        });
    }

    // Update active nav link
    document.querySelectorAll('.navbar__links a[data-page]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');

    // Update URL hash
    history.pushState(null, '', `#${pageName}`);
}

// Nav link click handlers
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);
    });
});

// Logo click -> go home
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('home');
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
});

// ========================= MOBILE MENU =========================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu when clicking a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// ========================= NAVBAR SCROLL EFFECT =========================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================= SCROLL ANIMATIONS =========================
function observeAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        // Only observe elements that aren't already visible
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// ========================= CONTACT FORM =========================
function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('btn-submit');
    const originalText = submitBtn.innerHTML;

    // Show sending state
    submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
            <path d="M21 12a9 9 0 11-6.219-8.56"/>
        </svg>
        Sending...
    `;
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Message Sent!
        `;
        submitBtn.style.background = '#22c55e';

        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            document.getElementById('contact-form').reset();
        }, 3000);
    }, 1500);
}

// ========================= VIDEO PLAYERS =========================
function setupVideoPlayer(wrapperElement, videoSelector) {
    const wrapper = typeof wrapperElement === 'string' ? document.getElementById(wrapperElement) : wrapperElement;
    if (!wrapper) return;
    
    const video = wrapper.querySelector(videoSelector);
    if (!video) return;

    wrapper.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            wrapper.classList.add('is-playing');
            
            // Auto-pause other playing videos
            document.querySelectorAll('video').forEach(v => {
                if (v !== video && !v.paused) {
                    v.pause();
                    const otherWrapper = v.closest('.showreel__wrapper, .video-card__wrapper');
                    if (otherWrapper) otherWrapper.classList.remove('is-playing');
                }
            });
        } else {
            video.pause();
            wrapper.classList.remove('is-playing');
        }
    });

    video.addEventListener('pause', () => wrapper.classList.remove('is-playing'));
    video.addEventListener('ended', () => wrapper.classList.remove('is-playing'));
}

// Setup main showreel
setupVideoPlayer('showreel-wrapper', '#showreel-video');

// Setup gallery videos
document.querySelectorAll('.video-card__wrapper').forEach(wrapper => {
    setupVideoPlayer(wrapper, '.video-card__player');
});

const btnShowreel = document.getElementById('btn-showreel');

if (btnShowreel) {
    btnShowreel.addEventListener('click', () => {
        // Scroll to showreel section
        const showreelSection = document.querySelector('.showreel');
        if (showreelSection) {
            showreelSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ========================= STAGGERED ANIMATIONS =========================
function addStaggerAnimation() {
    const activePage = document.querySelector('.page.active');
    if (!activePage) return;

    const cards = activePage.querySelectorAll('.animate-on-scroll');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ========================= INITIALIZATION =========================
document.addEventListener('DOMContentLoaded', () => {
    // Check URL hash for initial page
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);

    // Initialize scroll animations
    observeAnimations();
    addStaggerAnimation();

    // Add spin animation for loading state
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
