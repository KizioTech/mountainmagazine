// Enhanced page data with keywords and anchor links
// Enhanced page data with keywords and anchor links
const pageData = [
    { title: "Home", url: "/index.html", description: "Welcome to Mountain Fashion Magazine" },
    {
        title: "Editorial Excellence",
        url: "/public/features/editorial.html",
        description: "Discover our editorial excellence and featured content",
        keywords: ["editorial", "magazine", "features", "articles", "fashion journalism"]
    },
    {
        title: "Beauty & Luxury",
        url: "/public/features/beauty.html",
        description: "Explore beauty and luxury fashion trends",
        keywords: ["beauty", "luxury", "makeup", "skincare", "cosmetics", "premium fashion"]
    },
    {
        title: "Marketplace",
        url: "/public/features/marketplace.html",
        description: "Shop our curated fashion marketplace",
        keywords: ["marketplace", "shop", "buy", "chitenje", "traditional wear", "african fashion", "clothing", "accessories", "fashion items"]
    },
    {
        title: "Go Pro",
        url: "/public/features/newsletter.html",
        description: "Subscribe to our premium newsletter service",
        keywords: ["newsletter", "subscription", "premium", "pro", "updates"]
    },
    {
        title: "Designers' Spotlight",
        url: "/public/designers.html",
        description: "Learn more about our featured designers",
        keywords: ["designers", "fashion designers", "spotlight", "profiles", "interviews"]
    },
    {
        title: "About Us",
        url: "/public/contact.html",
        description: "Get in touch with us and learn about our story",
        keywords: ["about", "contact", "team", "story", "mission"]
    },
    {
        title: "Fabric & Patterns Library",
        url: "/public/pages/fabrics.html",
        description: "Explore our extensive library of fabrics and patterns",
        keywords: ["fabrics", "patterns", "library", "textiles", "materials"]
    }
];

const searchMappings = {
    "chitenje": "/public/pages/fabrics.html#chitenje",
    "traditional wear": "/public/pages/fabrics.html#traditional",
    "african fashion": "/public/pages/fabrics.html#african",
    "makeup": "/public/features/beauty.html#makeup",
    "skincare": "/public/features/beauty.html#skincare",
    "luxury": "/public/features/beauty.html#luxury",
    "designer profile": "/public/designers.html#profiles",
    "interview": "/public/designers.html#interviews",
    "team": "/public/contact.html#team",
    "appointments": "/public/pages/fabrics.html#appointments",
    "premium fashion": "/public/features/newsletter.html",

    "fabric library": "/public/pages/fabrics.html",
    "fabrics": "/public/pages/fabrics.html",
    "fabric collection": "/public/pages/fabrics.html",
    "textile": "/public/pages/fabrics.html",
    "material": "/public/pages/fabrics.html",

    "cotton": "/public/pages/fabrics.html#cotton",
    "organic cotton": "/public/pages/fabrics.html#cotton",
    "silk": "/public/pages/fabrics.html#silk",
    "linen": "/public/pages/fabrics.html#linen",
    "linen blend": "/public/pages/fabrics.html#linen",
    "wool": "/public/pages/fabrics.html#wool",
    "merino wool": "/public/pages/fabrics.html#wool",
    "synthetic": "/public/pages/fabrics.html#synthetic",
    "handwoven": "/public/pages/fabrics.html#handwoven",
    "cotton blend": "/public/pages/fabrics.html#cotton",

    "malawi": "/public/pages/fabrics.html#malawi",
    "africa": "/public/pages/fabrics.html#africa",
    "central africa": "/public/pages/fabrics.html#africa",
    "west africa": "/public/pages/fabrics.html#africa",
    "asia": "/public/pages/fabrics.html#asia",
    "europe": "/public/pages/fabrics.html#europe",
    "americas": "/public/pages/fabrics.html#americas",

    "geometric": "/public/pages/fabrics.html#geometric",
    "floral": "/public/pages/fabrics.html#floral",
    "abstract": "/public/pages/fabrics.html#abstract",
    "tribal": "/public/pages/fabrics.html#tribal",
    "stripes": "/public/pages/fabrics.html#stripes",
    "plain": "/public/pages/fabrics.html#plain",

    "chitenje heritage": "/public/pages/fabrics.html#chitenje-heritage",
    "lake malawi linen": "/public/pages/fabrics.html#lake-malawi-linen",
    "nyika wool": "/public/pages/fabrics.html#nyika-wool",
    "mulanje silk": "/public/pages/fabrics.html#mulanje-silk",
    "zomba weave": "/public/pages/fabrics.html#zomba-weave",
    "shire cotton": "/public/pages/fabrics.html#shire-cotton",
    "african wax print": "/public/pages/fabrics.html#african-wax-print",
    "tribal weave": "/public/pages/fabrics.html#tribal-weave",

    "malawian": "/public/pages/fabrics.html#malawi",
    "african": "/public/pages/fabrics.html#africa",
    "handmade": "/public/pages/fabrics.html#handwoven"
};

function initNavbar() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    function performSearch(query) {
        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }

        const lowerQuery = query.toLowerCase();

        // First, check for direct mappings
        const directMapping = searchMappings[lowerQuery];
        if (directMapping) {
            navigateToPage(directMapping);
            return;
        }

        // Check if query matches any specific mapping partially
        const partialMapping = Object.keys(searchMappings).find(key =>
            key.includes(lowerQuery) || lowerQuery.includes(key)
        );

        if (partialMapping) {
            navigateToPage(searchMappings[partialMapping]);
            return;
        }

        // Regular search through page data
        const results = pageData.filter(page => {
            const titleMatch = page.title.toLowerCase().includes(lowerQuery);
            const descMatch = page.description.toLowerCase().includes(lowerQuery);
            const keywordMatch = page.keywords && page.keywords.some(keyword =>
                keyword.toLowerCase().includes(lowerQuery)
            );

            return titleMatch || descMatch || keywordMatch;
        });

        // If no local results, offer web search
        if (results.length === 0) {
            displayWebSearchOption(query);
        } else {
            displayResults(results);
        }
        if (window.fabricLibrary) {
            window.fabricLibrary.setFilters({ search: query.toLowerCase() });
            searchResults.style.display = 'none';
            return;
        }

    }

    function displayResults(results) {
        searchResults.innerHTML = ''; // ✅ Clear old results first

        searchResults.innerHTML = results.map(result => `
        <div class="search-result-item" onclick="navigateToPage('${result.url}')">
            <div class="result-title">${result.title}</div>
            <div class="result-description">${result.description}</div>
            <div class="result-url">${result.url}</div>
        </div>
    `).join('');

        searchResults.style.display = 'block';
    }

    function displayWebSearchOption(query) {
        searchResults.innerHTML = ''; // ✅ Clear old results first

        searchResults.innerHTML = `
        <div class="search-result-item">
            <div class="result-title">No results found for "${query}"</div>
            <div class="result-description">Try adjusting your keywords or explore other sections.</div>
        </div>
        <div class="search-result-item" onclick="navigateToPage('/public/features/marketplace.html')">
            <div class="result-title">🔍 Browse Marketplace</div>
            <div class="result-description">Explore all fabrics, patterns, and materials</div>
        </div>
        <div class="search-result-item" onclick="performWebSearch('${query}')">
            <div class="result-title">🌐 Search Web</div>
            <div class="result-description">Search the web for "${query}"</div>
        </div>
    `;

        searchResults.style.display = 'block';
    }



    window.performWebSearch = function (query) {
        // Open Google search in new tab
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' site:mountainfashionmagazine.com')}`;
        window.open(searchUrl, '_blank');
        searchResults.style.display = 'none';
        searchInput.value = '';
    };

    window.navigateToPage = function (url) {
        console.log('Navigating to:', url);

        // Handle anchor links
        if (url.includes('#')) {
            const [baseUrl, anchor] = url.split('#');
            window.location.href = baseUrl;

            // Wait for page to load, then scroll to anchor
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // If no specific element, try to find content containing the anchor text
                    const textElements = document.querySelectorAll('*');
                    for (let el of textElements) {
                        if (el.textContent.toLowerCase().includes(anchor.toLowerCase())) {
                            el.scrollIntoView({ behavior: 'smooth' });
                            break;
                        }
                    }
                }
            }, 500);
        } else {
            window.location.href = url;
        }

        searchResults.style.display = 'none';
        searchInput.value = '';
    };

    // Enhanced search with suggestions
    function showSearchSuggestions(query) {
        const lowerQuery = query.toLowerCase();
        const suggestions = [];

        // Add direct mappings as suggestions
        Object.keys(searchMappings).forEach(key => {
            if (key.includes(lowerQuery)) {
                suggestions.push({
                    title: key,
                    url: searchMappings[key],
                    type: 'direct'
                });
            }
        });

        // Add page matches
        pageData.forEach(page => {
            if (page.keywords) {
                page.keywords.forEach(keyword => {
                    if (keyword.toLowerCase().includes(lowerQuery)) {
                        suggestions.push({
                            title: `${keyword} - ${page.title}`,
                            url: page.url,
                            type: 'page'
                        });
                    }
                });
            }
        });

        if (suggestions.length > 0) {
            const uniqueSuggestions = suggestions.filter((item, index, self) =>
                index === self.findIndex(t => t.url === item.url)
            ).slice(0, 5);

            displaySuggestions(uniqueSuggestions);
        }
    }

    function displaySuggestions(suggestions) {
        searchResults.innerHTML = suggestions.map(suggestion => `
            <div class="search-result-item suggestion" onclick="navigateToPage('${suggestion.url}')">
                <div class="result-title">${suggestion.title}</div>
                <div class="result-type">${suggestion.type === 'direct' ? '🎯 Direct Match' : '📄 Page Match'}</div>
            </div>
        `).join('');
        searchResults.style.display = 'block';
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            showSearchSuggestions(query);
        } else if (query.length === 0) {
            searchResults.style.display = 'none';
        }
    });

    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Toggle mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Prevent search results from hiding when clicking inside search container
    document.querySelector('.search-container').addEventListener('click', (e) => {
        e.stopPropagation();
    });


    // Function to set active navigation based on current page
    function setActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (currentPath === href ||
                (href !== '/' && currentPath.startsWith(href)) ||
                (currentPath === '/' && href === '/home')) {
                link.classList.add('active');
            }
        });
    }

    // Initialize active nav on page load
    setActiveNav();

    // Handle dropdowns on mobile
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const hasDropdown = item.querySelector('.dropdown');
        if (hasDropdown) {
            item.querySelector('.nav-link').addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('open');
                }
            });
        }
    });

    // Make functions globally available for external use
    window.navbarUtils = {
        setActiveNav: setActiveNav,
        performSearch: performSearch,
        navigateToPage: window.navigateToPage,
        performWebSearch: window.performWebSearch
    };
}

// Attach to window for loader.js to call after navbar is loaded
window.initNavbar = initNavbar;