export const SectionHeading = (props: { text?: string; size?: number }) => {
  const { text } = props;
  return (
    <div className="inline-block relative">
      <h1 className={`text-blue-600 inline-block text-4xl font-bold`}>
        {text}
        <span
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 bg-clip-text text-transparent text-4xl font-bold`}
        >
          {text}
        </span>
      </h1>
    </div>
  );
};
