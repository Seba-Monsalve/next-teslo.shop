import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/font";
import { Provider } from "@/components";


export const metadata: Metadata = {
  title: {

    template: "%s Teslo >> Shop",
    default: 'Home | Teslo >> Shop'
  },
  description: "Tienda virtual de productos by Teslo | Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
