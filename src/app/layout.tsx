import Head from "next/head";
import { ReactNode } from "react";

import ClientLayout from "@/app/layout.client";

import "./globals.css";

interface IProps {
  children: ReactNode;
}

// 🔥 metadata에서는 title만
export const metadata = {
  title: "yangchi",
};

// ✅ viewport는 별도 export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout(props: IProps) {
  const { children } = props;

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
