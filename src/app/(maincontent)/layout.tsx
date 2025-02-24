import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SourceBytesAI",
    description: "SourceBytesAI",
};

export default function ContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="min-h-screen bg-white text-zinc-900 flex">
                    <Sidebar />
                    <div className="flex-1 flex flex-col ml-20">
                        <Header />
                        {children}
                    </div>
                </div>

            </body>
        </html>
    );
}
