import { List } from "./List";
import { ListItem } from "./ListItem";

export const Todos = () => {
    return (
        <List>
            <ListItem label="item" isDone={true} />
            <ListItem label="item" isDone={true} />
            <ListItem label="item" isDone={true} />
        </List>
    );
};
