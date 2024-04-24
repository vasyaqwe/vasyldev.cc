"use client"

import byronConsulting from "@public/byron-consulting.png"
import winsoft from "@public/winsoft.png"
import ananestBlog from "@public/ananest-blog.png"
import { useCallback, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"

const TWEEN_FACTOR_BASE = 0.05

const slides = [byronConsulting, winsoft, ananestBlog, winsoft]

export function Gallery() {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      dragFree: true,
   })
   const tweenFactor = useRef(0)
   const tweenNodes = useRef<HTMLElement[]>([])

   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
         return slideNode.querySelector(".slide")!
      })
   }, [])

   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
      tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
   }, [])

   const tweenParallax = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
         const engine = emblaApi.internalEngine()
         const scrollProgress = emblaApi.scrollProgress()
         const slidesInView = emblaApi.slidesInView()
         const isScrollEvent = eventName === "scroll"

         emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
               if (isScrollEvent && !slidesInView.includes(slideIndex)) return

               if (engine.options.loop) {
                  engine.slideLooper.loopPoints.forEach((loopItem) => {
                     const target = loopItem.target()

                     if (slideIndex === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)

                        if (sign === -1) {
                           diffToTarget = scrollSnap - (1 + scrollProgress)
                        }
                        if (sign === 1) {
                           diffToTarget = scrollSnap + (1 - scrollProgress)
                        }
                     }
                  })
               }

               const translate = diffToTarget * (-1 * tweenFactor.current) * 100
               const tweenNode = tweenNodes.current[slideIndex]
               tweenNode.style.transform = `translateX(${translate}%)`
            })
         })
      },
      []
   )

   useEffect(() => {
      if (!emblaApi) return

      setTweenNodes(emblaApi)
      setTweenFactor(emblaApi)
      tweenParallax(emblaApi)

      emblaApi
         .on("reInit", setTweenNodes)
         .on("reInit", setTweenFactor)
         .on("reInit", tweenParallax)
         .on("scroll", tweenParallax)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [emblaApi, tweenParallax])

   return (
      <Card className="mt-5 p-0 [--slide-size:90%] [--slide-spacing:1rem]">
         <div
            className="overflow-hidden p-5"
            ref={emblaRef}
         >
            <div
               style={{ backfaceVisibility: "hidden" }}
               className="-ml-[var(--slide-spacing)] flex touch-pan-y"
            >
               {slides.map((slide, idx) => (
                  <div
                     className="min-w-0  flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]"
                     key={idx}
                  >
                     <div className="h-full overflow-hidden rounded-lg border">
                        <div className="relative flex h-full w-full justify-center">
                           <Image
                              className="slide h-[16rem] max-w-none flex-[0_0_calc(115%+var(--slide-spacing)*2)] object-cover object-top"
                              src={slide}
                              alt={""}
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Card>
   )
}
