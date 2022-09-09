const MyInput = (props: any) => {
  const { title = "" } = props;
  return (
    <>
      {title && (
        <label
          htmlFor="name"
          className="text-gray-700 text-sm  leading-tight tracking-normal"
        >
          {title}
        </label>
      )}

      <input
        id="name"
        className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        placeholder="James"
        {...props}
      />
    </>
  );
};
export default MyInput;
