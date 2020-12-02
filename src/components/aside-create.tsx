import { Container, Categories, Category } from "../styles/components/aside";
import Link from "next/link";

export default function AsideCreate() {
  return (
    <Container>
      <Categories>
        <Link href="/create">
          <Category>
            <img src="/add.svg" alt="Icon" />
            <span>Add Produto</span>
          </Category>
        </Link>
      </Categories>
    </Container>
  );
}
