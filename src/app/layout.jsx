import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All About Calisthenics",
  description: "Learn everything about Calisthenics",
  other: {
    monetag: "9bf3e87d24a7cfba0e5d261d1d910034",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TAG}`}
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_TAG}');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4080624113623119"
          crossOrigin="anonymous"
        />

        <Navbar />

        {children}

        {/* Tally */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />

        {/* Monetag */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="209232"
          async
          data-cfasync="false"
        />

        <Footer />
      </body>
    </html>
  );
}