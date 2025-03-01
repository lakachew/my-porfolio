// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '30px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.fontSize = '16px';
    backToTopButton.style.border = 'none';
    backToTopButton.style.background = '#ff9800';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '1000';
    document.body.appendChild(backToTopButton);

    // Function to toggle the visibility of the button
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop);

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
