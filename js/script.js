// ============================================
// WAIT FOR DOM TO LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initNavigation();
    initSmoothScroll();
    initHeaderAnimation();
    initFaceAnimation();
    initThumbHover();
    initPageTransitions();
    
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

function initNavigation() {
    const navIcon = document.querySelector('.icon-nav');
    const nav = document.querySelector('nav');
    
    if (navIcon && nav) {
        navIcon.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// ============================================
// SMOOTH SCROLL TO TOP
// ============================================

function initSmoothScroll() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.pointerEvents = 'auto';
            } else {
                backToTop.style.opacity = '0.5';
                backToTop.style.pointerEvents = 'auto';
            }
        });
    }
}

// ============================================
// HEADER ANIMATION ON LOAD
// ============================================

function initHeaderAnimation() {
    const header = document.getElementById('header');
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.top = '0';
    }, 300);
}

// ============================================
// FACE SPLIT ANIMATION WITH IMAGES AND TILT
// ============================================

function initFaceAnimation() {
    const face = document.getElementById('face');
    const designer = document.getElementById('designer');
    const coder = document.getElementById('coder');
    const designerImg = document.getElementById('designer-img');
    const coderImg = document.getElementById('coder-img');
    const designerDesc = document.getElementById('designer-desc');
    const coderDesc = document.getElementById('coder-desc');
    
    if (!face) return;
    
    // Animate face on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                face.classList.add('fade-in');
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(face);
    
    // Designer hover effect
    if (designer && designerImg) {
        designer.addEventListener('mouseenter', function() {
            designerImg.classList.add('tilt-left');
            designerImg.style.animation = 'revealImageLeft 0.8s steps(8) forwards';
            if (designerDesc) {
                designerDesc.style.opacity = '1';
            }
        });
        
        designer.addEventListener('mouseleave', function() {
            designerImg.classList.remove('tilt-left');
            designerImg.style.animation = 'hideImageSteps 0.8s steps(6) forwards';
            if (designerDesc) {
                setTimeout(() => {
                    designerDesc.style.opacity = '0';
                }, 1000);
            }
            setTimeout(() => {
                designerImg.style.transform = 'perspective(1000px) rotateY(0deg)';
            }, 800);
        });
    }
    
    // Coder hover effect
    if (coder && coderImg) {
        coder.addEventListener('mouseenter', function() {
            coderImg.classList.add('tilt-right');
            coderImg.style.animation = 'revealImageRight 0.8s steps(8) forwards';
            if (coderDesc) {
                coderDesc.style.opacity = '1';
            }
        });
        
        coder.addEventListener('mouseleave', function() {
            coderImg.classList.remove('tilt-right');
            coderImg.style.animation = 'hideImageSteps 0.8s steps(6) forwards';
            if (coderDesc) {
                setTimeout(() => {
                    coderDesc.style.opacity = '0';
                }, 1000);
            }
            setTimeout(() => {
                coderImg.style.transform = 'perspective(1000px) rotateY(0deg)';
            }, 800);
        });
    }
}

// ============================================
// PORTFOLIO CARD HOVER EFFECTS
// ============================================

function initThumbHover() {
    const cards = document.querySelectorAll('.portfolio-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Add scroll animation for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ============================================
// PAGE TRANSITION EFFECTS
// ============================================

function initPageTransitions() {
    const transitionLinks = document.querySelectorAll('.transition, #nav a, #nav-footer a, #thumbs a, #logo');
    
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply transition for internal links
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();
                
                // Fade out animation
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// ============================================
// LAZY LOAD IMAGES (Optional)
// ============================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(el => scrollObserver.observe(el));
}

// ============================================
// PRELOADER (Optional)
// ============================================

function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}