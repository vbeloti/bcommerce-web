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
  description: string;
  genre: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  id: string;
  id_user: string;
  quant: number;
  featured: string;
};

type ProductProps = {
  product: ProdProps;
  user: UserProps;
  cart: ProdProps[];
  setCart: Dispatch<ProdProps[]>;
  seeCart: boolean;
};

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
};

export default function Product({
  product,
  user,
  cart,
  setCart,
  seeCart,
}: ProductProps) {
  let { counter, setCounter } = useData();

  const handleAddCart = (product: ProdProps) => {
    setCounter(counter + 1);

    const objIndex = cart.findIndex((obj) => obj?.id === product?.id);
    console.log(objIndex !== -1 && cart[objIndex]);


    if (cart.length) {
      let verifyProduct = false;

      for (const iterator of cart) {
        if (iterator?.id === product?.id) {
          verifyProduct = true;
        }
      }

      if (!verifyProduct)
        setCart([...cart, Object.assign({}, product, { quant: counter })]);
      // else 
        // if (objIndex !== -1 && cart[objIndex].quant) cart[objIndex].quant = counter;
    } else {
      setCart([...cart, Object.assign({}, product, { quant: 1 })]);
    }
  };

  return (
    <Container cart={false}>
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
        <p>Adicionar</p>
      </Add>
      {user?.type === "user" && Number(user?.id) === Number(product?.id_user) && (
        <Link href={`edit/${product?.id}`}>
          <Edit type="submit">
            <img src="/edit.svg" alt="Logo Editar" />
            <p>Editar</p>
          </Edit>
        </Link>
      )}
    </Container>
  );
}
