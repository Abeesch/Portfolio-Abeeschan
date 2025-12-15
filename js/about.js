// ============================================
// ABOUT PAGE ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize animations
    initBarChartAnimation();
    initScrollAnimations();
    initImageAnimations();
    
});

// ============================================
// BAR CHART ANIMATION
// ============================================

function initBarChartAnimation() {
    const barChart = document.querySelector('.bar-chart');
    if (!barChart) return;
    
    const bars = barChart.querySelectorAll('li[data-percent]');
    
    // Observer pour déclencher l'animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(barChart);
    
    function animateBars() {
        bars.forEach((bar, index) => {
            const percent = bar.getAttribute('data-percent');
            const barFill = bar.querySelector('.bar-fill');
            
            setTimeout(() => {
                bar.classList.add('animate');
                barFill.style.width = percent + '%';
            }, index * 150); // Délai progressif
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// ============================================
// IMAGE HOVER ANIMATIONS
// ============================================

function initImageAnimations() {
    const images = document.querySelectorAll('.major');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// SNAPSHOT GRID STAGGER ANIMATION
// ============================================

function initSnapshotAnimation() {
    const snapshots = document.querySelectorAll('.snaps a');
    
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
    
    snapshots.forEach(snap => {
        snap.style.opacity = '0';
        snap.style.transform = 'translateY(20px)';
        snap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(snap);
    });
}

// Appeler l'animation des snapshots
initSnapshotAnimation();

// ============================================
// PIE CHART ROTATION ON HOVER
// ============================================

function initPieChartAnimation() {
    const pieImg = document.querySelector('.pie-img');
    
    if (pieImg) {
        pieImg.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.05)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        pieImg.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
}

initPieChartAnimation();

// ============================================
// SMOOTH REVEAL ON SCROLL
// ============================================

function initSmoothReveal() {
    const elements = document.querySelectorAll('.text-main, .text-middle, .ten-things');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

initSmoothReveal();

// ============================================
// LINK HOVER EFFECTS
// ============================================

function initLinkEffects() {
    const links = document.querySelectorAll('.text-middle a, .ten-things a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

initLinkEffects();