import React, { useEffect, useState } from "react";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import { Typewriter } from "react-simple-typewriter";
import imgUrl from "../images/headerphoto2.webp";

const Header = () => {
  const { language } = useLanguage();
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const iOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);

      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      setIsDesktop(!isMobile);

      setIsLandscape(window.innerWidth > window.innerHeight);

      const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsDesktop(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const words =
    language === "ko"
      ? ["로보틱스 엔지니어", "제어 엔지니어", "필드 엔지니어", "엑소스켈레톤 연구"]
      : ["Robotics Engineer", "Controls Engineer", "Field Engineer", "Exoskeleton Research"];

  const ctaText = getText(
    { en: "EMAIL ME", ko: "이메일 보내기" },
    language
  );

  // iOS
  if (isIOS) {
    return (
      <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper ios-device">
            <div
              className="ios-background"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${imgUrl})`,
              }}
            />

            <div className="content-wrapper">
              <Fade bottom>
                <h2>
                  {getText({ en: "Hi, I am", ko: "안녕하세요, 저는" }, language)} {getText(data.name, language)}
                </h2>
              </Fade>

              <Fade bottom>
                <div className="heading-wrapper">
                  <h1>
                    {getText({ en: "I am a", ko: "저는" }, language)}{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                        words={words}
                      />
                    </span>
                  </h1>
                </div>
              </Fade>

              <Fade bottom>
                <p>{getText(data.headerParagraph, language)}</p>
              </Fade>

              <Fade bottom>
                <a href={`mailto:${data.contactEmail}`} className="primary-btn">
                  {ctaText}
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // non-iOS
  return (
    <div className="section" id="home">
      <div className="container">
        <div
          className={`header-wrapper ${isLandscape ? "landscape" : "portrait"} ${
            isDesktop ? "desktop" : "mobile"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
              imgUrl +
              ")",
          }}
        >
          <Fade bottom>
            <h2>
              {getText({ en: "Hi, I am", ko: "안녕하세요, 저는" }, language)} {getText(data.name, language)}
            </h2>
          </Fade>

          <Fade bottom>
            <div className="heading-wrapper">
              <h1>
                {getText({ en: "I am a", ko: "저는" }, language)}{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    words={words}
                  />
                </span>
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <p>{getText(data.headerParagraph, language)}</p>
          </Fade>

          <Fade bottom>
            <a href={`mailto:${data.contactEmail}`} className="primary-btn">
              {ctaText}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
