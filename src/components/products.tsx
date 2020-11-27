import {
  Container,
} from "../styles/components/products";
import Link from "next/link";
import Product from "./product";

export default function Products({ logged = true }) {
  return (
    <Container>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Container>
  );
}
