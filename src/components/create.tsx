import { Container, BoxLabel } from "../styles/create";
import Link from "next/link";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  MouseEvent
} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import Router from "next/router";

type ProductProps = {
  product?: {
    id: string;
    description: string;
    genre: string;
    photo: string;
    price: string;
    title: string;
    type: string;
    featured: string;
  };
};

export default function Create({ product }: ProductProps) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState('f');
  const [type, setType] = useState('shirts');
  const [featured, setFeatured] = useState('1');

  useEffect(() => {
    setTitle(product?.title || "");
    setPrice(product?.price || "");
    setDescription(product?.description || "");
    setGenre(product?.genre || "");
    setType(product?.type || "");
    setFeatured(product?.featured || "");
    setPreview(
      product?.photo &&
        `${process.env.NEXT_PUBLIC_URL_IMG}/${product?.photo}`
    );
  }, [product]);

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

  const handleDelete = (event: MouseEvent) => {
    event.preventDefault();
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("b@Commerce"))?.token,
      },
    };


    api.delete(`products/${product.id}`, config).then((res) => {
      if (res.status === 200) {
        toast.success("Apagado com sucesso");
        Router.push("/");
      }
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("photo", selectedFile);
    formData.append("genre", genre);
    formData.append("type", type);
    formData.append("featured", featured);

    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("b@Commerce"))?.token,
      },
    };

    if (!product) {
      api
        .post("products", formData, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Cadastro Realizado");
            Router.push("/");
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
    } else {
      api
        .put(`products/${product?.id}`, formData, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Atualizado Com sucesso");
            Router.push("/");
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
    }
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
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

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
            <img id="icon" src="/upload.svg" alt="Upload Icon" />
          </label>
        </BoxLabel>

        <label htmlFor="genre">Gênero:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          id="genre"
        >
          <option value=""></option>
          <option value="f">Feminino</option>
          <option value="m">Masculino</option>
        </select>

        <label htmlFor="featured">Em Destaque:</label>
        <select
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
          id="featured"
        >
          <option value=""></option>
          <option value="1">Não</option>
          <option value="2">Sim</option>
        </select>

        <label htmlFor="type">Tipo:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="type"
        >
          <option value=""></option>
          <option value="shirts">Camisetas</option>
          <option value="sneakers">Tênis</option>
          <option value="pants">Calças</option>
          <option value="blouse">Blusas</option>
        </select>

        {product && (
          <button onClick={handleDelete} type="submit">Apagar Produto</button>
        )}

        <button disabled={
          !product && !selectedFile ||
          !product && preview === '' ||
          !product && title === '' ||
          !product && description === '' ||
          !product && price === '' ||
          !product && genre === '' ||
          !product && type === '' ||
          !product && featured === ''
          ? true 
          :
          false
        } type="submit">
          {!product ? "Cadastrar Produto" : "Atualizar Produto"}
        </button>
      </form>
    </Container>
  );
}
