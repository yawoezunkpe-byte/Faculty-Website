/**
 * Professional formula animation for aerospace engineering faculty website
 * Shows the main PDE equation with secondary formulas using creative transitions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all formula elements
    const mainFormula = document.getElementById('main-formula');
    const gradientFormula = document.getElementById('gradient-formula');
    const divergenceFormula = document.getElementById('divergence-formula');
    
    // Get indicator elements
    const mainIndicator = document.getElementById('main-indicator');
    const gradientIndicator = document.getElementById('gradient-indicator');
    const divergenceIndicator = document.getElementById('divergence-indicator');
    
    // Timing configuration
    const cycleDelay = 5000;        // 5 seconds before cycling to next formula
    const transitionDuration = 1000; // 1000ms transition duration (matches CSS)
    
    // Function to update which formula is shown with smooth transitions
    function updateFormulas(formulaToShow, immediate = false) {
        // First hide the currently visible formula with a transition
        const activeFormula = document.querySelector('.formula.active');
        
        if (activeFormula && !immediate) {
            // Start transition out
            activeFormula.style.opacity = '0';
            activeFormula.style.transform = 'translateY(5px) scale(0.98)';
            
            // Wait for transition to complete before showing the next formula
            setTimeout(() => {
                activeFormula.classList.remove('active');
                showNewFormula();
            }, transitionDuration);
        } else {
            // No active formula or immediate change requested
            // Hide all formulas first
            [gradientFormula, divergenceFormula].forEach(formula => { 
                formula.classList.remove('active'); 
            });
            showNewFormula();
        }
        
        // Reset all indicators
        [mainIndicator, gradientIndicator, divergenceIndicator].forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        function showNewFormula() {
            // Show the selected formula if any
            if (formulaToShow) {
                // Prepare the formula for transition in
                formulaToShow.style.opacity = '0';
                formulaToShow.style.transform = 'translateY(5px) scale(0.98)';
                formulaToShow.classList.add('active');
                
                // Force reflow to ensure the transition happens
                void formulaToShow.offsetWidth;
                
                // Trigger the transition
                formulaToShow.style.opacity = '';
                formulaToShow.style.transform = '';
                
                // Update the corresponding indicator
                if (formulaToShow === gradientFormula) {
                    gradientIndicator.classList.add('active');
                } else if (formulaToShow === divergenceFormula) {
                    divergenceIndicator.classList.add('active');
                }
            } else {
                // If no formula is selected, activate the main indicator
                mainIndicator.classList.add('active');
            }
        }
    }
    
    // Show the first secondary formula immediately on page load
    updateFormulas(gradientFormula, true);
    
    // Start the animation cycle after a delay
    setTimeout(function() {
        // Run the animation cycle
        let currentFormula = 0;
        const formulas = [gradientFormula, divergenceFormula];
        
        function cycleFormulas() {
            currentFormula = (currentFormula + 1) % formulas.length;
            updateFormulas(formulas[currentFormula]);
        }
        
        // Set interval to cycle through formulas
        setInterval(cycleFormulas, cycleDelay);
        
    }, cycleDelay); // Start cycling after the first formula has been shown for a while
});
