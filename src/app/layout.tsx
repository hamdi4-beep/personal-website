import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name} Portfolio`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} Personal Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://camo.githubusercontent.com/b97b310efcc58cb204fa639ce83cd74188f8de21ab9c99315dfa01b1750f8d55/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a457865585635626d316f5a4768775a476f32596d31335a445271636a6478627a6835616e426e4e326c766357707a4e545a685a54527565535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f59364654694a376d3139584438426e4767492f67697068792e676966",
      width: 800,
      height: 600
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["https://camo.githubusercontent.com/b97b310efcc58cb204fa639ce83cd74188f8de21ab9c99315dfa01b1750f8d55/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a457865585635626d316f5a4768775a476f32596d31335a445271636a6478627a6835616e426e4e326c766357707a4e545a685a54527565535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f59364654694a376d3139584438426e4767492f67697068792e676966"],
    description: DATA.description
  },
  verification: {
    google: "",
    yandex: "",
  }
};

const GoogleAdSenseComponent = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5216826436622765"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Navbar />
            {children}
          </TooltipProvider>
        </ThemeProvider>

        <GoogleAdSenseComponent />
      </body>
    </html>
  );
}
