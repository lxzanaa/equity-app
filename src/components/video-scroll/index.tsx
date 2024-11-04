import { FC, useRef } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface IVideoScroll {}

export const VideoScroll: FC<IVideoScroll> = () => {
    const refRoot = useRef<HTMLDivElement>(null)
    const refVideo = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (!refVideo.current) return

        const video = refVideo.current
        const src = video.currentSrc || video.src

        function once(el: HTMLElement, event: string, fn: () => void, opts?: any) {
            const onceFn = function () {
                el.removeEventListener(event, onceFn)
                // fn.apply(this, arguments)
                fn()
            }
            el.addEventListener(event, onceFn, opts)
        }

        // Ініціалізаці для iOS
        once(document.documentElement, "touchstart", () => {
            video.play()
            video.pause()
        })

        gsap.registerPlugin(ScrollTrigger)

        let tl: gsap.core.Timeline
        const mm = gsap.matchMedia()

        mm.add("(min-width: 1025px)", () => {
            tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: refRoot.current,
                    start: "top top",
                    end: "bottom+=100% bottom",
                    // scrub: 1.2,
                    // scrub: 1.1,
                    scrub: 2,
                    // markers: true,
                },
            })

            once(video, "loadedmetadata", () => {
                tl.fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 }).fromTo(".nutrition_image_points_item", { opacity: 0 }, { opacity: 1, stagger: 0.2 }, "<80%")
            })

            setTimeout(() => {
                if (window["fetch"]) {
                    fetch(src)
                        .then((response) => {
                            if (!response.ok) throw new Error("Network response was not ok")
                            return response.blob()
                        })
                        .then((blob) => {
                            const blobURL = URL.createObjectURL(blob)
                            const currentTime = video.currentTime

                            once(document.documentElement, "touchstart", () => {
                                video.play()
                                video.pause()
                            })

                            video.src = blobURL
                            video.currentTime = currentTime + 0.01
                        })
                        .catch((error) => {
                            console.error("Fetch error:", error)
                        })
                }
            }, 1000)

            return () => tl?.kill()
        })

        mm.add("(max-width: 1024px)", () => {
            tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: refRoot.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                    // markers: true,
                },
            })

            once(video, "loadedmetadata", () => {
                tl.fromTo(video, { currentTime: 0 }, { currentTime: video.duration || 1 }).fromTo(".nutrition_image_points_item", { opacity: 0 }, { opacity: 1, stagger: 0.2 }, "<90%")
            })

            setTimeout(() => {
                if (window["fetch"]) {
                    fetch(src)
                        .then((response) => {
                            if (!response.ok) throw new Error("Network response was not ok")
                            return response.blob()
                        })
                        .then((blob) => {
                            const blobURL = URL.createObjectURL(blob)
                            const currentTime = video.currentTime

                            once(document.documentElement, "touchstart", () => {
                                video.play()
                                video.pause()
                            })

                            video.src = blobURL
                            video.currentTime = currentTime + 0.01
                        })
                        .catch((error) => {
                            console.error("Fetch error:", error)
                        })
                }
            }, 1000)

            return () => tl?.kill()
        })

        return () => {
            mm.revert()
        }
    }, [])

    return (
        <div className={clsx(styles.VideoScroll)} ref={refRoot}>
            <video className="video-background" muted playsInline loop ref={refVideo}>
                {/* <source src="/assets/video/anim.webm" type="video/webm" /> */}
                {/* <source src="/assets/video/anim.mp4" type="video/mp4" /> */}
                {/* <source src="/assets/video/anim-convert.mp4" type="video/mp4" /> */}
                {/* <source src="/assets/video/anim-convert-60.mp4" type="video/mp4" /> */}
                {/* <source src="/assets/video/anim-convert-60-1.mp4" type="video/mp4" /> */}
                <source src="/assets/video/anim-convert-1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
