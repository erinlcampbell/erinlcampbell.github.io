
//Animate cards so that they drop in an bounce when dropped
export function animateMyCards(data) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.log('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        console.log('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {
        
        gsap.fromTo('.restaurant-card', 
            // FROM state (starting point)
            {
                
                opacity: 0, scale: 1, y: -100 //start up to drop down
            },
            // TO state (ending point)  
            {
                
                opacity: 1,
                duration: 0.2,
                stagger: 0.1 ,
                y:0, //drop to desired point
                ease: "bounce.out" //bounces on drop
            }
        );
        
        console.log('Animation created successfully!');
        
    } catch (error) {
       console.log(error); 
    }

    
}

//Animate display so that it fades in an out when a new view is brought up, allowing for a more smooth viewing experience
export function animateDisplay(data) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.log('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        console.log('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {

        let display = document.getElementById("data-display");
        gsap.fromTo(display, 
                // FROM state (starting point)
                {
                    
                    opacity: 0 //erases view and then...
                },
                // TO state (ending point)  
                {
                    
                    opacity: 1, //view reappears with a fade in of one second
                    duration: 1
                }
            );
            
            console.log('Button Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

//Animate buttons so that when hovered, the button size increases, popping out at the user. This shows the user that the button is selectable.
export function animateMyButtons(data, button) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.log('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        console.log('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {
  
        //on hover, increase the scale
        button.addEventListener("mouseenter", () => {
            let animation = gsap.to(button, 
            
            // TO state (ending point)  
            {
                
                scale: 1.25
            }
        );
            animation.play()
        });

        //when the user hovers away, return to normal size
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

//Make the cards slightly bigger when the user hovers over them so they are aware of their selection and the information is made more clear.
export function animateMyCardsHover(data, card) {
    // Step 1: Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.log('GSAP not available. Check console.');
        return;
    }

    if (data.length === 0) {
        console.log('No data loaded. Click "Load Data" first.');
        return;
    }
    
    try {
  
        //on hover, increase the scale
        card.addEventListener("mouseenter", () => {
            let animation = gsap.to(card, 
            
            // TO state (ending point)  
            {
                
                scale: 1.10
            }
        );
            animation.play()
        });

        //when the user hovers away, return to normal size
        card.addEventListener("mouseleave", () => {
            let animation = gsap.to(card, 
            
            // TO state (ending point)  
            {
                
                scale: 1
            }
        );
            animation.play()
        });
        
        console.log('Hover Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}