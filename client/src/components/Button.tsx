import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode | string;
    color: "success" | "error";
}

const StyledButton = styled.button`
    all: unset;

    width: 25px;
    height: 25px;
    margin-left: 8px;

    background-color: ${(props) => (props.color === "success" ? props.theme.colors.grass9 : "red")};
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive9};
    border-radius: 50%;
    text-align: center;

    color: #fff;
    cursor: pointer;
`;

export const Button = ({ children, ...props }: ButtonProps) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};
