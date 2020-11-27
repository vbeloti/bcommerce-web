import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        width: 100%;
        max-width: 200px;
        cursor: pointer;
    }

    form {
        margin-top: 1rem;
        border-radius: 1rem;
        padding: 2rem;
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        border: 1px solid #eeeeee;

        > a {
            text-decoration: none;
            color: #393e46;
            margin-top: 0.5rem;
            text-align: right;
            font-weight: bold;
            font-size: 0.9rem;
        }

        div {
            position: relative;
            display: flex;
            flex-direction: column;
        }

        #erro {
            position: absolute;
            top: 32px;
            background-color: white;
            border-radius: 0.2rem;
            padding: 0.1rem 2rem;
            color: #d35d6e;
            border: 1px solid #eee;
            right: 10px;
        }
    }

    input {
        padding-left: 1rem;
    }


    label {
        margin-bottom: 0.4rem;
    }

    input, button {
        height: 2.2rem;
        border: 0;
        border: 1px solid #eeeeee;
        border-radius: 0.5rem;
        transition: border 300ms;
    }

    input:hover, button:hover {
        border: 2px solid #95ecf3;
    }

    button {
        cursor: pointer;
        font-weight: bold;
        color: white;
        background-color: #393e46;
    }

    button:disabled {
        background: white;
        color: #222831;
    }

    label + input {
        margin-bottom: 1rem;
    }
`;