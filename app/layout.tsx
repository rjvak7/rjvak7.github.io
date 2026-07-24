import type { Metadata } from "next";
import GoogleAnalytics from "./google-analytics";
import "./globals.css";

const title = "Rajiv Khanna | Machine Learning Research at Purdue";
const description =
  "Rajiv Khanna is an Assistant Professor at Purdue University working on machine learning theory, optimization, stability, model memory, data-efficient learning, and human-AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rjvak7.github.io"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Rajiv Khanna",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Rajiv Khanna — Machine Learning Theory — Purdue University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR6LK4S"
            height="0"
            width="0"
            className="analytics-frame"
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
