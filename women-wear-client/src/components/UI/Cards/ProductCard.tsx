import { Products } from "@/types";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div>
      <Card
        shadow="md"
        className="transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <Image
          alt={product.title}
          src={product.image}
          width={500}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </Card>
      <div>
        <h1 className="font-bold text-lg mt-4">{product.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-default-500">{product.price}</p>
          <Button size="sm" className="bg-gradient-to-tr from-amber-700 to-yellow-500 text-white shadow-lg">
            <Link href={`/women-wear/${product._id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
