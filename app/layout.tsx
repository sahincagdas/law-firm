
import type { Metadata } from "next";
import { Public_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public-sans",
    display: "swap",
});

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Dilan Köremezli | Profesyonel Hukuki Danışmanlık & Avukatlık",
    description: "Av. Dilan Köremezli - İstanbul'da şirketler, aile, gayrimenkul ve ceza hukuku alanlarında uzman hukuki danışmanlık ve avukatlık hizmetleri.",
    keywords: "Dilan Köremezli, Avukat, Hukuki Danışmanlık, İstanbul Avukat, Şirketler Hukuku, Boşanma Avukatı, Gayrimenkul Hukuku",
    authors: [{ name: "Dilan Köremezli" }],
    openGraph: {
        type: "website",
        url: "https://dilankoremezli.com/",
        title: "Dilan Köremezli | Profesyonel Hukuki Danışmanlık & Avukatlık",
        description: "İstanbul'da uzman hukuki çözümler. Haklarınızı koruyor, geleceğinizi güvence altına alıyoruz.",
        images: ["https://dilankoremezli.com/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dilan Köremezli | Profesyonel Hukuki Danışmanlık & Avukatlık",
        description: "İstanbul'da uzman hukuki çözümler. Haklarınızı koruyor, geleceğinizi güvence altına alıyoruz.",
        images: ["https://dilankoremezli.com/og-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`${publicSans.variable} ${playfairDisplay.variable} font-display bg-background-light text-secondary flex flex-col min-h-screen`}>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
