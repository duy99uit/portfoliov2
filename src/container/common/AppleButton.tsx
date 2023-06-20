export const AppleButton = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 via-purple-400 to-indigo-900 p-1 rounded-full cursor-pointer hover:border-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white">
      <div className="flex h-full items-center justify-center bg-black p-0.5 rounded-full hover:bg-white">
        <h6 className="text-base font-black text-white py-1.5 px-4 hover:text-black">
          View Github
        </h6>
      </div>
    </div>
  );
};
