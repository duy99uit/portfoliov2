import { useEffect, useState } from "react";

export const AppleText = (props: { text?: string; size?: number }) => {
  const { text } = props;
  const [isBlue, setIsBlue] = useState<boolean>(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsBlue(!isBlue);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [isBlue]);
  return (
    <div className="inline-block relative">
      {isBlue ? (
        <h1
          className={`text-blue-300 inline-block text-5xl sm:text-6xl font-bold`}
        >
          {text}
          <span
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 via-sky-500 to-blue-300 bg-clip-text text-transparent text-5xl sm:text-6xl font-bold`}
          >
            {text}
          </span>
        </h1>
      ) : (
        <h1
          className={`text-indigo-900 inline-block text-5xl sm:text-6xl font-bold`}
        >
          {text}
          <span
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700 bg-clip-text text-transparent text-5xl sm:text-6xl font-bold`}
          >
            {text}
          </span>
        </h1>
      )}
    </div>
  );
};
