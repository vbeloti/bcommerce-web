import {
  Container,
  Logo,
  Search,
  Cart,
  Logged,
  Logout,
} from "../styles/components/header";
import Link from "next/link";

export default function Header({ logged = true }) {
  return (
    <Container>
      <Logo>
        <img src="logo.png" alt="Logo BCommerce" />
      </Logo>
      <Search>
        <form>
          <input type="search" placeholder="Busque por produtos..." />
        </form>
      </Search>

      <Cart>
        <p>Carrinho:</p>
        <span>2</span>
      </Cart>

      {logged ? (
        <Logged>
          <img src="https://i.imgur.com/I80W1Q0.png" alt="Avatar Logo" />
          <p>
            Olá, <span>Vinicius Beloti</span>
          </p>
        </Logged>
      ) : (
        <Logout>
          <Link href="/login">Login</Link>
        </Logout>
      )}
    </Container>
  );
}
