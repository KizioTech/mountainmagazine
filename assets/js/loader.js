async function loadNavbar() {
    try {
        // Fetch the navbar HTML
        const response = await fetch('/components/navbar.html'); // Adjust path as needed

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const navbarHTML = await response.text();

        // Create a temporary container to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = navbarHTML;

        // Extract the navbar element
        const navbar = tempDiv.querySelector('#navbar');

        if (navbar) {
            // Insert navbar at the beginning of body or specific container
            const targetContainer = document.getElementById('navbar-container') || document.body;
            // Clear the container before inserting
            targetContainer.innerHTML = '';
            targetContainer.appendChild(navbar);

            // Load and execute the navbar JavaScript
            const script = document.createElement('script');
            script.src = '/assets/js/navbar.js'; // Adjust path as needed
            script.onload = () => {
                console.log('Navbar loaded and initialized successfully');
                if (window.initNavbar) window.initNavbar();
                // Navbar is now ready and active state will be set automatically
            };
            script.onerror = () => {
                console.error('Failed to load navbar JavaScript');
            };
            document.head.appendChild(script);

            // Also load the CSS if not included in HTML
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/assets/css/styles.css'; // Adjust path as needed
            document.head.appendChild(link);

        } else {
            console.error('Navbar element not found in fetched HTML');
        }

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// Method for immediate execution when page loads
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
}); 