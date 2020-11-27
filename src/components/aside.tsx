import { Container, Categories, Category } from "../styles/components/aside";
import Link from "next/link";

export default function Aside() {
  return (
    <Container>
      <h2>Categorias</h2>
      <Categories>
        <Category>
            <img src="shirt.svg" alt="Icon" />
            <span>Camisetas</span>
        </Category>
        <Category>
            <img src="sneakers.svg" alt="Icon" />
            <span>Tênis</span>
        </Category>
        <Category>
            <img src="jeans.svg" alt="Icon" />
            <span>Calças</span>
        </Category>
        <Category>
            <img src="hoodie.svg" alt="Icon" />
            <span>Blusas</span>
        </Category>
      </Categories>
    </Container>
  );
}
