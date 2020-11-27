import styled from 'styled-components';

export const Container = styled.aside`
    flex: 0.2;

    h2 {
        color: #222831;
        font-size: 1.3rem;
        position: relative;
    }

    h2::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        background-color: #00bed8;
        top: 0;
        left: -5px;
    }

    h2:hover::after {
        background-color: #f6f6f6;
    }

    @media (max-width: 750px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        h2::after {
        position: relative;
        }
    }
`;

export const Categories = styled.div`
    padding: 0.2rem 0;
`;

export const Category = styled.div`
    display: flex;
    padding: 0.2rem 0;
    align-items: center;
    margin: 1rem 0;
    cursor: pointer;

    &:hover {
        background-color: #f6f6f6;
        border-radius: 0.5rem;
        color: #00bed8;
    }

    img {
        max-width: 30px;
    }

    span {
        margin-left: 0.5rem;
    }

    @media (max-width: 750px) {
        justify-content: center;
    }
`;