export const AppleText = (props: { text?: string; size?: number }) => {
  const { text } = props;
  return (
    <div className="inline-block relative">
      <h1 className={`text-indigo-900 inline-block text-5xl font-bold`}>
        {text}
        <span
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-200 via-purple-600 to-indigo-900 bg-clip-text text-transparent text-5xl font-bold`}
        >
          {text}
        </span>
      </h1>
    </div>
  );
};
