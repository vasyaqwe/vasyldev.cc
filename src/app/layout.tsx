import type { Metadata } from "next"
import "./globals.css"
import Image from "next/image"
import logo from "@public/logo.svg"
import { Button } from "@/components/ui/button"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"

export const metadata: Metadata = {
   title: "vasyldev.cc",
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
         className="font-primary text-sm leading-6 antialiased"
      >
         <body className=" pt-5">
            <header className="container flex items-center justify-between pb-4">
               <Image
                  src={logo}
                  className="max-w-[22px] opacity-65"
                  alt="logo"
               />
               <nav>
                  <ul className="flex items-center gap-3">
                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                           target="_blank"
                        >
                           upwork
                        </a>
                     </li>
                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://github.com/vasyaqwe"
                           target="_blank"
                        >
                           github
                        </a>
                     </li>

                     <li>
                        <a
                           className="text-muted-foreground underline hover:text-foreground"
                           href="https://www.linkedin.com/in/vasyl-polishchuk-37329624b"
                           target="_blank"
                        >
                           linkedin
                        </a>
                     </li>
                     <li>
                        <Button
                           className="text-muted-foreground "
                           variant={"outline"}
                           size={"sm"}
                        >
                           contact me
                           <ArrowRightCircleIcon className="mt-0.5 size-5" />
                        </Button>
                     </li>
                  </ul>
               </nav>
            </header>
            <main className="container">{children}</main>
            <footer className="mt-20 border-t border-t-border/60 bg-muted py-5 text-xs text-muted-foreground shadow-sm md:mt-28">
               <div className="container flex items-center justify-between">
                  <p> © {new Date().getFullYear()} Vasyl Polishchuk</p>
                  <a
                     href="#"
                     className="underline hover:text-foreground"
                  >
                     view source code
                  </a>
               </div>
            </footer>
         </body>
      </html>
   )
}
