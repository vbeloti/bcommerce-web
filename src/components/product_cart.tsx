import {
  Container,
  Title,
  Price,
  Edit,
  Add,
} from "../styles/components/product";
import Link from "next/link";
import { Dispatch, useEffect, useState } from "react";
import { useData } from "../contexts/data-context";
import { useRouter } from "next/router";

type ProdProps = {
  quant: number;
  description: string;
  genre: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  id: string;
  id_user: string;
};

type ProductProps = {
  product: ProdProps;
  user: UserProps;
  cart: ProdProps[];
  setCart: Dispatch<ProdProps[]>;
  seeCart: boolean;
  quant: number;
};

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
};

export default function ProductCart({
  product,
  quant,
  cart,
  setCart,
  seeCart,
}: ProductProps) {
  let { counter } = useData();
  const router = useRouter();

  const handleAddCart = (product: ProdProps) => {
    setCart(cart?.filter((productFilter) => productFilter.id !== product.id));
  };

  return (
    <Container cart={true}>
      <Link href={`products/${product?.id}`}>
        <img
          src={`${process.env.NEXT_PUBLIC_URL_IMG}/${product?.photo}`}
          alt={product?.title}
        />
      </Link>
      <Title>{product?.title}</Title>
      <Price>R${product?.price}</Price>
      <Add onClick={() => handleAddCart(product)}>
        <img src="/cart.svg" alt="Logo Carrinho" />
        <p>Remover</p>
      </Add>
      {/* {<h5>Quantidade: { quant || 1}</h5>} */}
    </Container>
  );
}
