import { Container } from "../styles/components/products";
import Product from "./product";
import api from "../services/api";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Carousel from "react-elastic-carousel";

type ProductProps = {
  description: string;
  genre: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  id: string;
  id_user: string;
  featured: string;
  quant: number;
};

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
};

type ProdProps = {
  user: UserProps;
  search: string;
  filterCategory: string;
  seeCart: boolean;
  cart: ProductProps[];
  setCart: Dispatch<ProductProps[]>;
};

export default function Products({
  user,
  search,
  filterCategory,
  seeCart,
  cart,
  setCart,
}: ProdProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterResults = useCallback(
    (product: ProductProps) => {
      if (
        search &&
        !product?.title?.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (filterCategory && product?.type !== filterCategory) return false;

      if (product?.featured === "2") return false;

      return true;
    },
    [search, filterCategory]
  );

  useEffect(() => {
    api
      .get("products")
      .then((res) => {
        if (res.status === 200) {
          setProducts(res?.data?.data);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container seeCart={seeCart}>
      <h2>Destaques</h2>
      {!isLoading && (
        <Carousel>
          {products
            ?.filter((prod) => prod.featured === "2")
            .map((product) => (
              <Product
                cart={cart}
                seeCart={seeCart}
                setCart={setCart}
                key={product?.id}
                user={user}
                product={product}
              />
            ))}
        </Carousel>
      )}

      {products?.filter(filterResults).map((product) => (
        <Product
          cart={cart}
          seeCart={seeCart}
          setCart={setCart}
          key={product?.id}
          user={user}
          product={product}
        />
      ))}
      {!isLoading && products?.filter(filterResults)?.length === 0 && (
        <h2>Sem resultados!!!</h2>
      )}
      {!isLoading && products.length === 0 && <h2>Sem produtos!!!</h2>}
    </Container>
  );
}
