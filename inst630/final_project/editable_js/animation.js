

    gsap.registerPlugin(ScrollTrigger); // Register the plugin
    gsap.registerPlugin(CustomEase, CustomWiggle); 
//Animate cards so that they drop in an bounce when dropped
export function animateSeasons(data) {
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
        gsap.to('body', 
            // FROM state (starting point)
            {
                
                scrollTrigger: '.spring',
                backgroundImage: "url(img/spring.png)"
            }
        );

        // Add a div overlay for the new background
        const bgOverlay1 = document.createElement('div');
        bgOverlay1.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(img/summer.png);
        background-size: cover;
        background-position: center;
        opacity: 0;
        z-index: -3;
        `;
        document.body.prepend(bgOverlay1);

        // Animate the overlay
        gsap.to(bgOverlay1, {
        scrollTrigger: {
            trigger: ".summer",
            start: "top center",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
        });

        const bgOverlay2 = document.createElement('div');
        bgOverlay2.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(img/fall.png);
        background-size: cover;
        background-position: center;
        opacity: 0;
        z-index: -2;
        `;
        document.body.prepend(bgOverlay2);


        gsap.to(bgOverlay2, {
        scrollTrigger: {
            trigger: ".fall",
            start: "top center",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
        });

        const bgOverlay3 = document.createElement('div');
        bgOverlay3.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(img/winter.jpg);
        background-size: cover;
        background-position: center;
        opacity: 0;
        z-index: -1;
        `;
        document.body.prepend(bgOverlay3);

        gsap.to(bgOverlay3, {
        scrollTrigger: {
            trigger: ".winter",
            start: "top center",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
        });
        
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

export function animateRolodex(data, animal) {
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

        
  
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: animal,
                markers: false,
                start: "10% 100%",
                end: "90% 0%",
                scrub: true
            }
        });

        tl.fromTo(animal, { scale: 0.3}, {scale: 1})
        .fromTo(animal, {scale: 1}, {scale: 0.3});

        
        
        console.log('Button Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

export function animateTitleRolodex(data, title) {
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

        
  
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                markers: false,
                start: "10% 100%",
                end: "90% 0%",
                scrub: true
            }
        });

        tl.fromTo(title, { scale: 1}, {scale: 2})
        .fromTo(title, {scale: 2}, {scale: 1});

        
        
        console.log('Button Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

//Animate buttons so that when hovered, the button size increases, popping out at the user. This shows the user that the button is selectable.
export function animateWiggle(data, animalImage) {
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
        CustomWiggle.create("myWiggle", {wiggles: 6, type: "easeOut"});
  
        //on hover, increase the scale
        animalImage.addEventListener("mouseenter", () => {
            gsap.to(animalImage, {duration: 1, rotation: 10, ease: "myWiggle"});
        });

        
        console.log('Wiggle Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}

//Animate buttons so that when hovered, the button size increases, popping out at the user. This shows the user that the button is selectable.
export function animateCatchphrase(data) {
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
        console.log("entered catchphrase try");
        let targets = gsap.utils.toArray(".animalImage");
        let catchphrases = gsap.utils.toArray(".catchphrase");
        //targets = targets.slice(0, 52);
        console.log(catchphrases[0]);

        targets.forEach((obj, index) => {

            let catchphraseAnimation = gsap.to(catchphrases[index], { opacity: 1, duration: 0.2 }).reversed(true);
            obj.addEventListener("click", function (e) {
                animationReverse(catchphraseAnimation);
            });
        });

        function animationReverse(animation) {
            console.log("clicked!");
            animation.reversed(!animation.reversed());
        }

        
        console.log('Catchphrase Animation created successfully!');
        
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
                
                scale: 1,
                ease: "bounce.out"
            }
        );
            animation.play()
        });
        
        console.log('Hover Animation created successfully!');
        
    } catch (error) {
       console.log(error); // Error handling provided in support file
    }

    
}