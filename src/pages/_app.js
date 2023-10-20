import Navbar from "@/components/Navbar";
import "@/styles/404.css";
import "@/styles/addform.css";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";
import { useRouter } from "next/router";

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
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <main className="bodyback">
            {!arr.includes(Pathname.pathname) ? <Navbar /> : null}
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </NextUIProvider>
    </Layout>
  );
}
