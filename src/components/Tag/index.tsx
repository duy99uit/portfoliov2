import React from "react";

function Tag(props: any) {
  const { tagName } = props;
  return (
    <div className="text-sm rounded bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-6000 px-4 py-1 text-white hover:scale-110 transition ease-in-out">
      {tagName}
    </div>
  );
}
export const ProjectTag = (props: {
  tagName: string;
  tagType?: "mobile" | "web";
}) => {
  const { tagName, tagType = "mobile" } = props;
  if (tagType === "web") return <div></div>;
  return <div></div>;
};

export default Tag;
