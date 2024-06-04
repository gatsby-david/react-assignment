import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";
import { useState } from "react";
import { Button } from "./Button";

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
    const [isChecked, setIsChecked] = useState<boolean>(isDone);

    return (
        <TodoWrapper>
            <Todo>
                <LeftPart>
                    <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => {
                            onItemDoneToggle(!isChecked);
                            setIsChecked(!isChecked);
                        }}
                    />
                    <Label>{label}</Label>
                </LeftPart>
                <ActionButtons>
                    <Button onClick={() => onItemDelete()} color="error">
                        <TrashIcon />
                    </Button>
                    <Button onClick={() => setIsFormOpen(!isFormOpen)} color="success">
                        <Pencil1Icon />
                    </Button>
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
