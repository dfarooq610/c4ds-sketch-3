import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
        <meta
          name="og-title"
          content="So you want to plan a ski trip in New England"
        />
            
        <meta name="og:url" content="https://c4ds-sketch-3.vercel.app/" />
            
        <meta
          name="og:image"
          content="file:///Users/lyu/Desktop/Screen%20Shot%202023-03-20%20at%2014.16.44.png"
        />
            
        <meta name="og:type" content="article" />
            
        <meta
          name="og:description"
          content="An interactive poll that helps you to find the best fit ski resort."
        />
            
        <meta name="og:locale" content="en_US" />
            
        <meta
          name="keywords"
          content="New England, Ski Resorts, Lift Ticket, weather, temperature"
        />
            
        <meta
          name="author"
          content="Danish Farooq and Xiangpei Lyu, Northeastern University"
        />
            <title>So you want to plan a ski trip in New England</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⛷</text></svg>"
        ></link>
      </Head>
      <body className="bg-[#0a1b35]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
