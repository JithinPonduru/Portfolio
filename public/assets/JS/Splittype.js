// Initialize SplitType to split the text into characters
let text = new SplitType('.BTT'); 
let listofChars = document.querySelectorAll('.char');

// Add a class to move characters off-screen initially
for (let i = 0; i < listofChars.length; i++) {
    listofChars[i].classList.add('translate-y-full');
}

// Prevent multiple animations from starting
let animationStarted = false;

// Function to start the animation
const startAnimation = () => {
    if (!animationStarted) { // Prevent multiple triggers
        animationStarted = true; // Set to true once animation starts
        gsap.to('.char', {
            y: 0,
            stagger: {
                amount: 0.5, // Total time for all characters to animate
                from: "start", // Animate from the first character
                ease: "power1.inOut" // More subtle easing function
            },
            duration: 0.5, // Duration for each character's animation
            ease: "Power2.easeOut" // Easing for smoother animation
        });
    }
};

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startAnimation(); // Start the animation if the element is in view
            observer.unobserve(entry.target); // Stop observing once animation starts
        }
    });
}, {
    threshold: 0.1 // Adjust this value as needed (0.1 means 10% of the element must be visible)
});

// Observe each character element
listofChars.forEach(char => {
    observer.observe(char);
});  
