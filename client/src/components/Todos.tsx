import { useQuery } from "@tanstack/react-query";
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
    const { isPending, error, data } = useQuery({
        queryKey: ["todos"],
        queryFn: () => axios.get("http://localhost:3000/items").then((res) => res.data),
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <List>
            {data.map((todo: Todo) => (
                <ListItem label={todo.label} isDone={todo.isDone} key={todo.createdAt} />
            ))}
        </List>
    );
};
