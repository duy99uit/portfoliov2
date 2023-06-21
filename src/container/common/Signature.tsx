import React, { useEffect, useState } from "react";

const Signature = () => {
  return (
    <div className="inline-block relative font-custom cursor-pointer">
      <h1 className={`text-blue-600 inline-block text-4xl font-bold`}>
        Duy
        <span
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 bg-clip-text text-transparent text-4xl font-bold`}
        >
          Duy
        </span>
      </h1>
    </div>
  );
};

export default Signature;
