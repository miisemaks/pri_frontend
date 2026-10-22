import Image from "next/image";
import { useCallback, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  images: string[];
};

export const ProductImageListViewer = (props: Props) => {
  const { images } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="flex flex-col items-start md:justify-end justify-start md:flex-row-reverse gap-2 px-0 md:px-8">
      <AspectRatio ratio={1} className="size-full overflow-hidden">
        <Image
          alt="test"
          src={images[activeIndex]}
          width={"512"}
          height={512}
          className="w-full"
        />
      </AspectRatio>
      <div className="flex flex-row md:flex-col gap-2 px-4 md:px-0 w-full md:w-12 h-12 md:h-full">
        {images.map((i, index) => (
          <button
            key={`image_${index}`}
            onClick={() => handleActiveIndex(index)}
            className={`size-12 rounded-[12px] overflow-hidden border ${index === activeIndex ? "border-brand" : "border-border"}`}
          >
            <AspectRatio ratio={1} className="size-12">
              <Image
                src={i}
                width={48}
                height={48}
                alt="image"
                className="mask-center"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  );
};
