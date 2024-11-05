import clsx from "clsx"
import "./index.module.scss"
import { dataPoints } from "./data/dataPoints"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export const Risk = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            ".risk_points_item",
            {
                opacity: 0,
                yPercent: 20,
            },
            {
                opacity: 1,
                yPercent: 0,
                stagger: {
                    from: "random",
                    amount: 0.4,
                },
                scrollTrigger: {
                    trigger: ".risk_points",
                    start: "top top+=30%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                    // markers: true,
                },
            }
        )
    }, [])

    return (
        <section className="risk">
            <video src={"/assets/video/evolved_bg.mp4"} muted loop autoPlay className="evolved_bg_video" />
            <div className="risk_container">
                <div className="risk-info reveal">
                    <p className="risk-text-one">
                        <span className="risk-span">91% of enterprises</span> face software
                    </p>
                    <p className="risk-text-two ">supply chain attacks each year.</p>
                    <p className="risk_title mb-2 ">91% of enterprises face software</p>
                    <p className="risk_title mb-10 ">supply chain attacks each year.</p>
                    <div
                        style={{
                            maxWidth: "533px",
                        }}
                    >
                        <p className="risk-text-three risk_center_text mb-10 reveal">
                            This problem will grow exponentially software as billions of autonomous AI agents are assembled and provisioned in the next 5 years.
                        </p>
                        <p className="risk-text-four risk_center_text mb-100 reveal">
                            You need new solutions to address new vulnerabilities distributed across your AI developers, partners, and suppliers.
                        </p>

                        <p className="risk-text-five reveal">
                            You can&apos;t risk <br /> blind trust of AI
                        </p>
                    </div>
                </div>
            </div>
            <div className="risk_points">
                {dataPoints.map((e, i) => (
                    <div className={clsx("risk_points_item", `risk_points_item_${i + 1}`)} key={i}>
                        {e.text}
                        <Image src={"/assets/home/risk/alert.svg"} width={100} height={100} alt="icon" />
                    </div>
                ))}
            </div>
        </section>
    )
}
