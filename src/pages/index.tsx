import Aside from "../components/aside";
import Header from "../components/header";
import Products from "../components/products";
import { Content } from "../styles/home";

export default function Home() {
  return (
    <>
      <Header />
      <Content>
        <Aside />
        <Products />
      </Content>
    </>
  );
}
