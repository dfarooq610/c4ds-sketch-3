import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Slabo_27px } from "next/font/google";

// pages/_app.js
const slabo = Slabo_27px({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-slabo",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${slabo.variable} font-slabo`}>
      <Component {...pageProps} />
    </main>
  );
}
