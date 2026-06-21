import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${inter.variable} antialiased`}>
            <body className="font-sans bg-slate-50 text-slate-900">
                {children}
            </body>
        </html>
    );
}