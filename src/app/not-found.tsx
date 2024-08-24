import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export const metadata = {
   title: "Not found",
   description: "This page does not exist — it may have been moved or deleted.",
}

export default function Page() {
   return (
      <div className="grid h-screen place-items-center text-center">
         <div className="-mt-36 ">
            <div className="relative mb-6">
               <Card className="absolute inset-0 mx-auto grid h-28 w-[5.5rem] rotate-6 place-content-center rounded-xl">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     className="size-8"
                     fill={"none"}
                  >
                     <path
                        d="M17.5 17.5L22 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M8 14L14 8M8 8L14 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </Card>
               <Card className="-rotate-6 mx-auto grid h-28 w-[5.5rem] place-content-center rounded-xl">
                  <MagnifyingGlassCircleIcon className="size-9" />
               </Card>
            </div>
            <h1 className="mb-1 font-semibold text-xl">Not found</h1>
            <p className="mb-5 text-lg leading-snug opacity-70">
               This page does not exist — <br /> it may have been moved or
               deleted.
            </p>
            <Link
               href={"/"}
               className={buttonVariants()}
            >
               Back home
            </Link>
         </div>
      </div>
   )
}
