import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  price: number;
  description: string;
  image: string | null;
  href: string;
};

export const ProductItem = (props: Props) => {
  const { title, price, description, image, href } = props;

  return (
    <Link href={href}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <label>{description}</label>
          <p>{price}</p>
        </CardHeader>
      </Card>
    </Link>
  );
};
