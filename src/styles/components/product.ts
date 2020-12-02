import styled, { css } from 'styled-components';

type ContainerProps = {
    cart: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    margin: 1rem 0;
    border: 0.5px solid #D0D0D0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0.2rem;
    border-radius: 1rem;
    transition: opacity 200ms;
    cursor: pointer;
    
    img {
        object-fit: cover;
        width: 100%;
        max-width: 400px;
        height: 250px;
        border-radius: 1rem;
    }

    &:hover {
        opacity: 0.8;
    }

    ${props => props.cart && css`
    img {
        max-width: 100%;
        width: 100%;
    }
  `}
`;

export const More = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;
`;

export const Add = styled.button`
    border: 0;
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
    top: 5px;

    img {
        max-width: 20px;
        height: 20px;
    }

    p {
        margin-left: 0.2rem;
        font-size: 0.6rem;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const Edit = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;
    border: 0;
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    position: absolute;
    cursor: pointer;

    > img {
        max-width: 20px;
        height: 20px;
        border-radius: 0;
    }

    p {
        margin-left: 0.2rem;
        font-size: 0.6rem;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const Title = styled.h2`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #f1f3f8;
    max-width: 400px;
    padding: 0.1rem 1rem;
    font-size: 1.1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    text-align: center;
`;

export const Price = styled.h4`
    position: absolute;
    top: 20px;
    left: 0;
    padding: 0.2rem 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: #dde7f2;
    color: #1b262c;
`;