import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { PostHogProvider } from "./_providers/posthog-provider";


export const metadata: Metadata = {
  title: "My JG Drive",
  description: "Google drive but worse ~JGspecial",
  icons: [{ rel: "icon", url: "/IconTypeShi.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
              <PostHogProvider>{children}</PostHogProvider>
            </body>
        </html>
    </ClerkProvider>
  );
}
