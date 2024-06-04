import { Footer } from "./Footer";
import { HeaderWrapper } from "./HeaderWrapper";
import { List } from "./List";
import { Todo, Todos } from "./Todos";
import { useTodos } from "../hooks/react-query/use-todos";

export const Main = () => {
    const { isPending, error, data } = useTodos();

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    if (!isPending) {
        const todoItems = data.filter((todo: Todo) => !todo.isDone).length;
        const doneItems = data.filter((todo: Todo) => todo.isDone).length;

        return (
            <>
                <HeaderWrapper />
                <List>
                    <Todos />
                </List>
                <Footer todoItems={todoItems} doneItems={doneItems} />
            </>
        );
    }
};
