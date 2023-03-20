import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "next/font/google";

// pages/_app.js
const lora = Lora({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lora.variable} font-lora`}>
      <Component {...pageProps} />
    </main>
  );
}
