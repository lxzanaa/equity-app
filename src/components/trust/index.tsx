"use client"

import "./ui/style.css"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Image from "next/image";

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


export default function Trust() {
    useEffect(() => {
        const title_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
            }
        });
        gsap.to(".news", {
            delay: 2.7,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            y: "405%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
            }
        });

        gsap.to(".seyf", {
            delay: 2.8,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-335%",
            y: "-80%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
            }
        });
        gsap.to(".pechat", {
            delay: 2.9,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-280%",
            y: "-280%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
            }
        });
        gsap.to(".protsessor", {
            delay: 3,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            y: "-380%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
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
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".card", {
            delay: 3.5,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-100%",
            y: "-300%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".bitcoin", {
            delay: 3.6,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "-100%",
            y: "340%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".verified", {
            delay: 3.7,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "30%",
            y: "250%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        });
        gsap.to(".input", {
            delay: 3.85,
            scale: 2,
            duration: 1,
            ease: "power1.inOut",
            x: "100%",
            y: "-420%",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        });

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
                    start: "-40% top",
                    end: "-40% top",
                    // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                     // animatsiya faqat bir marta ishlaydi
                }
            }
        )

        gsap.to(".text_text", {
            delay: 10,
            duration: 0.5,
            marginBottom: "-110",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        })

        gsap.to(".trust_title_3", {
            delay: 10.1,
            duration: 0.5,
            y: 60,
            opacity: 1,
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        })


        const logo_box_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "-40% top",
                end: "-40% top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                 // animatsiya faqat bir marta ishlaydi
            }
        })
        logo_box_time_line
            .to(".logo_aimation", {
                delay: 10.1,
                duration: .5,
                // y: -120,
                marginBottom: 0,
                stagger: .1,
                ease: "power1.inOut",
            })
            .to(".logo_right_animation", {
                duration: 0.5,
                right: 0,
                opacity: 1
            })
           
        function buttonAnimation() {
            
            if (window.innerWidth > 1240) {
                const timeline_3d = gsap.timeline({
                    delay: 5.7,
                    duration: 0.1,
                    // ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: ".trust-evolves",
                        start: "-40% top",
                        end: "-40% top",
                        // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                         // animatsiya faqat bir marta ishlaydi
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
                        x: "-450%",
                        y: "-360%",
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
            }
            else{
                const timeline_3d = gsap.timeline({
                    delay: 5.7,
                    duration: 0.1,
                    // ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: ".trust-evolves",
                        start: "-40% top",
                        end: "-40% top",
                        // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                         // animatsiya faqat bir marta ishlaydi
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
                        x: "-230%",
                        y: "-360%",
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
            }
        }
        buttonAnimation()
    }, [])

    return (
        <>
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
                    <p className="text">
                        <span className="text_text">Verifiable Compute for AI</span>
                    </p>
                    <h2 className="trust_title_3">Trust Evolved.</h2>
                    <div className="text_logo_box">
                        <p className="logo_aimation">with</p>
                        <div className="logo_aimation">
                            <svg width="190" height="59" viewBox="0 0 190 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.327 34.9758H37.009V23.1994H12.327V13.0128H38.7255V1.23633H0.015625V58.9998H39.6133V47.1645H12.327V34.9758Z" fill="black" />
                                <path d="M174.568 1.23653L161.369 22.0808L148.17 1.23653H93.2419V13.013H110.288V47.1058H92.1765C93.1235 45.9281 93.8929 44.6916 94.6032 43.3962C96.734 39.2744 97.8586 34.5639 97.8586 29.4411C97.8586 25.2605 97.0892 21.2565 95.6686 17.7236C94.1889 14.1317 92.1173 10.9521 89.5129 8.36128C86.9086 5.71158 83.7716 3.6507 80.161 2.17864C76.6096 0.706587 72.7031 0 68.6191 0C64.535 0 60.5693 0.765469 57.0179 2.17864C53.4666 3.6507 50.3295 5.71158 47.666 8.36128C45.0617 11.011 42.9901 14.1317 41.5103 17.7236C40.0306 21.3154 39.3203 25.2605 39.3203 29.4411C39.3203 33.6218 40.0898 37.6258 41.5103 41.1587C42.9901 44.7505 45.0617 47.9301 47.666 50.521C50.2704 53.1707 53.4074 55.2315 57.0179 56.7036C60.5693 58.1757 64.4758 58.8822 68.6191 58.8822H122.6V12.9541H140.889L155.213 34.5639V58.8822H167.525V34.6816L189.602 1.23653H174.568ZM83.8899 36.3303C83.1205 38.4501 82.0551 40.3343 80.6345 41.9242C79.214 43.514 77.4975 44.8094 75.485 45.7515C73.4726 46.6936 71.1642 47.1647 68.5599 47.1647C65.9555 47.1647 63.588 46.6936 61.5755 45.7515C59.5631 44.8094 57.7874 43.514 56.4261 41.9242C55.0055 40.3343 53.8809 38.4501 53.1706 36.3303C52.4012 34.1517 51.9868 31.8553 51.9868 29.4411C51.9868 27.0269 52.4012 24.7305 53.1706 22.5519C53.9401 20.4321 55.0055 18.5479 56.4261 16.9581C57.8466 15.3683 59.5631 14.0729 61.5755 13.1307C63.588 12.1886 65.9555 11.7176 68.5599 11.7176C71.1642 11.7176 73.4726 12.1886 75.485 13.1307C77.4975 14.0729 79.2732 15.3683 80.6345 16.9581C82.0551 18.5479 83.1797 20.4321 83.8899 22.5519C84.6594 24.7305 85.0737 27.0269 85.0737 29.4411C85.0737 31.8553 84.6594 34.1517 83.8899 36.3303Z" fill="black" />
                            </svg>
                        </div>
                        <div className="logo_right_animation">
                            <svg width="108" height="52" viewBox="0 0 108 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.3394 0.769531L26.0374 47.1687H5.32109V0.769531H0.585938V51.4671H29.1744L34.9158 37.9831H61.9062L67.47 51.4671H72.797L51.3705 0.769531H46.3394ZM36.7507 33.6847L48.6477 5.89229L60.1897 33.6847H36.7507Z" fill="black" />
                                <path d="M107.128 32.389C106.595 30.9169 105.826 29.6215 104.76 28.5617C103.754 27.5018 102.57 26.6185 101.15 25.9708C99.7291 25.3231 98.2494 24.911 96.5329 24.7932V24.6754C99.5516 24.0277 101.86 22.7912 103.34 20.907C104.879 19.0227 105.648 16.7263 105.648 14.1944C105.648 11.3092 105.175 9.01276 104.168 7.30517C103.162 5.5387 101.919 4.18441 100.38 3.2423C98.8413 2.2413 97.0656 1.59359 95.1124 1.29918C93.1591 1.00477 91.2058 0.828125 89.3118 0.828125H74.6328V51.5257H90.9099C92.6264 51.5257 94.5205 51.3491 96.4737 50.9369C98.4861 50.5836 100.321 49.8181 102.038 48.8171C103.754 47.7573 105.175 46.3441 106.299 44.4599C107.424 42.6345 108.016 40.2203 108.016 37.3351C107.956 35.5098 107.66 33.8611 107.128 32.389ZM89.9037 5.06765C91.3834 5.06765 92.804 5.18541 94.1653 5.47982C95.5267 5.77423 96.7105 6.24529 97.7167 6.95188C98.7229 7.65846 99.5516 8.60058 100.143 9.71934C100.735 10.897 101.031 12.369 101.031 14.1355C101.031 14.9599 100.913 15.8431 100.617 16.8441C100.321 17.8451 99.7291 18.7283 98.9005 19.6116C98.0126 20.4948 96.8288 21.2014 95.2899 21.7902C93.751 22.379 91.7385 22.6734 89.3118 22.6734H79.4272L79.368 5.06765H89.9037ZM102.748 40.4559C102.452 41.5746 101.801 42.6345 100.913 43.6355C100.025 44.6365 98.6637 45.4609 97.0064 46.1674C95.2899 46.8152 93.0407 47.1684 90.2588 47.1684H79.368V26.9718H90.9691C92.4488 26.9718 93.9286 27.1485 95.4083 27.5607C96.888 27.914 98.1902 28.5617 99.3148 29.386C100.439 30.2104 101.386 31.3291 102.097 32.6245C102.807 33.9788 103.162 35.5686 103.162 37.394C103.221 38.3361 103.044 39.3371 102.748 40.4559Z" fill="black" />
                            </svg>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
