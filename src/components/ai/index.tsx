import { FC, useEffect } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"

import aiImage from "../../app/img/ai/ai_bg.png"
import gsap from "gsap"

interface IAi {}

export const Ai: FC<IAi> = () => {
    useEffect(() => {
        gsap.to(".ai", {
            scrollTrigger: {
                trigger: ".ai_wrap",
                start: "top bottom", // Ekranning o'rtasiga kelganda animatsiya boshlanadi
                end: "bottom bottom", // Element yuqoriga chiqqanida animatsiya tugaydi
                scrub: 1.5,
                // Scroll joyini o'zgartirmaslik uchun
            },
            maxWidth: "100%", // Kichraytirishni biroz kamaytirib qildim
        })
    }, [])

    return (
        <div className="ai_wrap">
            <div className="ai_bg_div">
                <section
                    className="ai"
                    style={{
                        backgroundImage: `url(${aiImage.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="ai_container">
                        <div className="ai_right">
                            <h2 className="ai_title reveal">AI for All</h2>
                            <p className="ai_text mb-10 reveal">Learn about Node 1 Reidsville, North Carolina</p>
                            <p className="ai_text mb-15 reveal">
                                Pop. 14,566 and the <span className="text-semibold">World&apos;s First Verifiable AI</span>
                            </p>
                            <button className="ai_btn reveal">
                                <span className="ai_round"></span>
                                Read Case Study
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
