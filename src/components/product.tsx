import { Container, Title, Price } from "../styles/components/product";
import Link from "next/link";

export default function Product() {
  return (
    <Container>
      <img
        src="https://authenticfeet.vteximg.com.br/arquivos/ids/228716-600-600/Tenis-Nike-Air-Max-27-React-Masculino-Multicolor.jpg"
        alt="Produto"
      />
      <Title>Tenis Top das Galaxia</Title>
      <Price>R$ 421.21</Price>
    </Container>
  );
}
