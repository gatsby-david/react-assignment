import { useMutation } from "@tanstack/react-query";
import { List } from "./List";
import { ListItem } from "./ListItem";
import axios from "axios";
import { useTodos } from "../hooks/react-query/use-todos";

export type Todo = {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
};

export const Todos = () => {
    const { isPending, error, data, refetch } = useTodos();

    const editMutation = useMutation({
        mutationFn: ({ label, id }: { label: string; id: number }) => {
            return axios.patch(`http://localhost:3000/items/${id}`, { label });
        },
        onSuccess: () => {
            refetch();
        },
    });

    const toggleMutation = useMutation({
        mutationFn: ({ isDone, id }: { isDone: boolean; id: number }) => {
            return axios.patch(`http://localhost:3000/items/${id}`, { isDone });
        },
        onSuccess: () => {
            refetch();
        },
    });

    const deleteMutation = useMutation({
        mutationFn: ({ id }: { id: number }) => {
            return axios.delete(`http://localhost:3000/items/${id}`);
        },
        onSuccess: () => {
            refetch();
        },
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <List>
            {data
                .sort((a: Todo, b: Todo) => {
                    return Number(a.isDone) - Number(b.isDone) || a.createdAt < b.createdAt;
                })
                .map((todo: Todo) => {
                    const editItem = (label: string) => {
                        editMutation.mutate({ label, id: todo.id });
                    };
                    const doneToggle = (isDone: boolean) => {
                        toggleMutation.mutate({ isDone, id: todo.id });
                    };
                    const deleteItem = () => {
                        deleteMutation.mutate({ id: todo.id });
                    };
                    return (
                        <ListItem
                            label={todo.label}
                            isDone={todo.isDone}
                            key={todo.createdAt}
                            onItemLabelEdit={editItem}
                            onItemDoneToggle={doneToggle}
                            onItemDelete={deleteItem}
                        />
                    );
                })}
        </List>
    );
};
