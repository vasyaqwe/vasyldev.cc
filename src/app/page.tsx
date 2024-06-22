import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"
import { ArrowRightCircleIcon, LinkIcon } from "@heroicons/react/24/outline"
import ananest from "@public/ananest.png"
import Image from "next/image"

const tools = [
   {
      name: "vite",
      href: "https://vite.dev",
      logo: <Icons.vite className="size-[25px]" />,
   },
   {
      name: "react",
      href: "https://react.dev",
      logo: <Icons.react className="size-[25px]" />,
   },
   {
      name: "hono",
      href: "https://hono.dev",
      logo: <Icons.hono className="size-[24px]" />,
   },
   {
      name: "resend",
      href: "https://resend.com",
      logo: <Icons.resend className="size-[20px]" />,
   },
   {
      name: "tanstack",
      href: "https://tanstack.com",
      logo: (
         <Image
            width={25}
            height={25}
            src={"/tanstack.png"}
            alt="Tanstack"
         />
      ),
   },
   {
      name: "trpc",
      href: "https://trpc.io",
      logo: <Icons.trpc className="size-[24px]" />,
   },
   {
      name: "turborepo",
      href: "https://turbo.build/repo",
      logo: <Icons.turborepo className="size-6" />,
   },
   {
      name: "supabase",
      href: "https://supabase.com",
      logo: <Icons.supabase className="size-[25px]" />,
   },
   {
      name: "typescript",
      href: "https://www.typescriptlang.org/",
      logo: <Icons.typescript className="size-6" />,
   },
   {
      name: "bun",
      href: "https://bun.sh",
      logo: <Icons.bun className="size-7" />,
   },

   {
      name: "tailwindcss",
      href: "https://tailwindcss.com",
      logo: <Icons.tailwindcss className="size-[28px]" />,
   },
   {
      name: "drizzle-orm",
      href: "https://orm.drizzle.team/",
      logo: <Icons.drizzle className="size-[31px]" />,
   },
   {
      name: "framer-motion",
      href: "https://www.framer.com/motion/",
      logo: <Icons.framerMotion className="size-[23px]" />,
   },
   {
      name: "next.js",
      href: "https://nextjs.org",
      logo: <Icons.nextjs className="size-7" />,
   },
]

export default function Home() {
   return (
      <>
         <section className="mt-12 md:mt-16">
            <h1 className=" text-3xl">
               <Image
                  src={"/avatar.jpg"}
                  alt="Vasyl's avatar"
                  width={60}
                  quality={95}
                  height={60}
                  priority
                  className="-mt-1 mr-2 inline-block aspect-square size-11 rounded-2xl object-cover object-top"
               />
               Hello — I'm Vasyl,
            </h1>
            <p className="my-5">
               A full-stack developer based in Ukraine. I create all sorts of
               websites, both functional and good-looking. With{" "}
               <a
                  href="https://react.dev"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
               >
                  React
               </a>{" "}
               &{" "}
               <a
                  target="_blank"
                  href="https://tanstack.com"
                  rel="noreferrer"
                  className="underline"
               >
                  Tanstack
               </a>
               .
            </p>
            <a
               href="https://blog.ananest.com"
               target="_blank"
               className={buttonVariants({ size: "lg" })}
               rel="noreferrer"
            >
               View latest project <ArrowRightCircleIcon className="size-5" />
            </a>
         </section>
         <section className="mt-12 md:mt-16">
            <h2 className="text-2xl">Tools & tech I use</h2>
            <Card className="mt-4 flex flex-wrap justify-center gap-1 py-4 font-medium text-[1.05rem]">
               {tools.map((t) => (
                  <a
                     key={t.name}
                     href={t.href}
                     target="_blank"
                     style={{
                        transform: `rotate(${Math.random() > 0.5 ? 4 : -4}deg)`,
                     }}
                     className={cn(
                        buttonVariants({ variant: "outline" }),
                        "max-sm:flex-grow",
                     )}
                     rel="noreferrer"
                  >
                     {t.logo}
                     {t.name}
                  </a>
               ))}
            </Card>
         </section>
         <section className="mt-12 md:mt-16">
            <h2 className="text-2xl">Experience</h2>

            <h3 className="mt-6 flex items-center gap-1.5 font-primary">
               2023{" "}
               <span className="h-px w-full bg-border">
                  {" "}
                  <span className="sr-only">til</span>
               </span>{" "}
               now
            </h3>
            <p className="md:mt-5">
               <Image
                  src={ananest}
                  width={80}
                  height={40}
                  alt="Ananest"
                  className="md:-mt-2 mr-2 max-w-14 max-md:mt-4 max-md:mb-3 md:inline-block md:max-w-10"
               />
               <strong className="font-medium">
                  {" "}
                  Front-end at{" "}
                  <a
                     href="https://ananest.com/"
                     className="underline"
                  >
                     Ananest
                  </a>
                  .
               </strong>{" "}
               Leading all front-end with a small team of back-end devs.
            </p>
            <h3 className="mt-6 flex items-center gap-1.5 font-primary">
               2022{" "}
               <span className="h-px w-full bg-border">
                  {" "}
                  <span className="sr-only">til</span>
               </span>{" "}
               now
            </h3>
            <p className="md:mt-5">
               <Icons.upwork className="mr-2.5 h-8 w-14 max-md:mt-4 max-md:mb-2 md:inline-block md:w-10" />
               <strong className="font-medium">Upwork freelancing.</strong> Over
               30 different projects with 100% Job Success.
            </p>
         </section>
         <section className="mt-12 md:mt-16">
            <h2 className="mb-6 text-2xl">Recent projects</h2>
            <div className="flex gap-2 border-b pb-6 max-md:flex-col md:gap-4">
               <div className="flex items-center justify-between">
                  <Image
                     src={"/ananest-blog.png"}
                     alt="Ananest blog"
                     className="object-contain max-md:max-w-[56px]"
                     width={58}
                     height={58}
                  />
                  <a
                     href="https://blog.ananest.com"
                     target="_blank"
                     className={cn(
                        "mt-1 md:hidden",
                        buttonVariants({ size: "sm", variant: "default" }),
                     )}
                     rel="noreferrer"
                  >
                     view live
                     <LinkIcon className="ml-1 inline-block size-4" />
                  </a>
               </div>
               <div className="w-full max-md:mt-1">
                  <h3 className="flex items-center gap-3 font-medium font-primary text-lg">
                     Ananest blog
                     <a
                        href="https://blog.ananest.com"
                        target="_blank"
                        className="ml-auto font-normal text-base underline max-md:hidden"
                        rel="noreferrer"
                     >
                        view live
                        <LinkIcon className="ml-1 inline-block size-4" />
                     </a>
                  </h3>
                  <p className="mt-2">
                     A static blog I coded at work. I also designed it!
                  </p>
               </div>
            </div>
            <div className="flex gap-2 border-b py-7 max-md:flex-col md:gap-4">
               <div className="flex items-center justify-between">
                  <Image
                     src={"/winsoft.svg"}
                     alt="Winsoft"
                     width={58}
                     height={58}
                  />
                  <a
                     href="https://www.soft.win"
                     target="_blank"
                     className={cn(
                        "mt-1 md:hidden",
                        buttonVariants({ size: "sm", variant: "default" }),
                     )}
                     rel="noreferrer"
                  >
                     view live
                     <LinkIcon className="ml-1 inline-block size-4" />
                  </a>
               </div>
               <div className="w-full max-md:mt-1">
                  <h3 className="flex items-center gap-3 font-medium font-primary text-lg">
                     Winsoft
                     <a
                        href="https://www.soft.win"
                        target="_blank"
                        className="ml-auto font-normal text-base underline max-md:hidden"
                        rel="noreferrer"
                     >
                        view live
                        <LinkIcon className="ml-1 inline-block size-4" />
                     </a>
                  </h3>
                  <p className="mt-2">
                     A landing page for a software development company.
                  </p>
               </div>
            </div>
            <div className="flex gap-2 border-b py-7 max-md:flex-col md:gap-4">
               <div className="flex items-center justify-between">
                  <Image
                     src={"/wallow.svg"}
                     alt="Wallow"
                     width={58}
                     height={58}
                     className="max-md:max-w-[53px]"
                  />
                  <a
                     href="https://www.wallow.app"
                     target="_blank"
                     className={cn(
                        "mt-1 md:hidden",
                        buttonVariants({ size: "sm", variant: "default" }),
                     )}
                     rel="noreferrer"
                  >
                     view live
                     <LinkIcon className="ml-1 inline-block size-4" />
                  </a>
               </div>
               <div className="w-full max-md:mt-1">
                  <h3 className="flex items-center gap-3 font-medium font-primary text-lg">
                     Wallow
                     <a
                        href="https://www.wallow.app"
                        target="_blank"
                        className="ml-auto font-normal text-base underline max-md:hidden"
                        rel="noreferrer"
                     >
                        view live
                        <LinkIcon className="ml-1 inline-block size-4" />
                     </a>
                  </h3>
                  <p className="mt-2">
                     A real-time messaging & issue reporting app for teams.
                  </p>
               </div>
            </div>
            <div className="flex gap-2 pt-6 max-md:flex-col md:gap-4">
               <div className="flex items-center justify-between">
                  <Image
                     src={"/vfu.svg"}
                     alt="Volunteers for Ukraine"
                     width={58}
                     height={58}
                     className="max-md:max-w-[54px]"
                  />
                  <a
                     href="https://volunteersforukraine.org/"
                     target="_blank"
                     className={cn(
                        "mt-1 md:hidden",
                        buttonVariants({ size: "sm", variant: "default" }),
                     )}
                     rel="noreferrer"
                  >
                     view live
                     <LinkIcon className="ml-1 inline-block size-4" />
                  </a>
               </div>
               <div className="w-full max-md:mt-1">
                  <h3 className="flex items-center gap-3 font-medium font-primary text-lg">
                     Volunteers for Ukraine
                     <a
                        href="https://volunteersforukraine.org/"
                        target="_blank"
                        className="ml-auto font-normal text-base underline max-md:hidden"
                        rel="noreferrer"
                     >
                        view live
                        <LinkIcon className="ml-1 inline-block size-4" />
                     </a>
                  </h3>
                  <p className="mt-2">
                     A landing page for a non-profit organization providing aid
                     in Ukraine.
                  </p>
               </div>
            </div>
         </section>
         <section className="mt-12 md:mt-16">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl">Testimonials</h2>
               <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~015c1b113a62e11b13?viewMode=1"
                  className={cn(
                     "-mt-1",
                     buttonVariants({ variant: "outline", size: "sm" }),
                  )}
                  rel="noreferrer"
               >
                  view all
                  <ArrowRightCircleIcon className="size-4" />
               </a>
            </div>
            <Card className="mt-5">
               <p>
                  "<strong>Vasyl made a great well-animated website!</strong> He
                  is amazing in communication and problem-solving skills. Would
                  like to hire again for sure! Highly recommend Vasyl for the
                  web development."
               </p>
               <p className="mt-2">
                  Yurii Klymenko, CEO –{" "}
                  <a
                     target="_blank"
                     href="https://www.soft.win"
                     className="underline hover:text-foreground"
                     rel="noreferrer"
                  >
                     Winsoft
                  </a>
               </p>
            </Card>
            <Card className="mt-2.5">
               <p>
                  "<strong>Vasyl is an amazing REACT developer.</strong> Top
                  developer for sure."
               </p>
               <p className="mt-2">
                  Charles Polanco, CEO –{" "}
                  <a
                     target="_blank"
                     href="https://wallow.app"
                     className="underline hover:text-foreground"
                     rel="noreferrer"
                  >
                     Wallow
                  </a>
               </p>
            </Card>
            <Card className="mt-2.5">
               <p>
                  "<strong>Skilled developer</strong> with great communication
                  skills! Highly recommend!
               </p>
               <p className="mt-2">
                  Ananstasia Usenko –{" "}
                  <a
                     target="_blank"
                     href="https://volunteersforukraine.org/"
                     className="underline hover:text-foreground"
                     rel="noreferrer"
                  >
                     VfU
                  </a>
               </p>
            </Card>
         </section>
      </>
   )
}
