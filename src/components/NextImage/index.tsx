import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface INextImage {
  src: string | any;
  objectFit?: any;
  ratio?: number;
}
const NextImage = ({ src, objectFit = "cover", ratio }: INextImage) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(0);
  const listRef: any = useRef();

  function getListSize() {
    const newWidth = listRef?.current?.clientWidth;
    setWidth(newWidth);
    setHeight(newWidth / (ratio ? ratio : 1));
  }

  useEffect(() => {
    getListSize();
    if (ratio) {
      window.addEventListener("resize", getListSize);
    }
  }, []);

  return (
    <div ref={listRef} className="w-full h-full">
      <Image
        src={src}
        width={ratio ? width : "100%"}
        height={ratio ? height : "100%"}
        layout="responsive"
        objectFit={objectFit}
        alt={""}
      />
    </div>
  );
};
export default NextImage;
