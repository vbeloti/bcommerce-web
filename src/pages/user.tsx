import { Container, BoxLabel } from "../styles/register/register";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import Router from "next/router";

type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: string;
  token: string;
};

export default function Register() {
  const [user, setUser] = useState({} as UserProps);

  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({
    name: "",
    password: "",
    passwordConfirmation: "",
    preview: "",
    email: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("b@Commerce"));

    if (data?.id) {
      setUser(data);
      setName(data?.name);
      setType(data?.type);
      setEmail(data?.email);
      setPreview(
        data?.avatar && `${process.env.NEXT_PUBLIC_URL_IMG}/${data?.avatar}`
      );
    }
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    setError({ ...error, passwordConfirmation: "" });
    if (passwordConfirmation.length > 1) {
      if (password !== passwordConfirmation) {
        setError({ ...error, passwordConfirmation: "Senhas Não Conferem" });
      }
    }
  }, [password, passwordConfirmation]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "") {
      setError({ ...error, name: "O Nome não pode ser vazio" });
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("photo", selectedFile);
    formData.append("type", type);

    if (!user?.id) {
      api
        .post("users", formData)
        .then((res) => {
          if (res.status === 201) {
            toast.success("Cadastro Realizado");
            Router.push("/login");
          }
        })
        .catch((error) => toast.error(error?.response?.data?.message));
    } else {
      const data = JSON.parse(localStorage.getItem("b@Commerce"));

      localStorage.setItem(
        "b@Commerce",
        JSON.stringify(
          Object.assign({}, data, {
            name,
            email,
            avatar: preview.replace(`${process.env.NEXT_PUBLIC_URL_IMG}/`, ""),
            type,
          })
        )
      );

      const config = {
        headers: {
          authorization: user?.token,
        },
      };

      api
        .put(`users/${user?.id}`, formData, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Atualizado com Sucesso");
            Router.push("/");
          }
        })
        .catch((error) => toast.error(error?.response?.data?.message));
    }
  };

  return (
    <Container>
      <Link href="/">
        <img src="logo.png" alt="BCommerce" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
          {error.name && <span id="erro">{error.name}</span>}
        </div>

        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />

        <label htmlFor="password">Senha:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />

        <div>
          <label htmlFor="passwordConfirmation">Confirmação de Senha:</label>
          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            id="passwordConfirmation"
          />
          {error.passwordConfirmation && (
            <span id="erro">{error.passwordConfirmation}</span>
          )}
        </div>

        {!user && (
          <>
            <label htmlFor="type">Tipo:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="client">Cliente</option>
              <option value="user">Criador de Conteúdo</option>
            </select>
          </>
        )}

        {!user && (
          <BoxLabel>
            <label htmlFor="avatar">
              Avatar:
              <input
                type="file"
                id="avatar"
                onChange={handleSelectFile}
                placeholder="Insira sua imagem"
              />
              {preview && (
                <div>
                  <img id="photo" src={preview} alt="Upload Icon" />
                </div>
              )}
              <img id="icon" src="/upload.svg" alt="Upload Icon" />
            </label>
          </BoxLabel>
        )}

        <button
          disabled={
            (!user?.id && name === "") ||
            (!user?.id && email === "") ||
            (!user?.id && password === "") ||
            (!user?.id && passwordConfirmation === "") ||
            (!user?.id && !selectedFile)
              ? true
              : false
          }
          type="submit"
        >
          {!user?.id ? "Cadastrar" : "Atualizar"}
        </button>
        {!user?.id && <Link href="/login">Fazer login</Link>}
      </form>
    </Container>
  );
}
