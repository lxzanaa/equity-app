"use client"

import "./ui/style.css"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

// imgs
import horse from "../img/trust_evolves/horse.png"
import key from "../img/trust_evolves/key.png"
import fingerprint from "../img/trust_evolves/fingerprint.png"
import news from "../img/trust_evolves/daily_news.png"
import seyf from "../img/trust_evolves/seyf.png"
import pechat from "../img/trust_evolves/pechat.png"
import tv from "../img/trust_evolves/tv.png"
import protsessor from "../img/trust_evolves/protsessor.png"
import hello from "../img/trust_evolves/hello.png"
import girls from "../img/trust_evolves/girls.png"
import chair from "../img/trust_evolves/chair.png"
import card from "../img/trust_evolves/card.svg"
import bitcoin from "../img/trust_evolves/bitcoin.png"
import verified from "../img/trust_evolves/verified.png"
import phone from "../img/trust_evolves/phone.png"
import input from "../img/trust_evolves/input.png"
import button from "../img/trust_evolves/button.svg"
import cursor from "../img/trust_evolves/cursor.svg"
import text from "../img/trust_evolves/text.svg"

export default function Trust() {
    useEffect(() => {
        const title_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        })
        title_time_line
            .to(".trust-evolves__title", {
                scale: 1, // Boshlang'ich qiymatni kichikroq qiling
                duration: 1,
                ease: "power3.inOut",
            })
            .to(
                ".trust-evolves__title",
                {
                    delay: 3.90, // Bu yerda kechiktirishni tugatish qismiga qo'shing
                    scale: 1.7,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.inOut",
                }
            );
        const horse_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });

        horse_time_line
            .to(".horse_img", {
                rotate: 0,
                bottom: 24,
                duration: 1,
                ease: "power3.inOut",
            })
            .to(".horse_img", {
                scale: 2,
                duration: 1,
                ease: "power1.inOut",
                delay: 0.2,
                x: "210%",
                y: "110%",
            })
            .to(".key", {
                scale: 1.5,
                duration: 1,
                ease: "power1.inOut",
                x: "-250%",
                y: "40%",
            })
        gsap.to(".fingerprint", {
            delay: 2.5,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-20%",
            y: "270%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".news", {
            delay: 2.7,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            y: "355%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });

        gsap.to(".seyf", {
            delay: 2.8,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-265%",
            y: "-80%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".pechat", {
            delay: 2.9,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-260%",
            y: "-210%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".tv", {
            delay: 2.85,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "280%",
            y: "-80%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".protsessor", {
            delay: 3,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            y: "-310%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".hello", {
            delay: 3,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            y: "250%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".girls", {
            delay: 3.1,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "100%",
            y: "330%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".chair", {
            delay: 3.2,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "210%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".card", {
            delay: 3.5,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-100%",
            y: "-240%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".bitcoin", {
            delay: 3.6,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-100%",
            y: "290%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".verified", {
            delay: 3.7,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "30%",
            y: "210%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".input", {
            delay: 3.85,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "100%",
            y: "-380%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });


        const timeline_3d = gsap.timeline({
            delay: 5.7,
            duration: 0.1,
            // ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        });

        timeline_3d
            .to('.button', {
                scale: 1,
                duration: 0.3,
            }) // Scale 1.2 ga o'tadi
            .to('.button', {
                scale: .93,
                duration: 0.3,
            }) // Scale 1.2 ga o'tadi
            .to('.button', {
                scale: 1,
                duration: 0.3,
            })
            .to('.button', {
                scale: .97,
                duration: 0.3,
            })
            .to('.button', {
                scale: 1,
                duration: 0.3,
            })
            .to(".cursor", {
                // delay: 6.5,
                duration: 1,
                ease: "power1.inOut",
                x: "-400%",
                y: "-310%",
            })
            .to(['.button', '.cursor'], {
                delay: 0.2,
                scale: .85,
                duration: 0.3,
            })
            .to(['.button', '.cursor'], {
                duration: 0.5,
                rotateY: 90,
                opacity: 0
            })

        gsap.fromTo(".text",
            {
                rotateY: 90,
                opacity: 0
            },
            {
                delay: 9,
                duration: 0.5,
                rotateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".trust-evolves",
                    start: "top top",
                    end: "top top",
                    // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                    toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
                }
            }
        )
        

    }, [])

    return (
        <div>
            <section className="trust-evolves">
                <div className="trust_evolves_container">
                    <h2 className="trust-evolves__title">Trust Evolves</h2>
                    <Image src={horse} alt="" className="horse_img" />
                    <Image src={key} alt="" className="key" />
                    <Image src={fingerprint} alt="" className="fingerprint" />
                    <Image src={news} alt="" className="news" />
                    <Image src={seyf} alt="" className="seyf" />
                    <Image src={pechat} alt="" className="pechat" />
                    <Image src={tv} alt="" className="tv" />
                    <Image src={protsessor} alt="" className="protsessor" />
                    <Image src={hello} alt="" className="hello" />
                    <Image src={girls} alt="" className="girls" />
                    <Image src={chair} alt="" className="chair" />
                    <Image src={card} alt="" className="card" />
                    <Image src={bitcoin} alt="" className="bitcoin" />
                    <Image src={verified} alt="" className="verified" />
                    <Image src={phone} alt="" className="phone" />
                    <Image src={input} alt="" className="input" />
                    <Image src={button} alt="" className="button" />
                    <Image src={cursor} alt="" className="cursor" />
                    {/* <Image src={text} alt="" className="text" /> */}
                    <p className="text">
                            Verifiable Compute for AI
                    </p>
                </div>


            </section>
        </div>
    )
}
