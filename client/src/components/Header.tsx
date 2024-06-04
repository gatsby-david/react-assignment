import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form";
import { ErrorMessage } from "./form/ErrorMessage";
import { Button } from "./Button";

const StyledDiv = styled.header`
    display: flex;
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
            <Button
                onClick={() => {
                    setIsFormOpen(true);
                }}
                color="success"
            >
                <PlusIcon />
            </Button>

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
