import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.5 }}
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
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Layout;
