import {
  Container,
  Info,
  Title,
  Description,
  Price,
} from "../styles/components/product_info";
import { Dispatch } from "react";
import { useData } from "../contexts/data-context";

type ProductProps = {
  description: string;
  genre: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  id: string;
  id_user: string;
};

type ProductInfoProps = {
  product: ProductProps;
  cart: ProductProps[];
  setCart: Dispatch<React.SetStateAction<ProductProps[]>>;
  seeCart: boolean;
}

export default function ProductInfo({ product, cart, setCart, seeCart }: ProductInfoProps) {
  let { counter, setCounter } = useData();

  
  const handleAddCart = (productCart: ProductProps) => {
    setCounter(counter + 1);

      if (cart.length) {
        let verifyProduct = false;

        for (const iterator of cart) {
          if (iterator?.id === productCart?.id) {
            verifyProduct = true;
          }
        }

        if (!verifyProduct)
          setCart([...cart, Object.assign({}, productCart, { quant: counter })]);
      } else {
        setCart([...cart, Object.assign({}, productCart, { quant: 1 })]);
      }
  };


  return (
    <Container>
      <img
        src={`${process.env.NEXT_PUBLIC_URL_IMG}/${product?.photo}`}
        alt={product?.title}
      />

      <Info>
        <Title>{product?.title}</Title>
        <Description>{product?.description}</Description>
        <Price>R$ {product?.price}</Price>
        <button onClick={() => handleAddCart(product)} type="submit">Adicionar ao Carrinho</button>
      </Info>
    </Container>
  );
}
