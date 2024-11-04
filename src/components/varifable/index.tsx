import { FC } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface IVarifable {}

export const Varifable: FC<IVarifable> = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            ".verify-card",
            { opacity: 0, yPercent: 10 },
            {
                opacity: 1,
                yPercent: 0,
                stagger: 0.2,
                duration: 1,

                scrollTrigger: {
                    trigger: ".verify",
                    start: "top bottom-=20%",
                    end: "top+=100% top",
                    toggleActions: "play none none reverse",
                },
            }
        )
    }, [])

    return (
        <section className="varifable">
            <div className="varifable-container">
                <div className="varifable-info">
                    <h2 className="varifable-basic">The Basics</h2>
                    <h2 className="varifable-title reveal">Verifiable Compute</h2>
                    <div className="verify">
                        <p className="verify-text">Let&apos;s you Verify:</p>
                        <div className="verify-cards">
                            <div className="verify-card">
                                <div className="verify-card-img">
                                    <Image style={{ height: "auto" }} src={"/assets/home/varifable/database.svg"} alt="" width={500} height={500} />
                                    <Image style={{ height: "auto" }} className="arrows" src={"/assets/home/varifable/arrow.svg"} alt="" width={500} height={500} />
                                </div>
                                <div>
                                    <p className="verify-card-text">
                                        What data <br />
                                        goes into an <br />
                                        AI workflow
                                    </p>
                                </div>
                            </div>
                            <div className="verify-card">
                                <div className="verify-card-img">
                                    <Image style={{ height: "auto" }} src={"/assets/home/varifable/cpu.svg"} alt="" width={500} height={500} />
                                    <Image style={{ height: "auto" }} className="arrows" src={"/assets/home/varifable/arrow.svg"} alt="" width={500} height={500} />
                                </div>
                                <div>
                                    <p className="verify-card-text">What code is run and where it is executed</p>
                                </div>
                            </div>
                            <div className="verify-card">
                                <div className="verify-card-img">
                                    <Image style={{ height: "auto" }} src={"/assets/home/varifable/fingerprint.svg"} alt="" width={500} height={500} />
                                    <Image style={{ height: "auto" }} className="arrows" src={"/assets/home/varifable/arrow.svg"} alt="" width={500} height={500} />
                                </div>
                                <div>
                                    <p className="verify-card-text">The AI output is genuine and secure</p>
                                </div>
                            </div>
                            <div className="verify-card">
                                <div className="verify-card-img">
                                    <Image style={{ height: "auto" }} src={"/assets/home/varifable/certificate.svg"} alt="" width={500} height={500} />
                                </div>
                                <div>
                                    <p className="verify-card-text">AI is governed by policies and regulations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="compute_bottom_card varifable_bottom_card reveal"
                        style={{
                            backgroundImage: `url("/assets/home/hero/card.png")`,
                        }}
                    >
                        <span className="varifable_free_text">Free</span>
                        <h4 className="compute_card_title_2 varifable_bottom_card_text">See Verifiable Compute implementations.</h4>
                        <button className="compute_card_btn">
                            <span className="compute_card_btn_round"></span>
                            View Demo
                        </button>
                    </div>
                </div>
                <div className="evolved">
                    <div className="evolved-info">
                        <h2 className="varifable-basic">The Problem</h2>
                    </div>
                    <h2 className="evolved-title reveal">Evolved AI = Evolved Threats</h2>
                </div>
            </div>
        </section>
    )
}
