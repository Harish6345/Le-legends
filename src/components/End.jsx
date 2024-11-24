import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const End = () => {
  const endTextRef = useRef(null);
  const thanksTextRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for "The End" text
    gsap.fromTo(
      endTextRef.current.children, 
      {
        opacity: 0, 
        y: -50
      },
      {
        opacity: 1, 
        y: 0,
        duration: 1.5,
        stagger: 0.1, // Staggering the letters for smooth sequential reveal
        ease: 'power3.out',
        repeat: -1, // Infinite repetition
        yoyo: true, // Reverse the animation after completion
      }
    );

    // GSAP Animation for "Special Thanks" text
    gsap.fromTo(
      thanksTextRef.current.children, 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.15, // Slightly delayed for "Special Thanks"
        ease: 'power3.out',
        repeat: -1, // Infinite repetition
        yoyo: true, // Reverse the animation after completion
        delay: 1.5, // Delay to start after "The End"
      }
    );
  }, []);

  return (
    <div id='End' className="bg-black py-12">
      {/* "The End" with animated letters */}
      <h2 className="text-center text-5xl font-extrabold text-white mb-6">
        <span ref={endTextRef} className="inline">
          {"The".split('').map((letter, index) => (
            <span key={index} className="inline text-white">
              {letter}
            </span>
          ))}
        </span>
        <span ref={endTextRef} className="inline">
          {" End".split('').map((letter, index) => (
            <span key={index} className="inline text-blue-400">
              {letter}
            </span>
          ))}
        </span>
      </h2>

      {/* "Special Thanks" with animated letters */}
      <p ref={thanksTextRef} className="text-center text-2xl font-semibold text-white">
        {"Special Thanks to".split('').map((letter, index) => (
          <span key={index} className="inline text-white">
            {letter}
          </span>
        ))}
        <span ref={thanksTextRef} className="inline">
          {" @ Le Legends.".split('').map((letter, index) => (
            <span key={index} className="inline text-blue-400">
              {letter}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}

export default End;
