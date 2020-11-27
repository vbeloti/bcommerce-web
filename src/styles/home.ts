import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    margin: 1rem auto;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;