import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./components/Main";

export const App = () => {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Container>
                    <Layout>
                        <Main />
                    </Layout>
                </Container>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
