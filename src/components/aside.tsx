import { Container, Categories, Category } from "../styles/components/aside";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type AsideProps = {
  setFilterCategory: Dispatch<SetStateAction<string>>;
  filterCategory: string;
};

export default function Aside({
  setFilterCategory,
  filterCategory,
}: AsideProps) {
  return (
    <Container>
      <h2>Categorias</h2>
      <Categories>
        <Category onClick={() => setFilterCategory("")}>
          <img src="/clotes.svg" alt="Icon" />
          <span>Todas</span>
        </Category>
        <Category
          selected={filterCategory === "shirts"}
          onClick={() => setFilterCategory("shirts")}
        >
          <img src="/shirt.svg" alt="Icon" />
          <span>Camisetas</span>
        </Category>
        <Category
          selected={filterCategory === "sneakers"}
          onClick={() => setFilterCategory("sneakers")}
        >
          <img src="/sneakers.svg" alt="Icon" />
          <span>Tênis</span>
        </Category>
        <Category
          selected={filterCategory === "pants"}
          onClick={() => setFilterCategory("pants")}
        >
          <img src="/jeans.svg" alt="Icon" />
          <span>Calças</span>
        </Category>
        <Category
          selected={filterCategory === "blouse"}
          onClick={() => setFilterCategory("blouse")}
        >
          <img src="/hoodie.svg" alt="Icon" />
          <span>Blusas</span>
        </Category>
      </Categories>
    </Container>
  );
}
