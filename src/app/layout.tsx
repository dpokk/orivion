import Navbar from "@/components/Navbar";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster} from "react-hot-toast";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orivion",
  description: "Orivion is an platform for conducting Realtime Technical Interviews with real-time coding, video, and audio capabilities.",
  icons: {
    icon: "./orion-logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en"  suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <SignedIn>
          <div className=" min-h-screen">
              <Navbar />
              <main className="px-4 md:px-6 lg:px-8">
                {children}

              </main>
            </div>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn/>
          </SignedOut>
           
          </ThemeProvider>
          <Toaster />
          
        </body>
      </html>
    </ConvexClerkProvider>
    
  );
}
