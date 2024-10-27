document.addEventListener('DOMContentLoaded', () => {
  // Select cursor elements
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  const $hoverables = document.querySelectorAll('.hoverable');
  // Flag to check if it's the first mouse movement
  let isInitialMove = true;

  // Initialize the cursor balls at the center of the screen
  const initializePosition = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    gsap.set($bigBall, { x: centerX - 15, y: centerY - 15 });
    gsap.set($smallBall, { x: centerX - 5, y: centerY - 5 });
  };

  // Set initial positions on page load
  initializePosition();

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove);
  $hoverables.forEach((element) => {
    element.addEventListener('mouseenter', onMouseHover);
    element.addEventListener('mouseleave', onMouseHoverOut);
  });

  // Move the cursor
  function onMouseMove(e) {
    if (isInitialMove) isInitialMove = false;

    gsap.to($bigBall, {
      duration: isInitialMove ? 0 : 0.3,
      x: e.clientX - 15,
      y: e.clientY - 15
    });
    gsap.to($smallBall, {
      duration: isInitialMove ? 0 : 0.1,
      x: e.clientX - 5,
      y: e.clientY - 5
    });
  }

  // Hover effects
  function onMouseHover() {
    gsap.to($bigBall, { duration: 0.2, scale: 3.5 });
    gsap.to($smallBall, { duration: 0.2, scale: 0 });
  }

  function onMouseHoverOut() {
    gsap.to($bigBall, { duration: 0.2, scale: 1 });
    gsap.to($smallBall, { duration: 0.2, scale: 1 });
  }
});
