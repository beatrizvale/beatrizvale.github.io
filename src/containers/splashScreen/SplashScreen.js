import React, { useEffect, useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    document.body.classList.add("body-no-scroll");

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="splash-title">{greeting.username}</span>
      </div>
    </div>
  );
}
