import Aside from "../components/aside";
import Header from "../components/header";
import ProductInfo from "../components/product_info";
import { Content } from "../styles/home";

export default function Home() {
  return (
    <>
      <Header />
      <Content>
        <Aside />
        <ProductInfo />
      </Content>
    </>
  );
}
