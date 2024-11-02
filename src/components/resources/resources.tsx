import "./ui/style.scss"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import right from "../../app/img/customer/right.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { dataCards } from "./data/dataCards"

gsap.registerPlugin(ScrollTrigger)

export default function Resources() {
    useEffect(() => {
        if (window.innerWidth > 768) {
            gsap.set(".resourcesWrap", {
                height: `${dataCards.length * 50}lvh`,
            })

            gsap.fromTo(
                ".resources__wrap",
                { xPercent: 30 },
                {
                    scrollTrigger: {
                        trigger: ".resourcesWrap",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.5,
                    },
                    xPercent: -80,
                }
            )
        }
    }, [])

    return (
        <section className="resourcesWrap">
            <section className="resources">
                <div className="resources__container">
                    <h2 className="resources__title reveal">Resources</h2>
                    <div className="resources__wrap reveal">
                        {dataCards.map((e, i) => (
                            <div className="resources__wrap__cart" key={i}>
                                <div className="resources__wrap__cart__container">
                                    <div className="resources__wrap__cart__container_top">
                                        <h2 className="resources__wrap__cart__title">{e.title}</h2>
                                        <p className="resources__wrap__cart__text">{e.text}</p>
                                    </div>
                                    <Link href="#" className="resources__wrap__cart__link">
                                        Read
                                        <Image src={right} alt="" className="resources__wrap__cart__icon" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}
