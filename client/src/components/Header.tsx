import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { ErrorMessage } from "./form/ErrorMessage";
import { Button } from "./Button";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`;

const FirstHeaderLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    h1 {
        font-weight: bold;
        font-size: 20px;
    }
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
        <StyledHeader>
            <FirstHeaderLine>
                <h1>{children}</h1>
                <Button
                    onClick={() => {
                        setIsFormOpen(true);
                    }}
                    color="success"
                >
                    <PlusIcon />
                </Button>
            </FirstHeaderLine>
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
        </StyledHeader>
    );
};
