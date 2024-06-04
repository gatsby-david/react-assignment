import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Header } from "./Header";
import { Todo } from "./Todos";
import axios from "axios";
import { useState } from "react";

export const HeaderWrapper = () => {
    const queryClient = useQueryClient();

    const [error, setError] = useState<boolean>(false);

    const mutation = useMutation({
        mutationFn: (newTodo: Omit<Todo, "id" | "createdAt">) => {
            return axios.post("http://localhost:3000/items", newTodo);
        },
        onError: () => {
            setError(true);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            setError(false);
        },
    });

    const addItem = (label: string) => {
        mutation.mutate({ label, isDone: false });
        queryClient.invalidateQueries({ queryKey: ["todos"] });
    };

    return (
        <Header onItemAdd={addItem} isAPIerror={error}>
            To Do app
        </Header>
    );
};
