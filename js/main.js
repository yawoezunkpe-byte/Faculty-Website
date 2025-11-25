/**
 * Faculty Website JavaScript
 * Compatible with OmniCMS
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const mainNav = document.querySelector('.main-navigation');
    
    // Create mobile menu toggle button if it doesn't exist
    if (!mobileMenuToggle && window.innerWidth <= 768) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'mobile-menu-toggle';
        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('header .container').appendChild(toggleButton);
    }
    
    // Handle existing mobile menu button (old style)
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
            
            if (navMenu.classList.contains('show')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Handle new mobile menu toggle (new style)
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener('click', function() {
            mainNav.classList.toggle('mobile-open');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('mobile-open')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for contact form (if exists)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
                if (!emailRegex.test(emailField.value)) { 
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // In a real implementation, this would submit the form
                // For now, just show a success message
                const formMessage = document.createElement('div');
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Your message has been sent successfully!';
                
                const existingMessage = contactForm.querySelector('.form-message');
                if (existingMessage) {
                    contactForm.removeChild(existingMessage);
                }
                
                contactForm.appendChild(formMessage);
                contactForm.reset();
            }
        });
    }
    
    // Initialize any OmniCMS specific functionality
    if (typeof window.omniCMS !== 'undefined' && window.omniCMS.init) {
        window.omniCMS.init();
    }
});
