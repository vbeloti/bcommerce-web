import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 100%;
        max-width: 600px;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem;
        border: 0.5px solid #D0D0D0;
    }

    button {
        display: block;
        color: #FAFAFA;
        border: none;
        padding: 10px 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        transition: background 0.8s;
        font-weight: bold;
        border-radius: 0.2rem;
        background-color: #00bed8;
        cursor: pointer;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    } 
`;

export const Info = styled.div`
    margin-left: 1rem;
    width: 100%;
    max-width: 400px;
`;

export const Title = styled.h1`
`;

export const Description = styled.p`
    margin: 1rem 0;
`;

export const Price = styled.h4`
    margin: 1rem 0;
`;



