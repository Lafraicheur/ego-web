import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="overflow-x-hidden bg-white">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
        <Script id="axeptio-settings" strategy="beforeInteractive">
          {`window.axeptioSettings = { clientId: "699f103bbd813aff599eab8f" };`}
        </Script>
        <Script
          src="//static.axept.io/sdk.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
