// Example of a simple JavaScript function to enhance the UI

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Example of a function that could be used to enhance UI interactions
    function highlightCurrentPage() {
        // Get the current page URL
        var currentPage = window.location.pathname.split('/').pop();

        // Get all the navigation links
        var navLinks = document.querySelectorAll('.nav-section a');

        // Loop through each link and check if it matches the current page
        navLinks.forEach(function(link) {
            var linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.style.fontWeight = 'bold';
                link.style.color = '#ffc107';
            }
        });
    }

    // Call the function to highlight the current page
    highlightCurrentPage();
});

}
