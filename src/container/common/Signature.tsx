import React, { useEffect, useState } from "react";

const Signature = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isBlue, setIsBlue] = useState<boolean>(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsBlue(!isBlue);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [isBlue]);

  // const [bgColor, setBgColor] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 30; // Adjust the threshold as needed

      if (scrollPosition > threshold) {
        setIsBlue(false);
      } else {
        setIsBlue(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="inline-block relative font-custom cursor-pointer"
      onClick={scrollToTop}
    >
      {isBlue ? (
        <h1 className={`text-blue-600 inline-block text-4xl font-bold`}>
          Duy
          <span
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 bg-clip-text text-transparent text-4xl font-bold`}
          >
            Duy
          </span>
        </h1>
      ) : (
        <h1 className={`text-purple-600 inline-block text-4xl font-bold`}>
          Duy
          <span
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-200 via-violet-500 to-purple-600 bg-clip-text text-transparent text-4xl font-bold`}
          >
            Duy
          </span>
        </h1>
      )}
    </div>
  );
};

export default Signature;
