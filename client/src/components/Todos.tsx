import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { List } from "./List";
import { ListItem } from "./ListItem";
import axios from "axios";

export type Todo = {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
};

export const Todos = () => {
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["todos"],
        queryFn: () => axios.get("http://localhost:3000/items").then((res) => res.data),
    });

    const mutation = useMutation({
        mutationFn: ({ label, id }: { label: string; id: number }) => {
            return axios.patch(`http://localhost:3000/items/${id}`, { label });
        },
        onSuccess: () => {
            refetch();
        },
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <List>
            {data.map((todo: Todo) => {
                const editItem = (label: string) => {
                    mutation.mutate({ label, id: todo.id });
                };
                return (
                    <ListItem label={todo.label} isDone={todo.isDone} key={todo.createdAt} onItemLabelEdit={editItem} />
                );
            })}
        </List>
    );
};
