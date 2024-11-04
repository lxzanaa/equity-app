"use client"

import { FC, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface IControlPlane {}

export const ControlPlane: FC<IControlPlane> = () => {
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
                    <div className="site-control__list_box site_control__list_box_1">
                        <li className="site-control__item">
                            <div className="site-control__list-img">
                                <Image className="site-control__img" src={"/assets/home/control-plane/media-1.png"} alt="control-media" width={116} height={116} />
                            </div>
                            <h2>Create</h2>
                            <h3>Agents</h3>
                            <Image style={{ height: "auto" }} src={"/assets/home/control-plane/line.svg"} className="site_controll_card_line_1" width={116} height={116} alt="" />
                        </li>
                        <span className="site_controll_card_line"></span>
                        <p className="site_controll_text">Auditable records of an agent`&apos;s components and training.</p>
                    </div>
                    <div className="site-control__list_box">
                        <li className="site-control__item">
                            <div className="site-control__list-img">
                                <Image style={{ height: "auto" }} className="site-control__img" src={"/assets/home/control-plane/media-2.png"} alt="control-media" width={116} height={116} />
                            </div>
                            <h2>Provision</h2>
                            <h3>Agents</h3>
                            <Image style={{ height: "auto" }} src={"/assets/home/control-plane/line.svg"} className="site_controll_card_line_1" width={116} height={116} alt="" />
                        </li>
                        <span className="site_controll_card_line"></span>
                        <p className="site_controll_text">Authenticate what an agent is doing and control their dataflow and actions.</p>
                    </div>
                    <div className="site-control__list_box">
                        <li className="site-control__item">
                            <div className="site-control__list-img">
                                <Image style={{ height: "auto" }} className="site-control__img" src={"/assets/home/control-plane/media-3.png"} alt="control-media" width={116} height={116} />
                            </div>
                            <h2>Operate</h2>
                            <h3>Agents</h3>
                            <Image style={{ height: "auto" }} src={"/assets/home/control-plane/line.svg"} className="site_controll_card_line_1" width={116} height={116} alt="" />
                        </li>
                        <span className="site_controll_card_line"></span>
                        <p className="site_controll_text">Tamper-proof credentials that can be validated in any environment.</p>
                    </div>
                    <div className="site-control__list_box">
                        <li className="site-control__item">
                            <div className="site-control__list-img">
                                <Image style={{ height: "auto" }} className="site-control__img" src={"/assets/home/control-plane/media-4.png"} alt="control-media" width={116} height={116} />
                            </div>
                            <h2>Network</h2>
                            <h3>Agents</h3>
                            <Image style={{ height: "auto" }} src={"/assets/home/control-plane/line.svg"} className="site_controll_card_line_1" width={116} height={116} alt="" />
                        </li>
                        <span className="site_controll_card_line"></span>
                        <p className="site_controll_text">Align agent-to-agent interactions to policies at runtime.</p>
                    </div>
                </ul>
            </div>
        </section>
    )
}
