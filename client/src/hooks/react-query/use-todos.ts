import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTodos = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: () => axios.get("http://localhost:3000/items").then((res) => res.data),
    });
};
