import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 1rem auto;
    padding: 0 1rem;
`;

export const ContainerComments = styled.div`
    padding: 0 2rem;

    h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    width: 100%;
    max-width: 1100px;
    margin: 1rem auto;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;

    textarea {
        flex: 0.8;
        min-height: 6rem;
        outline: 0;
        font-size: 1.2rem;
        border: 0;
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        resize: vertical;
        border: 2px solid #eceaeb;
    }

    button {
        margin-left: 1rem;
        flex: 0.2;
        height: 3rem;
        cursor: pointer;
        border: 0;
        outline: none;
        background-color: #f1f1f1;
        color: black;
        font-weight: bold;
        border: 2px solid #eceaeb;
        border-radius: 0.5rem;
    }

    button:disabled {
        background-color: white;
    }
`;

export const Comments = styled.div`
    margin-top: 1rem;
    width: 100%;
`;

export const Comment = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    max-width: 820px;
    border-radius: 1rem;
    border: 2px solid #eceaeb;
    padding: 0.5rem 2rem;

    img {
        max-width: 50px;
    }
`;

export const BImg = styled.div`
    flex: 0.3;
`;

export const BComment = styled.div`
    flex: 0.7;
`;

export const Created = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
`;

export const BDelete = styled.div`
    display: flex;
    align-self: center;

    > button {
        padding: 1rem 2rem;
        cursor: pointer;
        border: 0;
        height: 3rem;
        outline: none;
        background-color: white;
        color: black;
        font-weight: bold;
        border: 2px solid #eceaeb;
        border-radius: 0.5rem;
    }
`;