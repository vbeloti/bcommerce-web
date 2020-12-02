import { Container } from "../styles/cart";
import Product from "../components/product";
import {
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { useData } from "../contexts/data-context";
import Header from "../components/header";
import ProductCart from "../components/product_cart";

type ProductProps = {
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

export default function Cart() {
  const {
    user,
    search,
    filterCategory,
    seeCart,
    cart,
    setCart,
    setSeeCart,
    setSearch,
    setUser,
  } = useData();

  const filterResults = useCallback(
    (product: ProductProps) => {
      if (
        search &&
        !product?.title?.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (filterCategory && product?.type !== filterCategory) return false;
      return true;
    },
    [search, filterCategory]
  );

  return (
    <Container>
      <Header
        cart={cart}
        search={search}
        setSeeCart={setSeeCart}
        seeCart={seeCart}
        setSearch={setSearch}
        setUser={setUser}
        user={user}
      />
      {cart?.filter(filterResults).map((product) => (
        <ProductCart
          quant={product?.quant}
          cart={cart}
          seeCart={seeCart}
          setCart={setCart}
          key={product?.id}
          user={user}
          product={product}
        />
      ))}
    </Container>
  );
}
