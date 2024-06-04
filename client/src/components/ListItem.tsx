import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { useState } from "react";

const Todo = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    justify-content: space-between;
`;

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LeftPart = styled.div`
    display: flex;
    align-items: center;
`;

const ActionButtons = styled.div`
    display: flex;
    align-items: center;

    button {
        margin-left: 8px;
    }
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: ListItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    return (
        <TodoWrapper>
            <Todo>
                <LeftPart>
                    <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
                    <Label>{label}</Label>
                </LeftPart>
                <ActionButtons>
                    <button onClick={() => onItemDelete()}>
                        <TrashIcon />
                    </button>
                    <button onClick={() => setIsFormOpen(!isFormOpen)}>
                        <Pencil1Icon />
                    </button>
                </ActionButtons>
            </Todo>
            {isFormOpen && (
                <Form
                    onCancel={() => setIsFormOpen(false)}
                    onSubmit={(value) => {
                        onItemLabelEdit(value);
                        setIsFormOpen(false);
                    }}
                    initialValue={label}
                />
            )}
        </TodoWrapper>
    );
};
