import styled from 'styled-components';

export const Content = styled.div`

    display: flex;
    width: 100%;
    max-width: 1100px;
    margin: 1rem auto;
    padding: 0 1rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const ContentAside = styled.div`
        flex: 0.2;

`;