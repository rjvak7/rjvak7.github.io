import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Rajiv Khanna | Machine Learning Research at Purdue";
const description =
  "Rajiv Khanna is an Assistant Professor at Purdue University working on machine learning theory, optimization, stability, model memory, data-efficient learning, and human-AI systems.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
