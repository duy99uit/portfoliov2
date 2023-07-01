import { MouseEventHandler } from "react";

export const AppleButton = (props: {
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { text = "", onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-r from-cyan-200 via-purple-400 to-indigo-900 p-1 rounded-full cursor-pointer hover:border-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white"
    >
      <div className="flex h-full items-center justify-center bg-black p-0.5 rounded-full hover:bg-white">
        <h6 className="text-base font-black text-white py-1.5 px-4 hover:text-black">
          {text}
        </h6>
      </div>
    </div>
  );
};

export const LinkedinButton = (props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { text = "", onClick = () => {} } = props;
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r border-2 border-blue-400 from-blue-400 to-blue-500 text-white p-1 rounded-full cursor-pointer"
    >
      <h6 className="text-base font-black text-white py-1.5 px-4 hover:text-gray-300">
        {text}
      </h6>
    </button>
  );
};
