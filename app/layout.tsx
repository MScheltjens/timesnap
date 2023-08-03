import { PropsWithChildren } from "react";
import { Footer, Header } from "@/components";

import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Time Snap",
  description: "Time Snap photography and mixed arts",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <Header />
        <main className="min-h-screen flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
