import { useEffect, useState } from "react";
import Create from "../components/create";
import Header from "../components/header";
import { useRouter } from "next/router";

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
};

export default function Home() {
  const [user, setUser] = useState({} as UserProps);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("b@Commerce"));

    if (data?.type === 'client') router.push("/");

    if (data?.id) {
      setUser(data);
    } else {
      router.push("/");
    }
    
  }, []);

  return (
    <>
      <Header setUser={setUser} user={user} />
      {user?.type === 'user' && <Create />}
    </>
  );
}
