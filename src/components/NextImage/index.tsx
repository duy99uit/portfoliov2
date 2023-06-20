import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

interface INextImage {
  src: string | any;
  objectFit?: any;
  ratio?: number;
}
const NextImage = ({ src, objectFit = "cover", ratio }: INextImage) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState(0);
  const listRef: any = useRef();

  const getListSize = useCallback(() => {
    const newWidth = listRef?.current?.clientWidth;
    setWidth(newWidth);
    setHeight(newWidth / (ratio ? ratio : 1));
  }, [ratio]);

  useEffect(() => {
    getListSize();
    if (ratio) {
      window.addEventListener("resize", getListSize);
    }
  }, [getListSize, ratio]);

  return (
    <div ref={listRef} className="w-full h-full">
      <Image
        src={src}
        width={ratio && width !== undefined ? width : 500}
        height={ratio && height !== undefined ? height : 500}
        layout="responsive"
        objectFit={objectFit}
        alt={""}
      />
    </div>
  );
};
export default NextImage;
