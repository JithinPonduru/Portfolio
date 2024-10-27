import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // Refs for cursor elements
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverableElements = useRef(null);
  let isInitialMove = true;

  useEffect(() => {
    // Center the cursor balls on the screen
    const initializePosition = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      gsap.set(bigBallRef.current, { x: centerX - 15, y: centerY - 15 });
      gsap.set(smallBallRef.current, { x: centerX - 5, y: centerY - 5 });
    };

    // Set initial positions on page load
    initializePosition();

    // Handle mouse movement
    const onMouseMove = (e) => {
      if (isInitialMove) isInitialMove = false;

      gsap.to(bigBallRef.current, {
        duration: isInitialMove ? 0 : 0.3,
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      gsap.to(smallBallRef.current, {
        duration: isInitialMove ? 0 : 0.1,
        x: e.clientX - 5,
        y: e.clientY - 5,
      });
    };

    // Hover effects
    const onMouseHover = () => {
      gsap.to(bigBallRef.current, { duration: 0.2, scale: 3.5 });
      gsap.to(smallBallRef.current, { duration: 0.2, scale: 0 });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBallRef.current, { duration: 0.2, scale: 1 });
      gsap.to(smallBallRef.current, { duration: 0.2, scale: 1 });
    };

    // Add event listeners
    document.body.addEventListener('mousemove', onMouseMove);
    hoverableElements.current = document.querySelectorAll('.hoverable');
    hoverableElements.current.forEach((element) => {
      element.addEventListener('mouseenter', onMouseHover);
      element.addEventListener('mouseleave', onMouseHoverOut);
    });

    // Cleanup listeners on component unmount
    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverableElements.current.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor hidden md:block">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
