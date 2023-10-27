import Topnavb from "@/components/Topnavb";
import "@/styles/404.css";
import "@/styles/addform.css";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const Pathname = useRouter();
  const arr = [
    "/404",
    "/dashboard",
    `/dashboard${Pathname.pathname.split("/dashboard")[1]}`,
  ];
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        {!arr.includes(Pathname.pathname) ? <Topnavb /> : null}
        <Component {...pageProps} />
        {!arr.includes(Pathname.pathname) ? <Footer /> : null}
      </QueryClientProvider>
    </Layout>
  );
}
