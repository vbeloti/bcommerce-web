import {
  Container,
  Logo,
  Search,
  Cart,
  Logged,
  Logout,
  Login,
} from "../styles/components/header";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
};

type ProductProps = {
  description: string;
  genre: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  id: string;
  id_user: string;
};

type HeaderProps = {
  setUser: Dispatch<SetStateAction<UserProps>>;
  user: UserProps;
  setSearch?: Dispatch<SetStateAction<string>>;
  setSeeCart?: Dispatch<SetStateAction<boolean>>;
  search?: string;
  seeCart?: boolean;
  cart?: ProductProps[];
};

export default function Header({
  setUser,
  user,
  setSearch,
  search,
  setSeeCart,
  seeCart,
  cart,
}: HeaderProps) {
  const router = useRouter();

  // const [user, setUser] = useState({} as UserProps);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("b@Commerce"));

  //   if (data?.id) {
  //     setUser(data);
  //   }
  // }, []);
  return (
    <Container>
      <Logo>
        <Link href="/">
          <img src="/logo.png" alt="Logo BCommerce" />
        </Link>
      </Logo>
      <Search>
        <form>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Busque por produtos..."
          />
        </form>
      </Search>


      <Cart>
        {/* <button onClick={() => setSeeCart(!seeCart)} type="submit"><img src="/cart.svg" alt="Logo Carrinho" />: 2</button> */}
        <Link href="/cart">
          <img
            onClick={() => setSeeCart(!seeCart)}
            src="/cart.svg"
            alt="Logo Carrinho"
          />
        </Link>
        <p>{cart?.length || 0}</p>
      </Cart>

      {user?.id ? (
        <Logged>
          <Link href="/user">
            <img
              src={`${process.env.NEXT_PUBLIC_URL_IMG}/${user?.avatar}`}
              alt="Avatar Logo"
            />
          </Link>
          <p>
            Olá, <span>{user?.name}</span>
          </p>

          <Logout>
            <img
              onClick={() => {
                localStorage.clear();
                setUser({} as UserProps);
                router.push("/");
              }}
              src="/logout.svg"
              alt="Logo Logout"
            />
            <p
              onClick={() => {
                localStorage.clear();
                setUser({} as UserProps);
                router.push("/");
              }}
            >
              Sair
            </p>
          </Logout>
          {/* <button
            onClick={() => {
              localStorage.clear();
              setUser({} as UserProps);
              router.push("/");
            }}
          >
            Logout
          </button> */}
        </Logged>
      ) : (
        <Login>
          <Link href="/login">Login</Link>
        </Login>
      )}
    </Container>
  );
}
