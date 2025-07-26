import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Footer from "~/components/footer";
// import { Ubuntu } from "next/font/google";
// import { Geist } from "next/font/google";
import { Paprika } from "next/font/google";

// const ubuntu = Ubuntu({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

const paprika = Paprika({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: "Starboy's Projects",
  description:
    "indexing a comprehensive list of all of my projects in existence.",
  metadataBase: new URL("https://projects.skywalkersam.dev/"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${paprika.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
