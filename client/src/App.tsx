import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";
import { HeaderWrapper } from "./components/HeaderWrapper";

export const App = () => {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Container>
                    <Layout>
                        <div>
                            <HeaderWrapper />
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
