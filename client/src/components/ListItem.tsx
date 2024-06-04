import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const Todo = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    justify-content: space-between;
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

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <Todo>
            <LeftPart>
                <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
                <Label>{label}</Label>
            </LeftPart>
            <ActionButtons>
                <button>
                    <TrashIcon />
                </button>
                <button onClick={() => onItemDelete()}>
                    <Pencil1Icon />
                </button>
            </ActionButtons>
        </Todo>
    );
};
