import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { ErrorMessage } from "./ErrorMessage";

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);
    const [error, setError] = useState<boolean>(false);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                if (inputValue !== "") {
                    setError(false);
                    onSubmit(inputValue);
                } else setError(true);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <div>
                <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
                <button type={"submit"}>
                    <CheckIcon />
                </button>
                <button type={"reset"}>
                    <Cross1Icon />
                </button>
            </div>
            {error && <ErrorMessage>Please fill the input first.</ErrorMessage>}
        </FormStyled>
    );
};
