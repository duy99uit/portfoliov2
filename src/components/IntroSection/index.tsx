const IntroSection = (props: any) => {
  return (
    <>
      <a
        className="overflow-hidden border border-gray-100 rounded-lg grid grid-cols-1 group sm:grid-cols-3"
        href=""
      >
        <div className="relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/activity-1.jpeg"
            alt=""
          />
        </div>

        <div className="p-8 sm:col-span-2">
          <ul className="flex space-x-1">
            <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
              Notice
            </li>

            <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
              Information
            </li>
          </ul>

          <h5 className="mt-4 font-bold">Lorem ipsum dolor sit amet.</h5>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            adipisci!
          </p>
        </div>
      </a>
      <a
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href=""
      >
        <img
          className="object-cover w-full h-56"
          src="https://www.hyperui.dev/photos/team-1.jpeg"
          alt=""
        />

        <div className="p-6">
          <h5 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
            Find out more
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </a>
    </>
  );
};
export default IntroSection;
