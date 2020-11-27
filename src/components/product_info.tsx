import { Container, Info, Title,
  Description,
  Price } from "../styles/components/product_info";
import Link from "next/link";

export default function ProductInfo() {
  return (
    <Container>
      <img
        src="https://authenticfeet.vteximg.com.br/arquivos/ids/228716-600-600/Tenis-Nike-Air-Max-27-React-Masculino-Multicolor.jpg"
        alt="Produto"
      />

      <Info>
        <Title>Tenis Top das Galaxia</Title>
        <Description>Descrição muito boa do tenis</Description>
        <Price>R$ 421.21</Price>
        <button type="submit">Adicionar ao Carrinho</button>
      </Info>
    </Container>
  );
}
