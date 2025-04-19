// 修正後の app/(main)/layout.tsx
import type {Metadata} from "next";
import SimpleHeader from "@/components/Header/SimpleHeader";
import FooterMenu from "@/components/Footer/FooterMenu";
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
      <FooterMenu/>
    </>
  );
}
