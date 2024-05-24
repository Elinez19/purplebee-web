import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurpleBee Technologies- Tech solutions center",
  description: `Purple Bee helps small and midsize businesses, enterprise businesses, startup firms, government agencies, and corporate bodies earn more customers, differentiate from competitors, and increase sales with our customer-centric, value-driven tech services & products`,
  // other metadata
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light">
          {/* <Header /> */}
          {/* <ToasterContext /> */}
          {children}
          {/* <Footer /> */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
