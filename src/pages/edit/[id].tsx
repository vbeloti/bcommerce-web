import Create from "../../components/create";
import Header from "../../components/header";
import api from "../../services/api";
import { useData } from "../../contexts/data-context";

export default function Home({product}) {
  const {
    user,
    setUser,
    cart,
    seeCart,
    setSeeCart,
    setCart,
    search,
    setSearch,
  } = useData();
  return (
    <>
      <Header
        cart={cart}
        search={search}
        setSeeCart={setSeeCart}
        seeCart={seeCart}
        setSearch={setSearch}
        setUser={setUser}
        user={user}
      />
      <Create product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await api.get('products');
  const products = await res?.data?.data;

  const paths = products.map((product) => ({
    params: { id: product.id },
  }))

  return { paths, fallback: false }
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '*' } }
//     ],
//     fallback: true
//   };
// }

export async function getStaticProps({ params }) {
  const res = await api.get(`products/${params.id}`);
  const product = await res?.data?.data[0];

  return { props: { product } }
}
