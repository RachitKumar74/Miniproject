document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelector('.portfolio-grid');
    
    // Sample portfolio data (in a real project, this would come from an API)
    const portfolioData = [
        {
            id: 1,
            title: 'Instagram Reel Edit',
            category: 'short-form',
            thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            videoUrl: 'https://www.youtube.com/embed/AQTA9pVeWuA?si'
        },
        {
            id: 2,
            title: 'YouTube Vlog',
            category: 'long-form',
            thumbnail: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/SgZUaLTSAQI?si'
        },
        {
            id: 3,
            title: 'Gaming Montage',
            category: 'gaming',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/vQqU0F8vTOE?si'
        },
        {
            id: 4,
            title: 'Football Highlights',
            category: 'football',
            thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/XTvgJA23Vj8?si'
        },
        {
            id: 5,
            title: 'Product Advertisement',
            category: 'ecommerce',
            thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/kpHBxLqkikw?si'
        },
        {
            id: 6,
            title: 'Documentary Clip',
            category: 'documentary',
            thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/huf6NS8qB2Y?si'
        },
        {
            id: 7,
            title: 'Color Grading Sample',
            category: 'color',
            thumbnail: 'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
            videoUrl: 'https://www.youtube.com/embed/d_WwQFu1s54?si'
        },
        {
            id: 8,
            title: 'Anime AMV',
            category: 'anime',
            thumbnail: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/cgG7s_JMzw8?si'
        },
        {
            id: 9,
            title: 'Commercial Ad',
            category: 'ads',
            thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            videoUrl: 'https://www.youtube.com/embed/fvyBCesuxMM?si'
        }
    ];
    
    // Function to render portfolio items
    function renderPortfolioItems(filter = 'all') {
        portfolioItems.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === filter);
            
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <div class="play-btn" data-video="${item.videoUrl}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `;
            
            portfolioItems.appendChild(portfolioItem);
        });
        
        // Add event listeners to play buttons
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const videoUrl = this.getAttribute('data-video');
                openVideoModal(videoUrl);
            });
        });
    }
    
    // Initialize portfolio
    renderPortfolioItems();
    
    // Filter portfolio items
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Render filtered items
            renderPortfolioItems(filterValue);
        });
    });
    
    // Video modal functionality
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    const videoIframe = document.querySelector('.video-modal iframe');
    
    function openVideoModal(videoUrl) {
        videoIframe.setAttribute('src', videoUrl);
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeVideoModal() {
        videoModal.classList.remove('active');
        videoIframe.setAttribute('src', '');
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});