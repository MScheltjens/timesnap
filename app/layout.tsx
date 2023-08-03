import { PropsWithChildren } from "react";

import "./globals.css";
import { Footer, Header, IconProvider } from "@/components";

export const metadata = {
  title: "Time Snap",
  description: "Time Snap photography and mixed arts",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="flex flex-col justify-between text-primary">
        <IconProvider>
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
        </IconProvider>
      </body>
    </html>
  );
}
