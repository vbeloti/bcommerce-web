import { FormEvent, MouseEvent, useEffect, useState } from "react";
import Header from "../../components/header";
import ProductInfo from "../../components/product_info";
import { useData } from "../../contexts/data-context";
import api from "../../services/api";
import { useRouter } from "next/router";

import {
  Container,
  ContainerComments,
  Form,
  Comments,
  Comment,
  BImg,
  BComment,
  Created,
  BDelete,
} from "../../styles/products";
import { toast } from "react-toastify";

type CommentsProps = {
  id: string;
  comment: string;
  user_id: string;
  product_id: string;
  created: string;
  avatar: string;
  name: string;
};

export default function Product({ product }) {
  const {
    user,
    setUser,
    cart,
    seeCart,
    setSeeCart,
    setCart,
    search,
    setSearch,
  } = useData();

  const router = useRouter();

  const [commentText, setCommentText] = useState("");
  const [commentsData, setCommentData] = useState<CommentsProps[]>([]);
  const [sendData, setSendData] = useState(false);

  useEffect(() => {
    setSendData(false);
    api
      .get(`comments/${router.query?.id}`)
      .then((res) => setCommentData(res.data?.data))
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  }, [sendData]);

  const handleDelete = (id: string) => {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("b@Commerce"))?.token,
      },
    };

    api
      .delete(`comments/${id}`, config)
      .then((res) => {
        if (res.status === 200) {
          setCommentData(
            commentsData.filter((commentFilter) => commentFilter?.id !== id)
          );
          toast.success("Apagado com sucesso");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("b@Commerce"))?.token,
      },
    };

    if (commentText) {
      api
        .post(
          "comments",
          { comment: commentText, product_id: router.query?.id },
          config?.headers?.authorization && config 
        )
        .then((res) => {
          if (res.status === 200) {
            setCommentText("");
            setSendData(true);
            toast.success("Comentário Cadastrado!!!");
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
    }
  };

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
      <Container>
        <ProductInfo
          seeCart={seeCart}
          setCart={setCart}
          cart={cart}
          product={product}
        />
      </Container>
      <ContainerComments>
        <h2>Comentários</h2>
        <Form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Comentário"
          />
          <button disabled={commentText === "" ? true : false} type="submit">
            Enviar
          </button>
        </Form>

        <Comments>
          {commentsData?.map((comment) => (
            <Comment key={comment?.id}>
              <BImg>
                <img
                  src={
                    comment?.avatar
                      ? `${process.env.NEXT_PUBLIC_URL_IMG}/${comment?.avatar}`
                      : "https://i.imgur.com/I80W1Q0.png"
                  }
                  alt="Logo Usuário"
                />
                <p>{comment?.name || "Anônimo"}</p>
              </BImg>
              <BComment>
                <Created>Criado em {comment?.created}</Created>
                <p key={comment?.id}>{comment?.comment}</p>
              </BComment>
              {Number(user?.id) === Number(comment?.user_id) && (
                <BDelete>
                  <button
                    onClick={() => handleDelete(comment?.id)}
                    type="submit"
                  >
                    Deletar
                  </button>
                </BDelete>
              )}
            </Comment>
          ))}
        </Comments>
      </ContainerComments>
    </>
  );
}

export async function getStaticPaths() {
  const res = await api.get("products");
  const products = await res.data.data;
  const paths = products.map((product) => `/products/${product.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await api.get(`products/${params.id}`);
  const product = await res?.data?.data[0];

  return {
    props: {
      product,
    },
  };
}
// export async function getStaticProps({ params }) {
//   const res = await api.get(`products/${params.id}`);
//   const product = await res?.data?.data[0];

//   let comments = [];

//   try {
//     const resC = await api.get(`comments/${params.id}`);
//     comments = await resC.data.data;
//   } catch {}

//   return {
//     props: {
//       product,
//       comments,
//     },
//   };
// }
