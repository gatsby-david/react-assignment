import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ListItem } from "./components/ListItem";

export const App = () => (
    <ThemeProvider>
        <Container>
            <Layout>
                <div>
                    <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                    <List>
                        <ListItem label="item" isDone={true} />
                        <ListItem label="item" isDone={true} />
                        <ListItem label="item" isDone={true} />
                    </List>
                </div>
                <Footer />
            </Layout>
        </Container>
    </ThemeProvider>
);
