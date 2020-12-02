import styled, { css } from 'styled-components';

type ContainerProps = {
    seeCart: boolean;
}

export const Container = styled.div<ContainerProps>`
    flex: 0.8;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${props => props.seeCart && css`
        flex: 1
  `}
`;

