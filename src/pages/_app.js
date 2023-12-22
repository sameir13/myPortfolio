import "@/styles/globals.css";
import "@/styles/form.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
