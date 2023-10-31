import React, { useEffect, useState } from "react";
import "./Main.css";
import MyNavbar from "./MyNavbar";
import googlePlay from "../assets/img/googlePlay.png";
import logo from "../assets/img/logo.png";
import homeBg from "../assets/img/home-bg.svg";
import wall4allLogo from "../assets/img/wall4all-logo.svg";
import ringtone from "../assets/img/ringtone-svgrepo-com.svg";
import apps from "../assets/img/apps-svgrepo-com.svg";
import wallpaper from "../assets/img/wallpaper-svgrepo-com.svg";
import games from "../assets/img/games-svgrepo-com.svg";
import customize from "../assets/img/customize-svgrepo-com.svg";
import video from "../assets/img/video-plus-svgrepo-com.svg";
import speaker1 from "../assets/img/speaker1.png";
import speaker2 from "../assets/img/speaker2.png";
import speaker3 from "../assets/img/speaker3.png";
import speakerLbg from "../assets/img/speakerLbg.png";
import speakerLogo from "../assets/img/speakerLogo.png";
import Wall4allSlider from "./Wall4allSlider";
import wallE1 from "../assets/img/wallE1.png";
import wallE2 from "../assets/img/wallE2.png";
import wallE3 from "../assets/img/wallE3.png";
import wallE4 from "../assets/img/wallE4.png";
import wallE5 from "../assets/img/wallE5.png";
import wallE6 from "../assets/img/wallE6.png";
import rightArrow from "../assets/img/rightArrow.png";
import leftArrow from "../assets/img/leftArrow.png";
import fontFusionLogo from "../assets/img/fontFusionLogo.png";
import FontFusionSlider from "./FontFusionSlider";
import quotesbg from "../assets/img/quotesbg.png";
import quotesLayer from "../assets/img/quotesLayer.png";
import quotesVector from "../assets/img/quotesVector.png";
import quotesLogo from "../assets/img/quotesLogo.png";
import quotesbgMob from "../assets/img/quotesbgMob.png";
import { FontFusionSliderDesktop } from "./FontFusionSliderDesktop";
import { Element } from "react-scroll";

const images = [wallE1, wallE2, wallE3, wallE4, wallE5, wallE6];
const Main = () => {
  const useItTodayURL =
    "https://play.google.com/store/apps/dev?id=8294805883967183867";

  const handleClickuseItToday = () => {
    window.open(useItTodayURL, "_blank");
  };

  const QuotesURL =
    "https://play.google.com/store/apps/details?id=com.useittoday.dailyquotes";

  const handleClickQuotes = () => {
    window.open(QuotesURL, "_blank");
  };
  const FontFusionURL =
    "https://play.google.com/store/apps/details?id=com.useitoday.stylishfont";

  const handleClickFontFusion = () => {
    window.open(FontFusionURL, "_blank");
  };
  const SpeakerCleanerURL =
    "https://play.google.com/store/apps/details?id=com.as.speakercleaner";

  const handleClickSpeakerCleaner = () => {
    window.open(SpeakerCleanerURL, "_blank");
  };

  const Wall4allURL =
    "https://play.google.com/store/apps/details?id=com.walli.hd.wallpaper";

  const handleClickWall4all = () => {
    window.open(Wall4allURL, "_blank");
  };

  const handleImageChange = (newImage) => {
    setIsHidden(true);
    setTimeout(() => {
      setCurrentImage(newImage);
      setIsHidden(false);
    }, 500);
  };

  const [currentImage, setCurrentImage] = useState(wallE1);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const changeImage = () => {
      setIsHidden(true);
      setTimeout(() => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
        setIsHidden(false);
      }, 500);
    };

    const intervalId = setInterval(changeImage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage]);

  return (
    <div className="bg-b">
      <MyNavbar />

      {/* Home section  */}

      <Element name="Home">
        <div className="grid lg:grid-cols-2 pt-16 lg:pt-24 mx-6 lg:mx-24 ">
          <div className="lg:mx-8 grid items-center  home-bg">
            <div className="">
              <h1 className="text-center text-[42px] lg:text-[60px] font-IBM font-bold capitalize my-2 ">
                Use it Today
              </h1>
              <p className="text-lg font-Roboto font-normal capitalize bg-white">
                versatile suite of four innovative and user-friendly
                applications designed to enhance various aspects of your daily
                life. These apps have been meticulously developed to provide
                seamless and convenient solutions for users across a range of
                interests and needs.
              </p>
              <h1 className="text-center text-[28px] lg:text-[32px] font-IBM font-bold capitalize my-2 bg-white">
                Smart, Secure & Simply Amazing
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img
              className=" lg:w-[740px] lg:h-[416px] lg:hover:scale-110 transform transition-transform duration-300 home-bg"
              src={homeBg}
              alt="bg-img"
            />
          </div>
        </div>
      </Element>

      {/* wall4all section  */}
      <Element name="Wall4all">
        <div className="wall4all-bg mt-16 pt-5">
          <p className="flex justify-center pt-6 lg:pt-10">
            <img
              className="w-[18%] lg:w-[10%]"
              src={wall4allLogo}
              alt="bg-img"
            />
          </p>
          <h1 className="text-center text-white text-[50px] lg:text-[110px] font-Montserrat font-medium mt-1">
            Wall4All
          </h1>
          <p className=" text-white text-base lg:text-lg font-Roboto font-normal mt-2 px-6 lg:px-60">
            Are you tired of the same old, uninspiring digital experience? Say
            hello to Wall4All, the all-in-one application that transforms your
            device into a haven of personalized creativity. With an array of
            exciting features, Wall4All redefines how you interact with your
            device, offering a seamless and captivating journey of
            customization.
          </p>

          <div className="hidden lg:grid lg:grid-cols-3 px-6 lg:px-[15%] items-center">
            <div className="">
              <div
                onClick={() => handleImageChange(wallE1)}
                className={
                  currentImage === wallE3 ? " cursor-pointer" : "cursor-pointer"
                }
              >
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                      <img
                        src={wallpaper}
                        style={{ width: "25px", height: "25px" }}
                        alt="bg"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                      Choose Your Masterpiece
                    </h1>
                    <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                      Choose from a vast library of stunning images and
                      wallpapers
                    </p>
                  </div>
                </div>
                <img
                  src={rightArrow}
                  style={{ marginLeft: "4rem", width: "80%", height: "80%" }}
                  className={currentImage === wallE1 ? "" : "invisible"}
                  alt="bg"
                />
              </div>

              <div className="my-8">
                <div
                  onClick={() => handleImageChange(wallE2)}
                  className={
                    currentImage === wallE2
                      ? " cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  <div className="flex justify-start items-center gap-5">
                    <div>
                      <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                        <img
                          src={ringtone}
                          style={{ width: "25px", height: "25px" }}
                          alt="bg"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                        Tune in to Individuality
                      </h1>
                      <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                        Your phone's ringtone should be as unique as you are.
                      </p>
                    </div>
                  </div>
                  <img
                    src={rightArrow}
                    style={{ marginLeft: "4rem", width: "80%", height: "80%" }}
                    className={currentImage === wallE2 ? "" : "invisible"}
                    alt="bg"
                  />
                </div>
              </div>

              <div
                onClick={() => handleImageChange(wallE3)}
                type="button"
                className={
                  currentImage === wallE1 ? " cursor-pointer" : "cursor-pointer"
                }
              >
                <div className="flex justify-start items-center gap-5 ">
                  <div>
                    <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                      <img
                        src={customize}
                        style={{ width: "25px", height: "25px" }}
                        alt="bg"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                      Personalize Your Aesthetics
                    </h1>
                    <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                      Your style, your way, with customized perfection.
                    </p>
                  </div>
                </div>
                <img
                  src={rightArrow}
                  style={{ marginLeft: "4rem", width: "80%", height: "80%" }}
                  className={currentImage === wallE3 ? "" : "invisible"}
                  alt="bg"
                />
              </div>
            </div>

            <div className="flex justify-center items-center my-5">
              <img
                src={currentImage}
                style={{
                  width: "80%",

                  objectFit: "cover",
                }}
                className={` ${isHidden ? "img-hidden" : "img-transition"}`}
                alt="bg"
              />
            </div>

            <div className="">
              <div
                onClick={() => handleImageChange(wallE4)}
                className={
                  currentImage === wallE4 ? " cursor-pointer" : "cursor-pointer"
                }
              >
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                      <img
                        src={video}
                        style={{ width: "25px", height: "25px" }}
                        alt="bg"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                      Entertainment at Your Fingertips
                    </h1>
                    <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                      Explore a diverse selection of entertaining videos
                    </p>
                  </div>
                </div>
                <img
                  src={leftArrow}
                  style={{ marginLeft: "-1.5rem", width: "80%", height: "80%" }}
                  className={currentImage === wallE4 ? "" : "invisible"}
                  alt="bg"
                />
              </div>

              <div className="my-4">
                <div
                  onClick={() => handleImageChange(wallE5)}
                  className={
                    currentImage === wallE5
                      ? " cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  <div className="flex justify-start items-center gap-5">
                    <div>
                      <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                        <img
                          src={apps}
                          style={{ width: "25px", height: "25px" }}
                          alt="bg"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                        download the future
                      </h1>
                      <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                        Discover an extensive catalog of apps
                      </p>
                    </div>
                  </div>
                  <img
                    src={leftArrow}
                    style={{
                      marginLeft: "-1.5rem",
                      width: "80%",
                      height: "80%",
                    }}
                    className={currentImage === wallE5 ? "" : "invisible"}
                    alt="bg"
                  />
                </div>
              </div>

              <div
                onClick={() => handleImageChange(wallE6)}
                className={
                  currentImage === wallE6 ? " cursor-pointer" : "cursor-pointer"
                }
              >
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <div className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px]">
                      <img
                        src={games}
                        style={{ width: "25px", height: "25px" }}
                        alt="bg"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-[18px] font-semibold font-Roboto capitalize">
                      Endless Fun and Productivity
                    </h1>
                    <p className="text-white text-[14px] font-normal font-Roboto capitalize">
                      Enter a world of endless adventure and excitement
                    </p>
                  </div>
                </div>
                <img
                  src={leftArrow}
                  style={{ marginLeft: "-1.5rem", width: "80%", height: "80%" }}
                  className={currentImage === wallE6 ? "" : "invisible"}
                  alt="bg"
                />
              </div>
            </div>
          </div>
          <div className="lg:pb-20 "></div>

          <div className="px-5 py-12 lg:hidden">
            <Wall4allSlider />
          </div>
        </div>
        <div
          className="flex justify-center -mt-6 lg:-mt-[2.5%]"
          onClick={handleClickWall4all}
        >
          <img
            src={googlePlay}
            className="w-[40%] h-[40%] lg:w-[15%] lg:h-[15%] cursor-pointer"
            alt="playstore-img"
          />
        </div>
      </Element>

      {/* Speaker cleaner section  */}
      <Element name="Speaker_Cleaner">
        <div className="grid lg:grid-cols-2 mx-6 lg:mx-[8%] gap-12 mt-10 lg:mt-16">
          <div>
            <div className="flex justify-start items-center">
              <div className="">
                <img className="" src={speakerLogo} alt="bg-img" />
              </div>
              <div className="ml-8">
                <h1 className="font-Noto leading-normal tracking-[2.4px]  text-[#2F2B2B]  text-[40px] font-bold capitalize">
                  Speaker
                </h1>
                <h1 className="font-Noto leading-normal tracking-[1.2px] -mt-3 text-[#2F2B2B] text-[40px] font-bold capitalize ">
                  Cleaner
                </h1>
              </div>
            </div>
            <h1 className="font-IBM text-[32px] font-bold capitalize mt-4">
              Be Clear, Just like your Speaker
            </h1>
            <p className="font-Roboto text-lg font-normal capitalize mt-4">
              Introducing Speaker Cleaner, the ultimate app that takes your
              audio experience to a whole new level. Whether you're a music
              enthusiast, a podcast lover, or just need crystal-clear calls,
              this app has you covered. With its versatile features, Speaker
              Cleaner ensures that your device's audio output is pristine and
              free from any unwanted disturbances.
            </p>
            <div className="mt-8" onClick={handleClickSpeakerCleaner}>
              <img
                src={googlePlay}
                className="w-[45%] h-[45%] lg:w-[35%] lg:h-[35%] cursor-pointer"
                alt="playstore-img"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-[100%]" src={speakerLbg} alt="bg-img" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 mx-6 lg:mx-[8%] gap-12 mt-12 lg:mt-12">
          <div className="flex justify-center items-center p-4 border lg:hover:scale-110 transform transition-transform duration-300 shadow-xl rounded-xl">
            <img className="w-[80%]" src={speaker1} alt="bg-img" />
          </div>
          <div className="flex justify-center items-center p-4 border lg:hover:scale-110 transform transition-transform duration-300 shadow-xl rounded-xl">
            <img className="w-[80%]" src={speaker2} alt="bg-img" />
          </div>
          <div className="flex justify-center items-center p-4 border lg:hover:scale-110 transform transition-transform duration-300 shadow-xl rounded-xl">
            <img className="w-[80%]" src={speaker3} alt="bg-img" />
          </div>
        </div>
      </Element>

      {/* Font Fusion Section  */}
      <Element name="Font_Fusion">
        <div className="bg-[#2B2A32] pt-10 pb-24 mt-20">
          <div className="mt-8 flex justify-center">
            <img
              src={fontFusionLogo}
              className="w-[45%] h-[45%] lg:w-[15%] lg:h-[15%]"
              alt="Logo"
            />
          </div>
          <p className="text-white mt-8 mx-6 lg:mx-56 font-Roboto font-normal text-lg ">
            Font Fusion is not just another text customization app; it's your
            gateway to an unparalleled world of fonts and creativity. With a
            suite of innovative features, Font Fusion empowers you to express
            yourself like never before, making your text truly unique and
            captivating
          </p>

          <div className="px-5  lg:flex hidden justify-end items-center">
            <FontFusionSliderDesktop />
          </div>
          <div className="px-5 mt-4 lg:hidden flex justify-center items-center ">
            <FontFusionSlider />
          </div>
        </div>
        <div
          className="flex justify-center -mt-6 lg:-mt-[2.5%]"
          onClick={handleClickFontFusion}
        >
          <img
            src={googlePlay}
            className="w-[40%] h-[40%] lg:w-[15%] lg:h-[15%] cursor-pointer"
            alt="playstore-img"
          />
        </div>
      </Element>

      {/* Quotes Section  */}
      <Element name="Quotes_Of_The_Day">
        <div className="grid lg:grid-cols-2 mx-6 lg:mx-24 mt-10 gap-6">
          <div className="lg:order-first order-last lg:hover:scale-110 transform transition-transform duration-300">
            <img src={quotesLayer} className="h-[100%]" alt="bg" />
          </div>
          <div className="font-IBM capitalize">
            <div className="grid justify-center ">
              <img
                src={quotesLogo}
                className="h-[100px] lg:h-[120px] "
                alt="bg"
              />
            </div>
            <h1 className="text-center text-3xl font-bold mt-4">
              A Large Collection of Quotes!
            </h1>
            <p className="text-lg font-normal mt-3 font-Roboto">
              Introducing "Quotes of the Day," your one-stop app for a daily
              dose of inspiration and motivation! Dive into a world of wisdom,
              emotions, and insight with our comprehensive collection of quotes
              that cater to every mood and need. Whether you're seeking daily
              inspiration, looking to share your favorite quotes, or searching
              for that perfect quote to match your mood, our app has you
              covered.
            </p>
            <div
              className="mt-6 lg:mt-14 flex justify-center"
              onClick={handleClickQuotes}
            >
              <img
                src={googlePlay}
                className="w-[45%] h-[45%] lg:w-[35%] lg:h-[35%] cursor-pointer"
                alt="playstore-img"
              />
            </div>
          </div>
        </div>
        <div className="mx-6 -mt-8 lg:mx-36 flex justify-center">
          <img
            src={quotesbg}
            className="h-[100%] lg:flex hidden mt-4"
            alt="bg"
          />
          <img src={quotesbgMob} className="h-[100%] flex lg:hidden" alt="bg" />
        </div>

        {/* Footer */}
        <div className="grid lg:grid-cols-3 bg-[#1E1E1E] mt-16 px-6 lg:px-0 gap-6">
          <div className="hidden lg:flex justify-start items-center">
            <img
              src={quotesVector}
              className="object-cover w-[100%] h-[100%]"
              alt="bg"
            />
          </div>
          <div className=" font-Roboto mt-10">
            <p className="text-white text-2xl lg:text-3xl font-bold tracking-[1.5px]">
              This app is available for
            </p>
            <p className="text-white text-2xl lg:text-3xl font-normal tracking-[1.5px]">
              your smart phone.
            </p>
            <p className="text-white text-base lg:text-lg font-normal mt-3 tracking-[1.2px]">
              Discover convenience like never before. Download our Android app
              and simplify your life.
            </p>
            <div
              className="mt-6 lg:mt-10 flex justify-center lg:justify-start"
              onClick={handleClickuseItToday}
            >
              <img
                src={googlePlay}
                className="w-[45%] h-[45%] lg:w-[35%] lg:h-[35%] cursor-pointer"
                alt="playstore-img"
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-center"></div>
        </div>
        {/* ================================================ */}
        <div className="grid lg:grid-cols-3 bg-[#1E1E1E] px-5 lg:px-24 py-4  pt-10 lg:pt-16 -mt-1">
          <div className="hidden lg:flex justify-start items-center">
            <img
              src={logo}
              className="object-contain w-[65px] h-[43px]"
              alt="bg"
            />
          </div>
          <div className="  flex justify-center items-center">
            <img
              src={logo}
              className="object-contain w-[35px] h-[100%] mr-4 lg:hidden"
              alt="bg"
            />
            <p className="text-white text-[18px] lg:text-[20px] font-normal font-Roboto">
              <a href="mailto:contact@useittoday.com">
                Contact@useittoday.com
              </a>
            </p>
          </div>
          <div
            className="hidden lg:flex justify-end items-center"
            onClick={handleClickuseItToday}
          >
            <img
              src={googlePlay}
              className="object-contain w-[143px] h-[43px] cursor-pointer"
              alt="bg"
            />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Main;
