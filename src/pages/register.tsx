import { Container, BoxLabel } from "../styles/register/register";
import Link from "next/link";
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";

export default function Register() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [name, setName] = useState("");
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
          {error.name && (
            <span id="erro">{error.name}</span>
          )}
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
            <img id="icon" src="upload.svg" alt="Upload Icon" />
          </label>
        </BoxLabel>

        <button disabled={name === '' || email === '' || password === '' || passwordConfirmation === '' || !selectedFile ? true : false} type="submit">Cadastrar</button>
        <Link href="/login">Fazer login</Link>
      </form>
    </Container>
  );
}
