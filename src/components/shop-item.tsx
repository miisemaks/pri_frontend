"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { RatingIcon } from "./icons/rating-icon";
import { ImageIcon } from "./icons/image";
import { GeoIcon } from "./icons/geo-icon";
import { HeartIcon } from "./icons/heart-icon";
import Link from "next/link";

type Props = {
  title: string;
  description: string | null;
  rating: number | null;
  distance: number | null;
  address: string;
  image: string | null;
  href: string;
};

export const ShopItem = (props: Props) => {
  const { title, description, rating, distance, address, image, href } = props;

  return (
    <Link href={href} className="block no-underline">
      <Card className="bg-white rounded-[18px] cursor-pointer gap-2 py-0">
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            {image ? (
              <Image src={image} alt="Example" width={500} height={300} />
            ) : (
              <div className="w-full h-full flex items-center bg-gray-100 justify-center">
                <ImageIcon size={40} color="#68736E" />
              </div>
            )}
          </AspectRatio>
          <div
            style={{ position: "absolute", top: 12, left: 12, right: 12 }}
            className="absolute top-0 flex flex-row items-center justify-between "
          >
            {distance ? (
              <div className="bg-[#FFFFFF99] backdrop-blur-xs flex flex-row items-center gap-1 px-2 py-2 rounded-[18px]">
                <GeoIcon size={13} />
                <p className="font-semibold text-[12px]">{distance} км</p>
              </div>
            ) : null}
            <button className="bg-[#FFFFFF99] backdrop-blur-xs w-8.5 h-8.5 flex items-center justify-center rounded-[32px]">
              <HeartIcon />
            </button>
          </div>
        </div>

        <CardHeader className="p-2 px-4 gap-2">
          <div className="flex flex-row justify-between">
            <CardTitle className="font-bold text-[17px]">{title}</CardTitle>
            <div className="flex flex-row gap-1 items-center">
              <RatingIcon />
              <p className="font-semibold text-[12px]">{rating}</p>
            </div>
          </div>
          <CardDescription className="text-[12px] text-text-secondary">
            {description}
          </CardDescription>
          <p className="text-text-secondary text-[12px]">{address}</p>
        </CardHeader>
        <CardContent style={{ paddingBottom: 12 }} className="px-4 gap-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1.5 bg-bg-brand-400 px-2 md:px-1.5 py-2 md:py-1.5 rounded-[12px]">
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#18865F",
                }}
                className="block shrink-0 size-2 bg-text-brand rounded-full"
              />
              <label className="text-text-brand font-semibold text-[11px]">
                Открыто до 21:00
              </label>
            </div>

            <p className="text-text-secondary text-[11px]">Самовывоз</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
