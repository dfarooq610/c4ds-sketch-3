import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

// pages/_app.js
const rw = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rw.variable} font-raleway`}>
      <Component {...pageProps} />
    </main>
  );
}
