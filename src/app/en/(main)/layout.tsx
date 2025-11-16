import type {Metadata} from "next";
import React from "react";
import SimpleHeader from "@/components/layout/SimpleHeader";
import Footer from "@/components/layout/Footer";
import "../../globals.css";

export const metadata: Metadata = {
  title: "cloud9woodwork",
  description: "woodworking projects and tutorials",
};

export default function EnMainLayout({
                                       children,
                                     }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader locale="en"/>
      <main>{children}</main>
      <Footer locale="en"/>
    </>
  );
}

