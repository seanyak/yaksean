import Header from '@/components/header';
import Intro from '@/components/intro';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Sean Yakubovsky — Web Developer & Designer",
    template: "%s | Sean Yakubovsky — Web Developer",
  },

  description:
    "Portfolio of Sean Yakubovsky — freelance web developer & designer specializing in React, Next.js, TypeScript, Tailwind, and SEO. Projects include Self Love Club, Hannah Sloan Curatorial & Advisory, Solutions & Associates, Jim Dine, Indivisible Wilmington, Art Asset Management Group, The HOM Network, and DGI-UI.",

  keywords: [
    "Sean Yakubovsky",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX",
    "SEO",
    "performance optimization",
    "structured data",
    "JSON-LD",
    "branding",
    "graphic design",
    "portfolio",
    "freelance",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body 
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fefce8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[29rem] sm:w-[68.75rem] dark:bg-[#022c22]'></div>
        <div className='bg-[#bae6fd] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[29rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0c4a6e]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
