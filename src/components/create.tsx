import { Container, BoxLabel } from "../styles/create";
import Link from "next/link";
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";

export default function Create() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
          />
        </div>

        <label htmlFor="email">Descrição:</label>
        <textarea id="description" value={description}
          onChange={(e) => setDescription(e.target.value)} />

        <label htmlFor="price">Preço:</label>
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          id="price"
        />

        <BoxLabel>
          <label htmlFor="photo">
            Foto do Produto:
            <input
              type="file"
              id="photo"
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

        <label htmlFor="genre">Gênero:</label>
        <select id="genre">
          <option value="f">Feminino</option>
          <option value="m">Masculino</option>
        </select>

        <label htmlFor="type">Tipo:</label>
        <select id="type">
          <option value="shirts">Camisetas</option>
          <option value="sneakers">Tênis</option>
          <option value="pants">Calças</option>
          <option value="blouse">Blusas</option>
        </select>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </Container>
  );
}
