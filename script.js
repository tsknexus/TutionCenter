// Cursor Glow Follower
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Smooth Scroll Reveal
const observerOptions = { threshold: 0.1 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.cyber-card, .glass-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    revealObserver.observe(el);
});

// Custom Animation Trigger
window.addEventListener('scroll', () => {
    document.querySelectorAll('.visible').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});