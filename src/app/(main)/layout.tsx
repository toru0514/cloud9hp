// 修正後の app/(main)/layout.tsx
import type {Metadata} from "next";
import SimpleHeader from "@/components/layout/SimpleHeader";
import Footer from "@/components/layout/Footer";
import "../globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "cloud9woodwork",
  description: "woodworking projects and tutorials",
};

export default function MainLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
