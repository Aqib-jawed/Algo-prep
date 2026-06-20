import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import KeyboardShortcuts from "@/components/ui/KeyboardShortcuts";
import { ToastProvider } from "@/components/ui/Toast";
import Providers from "@/components/Providers";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap"
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Algo Prep | DSA Interview War Room",
  description: "A LeetCode-inspired DSA interview prep platform with roadmap, patterns, problems, strategy, and progress tracking."
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sourceSans.variable} ${jetBrains.variable}`}>
        <ThemeProvider>
          <Providers>
            <ToastProvider>
              <div className="min-h-screen bg-base text-primary">
                <Navbar />
                <div className="mx-auto flex w-full max-w-[1440px]">
                  <Sidebar />
                  <main className="min-w-0 flex-1 px-4 pb-10 pt-20 md:px-6 lg:ml-64 lg:px-8">
                    {children}
                    <KeyboardShortcuts showButton={false} />
                  </main>
                </div>
              </div>
            </ToastProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
