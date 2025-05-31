import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Dilgusha | Backend Developer",
  description:
    "Personal portfolio of Dilgusha, a backend developer specializing in scalable architectures and robust APIs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
