import styled from 'styled-components';

export const Container = styled.div`
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
        width: 250px;
        height: 250px;
        border-radius: 1rem;
    }

    &:hover {
        opacity: 0.8;
    }
`;

export const Title = styled.h2`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #f1f3f8;
    max-width: 270px;
    padding: 0.1rem 0.4rem;
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