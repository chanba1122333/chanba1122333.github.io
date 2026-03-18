// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Typing effect for the code window
const codeElement = document.querySelector('code');
if (codeElement) {
    const originalText = codeElement.innerHTML;
    // We could add a simple typing effect here if desired
    // Keeping it static for now as requested by typical dev aesthetics, 
    // but the fade-in handles the smooth entry.
}
