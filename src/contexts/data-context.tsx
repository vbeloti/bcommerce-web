import React, { createContext, useState, useContext, useEffect, Dispatch } from "react";

type DataContextProps = {
  user: UserProps;
  setUser: Dispatch<React.SetStateAction<UserProps>>;
  cart: ProductProps[];
  setCart: Dispatch<React.SetStateAction<ProductProps[]>>;
  seeCart: boolean;
  setSeeCart: Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  filterCategory: string;
  setFilterCategory: Dispatch<React.SetStateAction<string>>;
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const DataContext = createContext<DataContextProps>({} as DataContextProps);

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
  quant: number;
  featured: string;
};

const DataProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as UserProps);

  const [cart, setCart] = useState<ProductProps[]>([]);
  const [seeCart, setSeeCart] = useState(false);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("b@Commerce"));

    if (data?.id) {
      setUser(data);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
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
        counter,
        setCounter
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within an DataProvider");
  }

  return context;
}

export { DataProvider, useData };
