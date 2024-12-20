"use client"

import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import header_logo from "./img/header/header_logo.svg"
import compute_card from "./img/compute/card.png"
import compute1 from "./img/compute/compute_1.png"
import compute2 from "./img/compute/compute_2.png"
import compute_center_logo from "./img/compute/center_logo.svg"
import arrow from "./img/varifable/arrow.svg"
import certificate from "./img/varifable/certificate.svg"
import cpu from "./img/varifable/cpu.svg"
import database from "./img/varifable/database.svg"
import fingerprint from "./img/varifable/fingerprint.svg"
import varifable_card from "./img/varifable/varifable_card.png"
import dont_card_bg from "./img/dont/card_bg.png"
import runtimeRightImage from "./img/runtime/runtime_ptichka.svg"
import top_runtime_card from "./img/runtime/top_runtime.png"
import bottom_runtime_card from "./img/runtime/bottom_runtime.png"
import media_1 from "./img/controll/media-1.png"
import media_2 from "./img/controll/media-2.png"
import media_3 from "./img/controll/media-3.png"
import media_4 from "./img/controll/media-4.png"
import build_logo_1 from "./img/build/bulid_logo_1.svg"
import build_logo_2 from "./img/build/bulid_logo_2.svg"
import build_logo_3 from "./img/build/bulid_logo_3.svg"
import build_logo_4 from "./img/build/bulid_logo_4.svg"
import build_card_bg from "./img/build/build_card_bg.png"
import build_center_line from "./img/build/center_line.svg"

import revolution_section__nvidia_logo from "./img/revalution/revolution-nvidia-logo.png"
import revolution_cpu_img from "./img/revalution/revolution-cpu-img.png"
import mother_board from "./img/revalution/mother_board.png"
import dell_server from "./img/revalution/dell_server.png"

import acros from "./img/ai/acrros.svg"
import sertificate_1 from "./img/ai/sertificate_1.svg"
import sertificate_2 from "./img/ai/sertificate_2.svg"
import sertificate_3 from "./img/ai/sertificate_3.svg"
import sertificate_container_bg from "./img/ai/sertificate_container_bg.png"
import sertificate_right from "./img/ai/sertificate_right_img.png"

import trust_right from "@/app/img/trust/trust_right.svg"
import trust_right_active from "@/app/img/trust/trust_right_active.svg"
import banner from "./img/customer/banner.png"
import banner2 from "./img/customer/banner2.png"
import banner3 from "./img/customer/banner3.png"
import banner4 from "./img/customer/banner4.png"
import banner5 from "./img/customer/banner5.png"
import banner6 from "./img/customer/banner6.png"
import banner7 from "./img/customer/banner7.png"
import banner8 from "./img/customer/bannner8.png"
import icon from "./img/customer/icon.svg"
import icon2 from "./img/customer/icon2.svg"
import icon3 from "./img/customer/icon3.svg"
import line from "./img/controll/line.svg"

import hero from "./video/hero.mp4"
import evolved_bg from "./video/evolved_bg.mp4"

// gsap
import gsap from "gsap"

// conponents
import Trust from "@/components/trust"
import Protsessor from "@/components/protsesor"
import Resources from "@/components/resources/resources"
// import Header_hero from "@/components/header_hero/header_hero";

import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from "@/components/footer/footer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { dataHeroOpportunity } from "@/data/dataHeroOpportunity"
import clsx from "clsx"
import { Ai } from "@/components/ai"
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const [across_text, setAcross_text] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [trust, setTrust] = useState(false)
    const [windowInnerWidth, setWindowInnerWidth] = useState<number | null>(null);

    const updateWindowWidth = () => {
        setWindowInnerWidth(window.innerWidth);
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Set initial window width
            setWindowInnerWidth(window.innerWidth);
    
            // Event listener to handle window resize
            window.addEventListener("resize", updateWindowWidth);
    
            // Define the function as a function expression
            const header_hero_animation_fun = () => {
                if (window.innerWidth > 1024) {
                    if (videoRef.current) {
                        videoRef.current.play()
                    }
                    gsap.to(".Header_top", {
                        y: 50,
                        duration: 0.2,
                        // ease: "power3.inOut",
                    })
                    gsap.to(".nav_item", {
                        x: -200,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                    })
                    const timeline = gsap.timeline()
    
                    timeline
                        .to(".jump_animation", { scale: 1 }) // Scale 1.2 ga o'tadi
                        .to(".jump_animation", { scale: 0.9 }) // Scale 1.2 ga o'tadi
                        .to(".jump_animation", { scale: 1 }) // Scale 1 ga qaytadi
    
                    const time_line_navlist = gsap.timeline()
    
                    time_line_navlist
                        .to(".header_nav_list", { scale: 1 }) // Scale 0 ga ketadi
                        .to(".header_nav_list", { scale: 0.9 }) // Scale 1.2 ga o'tadi
                        .to(".header_nav_list", { scale: 1 }) // Scale 1 ga qaytadi
    
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
    
                    const word_timeLine = gsap.timeline()
                    word_timeLine
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
                    gsap.to(".top_animation", {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                        delay: 9,
                    })
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
    
                    const time_line_center_card = gsap.timeline()
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
    
                    const time_line_center_card2 = gsap.timeline()
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
                            marginTop: -266,
                        },
                        {
                            delay: 11.5,
                            duration: 1,
                            opacity: 1,
                            scale: 1,
                            rotate: 360,
                            marginTop: -56,
                        }
                    )
                }
            }
            header_hero_animation_fun();
    
            gsap.fromTo(
                ".compliant-ready-content",
                {
                    scale: 1,
                    opacity: 1,
                    yPercent: 0,
                },
                {
                    scrollTrigger: {
                        trigger: ".compliant-ready-section",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5,
                        // pin: true,
                        // pinSpacing: false,
                    },
                    scale: 0.5,
                    opacity: 0,
                    yPercent: 100,
                }
            )
    
            gsap.to(".dont_bg", {
                scrollTrigger: {
                    trigger: ".risk",
                    start: "50% top", // Ekranning o'rtasiga kelganda animatsiya boshlanadi
                    end: "bottom top", // Element yuqoriga chiqqanida animatsiya tugaydi
                    scrub: true,
                    pin: true, // Tepaga yopishtiradi
                    pinSpacing: false, // Scroll joyini o'zgartirmaslik uchun
                },
            })
            gsap.fromTo(
                ".customer_card_animation",
                { scale: 0 },
                {
                    scrollTrigger: {
                        trigger: ".customer__wrap",
                        start: "top bottom", // Ekranning o'rtasiga kelganda animatsiya boshlanadi
    
                        toggleActions: "play none none reset",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: {
                        amount: 0.2,
                        from: "random",
                    },
                }
            )
    
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".site-control-wrapper",
                    start: "top top",
                    end: "top+=100% top",
                    scrub: 2,
                    toggleActions: "play none none reset",
                },
            })
                .fromTo(
                    ".site_controll_card_line",
                    { height: 0 },
                    {
                        duration: 0.5,
                        height: 64,
                        stagger: 0.5,
                    },
                    "<"
                )
                .fromTo(
                    ".site_controll_card_line_1",
                    { width: 0 },
                    {
                        duration: 0.5,
                        width: 300,
                        stagger: 0.5,
                    },
                    "<"
                )
                .fromTo(
                    ".site_controll_text",
                    {
                        yPercent: "93",
                        opacity: 0,
                    },
                    {
                        duration: 0.5,
                        yPercent: "-30",
                        opacity: 1,
                        stagger: 0.5,
                    },
                    "<"
                )
    
    
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".site-control-wrapper",
                    start: "top top",
                    end: "top+=100% top",
                    scrub: 2,
                    toggleActions: "play none none reset",
                },
            })
                .to(".control__img_1", {
                    duration: 1,
                    rotate: 360,
                    ease: "linear" // Smooth continuous rotation
                }, "<");
    
            const varifable = gsap.utils.toArray(`.varifable-basic`) as HTMLDivElement[]
    
            varifable.map((e) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        start: "top bottom-=20%",
                        end: "top+=100% top",
    
                        toggleActions: "play none none reverse",
                    },
                }).fromTo(
                    e,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                    }
                )
            })
    
            const reveals = gsap.utils.toArray(`.reveal`) as HTMLDivElement[]
    
            reveals.map((e) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        start: "top bottom-=20%",
                        end: "top+=100% top",
    
                        toggleActions: "play none none reverse",
                    },
                }).fromTo(
                    e,
                    { opacity: 0, y: 20 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                    }
                )
            })
    
            return () => {
                window.removeEventListener("resize", updateWindowWidth);
            };
        }
    }, [windowInnerWidth]);
    
    return (
        <>
            <div className="hero_header_compute_bg">
                <video src={hero} ref={videoRef} muted className="hero_bg_bideo"></video>
                <div className="Header_top top_animation">
                    <p className="Header_top_text">Verifiable Builds Launches with GitLab and Github</p>
                </div>

                <header className="header top_animation">
                    <div className="header_container">
                        <Link href={"#"} className="jump_animation header_logo_link">
                            <Image style={{ height: "auto" }} src={header_logo} alt="" />
                        </Link>
                        <ul className="header_nav_list">
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    Why EQTY
                                </Link>
                            </li>
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    Products
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9858 1.50391L5.99288 6.49679L1 1.50391" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    Technology
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9858 1.50391L5.99288 6.49679L1 1.50391" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    Solutions
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9858 1.50391L5.99288 6.49679L1 1.50391" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    About
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9858 1.50391L5.99288 6.49679L1 1.50391" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="list_nav_item">
                                <Link href={"#"} className="header_nav_link">
                                    Partners
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9858 1.50391L5.99288 6.49679L1 1.50391" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                        <button className="jump_animation header_sign_up_btn">
                            <span className="header_sign_up_btn_round"></span>
                            Sign Up
                        </button>
                        <button className="jump_animation hamburger">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </button>
                    </div>
                </header>

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
                                <Image style={{ height: "auto" }} src={compute1} alt="" className="compute_card_img" />
                            </div>
                            <div className="compute_center_logo">
                                <Image style={{ height: "auto" }} src={compute_center_logo} alt="" className="center_logo" />
                            </div>
                            <div className="compute_center_card compute_center_card_2 compute_center_card_left_right">
                                <Image style={{ height: "auto" }} src={compute2} alt="" className="compute_card_img" />
                            </div>
                        </div>
                        <div
                            className="compute_bottom_card compute_card_animation scale_0"
                            style={{
                                backgroundImage: `url(${varifable_card.src})`,
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

            {/* <Header_hero/> */}

            <section className="varifable">
                <div className="varifable-container">
                    <div className="varifable-info">
                        <h2 className="varifable-basic">The Basics</h2>
                        <h2 className="varifable-title reveal">Verifiable Compute</h2>
                        <div className="verify reveal">
                            <p className="verify-text">Let&apos;s you Verify:</p>
                            <div className="verify-cards">
                                <div className="verify-card">
                                    <div className="verify-card-img">
                                        <Image style={{ height: "auto" }} src={database} alt="" />
                                        <Image style={{ height: "auto" }} className="arrows" src={arrow} alt="" />
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
                                        <Image style={{ height: "auto" }} src={cpu} alt="" />
                                        <Image style={{ height: "auto" }} className="arrows" src={arrow} alt="" />
                                    </div>
                                    <div>
                                        <p className="verify-card-text">What code is run and where it is executed</p>
                                    </div>
                                </div>
                                <div className="verify-card">
                                    <div className="verify-card-img">
                                        <Image style={{ height: "auto" }} src={fingerprint} alt="" />
                                        <Image style={{ height: "auto" }} className="arrows" src={arrow} alt="" />
                                    </div>
                                    <div>
                                        <p className="verify-card-text">The AI output is genuine and secure</p>
                                    </div>
                                </div>
                                <div className="verify-card">
                                    <div className="verify-card-img">
                                        <Image style={{ height: "auto" }} src={certificate} alt="" />
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
                                backgroundImage: `url(${compute_card.src})`,
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

            <section className="risk">
                <video src={evolved_bg} muted loop autoPlay className="evolved_bg_bideo"></video>
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
            </section>

            <section className="dont_bg">
                <div className="dont">
                    <div className="dont_container">
                        <div className="dont_left">
                            <h2 className="varifable-basic bg-white">The Opportunity:</h2>
                            <h3 className="dont_title backgroundClip reveal">Don&apos;t Just Trust AI</h3>
                            <h4 className="dont_title_center md_hidden reveal ">
                                At Runtime, <span>Verify</span>
                            </h4>
                            <div
                                className="compute_bottom_card dont_bottom_card reveal"
                                style={{
                                    backgroundImage: `url(${dont_card_bg.src})`,
                                }}
                            >
                                <h4 className="compute_card_title_2 varifable_bottom_card_text dont_bottom_card_text mb-3">Unlock innovation with</h4>
                                <span className="varifable_free_text dont_free_text  mb-8">Verifiable AI</span>
                                <button className="compute_card_btn dont_bottom_card_btn">
                                    <span className="compute_card_btn_round"></span>
                                    Download White paper
                                </button>
                            </div>
                            <h4 className="dont_title_center max_md_hidden">
                                At Runtime, <span>Verify</span>
                            </h4>
                        </div>
                        <div className="dont_right reveal">
                            <Swiper
                                className="dont_right_swiper"
                                direction="vertical"
                                slidesPerView={"auto"}
                                spaceBetween={25}
                                loop
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                centeredSlides
                            >
                                {[...dataHeroOpportunity, ...dataHeroOpportunity].map((e, i) => (
                                    <SwiperSlide key={i}>
                                        {({ isActive }) => (
                                            <div className={clsx("dont_right_card", isActive && "active")}>
                                                <h3 className="dont_right_title">{e.title}</h3>
                                                <p className="dont_right_text">{e.text}</p>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="runtime">
                <div className="runtime__container">
                    <div className="runtime__box">
                        <h2 className="runtime__wrap__left__title reveal">
                            At Runtime, <span className="runtime__wrap__left__title__span">Verify</span>
                        </h2>
                        <div className="runtime_left_bottom reveal">
                            <div className="runtime_bottom_card runtime_bottom_card_1">
                                <Image style={{ height: "auto" }} src={top_runtime_card} alt="" className="runtime_bottom_card_img" />
                            </div>
                            <div className="runtime_bottom_card runtime_bottom_card_2">
                                <Image style={{ height: "auto" }} src={bottom_runtime_card} alt="" className="runtime_bottom_card_img" />
                            </div>
                        </div>
                    </div>
                    <div className="runtime__right__box">
                        <div className="dont_right_card active reveal">
                            <h3 className="dont_right_title">AI Governance</h3>
                            <p className="dont_right_text">Proof AI processes are compliant</p>
                        </div>
                        <ul className="runtime__right__list1 reveal">
                            <li className="runtime__right__item">
                                <p className="runtime__right__link">
                                    <Image style={{ height: "auto" }} src={runtimeRightImage} alt="" />
                                    Minimize Risks
                                </p>
                            </li>
                            <li className="runtime__right__item">
                                <p className="runtime__right__link">
                                    <Image style={{ height: "auto" }} src={runtimeRightImage} alt="" />
                                    Automate Auditing
                                </p>
                            </li>
                            <li className="runtime__right__item">
                                <p className="runtime__right__link">
                                    <Image style={{ height: "auto" }} src={runtimeRightImage} alt="" />
                                    Respond to Incidents
                                </p>
                            </li>
                            <li className="runtime__right__item">
                                <p className="runtime__right__link">
                                    <Image style={{ height: "auto" }} src={runtimeRightImage} alt="" />
                                    Align Collaboration
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={`site-control-wrapper_wrap`}>
                <section className={`site-control-wrapper`}>
                    <div className="container">
                        <div className="site-control">
                            <h2 className="site-control__title reveal">A Control Plane for Autonomous AI</h2>
                            <button className="site-control__btn reveal">
                                <span className="site-control__span" /> Learn More about Agentic AI
                            </button>
                            <h3 className="site-control__title-text reveal">Verifiable Compute enables best-in-class compliance as you:</h3>
                        </div>
                        <ul className="site-control__list reveal">
                            <div className="site-control__list_box site_control__list_box_1">
                                <li className="site-control__item">
                                    <div className="site-control__list-img">
                                        <Image style={{ height: "auto" }} className="site-control__img" src={media_1} alt="control-media" width={116} />
                                    </div>
                                    <h2>Create</h2>
                                    <h3>Agents</h3>
                                    <Image style={{ height: "auto" }} src={line} className="site_controll_card_line_1" alt="" />
                                </li>
                                <span className="site_controll_card_line"></span>
                                <p className="site_controll_text">Auditable records of an agent`&apos;s components and training.</p>
                            </div>
                            <div className="site-control__list_box">
                                <li className="site-control__item">
                                    <div className="site-control__list-img">
                                        <Image style={{ height: "auto" }} className="site-control__img" src={media_2} alt="control-media" width={116} />
                                    </div>
                                    <h2>Provision</h2>
                                    <h3>Agents</h3>
                                    <Image style={{ height: "auto" }} src={line} className="site_controll_card_line_1" alt="" />
                                </li>
                                <span className="site_controll_card_line"></span>
                                <p className="site_controll_text">Authenticate what an agent is doing and control their dataflow and actions.</p>
                            </div>
                            <div className="site-control__list_box">
                                <li className="site-control__item">
                                    <div className="site-control__list-img">
                                        <Image style={{ height: "auto" }} className="site-control__img" src={media_3} alt="control-media" width={116} />
                                    </div>
                                    <h2>Operate</h2>
                                    <h3>Agents</h3>
                                    <Image style={{ height: "auto" }} src={line} className="site_controll_card_line_1" alt="" />
                                </li>
                                <span className="site_controll_card_line"></span>
                                <p className="site_controll_text">Tamper-proof credentials that can be validated in any environment.</p>
                            </div>
                            <div className="site-control__list_box">
                                <li className="site-control__item">
                                    <div className="site-control__list-img">
                                        <Image style={{ height: "auto" }} className="site-control__img" src={media_4} alt="control-media" width={116} />
                                    </div>
                                    <h2>Network</h2>
                                    <h3>Agents</h3>
                                    <Image style={{ height: "auto" }} src={line} className="site_controll_card_line_1" alt="" />
                                </li>
                                <span className="site_controll_card_line"></span>
                                <p className="site_controll_text">Align agent-to-agent interactions to policies at runtime.</p>
                            </div>
                        </ul>
                    </div>
                </section>
            </section>

            <section className="bulid">
                <div className="build_container">
                    <h2 className="varifable-basic bg-white">Our Customer </h2>
                    <h3 className="builf_title reveal">Built For Industry Leaders</h3>
                    <div
                        className="compute_bottom_card dont_bottom_card bulid_bottom_card lg_hidden reveal"
                        style={{
                            backgroundImage: `url(${build_card_bg.src})`,
                        }}
                    >
                        <h4 className="bulid_bottom_card_title mb-3">
                            Learn more about our <br /> customer success stories
                        </h4>
                        <span className="varifable_free_text dont_free_text  mb-8">more...</span>
                        <button className="compute_card_btn dont_bottom_card_btn">
                            <span className="compute_card_btn_round"></span>
                            View Blog
                        </button>
                    </div>
                    <div className="build_cenrer_line reveal">
                        <Image style={{ height: "auto" }} src={build_center_line} alt="" className="build_cenrer_line_svg" />
                    </div>
                    <div className="build_bottom reveal">
                        <div
                            className="compute_bottom_card dont_bottom_card bulid_bottom_card max_lg_hidden"
                            style={{
                                backgroundImage: `url(${build_card_bg.src})`,
                            }}
                        >
                            <h4 className="bulid_bottom_card_title mb-3">
                                Learn more about our <br /> customer success stories
                            </h4>
                            <span className="varifable_free_text dont_free_text  mb-8">more...</span>
                            <button className="compute_card_btn dont_bottom_card_btn">
                                <span className="compute_card_btn_round"></span>
                                View Blog
                            </button>
                        </div>
                        <div className="build_bottom_right">
                            <div className="build_bottom_right_logo_box mr-118">
                                <Image style={{ height: "auto" }} src={build_logo_1} alt="logo" className="build_bottom_right_logo" />
                            </div>
                            <div className="build_bottom_right_logo_box mr-118">
                                <Image style={{ height: "auto" }} src={build_logo_2} alt="logo" className="build_bottom_right_logo" />
                            </div>
                            <div className="build_bottom_right_logo_box mr-87">
                                <Image style={{ height: "auto" }} src={build_logo_3} alt="logo" className="build_bottom_right_logo" />
                            </div>
                            <div className="build_bottom_right_logo_box">
                                <Image style={{ height: "auto" }} src={build_logo_4} alt="logo" className="build_bottom_right_logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Trust />

            <Protsessor />

            <section className="revolution-section">
                <div className="revolution-section__container">
                    <div className="revolution-section__content">
                        <div className="revolution-section__header">
                            <span className="revolution-section__header-text">A Revolution</span>
                        </div>

                        <h2 className="revolution-section__title">Two Powerhouses in compute come together</h2>
                    </div>

                    <div className="revolution-section__images-and-text">
                        <div className="revolution-section__image_box">
                            <Image style={{ height: "auto" }} src={revolution_section__nvidia_logo} alt="NVIDIA Logo" className="revolution-section__image" />
                        </div>

                        <div className="revolution-section__text">
                            <p>NVIDIA&apos;s Grace Hopper and Blackwell Architecture with Confidential Compute.</p>
                            <p>Intel&apos;s 5th Generation Xeon Processor with the TDX Trust Authority.</p>
                        </div>

                        <Image style={{ height: "auto" }} src={revolution_cpu_img} alt="CPU Image" className="revolution-section__image_cpu" />
                    </div>

                    <div className="digital-notary__container">
                        <h3 className="digital-notary__title">Meet Your Digital Notary</h3>

                        <p className="digital-notary__description">EQTY Lab&apos;s hardware-backed solution notarizes all data and each compute cycle with advanced cryptography</p>
                    </div>

                    <div className="integrated-solutions">
                        <p className="integrated-solutions__title">
                            Integrated into <br /> Best-in-Class AI <br /> Solutions:
                        </p>

                        <div className="integrated-solutions__links">
                            <Link href={"#"}>
                                <svg width="146" height="24" viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M59.9283 15.9342V9.79025C59.9283 9.63025 59.8339 9.53425 59.6766 9.53425H57.6947V7.13425H59.6766C59.8339 7.13425 59.9283 7.03825 59.9283 6.87825V3.03825H62.7281V6.87825C62.7281 7.03825 62.8225 7.13425 62.9798 7.13425H65.7481V9.53425H62.9798C62.8225 9.53425 62.7281 9.63025 62.7281 9.79025V15.2302C62.7281 17.7902 63.6089 18.0142 64.7729 18.0142C65.9369 18.0142 65.8111 17.9502 66.1886 17.9182V20.4142C65.7167 20.4783 64.9302 20.5742 64.0494 20.5742C62.9483 20.5103 59.9283 20.5103 59.9283 15.9342ZM136.342 17.4382L138.638 16.2222C139.142 17.4382 140.148 18.2382 141.281 18.2382C142.413 18.2382 143.168 17.8542 143.168 16.7343C143.168 15.6143 142.696 15.5822 141.595 15.1982L140.022 14.6862C137.82 14.0142 136.751 12.7022 136.751 10.9102C136.751 9.11825 138.638 6.91025 141.186 6.91025C143.735 6.91025 144.93 8.03025 145.779 9.79025L143.483 11.0702C142.98 9.95025 142.13 9.31025 141.155 9.31025C140.18 9.31025 139.488 9.82225 139.488 10.6222C139.488 11.4222 139.991 11.8382 141.061 12.1582L142.633 12.6702C144.93 13.4062 146 14.6862 146 16.4462C146 19.2302 143.672 20.6382 141.312 20.6382C138.953 20.5742 137.065 19.3582 136.342 17.3743V17.4382ZM127.691 15.0382C127.628 15.1022 127.596 15.1342 127.596 15.1982V20.3182H124.733V1.40625H127.596V11.7422C127.596 11.8382 127.659 11.9662 127.753 11.9662C127.848 12.0302 127.974 11.9662 128.005 11.9022L132.63 7.10225H136.122L130.711 12.6702C130.616 12.7662 130.616 12.8942 130.711 12.9902L136.593 20.2862H133.101L128.571 14.5262C128.508 14.4622 128.477 14.4302 128.414 14.4302C128.351 14.4302 128.32 14.4303 128.257 14.4943L127.691 15.0062V15.0382ZM123.318 8.89425L121.493 10.6542C120.455 9.85425 119.417 9.50225 118.284 9.50225C115.894 9.50225 114.1 11.3262 114.1 13.7582C114.1 16.1902 115.894 18.0142 118.284 18.0142C120.675 18.0142 120.424 17.6302 121.556 16.8622L123.192 18.6222C120.864 20.3822 119.606 20.7022 118.001 20.7022C116.397 20.7022 114.352 20.0302 113.125 18.7182C111.93 17.5022 111.238 15.6782 111.238 13.7582C111.238 9.75825 114.1 6.84625 118.064 6.84625C119.323 6.84625 121.273 7.03825 123.349 8.92625L123.318 8.89425ZM109.916 3.23025C109.916 4.19025 109.13 4.99025 108.186 4.99025C107.242 4.99025 106.456 4.19025 106.456 3.23025C106.456 2.27025 107.242 1.47025 108.186 1.47025C109.13 1.47025 109.916 2.27025 109.916 3.23025ZM109.633 20.3182H106.77V7.16625H109.633V20.3182ZM100.542 14.5582V20.3822H97.6788V7.23025H100.479V8.83025C100.479 8.92625 100.542 9.05425 100.636 9.08625C100.73 9.15025 100.856 9.08625 100.888 8.99025C101.611 7.77425 102.964 6.97425 104.442 6.97425C105.921 6.97425 104.789 6.97425 104.914 7.03825V10.0142C104.757 9.95025 104.505 9.95025 104.254 9.95025C101.957 9.91825 100.542 11.7102 100.542 14.5902V14.5582ZM85.1582 13.7582C85.1582 11.3582 86.9514 9.50225 89.2164 9.50225C91.4814 9.50225 93.2746 11.3582 93.2746 13.7582C93.2746 16.1582 91.4814 18.0142 89.2164 18.0142C86.9514 18.0142 85.1582 16.1582 85.1582 13.7582ZM85.4414 18.7502H85.5357C85.5987 18.7502 85.693 18.8142 85.7559 18.8463C86.7312 19.9982 88.2097 20.6702 89.877 20.6702C93.4319 20.6702 96.1374 17.6302 96.1374 13.7582C96.1374 9.88625 95.5082 10.1422 94.3127 8.79825C93.1802 7.51825 91.5444 6.81425 89.8456 6.81425C88.1468 6.81425 86.7312 7.48625 85.7245 8.73425C85.6616 8.79825 85.5672 8.83025 85.4728 8.79825C85.3784 8.73425 85.3155 8.70225 85.3155 8.57425V1.43825H82.4528V20.3502H85.3155V19.0382C85.3155 18.8782 85.347 18.8462 85.4414 18.7822V18.7502ZM73.5499 18.0142C71.3163 18.0142 69.4917 16.1582 69.4917 13.7582C69.4917 11.3582 71.2849 9.50225 73.5499 9.50225C75.815 9.50225 77.6081 11.3582 77.6081 13.7582C77.6081 16.1582 75.7835 18.0142 73.5499 18.0142ZM80.2821 20.3182V7.16625H77.4823V8.47825C77.4823 8.57425 77.4194 8.70225 77.325 8.70225C77.2306 8.76625 77.1048 8.70225 77.0733 8.63825C76.1295 7.48625 74.6824 6.81425 72.9522 6.81425C69.3974 6.81425 66.6919 9.85425 66.6919 13.7262C66.6919 17.5982 69.4603 20.6382 72.9522 20.6382C76.4441 20.6382 76.0666 19.9662 77.0733 18.7182C77.1362 18.6222 77.2306 18.6222 77.325 18.6542C77.4194 18.7183 77.4823 18.7502 77.4823 18.8782V20.3182H80.2821ZM49.4525 18.0142C47.2189 18.0142 45.3943 16.1582 45.3943 13.7582C45.3943 11.3582 47.1874 9.50225 49.4525 9.50225C51.7175 9.50225 53.5107 11.3582 53.5107 13.7582C53.5107 16.1582 51.686 18.0142 49.4525 18.0142ZM56.1847 20.3182V7.16625H53.3848V8.47825C53.3848 8.57425 53.3219 8.70225 53.2275 8.70225C53.1331 8.76625 53.0073 8.70225 52.9759 8.63825C52.0321 7.48625 50.585 6.81425 48.8547 6.81425C45.2999 6.81425 42.5944 9.85425 42.5944 13.7262C42.5944 17.5982 45.3628 20.6382 48.8547 20.6382C52.3467 20.6382 51.9692 19.9662 52.9759 18.7182C53.0388 18.6222 53.1331 18.6222 53.2275 18.6542C53.3219 18.7183 53.3848 18.7502 53.3848 18.8782V20.3182H56.1847ZM34.2579 18.0142C31.9614 18.0142 30.1997 16.1582 30.1997 13.7582C30.1997 11.3582 31.9928 9.50225 34.2579 9.50225C36.5229 9.50225 38.316 11.3582 38.316 13.7582C38.316 16.1582 36.4914 18.0142 34.2579 18.0142ZM40.99 20.3182V1.43825H38.1273V8.51025C38.1273 8.60625 38.0644 8.73425 37.97 8.73425C37.8756 8.79825 37.7498 8.73425 37.7183 8.67025C36.7431 7.51825 35.2645 6.84625 33.5972 6.84625C30.0424 6.84625 27.3369 9.88625 27.3369 13.7582C27.3369 17.6302 27.9661 17.3742 29.1615 18.7182C30.294 19.9982 31.9299 20.7022 33.6287 20.7022C35.3275 20.7022 36.7431 20.0302 37.7498 18.7822C37.8127 18.7182 37.9071 18.6862 38.0015 18.7182C38.0958 18.7822 38.1587 18.8142 38.1587 18.9422V20.3182H40.9586C40.9586 20.2862 40.9586 20.2862 40.9586 20.2862L40.99 20.3182Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M20.5111 9.952L10.7904 15.552L0.471882 9.568L0 9.824V14.144L10.8218 20.416L20.5426 14.816V17.12L10.8218 22.72L0.471882 16.736L0 16.992V17.728L10.8218 24L21.6751 17.728V13.408L21.2032 13.152L10.8218 19.136L1.13252 13.536V11.264L10.8218 16.832L21.6751 10.56V6.272L21.1089 5.984L10.7904 11.904L1.63586 6.592L10.7904 1.312L18.3719 5.632L19.064 5.28V4.736L10.8218 0L0 6.24V6.912L10.8218 13.184L20.5426 7.584V9.888L20.5111 9.952Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                            <Link href={"#"}>
                                <svg width="131" height="20" viewBox="0 0 131 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M31.4238 6.01953C30.1228 6.01953 28.8218 6.52978 27.8211 7.34617V6.12158H24.5186V19.1839H27.9211V10.8158C28.6217 9.79535 29.8226 9.18306 31.0235 9.18306C32.2244 9.18306 31.9242 9.18305 32.4246 9.38715V6.01953H31.4238Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.60122 15.2065C2.60198 16.0229 3.8029 16.5331 5.10389 16.5331C6.40488 16.5331 6.70511 16.0229 6.70511 15.4106C6.70511 13.4716 0.500381 14.186 0.500381 9.89992C0.500381 5.61385 2.90221 5.81795 5.40412 5.81795C7.90602 5.81795 8.4064 6.3282 9.7074 7.14459L8.10618 9.69582C7.40564 9.18557 6.50496 8.87943 5.70435 8.77738C4.80366 8.77738 4.00305 9.18557 4.00305 9.79787C4.00305 11.5327 10.2078 10.8184 10.2078 15.3085C10.2078 19.7987 7.80595 19.3905 5.10389 19.3905C2.40183 19.3905 1.50114 18.7782 0 17.6557L1.7013 15.1044L1.60122 15.2065Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M23.1182 12.5517C23.1182 8.87788 20.6163 5.81641 17.1137 5.81641C13.611 5.81641 10.9089 8.97993 10.9089 12.6537C10.8089 16.2254 13.5109 19.2869 17.0136 19.491H17.6141C19.6156 19.491 21.517 18.6746 22.818 17.1439L20.8165 15.1029C20.0159 16.0213 18.815 16.5316 17.6141 16.6336C15.8127 16.6336 14.3115 15.307 14.1114 13.5721H23.0182V12.5517H23.1182ZM14.3115 11.0209C14.6118 9.69428 15.7126 8.67378 17.0136 8.77583C18.3146 8.77583 19.4154 9.79632 19.5155 11.0209H14.2115H14.3115Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M40.6308 14.183L44.1335 6.12109H47.7362L41.8317 19.2854H39.4299L33.5254 6.12109H37.1281L40.6308 14.183Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M50.5396 0C51.7405 0 52.7412 1.02049 52.7412 2.24508C52.7412 3.46967 51.7405 4.49016 50.5396 4.49016C49.3386 4.49016 48.3379 3.46967 48.3379 2.24508C48.3379 1.02049 49.3386 0 50.5396 0Z"
                                        fill="black"
                                    />
                                    <path d="M52.2405 6.12109H48.8379V19.1834H52.2405V6.12109Z" fill="black" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M66.4514 16.5311C65.1504 18.47 62.9487 19.5926 60.647 19.4905C56.9442 19.4905 53.8418 16.6331 53.8418 12.8573C53.8418 9.08149 56.6439 5.91797 60.3468 5.91797H60.7471C62.8487 5.91797 64.8502 6.83641 66.1512 8.57125L63.7493 10.7143C63.0488 9.79584 61.948 9.18354 60.7471 9.18354C58.8456 9.18354 57.3445 10.7143 57.3445 12.6532C57.3445 14.5921 58.7455 16.1229 60.647 16.2249H60.9472C62.1481 16.2249 63.349 15.5106 64.0496 14.4901L66.6516 16.5311H66.4514Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M78.8602 17.1439C77.5593 18.6746 75.6578 19.491 73.6563 19.491C70.1536 19.6951 67.1513 16.8377 66.9512 13.266V12.6537C66.9512 8.97993 69.353 5.81641 73.1559 5.81641C76.9588 5.81641 79.1605 8.87788 79.1605 12.5517V13.5721H70.2537C70.4538 15.409 71.955 16.7357 73.7564 16.6336C74.9573 16.6336 76.1582 16.0213 76.9588 15.1029L78.8602 17.1439ZM75.7579 11.0209C75.5577 9.69427 74.557 8.77583 73.256 8.77583C71.955 8.77583 70.7541 9.69427 70.5539 11.0209H75.858H75.7579Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M80.5615 19.2869V6.12255H83.864V7.14305C84.8648 6.32665 86.1658 5.81641 87.4668 5.81641C88.7678 5.81641 90.7693 6.6328 91.8701 7.95944C92.8709 9.28608 93.3713 10.9189 93.1711 12.5517V19.1848H89.7685V12.2455C89.7685 11.3271 89.5684 10.5107 88.9679 9.79632C88.4675 9.28608 87.767 9.08198 87.0665 9.08198C85.8656 9.08198 84.6647 9.69427 83.9641 10.7148V19.1848H80.5615V19.2869Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M102.078 5.91797C97.9749 5.91797 94.5723 9.28559 94.5723 13.5717C94.5723 17.8577 95.3729 17.6536 96.874 19.1844C98.3752 20.7151 98.175 19.6946 98.7755 19.2864C100.677 17.8577 103.279 17.8577 105.18 19.2864C105.781 19.6946 106.581 19.6946 107.082 19.1844C110.084 16.2249 110.184 11.4286 107.382 8.36715C105.981 6.83641 104.08 6.02002 101.978 6.02002M101.978 17.3475C99.9764 17.3475 98.2751 15.8167 98.2751 13.7758V13.5717C98.2751 11.4286 99.9764 9.79584 101.978 9.79584C103.979 9.79584 105.681 11.5307 105.681 13.5717C105.681 15.6126 104.18 17.3475 102.178 17.3475H101.978Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M116.289 19.2854H113.687L108.684 6.12109H112.086L114.888 13.6727L117.59 6.12109H120.493L123.195 13.6727L125.997 6.12109H129.399L124.295 19.2854H121.794L118.991 11.7338L116.289 19.2854Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M129.399 17.7549H129.099V18.2651H128.899V16.7344H129.499C129.799 16.7344 129.999 16.9385 129.999 17.2446C129.999 17.4487 129.899 17.6528 129.699 17.6528L129.999 18.2651H129.699L129.399 17.7549ZM129.099 17.5508H129.499C129.599 17.5508 129.699 17.4487 129.699 17.3467C129.699 17.2446 129.599 17.1426 129.499 17.1426H129.099V17.6528V17.5508Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M129.399 16.1221C130.2 16.1221 130.8 16.7344 130.8 17.5508C130.8 18.3671 130.2 18.9794 129.399 18.9794C128.598 18.9794 127.998 18.3671 127.998 17.5508C127.998 16.7344 128.598 16.1221 129.399 16.1221ZM129.399 15.918C128.498 15.918 127.798 16.6323 127.798 17.5508C127.798 18.4692 128.498 19.1835 129.399 19.1835C130.3 19.1835 131 18.4692 131 17.5508C131 16.6323 130.3 15.918 129.399 15.918Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                            <Link href={"#"}>
                                <svg width="88" height="21" viewBox="0 0 88 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4505 2.19666H26.9011C28.9231 2.19666 30.2417 2.28467 31.3846 3.51467C32.1758 4.39332 32.6154 5.44772 32.6154 6.67785C32.6154 7.90796 32.1758 8.96235 31.2967 9.84103C30.4176 10.7197 29.2747 11.2469 26.3736 11.2469H23.7362V18.5398H21.4505V2.19666ZM23.7362 9.40167H26.3736C27.8681 9.40167 30.1538 9.31401 30.1538 6.58999C30.1538 4.04187 28.0439 4.04188 26.8132 4.04188H23.7362V9.40167ZM39.9121 18.5398C39.7362 18.0126 39.7362 17.3975 39.7362 16.8703C38.6813 18.7155 37.1868 18.8912 36.2198 18.8912C33.5824 18.8912 32.1758 17.3975 32.1758 15.5523C32.1758 14.6737 32.5275 13.1799 34.1978 12.2134C35.4286 11.5105 37.1868 11.5105 38.1538 11.5105C38.6813 11.5105 39.033 11.5105 39.6483 11.5985C39.6483 10.1926 39.6483 9.57755 39.2088 9.05035C38.7692 8.52315 37.8901 8.34741 37.2747 8.34741C35.1648 8.34741 34.989 9.84117 34.989 10.2805H32.8791C32.967 9.66543 33.0549 8.87461 33.6703 8.1717C34.5494 7.20518 36.1319 6.94158 37.3626 6.94158C39.033 6.94158 40.7912 7.46877 41.4066 8.61104C41.7582 9.31398 41.7582 9.84117 41.7582 10.3684L41.6703 15.816C41.6703 15.9917 41.6703 17.4855 41.8461 18.6278H39.9121V18.5398ZM38.4176 12.9163C37.5384 12.9163 34.2857 12.9163 34.2857 15.2008C34.2857 15.9038 34.7253 17.1339 36.6593 17.1339C37.7143 17.1339 38.5934 16.6946 39.1209 15.9038C39.5604 15.113 39.6483 14.4979 39.6483 12.9163C39.2967 13.0043 38.945 12.9163 38.4176 12.9163ZM43.6044 2.19666H45.7143V18.5398H43.6044V2.19666ZM54.8571 18.5398C54.6813 18.0126 54.6813 17.3975 54.6813 16.8703C53.6264 18.7155 52.1319 18.8912 51.1648 18.8912C48.5275 18.8912 47.1209 17.3975 47.1209 15.5523C47.1209 14.6737 47.4725 13.1799 49.1428 12.2134C50.3736 11.5105 52.1319 11.5105 53.0989 11.5105C53.6264 11.5105 53.978 11.5105 54.5934 11.5985C54.5934 10.1926 54.5934 9.57755 54.1538 9.05035C53.7143 8.52315 52.8351 8.34741 52.2198 8.34741C50.1099 8.34741 49.934 9.84117 49.934 10.2805H47.8242C47.9121 9.66543 48 8.87461 48.6154 8.1717C49.4945 7.20518 51.0769 6.94158 52.3077 6.94158C53.978 6.94158 55.7362 7.46877 56.3516 8.61104C56.7033 9.31398 56.7033 9.84117 56.7033 10.3684L56.6154 15.816C56.6154 15.9917 56.6154 17.4855 56.7912 18.6278H54.8571V18.5398ZM53.4505 12.9163C52.5714 12.9163 49.3187 12.9163 49.3187 15.2008C49.3187 15.9038 49.7582 17.1339 51.6923 17.1339C52.7472 17.1339 53.6264 16.6946 54.1538 15.9038C54.5934 15.113 54.6813 14.4979 54.6813 12.9163C54.2417 13.0043 53.978 12.9163 53.4505 12.9163ZM58.6373 8.52302V7.20506H60.7472V9.05022C61.011 8.6109 61.8022 7.0293 64.3516 7.0293C65.4066 7.0293 68.4835 7.38077 68.4835 10.8954V18.6276H66.2857V11.4226C66.2857 10.7197 66.1978 10.0168 65.6703 9.48956C65.1428 8.96237 64.3516 8.69878 63.6483 8.69878C62.0659 8.69878 60.6593 9.84104 60.6593 12.1255V18.6276H58.5494V8.52302H58.6373ZM69.1868 7.20506H71.2088V4.74477L73.3187 4.04188V7.11719H75.8681V8.69878H73.3187V15.4644C73.3187 15.9916 73.3187 16.9582 74.8132 16.9582C75.2527 16.9582 75.6923 16.8702 75.8681 16.8702V18.5396C75.5165 18.6276 74.9011 18.7153 74.1099 18.7153C72.0879 18.7153 71.2088 18.1002 71.2088 16.255V8.69858H69.1868V7.20506ZM77.3626 2.19666H79.9121V4.56906H77.3626V2.19666ZM77.5385 7.20506H79.6483V18.5398H77.5385V7.20506ZM81.6703 9.48956C81.6703 8.69878 81.5824 7.90796 81.5824 7.20506H83.6923L83.7802 9.40167C84.2198 7.82008 85.5385 7.2929 86.5055 7.20506C87.1209 7.11705 87.6484 7.11704 88 7.11704V9.22583C87.9121 9.22583 87.7362 9.13784 87.5604 9.13784C87.3846 9.13784 87.2088 9.13784 86.9451 9.13784C84.3956 9.13784 83.8681 10.6316 83.8681 12.5646V18.6274H81.7582V9.48928L81.6703 9.48956ZM8.35165 0C3.95604 0 0.351647 3.60252 0.351647 7.99584C0.351647 12.3892 3.95604 15.9917 8.35165 15.9917C12.7473 15.9917 16.3516 12.3892 16.3516 7.99584C16.3516 3.60252 12.7473 0 8.35165 0ZM8.35165 13.5314C5.27472 13.5314 2.81319 11.0711 2.81319 7.99584C2.81319 4.92053 5.27472 2.46029 8.35165 2.46029C11.4286 2.46029 13.8901 4.92053 13.8901 7.99584C13.8022 11.0711 11.3407 13.5314 8.35165 13.5314ZM15.4725 15.2887L8.35165 18.364L1.23077 15.2887L0 17.4854L8.35165 21L16.7033 17.4854L15.4725 15.2887Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                            <Link href={"#"}>
                                <svg width="53" height="22" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.70098 0.0017653C6.93774 -0.0139459 6.15345 0.0750841 5.34284 0.274092C1.61087 1.20105 -2.56326 5.97201 1.99512 11.4762L4.71646 14.7546L5.48496 15.6868C6.0008 16.2943 6.843 16.2838 7.46411 15.7758C8.08523 15.2626 8.2642 14.4246 7.74835 13.8067C7.74835 13.8067 7.53254 13.5448 7.4378 13.4296H7.44832C7.25357 13.1939 7.21146 13.1573 7.00617 12.9111C6.02186 11.7328 4.89542 10.3711 4.89542 10.3711C2.91627 7.98304 3.80057 5.02934 6.48506 3.34825C8.84847 1.87139 13.191 2.40034 14.6859 4.8251C13.749 2.06517 11.0013 0.0750841 7.70098 0.0017653ZM8.24841 5.77824C7.89574 5.76777 7.52728 5.89869 7.22198 6.15531C6.5956 6.66854 6.4219 7.50647 6.93774 8.12444C6.93774 8.12444 7.00091 8.203 7.10618 8.33392C8.28525 9.74269 9.85384 11.6385 9.85384 11.6385C11.833 14.0266 10.9487 16.9698 8.2642 18.6457C5.90079 20.1225 1.55823 19.5936 0.0633344 17.1688C1.22135 20.5729 5.11123 22.7987 9.41169 21.7303C13.1384 20.7981 17.3073 16.0376 12.7489 10.5335L9.55907 6.69996L9.19588 6.24434C8.93795 5.94059 8.59581 5.79395 8.24841 5.77824Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M22.3073 2.62109C19.9439 2.62109 17.2436 3.83085 17.2436 6.75313C17.2436 9.67541 19.4649 10.3143 21.6704 10.8485C23.9022 11.3827 26.1077 11.6917 26.1077 13.5404C26.1077 15.389 24.218 15.7033 22.8284 15.7033C21.4388 15.7033 19.2596 15.0382 19.1807 12.9067H16.9541C17.0857 16.4993 19.6491 17.8138 22.6968 17.8138C25.7445 17.8138 28.4764 16.6983 28.4764 13.2418C28.4764 9.78539 26.2656 9.64399 24.0391 9.10981C21.9652 8.57563 19.6017 8.29806 19.6017 6.58555C19.6017 4.87303 21.1545 4.73163 22.4915 4.73163C23.8285 4.73163 25.4813 5.31294 25.6445 7.16686H27.871C27.6816 3.62661 25.2971 2.62109 22.3073 2.62109ZM35.1665 2.62109C32.1504 2.62109 29.5449 3.88322 29.4133 7.47585H31.6399C31.7451 5.34436 33.1348 4.73163 35.0244 4.73163C36.9141 4.73163 38.0458 5.06156 38.0458 7.14067C38.0458 9.21979 35.9561 8.77464 33.4874 9.27739C31.1767 9.75397 28.8922 10.461 28.8922 13.7446C28.8922 17.0282 30.9135 17.8138 33.3822 17.8138C35.8508 17.8138 36.9141 17.1016 38.1458 15.5619C38.1458 17.133 38.8933 17.8138 40.046 17.8138C41.1988 17.8138 41.2409 17.6672 41.6357 17.4105V15.5566C41.3462 15.6666 41.1409 15.698 40.9566 15.698C40.246 15.698 40.2513 15.2005 40.2513 14.0798V6.61173C40.2566 3.21288 37.6089 2.62109 35.1665 2.62109ZM46.8309 2.62109C44.4675 2.62109 41.7672 3.83085 41.7672 6.75313C41.7672 9.67541 44.0043 10.3143 46.2046 10.8485C48.4364 11.3827 50.6419 11.6917 50.6419 13.5404C50.6419 15.389 48.7522 15.7033 47.3626 15.7033C45.973 15.7033 43.7938 15.0382 43.7148 12.9067H41.4777C41.6093 16.4993 44.1886 17.8138 47.231 17.8138C50.2734 17.8138 53 16.6983 53 13.2418C53 9.78539 50.7893 9.64399 48.5627 9.10981C46.4888 8.57563 44.1359 8.29806 44.1359 6.58555C44.1359 4.87303 45.6729 4.73163 47.0152 4.73163C48.3574 4.73163 50.005 5.31294 50.1681 7.16686H52.4052C52.221 3.62661 49.826 2.62109 46.8309 2.62109ZM38.0195 9.97916V12.4249C38.0195 13.7446 36.8194 15.7033 33.8822 15.7033C30.9451 15.7033 31.2503 15.1377 31.2503 13.5665C31.2503 11.9954 32.5136 11.2413 33.9822 10.9637C35.4824 10.6809 37.1562 10.6495 38.0195 9.97916Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="secure-ai-infrastructure">
                        <div className="secure-ai-infrastructure__header">
                            <span className="secure-ai-infrastructure__header-text">Secure AI Infrastructure</span>
                        </div>

                        <h3 className="secure-ai-infrastructure__description">Rooted in the Silicon of the Most Powerful AI Processors.</h3>
                    </div>
                </div>
            </section>

            <section className="zero-trust-wrapper">
                <div className="zero-trust">
                    <div className="zero-trust__content">
                        <h3 className="zero-trust__title reveal">Zero-trust </h3>
                        <p className="zero-trust__description reveal">architecture extends the AI security permeter to AI compute on servers you don&apos;t own or control.</p>
                    </div>

                    <div className="zero-trust__image-container reveal">
                        <Image style={{ height: "auto" }} src={mother_board} alt="Mother Board" className="zero-trust__image" />
                    </div>
                </div>
            </section>

            <section className="compliant-ready-section">
                <div className="compliant-ready-content">
                    <h3 className="compliant-ready-title reveal">Compliant Ready</h3>

                    <div className="compliant-ready-features reveal">
                        <div className="compliant-ready-feature">
                            <p>
                                Confidential and <br />
                                <span className="compliant-ready-feature-highlight">Privacy Preserving AI</span>
                            </p>
                        </div>

                        <div className="compliant-ready-feature">
                            <p>
                                Alerts and Workflows <br /> for <span className="compliant-ready-feature-highlight">AI Remediation</span>
                            </p>
                        </div>

                        <div className="compliant-ready-feature">
                            <p>
                                Pre-Configured for{" "}
                                <span className="compliant-ready-feature-highlight">
                                    AI 10+ <br /> Regulatory Frameworks
                                </span>
                            </p>
                        </div>
                    </div>

                    <Image style={{ height: "auto" }} src={dell_server} alt="Dell Server Image" className="compliant-ready-image reveal" />
                </div>
            </section>

            <Ai />

            <section className="trust">
                <div className="trust_container">
                    <div className="trust_top">
                        <div className="turst_left">
                            <h2 className="trust_title reveal">Trust across your AI supply chain</h2>
                            <p className="trust_text reveal">
                                <span>EQTY&apos;s Governance Studio is bundled</span> with each verifiable compute node to tailor governance across all your stakeholder needs and automate over 80%
                                reporting across your systems.
                            </p>
                        </div>
                        <div className="turst_right reveal">
                            {trust ?
                                <Image style={{ height: "auto" }} src={trust_right_active} alt="trust_right" className="turst_right_img" />
                                :
                                <Image style={{ height: "auto" }} src={trust_right} alt="trust_right" className="turst_right_img" />
                            }
                        </div>
                    </div>
                    <div className="trust_bottom reveal">
                        <button onClick={() => setTrust(!trust)} className="trust_bottom_left ">
                            <h3 className="trust_bottom_left_title">Audit Certificate</h3>
                            <div className={`trust_bottom_left_toogle ${trust ? "trust_bottom_left_toogle_active" : "trust_bottom_left_toogle_default"}`}>
                                <span className={`trust_bottom_left_toogle_round_default ${trust ? "trust_bottom_left_toogle_round_active" : "trust_bottom_left_toogle_round"}`} />
                            </div>
                        </button>
                        <div className="trust_bottom_right">
                            <div className="trust_bottom_right_text_box">
                                <span className="trust_bottom_right_text_box_round green" />
                                <p className="trust_bottom_right_text_box_text">Compliant</p>
                            </div>
                            <div className="trust_bottom_right_text_box">
                                <span className="trust_bottom_right_text_box_round  red" />
                                <p className="trust_bottom_right_text_box_text">nonCompliant</p>
                            </div>
                            <div className="trust_bottom_right_text_box">
                                <span className="trust_bottom_right_text_box_round blue" />
                                <p className="trust_bottom_right_text_box_text">inComplete</p>
                            </div>
                            <div className="trust_bottom_right_text_box">
                                <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={7} cy="7.5" r="6.5" stroke="black" strokeDasharray="4 4" />
                                </svg>
                                <p className="trust_bottom_right_text_box_text">NA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="across">
                <div className="across_container">
                    <h2 className="across_title reveal">Across Any Deployment.</h2>
                    <div className="across_arrow reveal">
                        <Image style={{ height: "auto" }} src={acros} alt="" className="across_arrow_img" />
                    </div>
                    <div className="across_center reveal">
                        <div className={`across_text ${across_text ? "h-189" : "h-80"}`}>
                            <span>AI Endpoints</span>
                            <p>From ChatGPT to Claude, verify the exact payload sent to closed source AI endpoints.</p>
                        </div>
                        <div className={`across_text ${across_text ? "h-189" : "h-80"}`}>
                            <span>RAG</span>
                            <p>Verify exactly which embeddings were retrieved from RAG database and used in inference.</p>
                        </div>
                        <div className={`across_text ${across_text ? "h-189" : "h-80"}`}>
                            <span>Fine Tuning AI</span>
                            <p>Verify what data was used to fine tune an LLM, train a SLM, and prove it was accurately benchmarked</p>
                        </div>
                        <div className={`across_text ${across_text ? "h-189" : "h-80"}`}>
                            <span>Open Source AI</span>
                            <p>Verify the model and its parameters were locally deployed at inference.</p>
                        </div>
                    </div>
                    {across_text ? (
                        <button className="across_btn_close " onClick={() => setAcross_text(!across_text)}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z" stroke="#34869D" stroke-width="2" />
                                <path d="M26 14L14 26M14 14L26 26" stroke="#34869D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    ) : (
                        <button className="across_btn reveal" onClick={() => setAcross_text(!across_text)}>
                            <span className="across_round"></span>
                            Learn More
                        </button>
                    )}
                </div>
            </section>

            <section className="certificate">
                <div className="sertificate_container reveal">
                    <div className="sertificate_container_bg">
                        <Image style={{ height: "auto" }} src={sertificate_container_bg} alt="" className="sertificate_container_bg_img" />
                    </div>
                    <div className="sertificate_left">
                        <h2 className="sertificate_title">Verified Certificates</h2>
                        <div className="sertificate_left_bottom">
                            <div className="sertificate_left_bottom_card">
                                <div className="sertificate_left_bottom_card_img_box">
                                    <Image style={{ height: "auto" }} src={sertificate_3} alt="" className="sertificate_left_bottom_card_img" />
                                </div>
                                <p className="sertificate_left_bottom_card_text">
                                    <span>View</span> a certificate of AI governance that verifies instantly in a browser
                                </p>
                            </div>
                            <div className="sertificate_left_bottom_card">
                                <div className="sertificate_left_bottom_card_img_box">
                                    <Image style={{ height: "auto" }} src={sertificate_2} alt="" className="sertificate_left_bottom_card_img" />
                                </div>
                                <p className="sertificate_left_bottom_card_text">
                                    <span>Send</span> certificates to partners and suppliers to extend and inherit trust in AI
                                </p>
                            </div>
                            <div className="sertificate_left_bottom_card">
                                <div className="sertificate_left_bottom_card_img_box">
                                    <Image style={{ height: "auto" }} src={sertificate_1} alt="" className="sertificate_left_bottom_card_img" />
                                </div>
                                <p className="sertificate_left_bottom_card_text">
                                    <span>Audit</span> AI manifests months, years and decades later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sertificate_right">
                        <div className="sertificate_right_top">
                            <div className="sertificate_right_top_left">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="#04C48B" />
                                <path d="M13 6L7.5 11.5L5 9" stroke="#1FFFA1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="sertificate_right_bottom">
                            <div className="sertificate_right-left">
                                <h3 className="sertificate_right_subtitle">CONFIDENTIAL</h3>
                                <h4 className="sertificate_right_title">Transcribe Audio</h4>
                                <button className="sertificate_btn">
                                    <span className="sertificate_round"></span>
                                    Upload File
                                </button>
                                <h5 className="sertificate_right_bottom_title">AUDIO LOGS </h5>
                                <div className="sertificate_right_bottom_skeleton">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="sertificate_right-right">
                                <Image style={{ height: "auto" }} src={sertificate_right} alt="" className="sertificate_right-left_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="progressive">
                <div className="progressive__container">
                    <h2 className="progressive__title reveal">Progressive Precision</h2>
                    <div className="progressive__wrap reveal">
                        <div className="progressive__cart">
                            <h3 className="progressive__cart__title">
                                Verifiable
                                <br /> Builder
                            </h3>
                            <p className="progressive__cart__text">
                                <span className="progressive__cart__text__span">Verify AI app builds </span>
                                <br />
                                with a secure Gitlab and Github runner
                            </p>
                        </div>
                        <div className="progressive__cart">
                            <h3 className="progressive__cart__title">
                                Verifiable
                                <br /> Gateway
                            </h3>
                            <p className="progressive__cart__text">
                                <span className="progressive__cart__text__span">Witness 3rd party API </span>
                                calls
                                <br /> to open and closed source models
                            </p>
                        </div>
                        <div className="progressive__cart">
                            <h3 className="progressive__cart__title">
                                Verifiable <br /> Container
                            </h3>
                            <p className="progressive__cart__text">
                                <span className="progressive__cart__text__span">Notarize any docker container </span>
                                to create verifiable runtime of AI models and agents
                            </p>
                        </div>
                        <div className="progressive__cart">
                            <h3 className="progressive__cart__title">
                                Software
                                <br /> Development Kit
                            </h3>
                            <p className="progressive__cart__text">
                                <span className="progressive__cart__text__span">Develop with our SDK</span>
                                to
                                <br />
                                verify granular AI system activity.
                            </p>
                        </div>
                    </div>
                    <div className="progressive__download reveal">
                        <div className="progressive__box">
                            <h2 className="progressive__box__title">
                                Explore deployment <br />
                                options for
                            </h2>
                            <Link href="#" className="progressive__box__link">
                                Verifiable AI
                            </Link>
                            <button className="progressive__box__btn">
                                <div className="progressive__box__span"></div>
                                Download White paper
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="customer">
                <div className="customer__container">
                    <h2 className="customer__title reveal">Customer Success Stories</h2>
                    <div className="customer__wrap">
                        <Link href="#" className="customer_card_animation customer__wrap__link" style={{ backgroundImage: `url(${banner.src})` }}>
                            Public Sector
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link1" style={{ backgroundImage: `url(${banner2.src})` }}>
                            Life Sciences
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link2" style={{ backgroundImage: `url(${banner3.src})` }}>
                            Energy
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link3" style={{ backgroundImage: `url(${banner4.src})` }}>
                            Arts
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link4" style={{ backgroundImage: `url(${banner5.src})` }}>
                            Voiceover
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link5" style={{ backgroundImage: `url(${banner6.src})` }}>
                            <Image style={{ height: "auto" }} src={icon} alt="" />
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link6" style={{ backgroundImage: `url(${banner7.src})` }}>
                            <Image style={{ height: "auto" }} src={icon2} alt="" />
                        </Link>
                        <Link href="#" className="customer_card_animation customer__wrap__link7" style={{ backgroundImage: `url(${banner8.src})` }}>
                            <Image style={{ height: "auto" }} src={icon3} alt="" />
                        </Link>
                    </div>
                </div>
            </section>

            <Resources />

            <Footer />
        </>
    )
}
