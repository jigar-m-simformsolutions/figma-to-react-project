import { useState, useEffect } from "react";

const MOBILE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1023;
const LAPTOP_MAX_WIDTH = 1365;

function useScreenType() {
  const [screenType, setScreenType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= MOBILE_MAX_WIDTH) {
        setScreenType("mobile");
      } else if (screenWidth <= TABLET_MAX_WIDTH) {
        setScreenType("tablet");
      } else if (screenWidth <= LAPTOP_MAX_WIDTH) {
        setScreenType("laptop");
      } else {
        setScreenType("desktop");
      }
    };

    // Initial call to set the screen type
    handleResize();

    // Add a resize event listener to update the screen type when the window size changes
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobileScreen: screenType === "mobile",
    isTabletScreen: screenType === "tablet",
    isLaptopScreen: screenType === "laptop",
    isDesktopScreen: screenType === "desktop",
  };
}

export default useScreenType;
