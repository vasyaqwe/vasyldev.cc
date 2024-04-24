import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"
import { ArrowRightCircleIcon, LinkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const tools = [
   {
      name: "next.js",
      href: "https://nextjs.org",
      logo: <Icons.nextjs className="size-7" />,
   },
   {
      name: "vercel",
      href: "https://vercel.com",
      logo: <Icons.vercel className="size-7" />,
   },
   {
      name: "react",
      href: "https://react.dev",
      logo: <Icons.react className="size-7" />,
   },
   {
      name: "vite",
      href: "https://vite.dev",
      logo: <Icons.vite className="size-7" />,
   },

   {
      name: "drizzle orm",
      href: "https://orm.drizzle.team/",
      logo: <Icons.drizzle className="size-8" />,
   },
   {
      name: "prisma",
      href: "https://prisma.io/",
      logo: <Icons.prisma className="size-7" />,
   },
   {
      name: "supabase",
      href: "https://supabase.com",
      logo: <Icons.supabase className="size-7" />,
   },
   {
      name: "node.js",
      href: "https://nodejs.org",
      logo: <Icons.nodejs className="size-7" />,
   },
   {
      name: "tailwindcss",
      href: "https://tailwindcss.com",
      logo: <Icons.tailwindcss className="size-7" />,
   },
   // {
   //    name: "framer-motion",
   //    href: "https://nextjs.org",
   //    logo: <Icons.framerMotion className="size-7" />,
   // },
]

export default function Home() {
   return (
      <>
         <section className="mt-14">
            <h1 className=" text-3xl">
               <Image
                  src={"/avatar.jpg"}
                  alt="Vasyl's avatar"
                  width={70}
                  priority
                  height={70}
                  className="-mt-1 mr-2 inline-block aspect-square size-11 rounded-2xl object-cover object-top"
               />
               Hello — I'm Vasyl,
            </h1>
            <p className="my-5">
               A full-stack developer based in Ukraine. I create all sorts of
               web apps, both functional and good-looking. With{" "}
               <a
                  href="https://nextjs.org"
                  target="_blank"
                  className="underline"
               >
                  Next.js
               </a>{" "}
               as my framework of choice.
            </p>
            <a
               href="https://soft.win/"
               target="_blank"
               className={buttonVariants({ size: "lg" })}
            >
               View latest project <ArrowRightCircleIcon className="size-5" />
            </a>
         </section>
         <section className="mt-14">
            <h2 className="text-2xl">Tools & tech I use</h2>
            <Card className="mt-4 flex flex-wrap justify-center gap-2 py-4 font-medium">
               {tools.map((t) => (
                  <a
                     key={t.name}
                     href={t.href}
                     target="_blank"
                     style={{
                        transform: `rotate(${Math.random() > 0.5 ? 4 : -4}deg)`,
                     }}
                     className={cn(buttonVariants({ variant: "outline" }))}
                  >
                     {t.logo}
                     {t.name}
                  </a>
               ))}
            </Card>
         </section>
         <section className="mt-14">
            <h2 className="text-2xl">Experience</h2>

            <h3 className="mt-5 flex items-center gap-1.5 font-primary">
               2023{" "}
               <span className="h-px w-full bg-border">
                  {" "}
                  <span className="sr-only">til</span>
               </span>{" "}
               now
            </h3>
            <p className="mt-1">
               <Image
                  src={"/ananest.png"}
                  alt="Ananest"
                  className="-ml-2 md:inline-block"
                  width={45}
                  height={45}
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
               Building all front-end with a small team of back-end devs.
            </p>
            <h3 className="mt-5 flex items-center gap-1.5 font-primary">
               2022{" "}
               <span className="h-px w-full bg-border">
                  {" "}
                  <span className="sr-only">til</span>
               </span>{" "}
               now
            </h3>
            <p className="mt-3">
               <Icons.upwork className="mr-2.5 size-9 max-md:mb-1 md:inline-block" />
               <strong className="font-medium">Upwork freelancing.</strong> Over
               30 different websites with 100% Job Success.
            </p>
         </section>
         <section className="mt-14">
            <h2 className="text-2xl">Recent projects</h2>
            <h3 className="mt-10 flex items-center gap-2 font-primary text-lg font-medium">
               <Image
                  src={"/ananest-blog.png"}
                  alt="Ananest blog"
                  className="-mt-3"
                  width={35}
                  height={35}
               />
               Ananest blog
               <a
                  href="https://blog.ananest.com"
                  target="_blank"
                  className="ml-auto text-base font-normal underline"
               >
                  view live
                  <LinkIcon className="ml-1 inline-block size-4" />
               </a>
            </h3>
            <p className="mt-3 border-b pb-5">
               A static blog I designed & coded at work.
            </p>

            <h3 className="mt-6 flex items-center gap-2 font-primary text-lg font-medium">
               <Image
                  src={"/winsoft.png"}
                  alt="Winsoft"
                  width={35}
                  height={35}
               />
               Winsoft
               <a
                  href="https://www.soft.win"
                  target="_blank"
                  className="ml-auto text-base font-normal underline"
               >
                  view live
                  <LinkIcon className="ml-1 inline-block size-4" />
               </a>
            </h3>
            <p className="mt-3 border-b pb-5">
               A landing page for a software development company.
            </p>
            <h3 className="mt-6 flex items-center gap-2 font-primary text-lg font-medium">
               <Image
                  src={"/wallow.svg"}
                  alt="Wallow"
                  width={35}
                  height={35}
               />
               Wallow
               <a
                  href="https://www.wallow.app"
                  target="_blank"
                  className="ml-auto text-base font-normal underline"
               >
                  view live
                  <LinkIcon className="ml-1 inline-block size-4" />
               </a>
            </h3>
            <p className="mt-3 border-b pb-5">
               A real-time messaging & issue reporting app for teams.
            </p>
            <h3 className="mt-6 flex items-center gap-2 font-primary text-lg font-medium">
               <Image
                  src={"/vfu.svg"}
                  alt="Volunteers for Ukraine"
                  width={35}
                  height={35}
               />
               Volunteers for Ukraine
               <a
                  href="https://www.wallow.app"
                  target="_blank"
                  className="ml-auto text-base font-normal underline"
               >
                  view live
                  <LinkIcon className="ml-1 inline-block size-4" />
               </a>
            </h3>
            <p className="mt-3">
               A landing page for a non-profit organization providing aid in
               Ukraine.
            </p>
         </section>
         <section className="mt-14">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl">Testimonials</h2>
               <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~015c1b113a62e11b13?viewMode=1"
                  className={cn(
                     "-mt-1",
                     buttonVariants({ variant: "outline", size: "sm" })
                  )}
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
                  >
                     VfU
                  </a>
               </p>
            </Card>
         </section>
      </>
   )
}
