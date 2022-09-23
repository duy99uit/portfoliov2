import Image from "next/image";

const NextImage = ({
  src,
  objectFit = "cover",
}: {
  src: string | any;
  objectFit?: any;
}) => {
  return (
    <Image
      src={src}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit={objectFit}
      alt={""}
    />
  );
};
export default NextImage;
