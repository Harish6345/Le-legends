import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin
import { docs, imgs } from '../assets/Assets';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Memories = () => {
  const imagesArray = Object.values(imgs);
  const sliderContainer = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // GSAP Continuous animation for each letter of "Memories"
    const letters = headingRef.current.querySelectorAll('span');
    letters.forEach((letter, index) => {
      gsap.fromTo(
        letter,
        {
          x: -500, // Start from left or right
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse the animation after it finishes
          delay: index * 0.1, // Stagger the animation of letters
        }
      );
    });

    // GSAP ScrollTrigger animation for slider
    gsap.fromTo(
      sliderContainer.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sliderContainer.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div id='Memo' className="relative py-16 mt-20 bg-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={docs.bitu}type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading with each letter wrapped in a span and alternating colors */}
      <h2
        ref={headingRef}
        className="text-6xl font-bold text-center mb-8 relative z-10"
      >
        {"Memories".split('').map((letter, index) => (
          <span
            key={index}
            className={`inline-block  ${
              index % 2 === 0 ? 'text-red-400' : 'text-blue-400'
            }`}
          >
            {letter}
          </span>
        ))}
      </h2>
a
      {/* Slider Container */}
      <div ref={sliderContainer}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full max-w-3xl md:max-w-6xl mx-auto relative z-10"
        >
          {imagesArray.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center border-[8px] border-l-[8px] border-t-[8px] hover:grayscale border-l-blue-400 border-t-blue-400 border-black ">
                <img className="w-full h-auto " src={img} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Memories;
