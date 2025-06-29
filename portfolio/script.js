document.addEventListener('DOMContentLoaded', () => {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Get the current page's pathname (e.g., "/index.html" or "/")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Loop through each link and check if its href matches the current page
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });
});