// Aerospace-themed interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Create space background with stars
    createSpaceBackground();
    
    // Create flow visualization for aerospace engineering
    createFlowVisualization();
    
    function createSpaceBackground() {
        // Create background container
        const spaceBackground = document.createElement('div');
        spaceBackground.className = 'apollo13-background';
        document.body.prepend(spaceBackground);
        
        // No stars or constellations are created - just the background container
        
        // Initialize orbit animation
        initOrbitAnimation();
    }
    
    function initOrbitAnimation() {
        const orbit = document.querySelector('.orbit-animation');
        const satellite = document.querySelector('.satellite');
        
        if (!orbit || !satellite) return; // Skip if elements don't exist
        
        // Set random position for orbit animation
        orbit.style.top = Math.random() * 30 + 10 + 'vh';
        orbit.style.left = Math.random() * 20 + 5 + 'vw';
        
        // Start satellite rotation
        setInterval(() => {
            const angle = (parseFloat(satellite.getAttribute('data-angle') || 0) + 1) % 360;
            satellite.setAttribute('data-angle', angle);
            
            const radius = 30;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            satellite.style.transform = `translate(${x}px, ${y}px)`;
        }, 50);
    }
    
    // Create constellation patterns for aerospace themes
    function createConstellation(container, type, xPos, yPos, opacity) {
        const constellation = document.createElement('div');
        constellation.className = 'constellation ' + type;
        constellation.style.left = xPos + 'vw';
        constellation.style.top = yPos + 'vh';
        constellation.style.opacity = opacity;
        
        // Create constellation points based on type
        const points = [];
        
        if (type === 'rocket') {
            // Simple rocket shape with 5 stars
            points.push({x: 0, y: 0});
            points.push({x: -5, y: 10});
            points.push({x: 0, y: 20});
            points.push({x: 5, y: 10});
            points.push({x: 0, y: 30});
        } else if (type === 'satellite') {
            // Simple satellite shape
            points.push({x: 0, y: 0});
            points.push({x: 10, y: 5});
            points.push({x: 20, y: 0});
            points.push({x: 10, y: -5});
            points.push({x: 15, y: 10});
        }
        
        // Create stars for each point
        points.forEach(point => {
            const star = document.createElement('div');
            star.className = 'constellation-point';
            star.style.left = point.x + 'px';
            star.style.top = point.y + 'px';
            constellation.appendChild(star);
        });
        
        container.appendChild(constellation);
    }
    
    function createFlowVisualization() {
        // Simplified - no additional elements needed
        return;
    }
    // Add random floating clouds
    function createCloud() {
        const cloud = document.createElement('div');
        cloud.className = 'floating-cloud';
        
        // Random size
        const size = Math.random() * 100 + 50;
        cloud.style.width = size + 'px';
        cloud.style.height = size / 3 + 'px';
        
        // Random position
        cloud.style.left = Math.random() * 100 + 'vw';
        cloud.style.top = Math.random() * 30 + 5 + 'vh';
        
        // Random speed
        const duration = Math.random() * 60 + 60;
        cloud.style.animationDuration = duration + 's';
        
        // Add to body
        document.body.appendChild(cloud);
        
        // Remove after animation
        setTimeout(() => {
            cloud.remove();
        }, duration * 1000);
    }
    
    // Create clouds periodically
    setInterval(createCloud, 10000);
    // Create initial clouds
    for (let i = 0; i < 3; i++) {
        setTimeout(createCloud, i * 1000);
    }
    
    // Aerospace cursor effect removed
    // Keeping a simple professional design without the airplane cursor
});
