import { PropsWithChildren } from "react";
import { Footer, Header, IconProvider } from "@/components";

import "./globals.css";

export const metadata = {
  title: "Time Snap",
  description: "Time Snap photography and mixed arts",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <IconProvider>
          <Header />
          <main className="min-h-screen bg-background flex flex-col items-center">{children}</main>
          <Footer />
        </IconProvider>
      </body>
    </html>
  );
}
