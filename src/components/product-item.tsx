import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon } from "./icons/image";

type Props = {
  title: string;
  price: number;
  description: string;
  image: string | null;
  href: string;
};

export const ProductItem = (props: Props) => {
  const { title, price, description, href, image } = props;

  return (
    <Link href={href} className="h-full">
      <Card className="p-0 rounded-[18px] gap-2 h-full">
        <div className="w-full aspect-square">
          {image ? (
            <Image
              src={image}
              alt="Example"
              width={256}
              height={256}
              className="aspect-square"
            />
          ) : (
            <div className="size-full flex items-center bg-gray-100 justify-center">
              <ImageIcon size={32} color="#68736E" />
            </div>
          )}
        </div>
        <CardHeader className="px-2 pb-2 gap-2 flex flex-col rounded-none justify-between">
          <CardTitle className="font-semibold">{title}</CardTitle>
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="font-bold text-[17px]">{formatCurrency(price)}</p>
            <label className="text-text-secondary">{description}</label>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 md:px-2.5 md:py-1.5 bg-bg-brand-400 self-start w-fit rounded-3xl md:rounded-[20px] text-text-brand font-semibold">
            <div className="w-2 md:w-1.5 h-2 md:h-1.5 bg-brand rounded-lg" />
            <p>В наличии</p>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
