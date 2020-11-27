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

    img {
        max-width: 200px;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Search = styled.div`
    position: relative;
    flex: 0.7;

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
        background-image: url('loupe.svg');
        position: absolute;
        top: 7px;
        left: 0;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }

`;

export const Cart = styled.div`
    display: flex;

    span {
        margin-left: 0.5rem;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Logged = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 40px;
        object-fit: cover;
    }

    p {
        margin-left: 0.5rem;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;

export const Logout = styled.div`
    a {
        text-decoration: none;
        color: #222831;
    }

    @media (max-width: 930px) {
        justify-self: center;
    }
`;