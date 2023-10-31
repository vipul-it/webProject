import React, { useState, useEffect } from "react";
import "./FontFusionSliderDesktop.css";
import search from "../assets/img/font-search-svgrepo-com.png";
import keyboard from "../assets/img/keyboard-svgrepo-com.png";
import appsDev from "../assets/img/apps-development-svgrepo-com.png";
import redsearch from "../assets/img/red-search.png";
import redkeyboard from "../assets/img/red-keyboard.png";
import redappsDev from "../assets/img/red-apps.png";
import fslide1 from "../assets/img/fslide1.png";
import fslide2 from "../assets/img/fslide2.png";
import fslide3 from "../assets/img/fslide3.png";

const images = [fslide1, fslide2, fslide3];

export const FontFusionSliderDesktop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationDirection, setAnimationDirection] =
    useState("slideInFromTop");

  // Function to change the slide manually
  const changeSlide = (index) => {
    setAnimationDirection("slideOutToBottom");
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationDirection("slideInFromTop");
    }, 500); // Adjust the delay to match your CSS animation time
  };

  // Function to automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection("slideOutToBottom");
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setAnimationDirection("slideInFromTop");
      }, 500); // Adjust the delay to match your CSS animation time
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-52 mt-8">
        <div className="text-white capitalize font-Roboto text-right pr-6">
          <div
            onClick={() => changeSlide(0)}
            className={`slider-button ${currentSlide === 0 ? "active" : ""}`}
          >
            <div className="grid justify-items-end mt-2">
              {currentSlide === 0 ? (
                <img src={redsearch} className="lg:w-12 lg:h-12" alt="Logo" />
              ) : (
                <img src={search} className="lg:w-12 lg:h-12" alt="Logo" />
              )}
            </div>
            <h1 className="font-semibold text-lg mt-1">Be the Font Artist</h1>
            <p className="font-normal text-base mt-1">
              allows you to design your own fonts, giving you the freedom to
              craft letterforms that reflect your artistic vision
            </p>
          </div>
          <div
            onClick={() => changeSlide(1)}
            className={`slider-button mt-6 ${
              currentSlide === 1 ? "active" : ""
            }`}
          >
            <div className="grid justify-items-end mt-2">
              {currentSlide === 1 ? (
                <img src={redkeyboard} className="lg:w-12 lg:h-12" alt="Logo" />
              ) : (
                <img src={keyboard} className="lg:w-12 lg:h-12" alt="Logo" />
              )}
            </div>
            <h1 className="font-semibold text-lg mt-1">
              Personalize Your Typing Experience
            </h1>
            <p className="font-normal text-base mt-1">
              Customize your keyboard's appearance and layout to match your
              unique style, making every keystroke a visual delight.
            </p>
          </div>

          <div
            onClick={() => changeSlide(2)}
            className={`slider-button mt-6 ${
              currentSlide === 2 ? "active" : ""
            }`}
          >
            <div className="grid justify-items-end mt-2">
              {currentSlide === 2 ? (
                <img src={redappsDev} className="lg:w-12 lg:h-12" alt="Logo" />
              ) : (
                <img src={appsDev} className="lg:w-12 lg:h-12" alt="Logo" />
              )}
            </div>
            <h1 className="font-semibold text-lg mt-1">Seamless Integration</h1>
            <p className="font-normal text-base mt-1">
              Font Fusion's keyboard seamlessly integrates with all your
              favorite apps, ensuring that your customized fonts can be used in
              messaging, social media, notes, and more.
            </p>
          </div>
        </div>

        <div className="lg:grid justify-center items-center hidden overflow-hidden">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            style={{ animation: `${animationDirection} 0.5s forwards` }}
          />
        </div>
      </div>
    </div>
  );
};
