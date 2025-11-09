export function animateMyCards(data) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        alert('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        alert('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {
        
        gsap.fromTo('.restaurant-card', 
            // FROM state (starting point)
            {
                /* TODO: Starting properties - opacity, scale, y position? */
                opacity: 0, scale: 1, y: -100
            },
            // TO state (ending point)  
            {
                /* TODO: Ending properties - make them fully visible and normal size */
                opacity: 1,
                duration: 0.2,
                stagger: 0.1 /* TODO: Delay between each card? 0.1 seconds? */,
                y:0,
                ease: "bounce.out"/* TODO: What kind of easing? "bounce.out"? */
            }
        );
        
        console.log('Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

export function animateMyButtons(data, button) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        alert('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        alert('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {
        
        

        console.log(button);

        button.addEventListener("mouseenter", () => {
            let animation = gsap.to(button, 
            
            // TO state (ending point)  
            {
                
                scale: 1.25
            }
        );
            animation.play()
        });
        button.addEventListener("mouseleave", () => {
            let animation = gsap.to(button, 
            
            // TO state (ending point)  
            {
                
                scale: 1
            }
        );
            animation.play()
        });
        
        console.log('Button Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

