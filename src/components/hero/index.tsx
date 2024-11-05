import { useEffect, useRef } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"


export const Hero = () => {
    const refVideo = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (window.innerWidth > 1024) {
            if (refVideo.current) {
                refVideo.current.play()
            }

            gsap.to(".Header_top", {
                y: 50,
                duration: 0.2,
            })
            gsap.to(".nav_item", {
                x: -200,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
            })

            gsap.timeline()
                .to(".jump_animation", { scale: 1 }) // Scale 1.2 ga o'tadi
                .to(".jump_animation", { scale: 0.9 }) // Scale 1.2 ga o'tadi
                .to(".jump_animation", { scale: 1 }) // Scale 1 ga qaytadi

            gsap.timeline().to(".header_nav_list", { scale: 1 }).to(".header_nav_list", { scale: 0.9 }).to(".header_nav_list", { scale: 1 })

            gsap.to(".hero_title_span", {
                y: -100,
                opacity: 1,
                duration: 0.3,
                stagger: 0.2,
            })
            gsap.to(".hero_text p", {
                y: -30,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            })
            gsap.to(".hero_bottom_text", {
                y: -30,
                opacity: 1,
                duration: 0.2,
                stagger: 0.1,
            })
            gsap.to(".hero_bottom_text span", {
                y: -20,
                opacity: 1,
                duration: 0.3,
                stagger: 0.2,
            })
            gsap.to(".hero_bottom_text_word", {
                filter: "drop-shadow(0px 0px 5px #61FFB0)",
                duration: 0.3,
                delay: 0.3,
            })

            gsap.timeline()
                .to(".hero_bottom_text_word", {
                    display: "none",
                    delay: 1,
                })
                .to(".hero_bottom_text_word_2", {
                    display: "block",
                    filter: "drop-shadow(0px 0px 5px #29A2FF)",
                    duration: 0.5,
                })
                .to(".hero_bottom_text_word_2", {
                    display: "none",
                })
                .to(".hero_bottom_text_word_3", {
                    display: "block",
                    filter: "drop-shadow(0px 0px 5px #61FFB0)",
                    duration: 0.5,
                })
                .to(".hero_bottom_text_word_3", {
                    display: "block",
                    filter: "drop-shadow(0px 0px 0px #61FFB0)",
                    duration: 0.3,
                    delay: 0.3,
                })

            gsap.to(".hero_big_wrapper", {
                ease: "slow(0.3,0.7,false)",
                duration: 0.5,
                delay: 9,
                scale: 0.5,
                opacity: 0,
            })
            // gsap.to(".top_animation", {
            //     y: 30,
            //     opacity: 0,
            //     duration: 0.5,
            //     delay: 9,
            // })
            gsap.to(".compute_center_logo", {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                delay: 11,
            })
            gsap.to(".compute_center_logo", {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                delay: 11,
            })

            const time_line_center_card = gsap
                .timeline()
                time_line_center_card
                .to(".compute_center_card_left", {
                    duration: 0.5,
                    delay: 11.5,
                    x: 250,
                    opacity: 1,
                })
                .to(".compute_center_card_left", {
                    // ease: "power4.out",
                    duration: 0.3,
                    x: 260,
                })
                .to(".compute_center_card_left", {
                    // ease: "power4.out",
                    duration: 0.3,
                    // duration:0.5,
                    x: 240,
                })
                .to(".compute_center_card_left", {
                    // ease: "power4.out",
                    duration: 0.5,
                    x: 255,
                })
                .to(".compute_center_card_left", {
                    // ease: "power4.out",
                    duration: 0.5,
                    // duration:0.5,
                    x: 245,
                })
                .to(".compute_center_card_left", {
                    // ease: "power4.out",
                    duration: 0.5,
                    x: 250,
                })

            const time_line_center_card2 = gsap
                .timeline()
                time_line_center_card2
                .to(".compute_center_card_left_right", {
                    duration: 0.5,
                    delay: 11.5,
                    x: -250,
                    opacity: 1,
                })
                .to(".compute_center_card_left_right", {
                    // ease: "power4.out",
                    duration: 0.3,
                    x: -260,
                })
                .to(".compute_center_card_left_right", {
                    // ease: "power4.out",
                    duration: 0.3,
                    // duration:0.5,
                    x: -240,
                })
                .to(".compute_center_card_left_right", {
                    // ease: "power4.out",
                    duration: 0.5,
                    x: -255,
                })
                .to(".compute_center_card_left_right", {
                    // ease: "power4.out",
                    duration: 0.5,
                    // duration:0.5,
                    x: -245,
                })
                .to(".compute_center_card_left_right", {
                    // ease: "power4.out",
                    duration: 0.5,
                    x: -250,
                })

            gsap.to(".compute_title span", {
                delay: 11.5,
                y: -60,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            })
            gsap.to(".compute_text p", {
                delay: 11.5,
                y: -20,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            })
            gsap.fromTo(
                ".compute_card_animation",
                {
                    opacity: 0,
                    scale: 0,
                    rotate: 270,
                    yPercent: 100,
                },
                {
                    delay: 11.5,
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    rotate: 360,
                    yPercent: 0,
                }
            )
        }
    }, [])

    return (
        <div className={clsx(styles.Hero)}>
            <video src={"/assets/video/hero.mp4"} ref={refVideo} muted className="hero_bg_video" />

            <div className="hero_big_wrapper">
                <div className="hero_big_container">
                    <nav className="nav">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <Link href={"#"} className="nav_link ">
                                    Overview
                                </Link>
                            </li>
                            <li className="nav_item">
                                <div className="border_r"></div>
                            </li>
                            <li className="nav_item">
                                <Link href={"#"} className="nav_link  pl-7">
                                    Technology
                                </Link>
                            </li>
                            <li className="nav_item">
                                <div className="border_r"></div>
                            </li>
                            <li className="nav_item">
                                <Link href={"#"} className="nav_link  pl-7">
                                    Customer Testimonials
                                </Link>
                            </li>
                            <li className="nav_item">
                                <div className="border_r"></div>
                            </li>
                            <li className="nav_item">
                                <Link href={"#"} className="nav_link pl-7">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <section className="hero">
                        <div className="hero_container">
                            <h1 className="hero_title">
                                <span className="hero_title_span">Verify</span> <span className="hero_title_span">to</span> <span className="hero_title_span">Trust,</span>{" "}
                                <span className="hero_title_span">AI</span>
                            </h1>
                            <div className="hero_text">
                                <p>Introducing Verifiable Compute.</p>
                                <p>Ready for Agentic AI.</p>
                            </div>
                            <div className="hero_bottom_box">
                                <p className="hero_bottom_text">Certify and Protect Agentic Workflows with </p>
                                <span className="hero_bottom_text">
                                    <span>the</span> <span>First</span>
                                    <span className="hero_bottom_text_word">Auditable</span>
                                    <span className="hero_bottom_text_word_2">Persistent</span>
                                    <span className="hero_bottom_text_word_3">Secure</span>
                                    <span>Proof</span>
                                    <span>of</span>
                                    <span>Governance.</span>
                                </span>
                            </div>
                            <p className="hero_mobile_bottom_text">
                                Certify and Protect Agentic Workflows with the First <span>Auditable</span> Proof of Governance.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <section className="compute">
                <div className="compute_container">
                    <h2 className="compute_title">
                        <span>A</span> <span>New</span> <span>Era</span> <span>of</span> <span>Compute</span>
                    </h2>
                    <div className="compute_text">
                        <p>Launching in 2025.</p>
                        <p>Evolves Trust for Agentic AI</p>
                    </div>
                    <div className="compute_center">
                        <div className="compute_center_card compute_center_card_left">
                            <Image src={"/assets/home/hero/logo-1.webp"} alt="" className="compute_card_img" width={1000} height={1000} quality={100} />
                        </div>
                        <div className="compute_center_logo">
                            <Image style={{ height: "auto" }} src={"/assets/home/hero/center_logo.svg"} alt="" className="center_logo" width={1000} height={1000} />
                        </div>
                        <div className="compute_center_card compute_center_card_2 compute_center_card_left_right">
                            <Image src={"/assets/home/hero/logo-2.webp"} alt="" className="compute_card_img" width={1000} height={1000} quality={100} />
                        </div>
                    </div>
                    <div
                        className="compute_bottom_card compute_card_animation scale_0 hero_card"
                        style={{
                            backgroundImage: `url("/assets/home/hero/card.png")`,
                        }}
                    >
                        <h3 className="compute_card_title">
                            Introduction: <br />
                            Verifiable Compute
                        </h3>
                        <h4 className="compute_card_title_2 line_27">How does it work?</h4>
                        <button className="compute_card_btn">
                            <span className="compute_card_btn_round"></span>
                            Video: Learn more
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
