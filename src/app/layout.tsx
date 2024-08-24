import type { Metadata } from "next"
import "./globals.css"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { Outfit } from "next/font/google"
import Link from "next/link"

const font = Outfit({ subsets: ["latin"], variable: "--font-primary" })

export const metadata: Metadata = {
   title: "Vasyl Polishchuk",
   description: "Hi — I'm Vasyl, full-stack developer based in Ukraine.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="en"
         className={cn("font-primary leading-5 antialiased", font.variable)}
      >
         <body className="pt-5 text-sm">
            <header className="container flex items-center justify-between pb-4">
               <Link href={"/"}>
                  <Icons.logo className="size-[24px] opacity-65" />
               </Link>
               <nav>
                  <ul className="flex items-center gap-3">
                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                           target="_blank"
                           rel="noreferrer"
                        >
                           upwork
                        </a>
                     </li>
                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://github.com/vasyaqwe"
                           target="_blank"
                           rel="noreferrer"
                        >
                           github
                        </a>
                     </li>

                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://www.linkedin.com/in/vasyl-polishchuk-37329624b"
                           target="_blank"
                           rel="noreferrer"
                        >
                           linkedin
                        </a>
                     </li>
                     <li>
                        <a
                           className={cn(
                              buttonVariants({
                                 variant: "outline",
                                 size: "sm",
                              }),
                              "text-muted-foreground ",
                           )}
                           target="_blank"
                           href="https://cal.com/vasyldev/15min"
                           rel="noreferrer"
                        >
                           <span className="-mt-0.5"> contact me</span>
                           <ArrowRightCircleIcon className="mt-0.5 size-5" />
                        </a>
                     </li>
                  </ul>
               </nav>
            </header>
            <main className="container">{children}</main>
            <footer className="mt-20 border-t border-t-border/60 bg-muted py-5 text-muted-foreground text-xs shadow-sm md:mt-28">
               <div className="container flex items-center justify-between">
                  <p> © {new Date().getFullYear()} Vasyl Polishchuk</p>
                  <a
                     target="_blank"
                     href="https://github.com/vasyaqwe/vasyldev.cc"
                     className="underline hover:text-foreground"
                     rel="noreferrer"
                  >
                     view source code
                  </a>
               </div>
            </footer>
         </body>
      </html>
   )
}
