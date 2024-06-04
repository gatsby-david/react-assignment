import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;

    background-color: ${(props) => props.theme.colors.olive1};
`;
