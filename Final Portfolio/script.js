document.addEventListener('DOMContentLoaded', () => {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Get the current page's pathname (e.g., "index.html", "about.html", or "")
    let currentPage = window.location.pathname.split('/').pop();
    
    // If pathname is empty (e.g., root URL), default to 'index.html'
    if (!currentPage) {
        currentPage = 'index.html';
    }
    
    // Loop through each link and check if its href matches the current page
    navLinks.forEach(link => {
        // Remove any leading slashes and get the file name, default to 'index.html' if empty
        let linkPath = link.getAttribute('href').split('/').pop();
        if (!linkPath) {
            linkPath = 'index.html';
        }
        
        // Remove any existing 'active' class from all links
        link.classList.remove('active');
        
        // Add 'active' class to the matching link
        if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });
});