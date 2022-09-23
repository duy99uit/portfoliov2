import Image from "next/image";

const NextImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="cover"
      alt={""}
    />
  );
};
export default NextImage;
