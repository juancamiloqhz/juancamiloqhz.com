import { Metadata } from "next"
// import { Inter as FontSans } from "next/font/google"
import { Space_Grotesk as FontSans } from "next/font/google"

import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

import { ViewTransitions } from "next-view-transitions"

import { siteConfig } from "@/config/site"

const fontSans = FontSans({
  subsets: ["latin"],
})

// // Font files can be colocated inside of `pages`
// const fontHeading = localFont({
//   src: "../assets/fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading",
// })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "juancamiloqhz",
      url: "https://juancamiloqhz.com",
    },
  ],
  creator: "juancamiloqhz",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@juancamiloqhz",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontSans.className}`}
      >
        <body className="antialiased tracking-tight">
          <div className="min-h-screen bg-background">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <TailwindIndicator />
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
