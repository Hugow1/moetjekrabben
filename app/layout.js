import Script from "next/script";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-33DZZ3FTZF');
        `}
        </Script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bekijk hier of je vandaag moet krabben!"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.moetjekrabben.nl/" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.moetjekrabben.nl/" />
        <meta property="og:site_name" content="moetjekrabben.nl" />
        <title>Moet je krabben vandaag? | moetjekrabben.nl </title>
        <meta
          name="google-site-verification"
          content="CvgRJoOMqrdocYbLZBnVm6zNOMorvvIFgX8kcg1FqoU"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
