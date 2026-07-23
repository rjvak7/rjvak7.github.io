import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Rajiv Khanna — Machine Learning Theory, Made Legible";
const description =
  "Rajiv Khanna is an NSF CAREER awardee and Assistant Professor at Purdue working on machine learning theory, optimization, privacy, unlearning, data selection, and human-AI collaboration.";

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
          width: 1731,
          height: 909,
          alt: "Machine learning that knows what to keep, what to forget, and when to defer.",
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
