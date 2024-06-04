import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";

export const App = () => {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Container>
                    <Layout>
                        <div>
                            <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                            <List>
                                <Todos />
                            </List>
                        </div>
                        <Footer />
                    </Layout>
                </Container>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
