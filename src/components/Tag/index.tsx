import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
  position?: "left" | "right";
}) => {
  const { tagName, tagType = "web", position = "left" } = props;
  if (tagType === "mobile")
    return (
      <div
        className={
          position === "left"
            ? "text-sm rounded-br bg-gradient-to-r from-gray-500 to-gray-900 px-4 py-2 text-white items-center flex flex-row"
            : "text-sm rounded-bl bg-gradient-to-r from-gray-500 to-gray-900 px-4 py-2 text-white items-center flex flex-row"
        }
      >
        <FontAwesomeIcon icon={faAndroid} color="#22c55e" size="lg" />
        <div className="w-2"></div>
        <FontAwesomeIcon icon={faApple} color="#e5e7eb" size="lg" />
      </div>
    );
  return (
    <div
      className={
        position === "left"
          ? "text-sm rounded-br bg-gradient-to-r from-purple-200 to-purple-500  px-4 py-2 text-white"
          : "text-sm rounded-bl bg-gradient-to-r from-purple-200 to-purple-500  px-4 py-2 text-white"
      }
    >
      <FontAwesomeIcon icon={faGlobe} color="white" size="lg" />
    </div>
  );
};

export default Tag;
