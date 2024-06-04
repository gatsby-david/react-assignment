import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { ErrorMessage } from "./form/ErrorMessage";

const StyledDiv = styled.header`
    display: flex;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;
        text-align: center;

        color: #fff;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
    isAPIerror: boolean;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd, isAPIerror } = props;
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            <button
                onClick={() => {
                    setIsFormOpen(true);
                }}
            >
                <PlusIcon />
            </button>
            <FormWrapper>
                {isFormOpen && (
                    <Form
                        onCancel={() => setIsFormOpen(false)}
                        onSubmit={(value) => onItemAdd(value)}
                        initialValue="New todo"
                    />
                )}
                {isAPIerror && <ErrorMessage>Error occured, please try again.</ErrorMessage>}
            </FormWrapper>
        </StyledDiv>
    );
};
