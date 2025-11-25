// Initialize slideshow variables
let slideshowIndices = [1, 1]; // Track current slide for each slideshow
let slideshowTimers = [null, null]; // Timers for auto rotation
const autoRotateInterval = 5000; // Time between auto rotations (5 seconds)

// Initialize slideshows when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Show the first slide in each slideshow
    showSlides(1, 0); // First slideshow
    showSlides(1, 1); // Second slideshow
    
    // Start automatic rotation
    startAutoRotation();
});

// Next/previous controls
function plusSlides(n, slideshow) {
    // Clear the current timer when manually navigating
    clearTimeout(slideshowTimers[slideshow]);
    showSlides(slideshowIndices[slideshow] + n, slideshow);
    // Restart the timer
    slideshowTimers[slideshow] = setTimeout(() => autoRotate(slideshow), autoRotateInterval);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
    showSlides(n, slideshow);
}

function showSlides(n, slideshow) {
    let i;
    let slides = document.querySelectorAll(`.slideshow-column:nth-child(${slideshow + 1}) .slides`);
    let dots = document.querySelectorAll(`.slideshow-column:nth-child(${slideshow + 1}) .dot`);
    
    // Handle edge cases
    if (slides.length === 0) return;
    
    // Loop back to first slide if we exceed the number of slides
    if (n > slides.length) {
        slideshowIndices[slideshow] = 1;
    } else if (n < 1) {
        slideshowIndices[slideshow] = slides.length;
    } else {
        slideshowIndices[slideshow] = n;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    if (dots.length > 0) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }
    
    // Show the current slide and activate the corresponding dot
    slides[slideshowIndices[slideshow] - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideshowIndices[slideshow] - 1].className += " active";
    }
}

// Function to start automatic rotation for all slideshows
function startAutoRotation() {
    // Start rotation for first slideshow
    slideshowTimers[0] = setTimeout(() => autoRotate(0), autoRotateInterval);
    
    // Start rotation for second slideshow
    slideshowTimers[1] = setTimeout(() => autoRotate(1), autoRotateInterval);
}

// Function to automatically advance to the next slide
function autoRotate(slideshow) {
    // Get number of slides in this slideshow
    let slides = document.querySelectorAll(`.slideshow-column:nth-child(${slideshow + 1}) .slides`);
    
    // Only auto-rotate if there's more than one slide
    if (slides.length > 1) {
        showSlides(slideshowIndices[slideshow] + 1, slideshow);
    }
    
    // Set the timer for the next rotation
    slideshowTimers[slideshow] = setTimeout(() => autoRotate(slideshow), autoRotateInterval);
}
