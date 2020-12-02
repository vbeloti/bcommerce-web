import { useEffect } from "react";
import Aside from "../components/aside";
import AsideCreate from "../components/aside-create";
import Header from "../components/header";
import Products from "../components/products";
import { useData } from "../contexts/data-context";
import { Content, ContentAside } from "../styles/home";


export default function Home() {
  const {
    user,
    setUser,
    cart,
    setCart,
    seeCart,
    setSeeCart,
    search,
    setSearch,
    filterCategory,
    setFilterCategory,
  } = useData();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("b@Commerce"));

    if (data?.id) {
      setUser(data);
    }
  }, []);
  

  return (
    <>
      <Header
        cart={cart}
        search={search}
        setSeeCart={setSeeCart}
        seeCart={seeCart}
        setSearch={setSearch}
        setUser={setUser}
        user={user}
      />
      <Content>
        <ContentAside>
          {user?.type === "user" && <AsideCreate />}

          <Aside
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
          />
        </ContentAside>

        <Products
          setCart={setCart}
          seeCart={seeCart}
          cart={cart}
          filterCategory={filterCategory}
          search={search}
          user={user}
        />
      </Content>
    </>
  );
}
