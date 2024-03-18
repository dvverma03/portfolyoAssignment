import gsap from "gsap";
import { useEffect } from "react";
const PreLoader = () => {
  useEffect(() => {
    // Gsap 3 version
    const preloadDot = document.querySelector(
      ".preloader__container__preload__dot"
    );
    const tl = gsap.timeline({ repeat: 3 });
    tl.to(preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 }).to(
      preloadDot,
      0.3,
      {
        scale: 1,
        stagger: {
          amount: 0.35,
          from: "start",
        },
      }
    );

    let counter = 0;
    const loaderTimer = setInterval(function () {
      counter++;
      if (counter == 100) {
        clearInterval(loaderTimer);
        gsap.to(".preloader", 0.3, { delay: 0.5, y: "-100%" });
      }
    }, 5);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__container">
        <div className="preloader__container__preload">
          <div className="preloader__container__preload__dot" />
          <div className="preloader__container__preload__dot" />
          <div className="preloader__container__preload__dot" />
          <div className="preloader__container__preload__dot" />
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
