"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import Login from "../LoginTab/page";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  // paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const path = usePathname();
  return (
    // <MainWrapper className="mainwrapper">
    //   {path=== "/login" ? (
    //     <>
    //       <Box sx={{  }}>
    //         {children}
    //       </Box>
    //     </>
    //   ) : (
    <>
      <html>
        <head><link rel="icon" href="https://static.vecteezy.com/system/resources/thumbnails/003/501/833/small/calendar-icon-concept-of-schedule-appointment-free-vector.jpg" sizes="any" /><title>Book Appointment With Union Public Sevice Commission</title></head>
        <body>
        <PageWrapper className="page-wrapper">
        <Header />

        <Container
          maxWidth="xl"
          sx={{
            // paddingTop: "20px",
            maxWidth: "1200px",
            // marginLeft : "auto"
          }}
        >
          <Box>{children}</Box>
        </Container>
      </PageWrapper>
        </body>
      </html>
      
    </>
    //   )}
    // </MainWrapper>
  );
}
