import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    flex-wrap: wrap;

    @media (max-width: 930px) {
        display: grid;
        width: 100%;
        margin: 0 auto;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

export const Logo = styled.div`
    cursor: pointer;

    img {
        max-width: 200px;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Search = styled.div`
    position: relative;
    flex: 0.5;

    input {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        display: flex;
        align-items: center;
        width: 100%;
        border: 0;
        font-size: 1rem;
        color: #222831;
    }

    input::-webkit-search-cancel-button {
        background-color: red !important;
        color: green;
    }

    &::after {
        content: '';
        width: 15px;
        height: 15px;
        background-image: url('/loupe.svg');
        position: absolute;
        top: 7px;
        left: 0;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }

`;

export const Cart = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    img {
        max-width: 20px;
    }

    p {
        margin-left: 0.5rem;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Logged = styled.div`
    display: flex;
    align-items: center;

    > img {
        cursor: pointer;
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

    p {
        margin-left: 0.5rem;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Logout = styled.div`
    display: flex;
    align-items: center;

    img {
        cursor: pointer;
        margin-left: 0.5rem;
        max-width: 20px;
    }

    p {
        margin-left: 2px;
        cursor: pointer;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Login = styled.div`
    a {
        text-decoration: none;
        color: #222831;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;