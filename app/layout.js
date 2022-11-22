import Script from "next/script";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-33DZZ3FTZF"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7809744649876497"
          crossorigin="anonymous"
        ></script>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
