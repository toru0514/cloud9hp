// app/(main)/layout.tsx
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import SimpleHeader from "@/components/Header/SimpleHeader";
import FooterMenu from "@/components/Footer/FooterMenu";
import "../globals.css";
import React from "react"; // ← 相対パス注意！

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
        <html lang="ja">
        <body className={`font-mincho ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SimpleHeader/>
        <main>{children}</main>
        <FooterMenu/>
        </body>
        </html>
    );
}
