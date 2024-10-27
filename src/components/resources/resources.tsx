import "./ui/style.css"

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import right from "../../app/img/customer/right.svg"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export default function Resources() {
    useEffect(() => {
        if (window.innerWidth > 768) {
            gsap.to(".resources__wrap", {
              scrollTrigger: {
                trigger: ".resources",
                start: "top top",
                end: "600% top",
                scrub: true,
                pin: true,
                pinSpacing: true,
              },
              right: "80%"
            });
        }
    }, [])
    
    return (
        <section className="resources">
            <div className="resources__container">
                <h2 className="resources__title">
                    Resources
                </h2>
                <div className="resources__wrap">
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Report
                            </h2>
                            <p className="resources__wrap__cart__text">Trail of Bits and EQTY survey the security risk in
                                your
                                agentic AI workflows.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Announcement
                            </h2>
                            <p className="resources__wrap__cart__text">EQTY Partners with Foundry to bring verifiable compute
                                across North America.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Whitepaper
                            </h2>
                            <p className="resources__wrap__cart__text1">EQTY + NVIDIA + Intel Verifiable Compute whitepaper</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Announcement
                            </h2>
                            <p className="resources__wrap__cart__text2">EQTY joins the Linux Foundation&apos;s SLSA working group to
                                strengthen Agentic AI supply chains.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Announcement
                            </h2>
                            <p className="resources__wrap__cart__text">EQTY announces new cryptographic features across the
                                Hedera ecosystem.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Announcement
                            </h2>
                            <p className="resources__wrap__cart__text">EQTY partners with Databricks to unlock verifiable
                                agentic governance.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="resources__wrap__cart">
                        <div className="resources__wrap__cart__container">
                            <h2 className="resources__wrap__cart__title">
                                Report
                            </h2>
                            <p className="resources__wrap__cart__text">Learn how EQTY brings new levels of verifiability to
                                agentic workflows.</p>
                            <Link href="#" className="resources__wrap__cart__link">
                                Read
                                <Image src={right} alt="" className="resources__wrap__cart__icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
