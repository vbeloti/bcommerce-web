import { Container } from "../styles/login/login";
import Link from "next/link";
import { FormEvent, useState } from "react";
import api from "../services/api";
import { toast } from 'react-toastify';
import Router from 'next/router';
import { useData } from "../contexts/data-context";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "") {
      setError({ ...error, email: "O Email não pode ser vazio" });
    }

    api.post("login", { email, password }).then(res => {
      if(res.status === 200) {
        toast.success('Login Efetuado');
        localStorage.setItem("b@Commerce", JSON.stringify(res.data));
        Router.push('/');
      }
    }).
    catch(error => toast.error(error?.response?.data?.message));
  };

  return (
    <Container>
      <Link href="/">
        <img src="logo.png" alt="BCommerce" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
          />
          {error.email && <span id="erro">{error.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
          {error.password && <span id="erro">{error.password}</span>}
        </div>

        <button
          disabled={email === "" || password === "" ? true : false}
          type="submit"
        >
          Login
        </button>
        <Link href="/register">Criar conta</Link>
      </form>
    </Container>
  );
}
