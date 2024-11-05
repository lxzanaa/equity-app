"use client"

import { useEffect, useRef, useState } from "react"
import "./index.module.scss"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { dataList } from "./data/dataList"


export const ControlPlane = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const tl = useRef<gsap.core.Timeline>()

    const { contextSafe } = useGSAP(() => {
        tl.current = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                ".site_controll_card_line",
                { scale: 0 },
                {
                    duration: 0.5,
                    scale: 1,
                    stagger: 0.1,
                },
                "<"
            )
            .fromTo(
                ".site_controll_card_line_1",
                { scale: 0 },
                {
                    duration: 0.5,
                    scale: 1,
                    stagger: 0.1,
                },
                "<"
            )
            .fromTo(
                ".site_controll_text",
                {
                    yPercent: 20,
                    opacity: 0,
                },
                {
                    duration: 0.5,
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.1,
                },
                "<"
            )
    }, [])

    const triggerButton = contextSafe((isActive: boolean) => {
        if (!tl.current) return

        tl.current[isActive ? "play" : "reverse"]()
    })

    useEffect(() => {
        triggerButton(isActive)
    }, [isActive])

    return (
        <section className={`site-control-wrapper`}>
            <div className="container">
                <div className="site-control">
                    <h2 className="site-control__title reveal">A Control Plane for Autonomous AI</h2>
                    <button className="site-control__btn reveal" onClick={() => setIsActive((prev) => !prev)}>
                        <span className="site-control__span" /> Learn More about Agentic AI
                    </button>
                    <h3 className="site-control__title-text reveal">Verifiable Compute enables best-in-class compliance as you:</h3>
                </div>
                <ul className="site-control__list reveal">
                    {dataList.map((e, i) => (
                        <div className="site-control__list_box site_control__list_box_1" key={i}>
                            <li className="site-control__item">
                                <div className="site-control__list-img">
                                    <Image className="site-control__img" src={e.image} alt="control-media" width={116} height={116} quality={100} />
                                    {/* <video src={e.video} autoPlay loop playsInline /> */}
                                </div>
                                <h2>{e.title}</h2>
                                <h3>{e.subtitle}</h3>
                                <Image style={{ height: "auto" }} src={"/assets/home/control-plane/line.svg"} className="site_controll_card_line_1" width={116} height={116} alt="" />
                            </li>
                            <span className="site_controll_card_line"></span>
                            <p className="site_controll_text">{e.text}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}
