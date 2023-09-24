import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/addform.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="dark text-foreground bg-background"
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.50 }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          },
        }}
      >
        <NextUIProvider className="dark">
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Component {...pageProps} />
          </QueryClientProvider>
        </NextUIProvider>
      </motion.main>
    </AnimatePresence>
  );
}
