import { Box } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: 1024,
          mx: "auto",
          px: 2,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
