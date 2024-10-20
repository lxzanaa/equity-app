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
import intel from "../img/trust_evolves/intel.svg"
import nvidia from "../img/trust_evolves/nvidia.svg"

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
            y: "405%",
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
            x: "-335%",
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
            x: "-280%",
            y: "-280%",
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
            y: "-380%",
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
            y: "-300%",
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
            y: "340%",
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
            y: "250%",
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
            y: "-400%",
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

        gsap.to(".text_text", {
            delay: 10,
            duration: 0.5,
            marginBottom: "-110",
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        })

        gsap.to(".trust_title_3", {
            delay: 10.1,
            duration: 0.5,
            y: 60,
            opacity: 1,
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        })


        const logo_box_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
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
            .to(['.logo_right_animation', '.logo_aimation', '.trust_title_3'], {
                duration: 0.5,
                opacity: 0,
            })
            .to(".trust-evolves", {
                background: "radial-gradient(52.08% 133.33% at 50% 50%, #FFFFFF 0%, #C4C4C4 100%), radial-gradient(68.7% 68.7% at 50% 50%, #FFFFFF 0%, #C4C4C4 100%)"
            })
            .to(['.trust_title_4', '.trust_title_5'], {
                duration: .5,
                y: -50,
                opacity: 1,
                // ease: "power1.in",
            })

        const card_box_time_line = gsap.timeline({
            scrollTrigger: {
                trigger: ".trust-evolves",
                start: "top top",
                end: "top top",
                // markers: true, // markerlarni ko‘rsatadi, bu diagnostika uchun foydali
                toggleActions: "play none reset none", // animatsiya faqat bir marta ishlaydi
            }
        })
        card_box_time_line
            .to(".intel", {
                delay: 12,
                duration: 0.5,
                rotate: 0,
                left: 345,
                opacity: 1,
            })
            .to(".nvidia", {
                duration: 0.5,
                rotate: 0,
                right: 345,
                opacity: 1,
            }, "-=0.5")
            .to(".intel", {
                delay: 0.3,
                duration: 0.5,
                scale: 2,
                left: 275
            })
            .to(".nvidia", {
                duration: 0.5,
                "filter": "blur(14px)"
            }, "-=0.5")
            .to(['.trust_title_4', '.trust_title_5'], {
                duration: 0.5,
                opacity: 0
            }, "-=0.5")
            .to(".intel_info", {
                delay: .2,
                duration: 0.5,
                scale: 1
            }, "-=.5")
            .to(".info_title_span", {
                duration: .5,
                opacity: 1,
                y: -10,
                stagger: .3,
                ease: "power2.out",
            })
            .to(".intel_info", {
                duration: 0.5,
                delay: 0.2,
                scale: 0,
                opacity: 0
            })
            .to(".intel", {
                duration: 0.5,
                "filter": "blur(14px)",
                scale: 1
            })
            .to(".nvidia", {
                duration: 0.5,
                "filter": "blur(0px)",
                scale: 2,
                right: 205,
            }, "-=0.5")
            .to(".nvidia_info", {
                duration: 0.5,
                delay: 0.2,
                scale: 1,
                opacity: 1
            })
            .to(".nvidia_title_span", {
                duration: .5,
                opacity: 1,
                y: -10,
                stagger: .3,
                ease: "power2.out",
            })
            .to(".nvidia_info", {
                duration: 0.5,
                delay: 0.2,
                scale: 0,
                opacity: 0
            })
            .to(".nvidia", {
                duration: 0.5,
                scale: 1,
                right: 120,
            }, "-=0.5")
            .to(".intel", {
                duration: 0.5,
                left: 120,
                filter: "blur(0px)",
            }, "-=0.5")
            .to(".trust_info_center_title", {
                duration: .5,
                opacity: 1,
                scale: 1,
            })
            .to(".trust_info_center_title", {
                duration: 1,
                opacity: 0,
            })
            .to(['.trust_info_text', '.trust_logo_box'], {
                duration: .5,
                scale: 1
            })
            .to(['.trust_info_text', '.trust_logo_box'], {
                delay: 0.2, // Bu kechikish faqat birinchi animatsiyada qo'llanadi
                duration: 0.5,
                scale: 2.5,
                opacity: 0,
            })
            .to(['.nvidia'], {
                duration: 0.5,
                scale: 2,
                opacity: 0,
                x: "100%",
            }, "<") // "<" bu animatsiyani birinchi animatsiya bilan bir vaqtda boshlaydi
            .to(['.intel'], {
                duration: 0.5,
                scale: 2,
                opacity: 0,
                x: "-100%",
            }, "<"); // "<" bu animatsiyani ham birinchi animatsiya bilan bir vaqtda boshlaydi
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
                    <h4 className="trust_title_4">A Revolution.</h4>
                    <h5 className="trust_title_5">Two Powerhouses come together.</h5>
                    <Image src={intel} alt="" className="intel" />
                    <Image src={nvidia} alt="" className="nvidia" />
                    <div className="intel_info">
                        <h6 className="intel_info_title">
                            <b>
                                <span className="info_title_span">5th Gen Intel Xeon</span>
                                <span className="info_title_span">Confidential Computing</span></b>
                            <br />
                            <span className="info_title_span">with Intel Tiber Trust</span>
                            <span className="info_title_span">Services and Intel Trust</span>
                            <span className="info_title_span">Domain Extensions</span>
                            <span className="info_title_span">(Intel TDX).</span>
                        </h6>
                    </div>
                    <div className="nvidia_info">
                        <h6 className="intel_info_title">
                            <b>
                                <span className="nvidia_title_span">NVIDIA’s Hopper </span>
                                <span className="nvidia_title_span">and Blackwell</span>
                                <span className="nvidia_title_span"> GPU Architecture</span>
                            </b>
                            <span className="nvidia_title_span">with Confidential </span>
                            <span className="nvidia_title_span">Compute.</span>
                        </h6>
                    </div>
                    <h6 className="trust_info_center_title">
                        <b>
                            Meet Your <br />
                            New AI Notary.
                        </b>
                        EQTY Lab’s solution
                        notarizes all data and
                        each compute cycle with
                        advanced cryptography.
                    </h6>
                    <p className="trust_info_text">
                        Integrated into
                        Best-in-Class AI
                        Solutions:
                    </p>
                    <div className="trust_logo_box">
                        <svg width="146" height="24" viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.9273 15.9342V9.79025C59.9273 9.63025 59.8329 9.53425 59.6756 9.53425H57.6937V7.13425H59.6756C59.8329 7.13425 59.9273 7.03825 59.9273 6.87825V3.03825H62.7271V6.87825C62.7271 7.03825 62.8215 7.13425 62.9788 7.13425H65.7472V9.53425H62.9788C62.8215 9.53425 62.7271 9.63025 62.7271 9.79025V15.2302C62.7271 17.7902 63.608 18.0142 64.7719 18.0142C65.9359 18.0142 65.8101 17.9502 66.1876 17.9182V20.4142C65.7157 20.4783 64.9292 20.5742 64.0484 20.5742C62.9473 20.5103 59.9273 20.5103 59.9273 15.9342ZM136.341 17.4382L138.637 16.2222C139.141 17.4382 140.147 18.2382 141.28 18.2382C142.412 18.2382 143.167 17.8542 143.167 16.7343C143.167 15.6143 142.695 15.5822 141.594 15.1982L140.021 14.6862C137.819 14.0142 136.75 12.7022 136.75 10.9102C136.75 9.11825 138.637 6.91025 141.185 6.91025C143.734 6.91025 144.929 8.03025 145.778 9.79025L143.482 11.0702C142.979 9.95025 142.129 9.31025 141.154 9.31025C140.179 9.31025 139.487 9.82225 139.487 10.6222C139.487 11.4222 139.99 11.8382 141.06 12.1582L142.633 12.6702C144.929 13.4062 145.999 14.6862 145.999 16.4462C145.999 19.2302 143.671 20.6382 141.311 20.6382C138.952 20.5742 137.064 19.3582 136.341 17.3743V17.4382ZM127.69 15.0382C127.627 15.1022 127.595 15.1342 127.595 15.1982V20.3182H124.732V1.40625H127.595V11.7422C127.595 11.8382 127.658 11.9662 127.752 11.9662C127.847 12.0302 127.973 11.9662 128.004 11.9022L132.629 7.10225H136.121L130.71 12.6702C130.615 12.7662 130.615 12.8942 130.71 12.9902L136.592 20.2862H133.1L128.57 14.5262C128.508 14.4622 128.476 14.4302 128.413 14.4302C128.35 14.4302 128.319 14.4303 128.256 14.4943L127.69 15.0062V15.0382ZM123.317 8.89425L121.492 10.6542C120.454 9.85425 119.416 9.50225 118.283 9.50225C115.893 9.50225 114.099 11.3262 114.099 13.7582C114.099 16.1902 115.893 18.0142 118.283 18.0142C120.674 18.0142 120.423 17.6302 121.555 16.8622L123.191 18.6222C120.863 20.3822 119.605 20.7022 118 20.7022C116.396 20.7022 114.351 20.0302 113.124 18.7182C111.929 17.5022 111.237 15.6782 111.237 13.7582C111.237 9.75825 114.099 6.84625 118.063 6.84625C119.322 6.84625 121.272 7.03825 123.348 8.92625L123.317 8.89425ZM109.915 3.23025C109.915 4.19025 109.129 4.99025 108.185 4.99025C107.241 4.99025 106.455 4.19025 106.455 3.23025C106.455 2.27025 107.241 1.47025 108.185 1.47025C109.129 1.47025 109.915 2.27025 109.915 3.23025ZM109.632 20.3182H106.769V7.16625H109.632V20.3182ZM100.541 14.5582V20.3822H97.6779V7.23025H100.478V8.83025C100.478 8.92625 100.541 9.05425 100.635 9.08625C100.729 9.15025 100.855 9.08625 100.887 8.99025C101.61 7.77425 102.963 6.97425 104.442 6.97425C105.92 6.97425 104.788 6.97425 104.913 7.03825V10.0142C104.756 9.95025 104.504 9.95025 104.253 9.95025C101.956 9.91825 100.541 11.7102 100.541 14.5902V14.5582ZM85.1572 13.7582C85.1572 11.3582 86.9504 9.50225 89.2154 9.50225C91.4805 9.50225 93.2736 11.3582 93.2736 13.7582C93.2736 16.1582 91.4805 18.0142 89.2154 18.0142C86.9504 18.0142 85.1572 16.1582 85.1572 13.7582ZM85.4404 18.7502H85.5348C85.5977 18.7502 85.692 18.8142 85.755 18.8463C86.7302 19.9982 88.2088 20.6702 89.8761 20.6702C93.4309 20.6702 96.1364 17.6302 96.1364 13.7582C96.1364 9.88625 95.5072 10.1422 94.3118 8.79825C93.1793 7.51825 91.5434 6.81425 89.8446 6.81425C88.1458 6.81425 86.7302 7.48625 85.7235 8.73425C85.6606 8.79825 85.5662 8.83025 85.4718 8.79825C85.3775 8.73425 85.3145 8.70225 85.3145 8.57425V1.43825H82.4518V20.3502H85.3145V19.0382C85.3145 18.8782 85.346 18.8462 85.4404 18.7822V18.7502ZM73.5489 18.0142C71.3154 18.0142 69.4908 16.1582 69.4908 13.7582C69.4908 11.3582 71.2839 9.50225 73.5489 9.50225C75.814 9.50225 77.6071 11.3582 77.6071 13.7582C77.6071 16.1582 75.7825 18.0142 73.5489 18.0142ZM80.2811 20.3182V7.16625H77.4813V8.47825C77.4813 8.57425 77.4184 8.70225 77.324 8.70225C77.2296 8.76625 77.1038 8.70225 77.0723 8.63825C76.1286 7.48625 74.6815 6.81425 72.9512 6.81425C69.3964 6.81425 66.6909 9.85425 66.6909 13.7262C66.6909 17.5982 69.4593 20.6382 72.9512 20.6382C76.4432 20.6382 76.0657 19.9662 77.0723 18.7182C77.1353 18.6222 77.2296 18.6222 77.324 18.6542C77.4184 18.7183 77.4813 18.7502 77.4813 18.8782V20.3182H80.2811ZM49.4515 18.0142C47.2179 18.0142 45.3933 16.1582 45.3933 13.7582C45.3933 11.3582 47.1865 9.50225 49.4515 9.50225C51.7165 9.50225 53.5097 11.3582 53.5097 13.7582C53.5097 16.1582 51.6851 18.0142 49.4515 18.0142ZM56.1837 20.3182V7.16625H53.3838V8.47825C53.3838 8.57425 53.3209 8.70225 53.2265 8.70225C53.1322 8.76625 53.0063 8.70225 52.9749 8.63825C52.0311 7.48625 50.584 6.81425 48.8538 6.81425C45.2989 6.81425 42.5935 9.85425 42.5935 13.7262C42.5935 17.5982 45.3618 20.6382 48.8538 20.6382C52.3457 20.6382 51.9682 19.9662 52.9749 18.7182C53.0378 18.6222 53.1322 18.6222 53.2265 18.6542C53.3209 18.7183 53.3838 18.7502 53.3838 18.8782V20.3182H56.1837ZM34.2569 18.0142C31.9604 18.0142 30.1987 16.1582 30.1987 13.7582C30.1987 11.3582 31.9918 9.50225 34.2569 9.50225C36.5219 9.50225 38.3151 11.3582 38.3151 13.7582C38.3151 16.1582 36.4905 18.0142 34.2569 18.0142ZM40.9891 20.3182V1.43825H38.1263V8.51025C38.1263 8.60625 38.0634 8.73425 37.969 8.73425C37.8746 8.79825 37.7488 8.73425 37.7174 8.67025C36.7421 7.51825 35.2636 6.84625 33.5962 6.84625C30.0414 6.84625 27.3359 9.88625 27.3359 13.7582C27.3359 17.6302 27.9651 17.3742 29.1606 18.7182C30.2931 19.9982 31.9289 20.7022 33.6277 20.7022C35.3265 20.7022 36.7421 20.0302 37.7488 18.7822C37.8117 18.7182 37.9061 18.6862 38.0005 18.7182C38.0949 18.7822 38.1578 18.8142 38.1578 18.9422V20.3182H40.9576C40.9576 20.2862 40.9576 20.2862 40.9576 20.2862L40.9891 20.3182Z" fill="black" />
                            <path d="M20.5111 9.952L10.7904 15.552L0.471882 9.568L0 9.824V14.144L10.8218 20.416L20.5426 14.816V17.12L10.8218 22.72L0.471882 16.736L0 16.992V17.728L10.8218 24L21.6751 17.728V13.408L21.2032 13.152L10.8218 19.136L1.13252 13.536V11.264L10.8218 16.832L21.6751 10.56V6.272L21.1089 5.984L10.7904 11.904L1.63586 6.592L10.7904 1.312L18.3719 5.632L19.064 5.28V4.736L10.8218 0L0 6.24V6.912L10.8218 13.184L20.5426 7.584V9.888L20.5111 9.952Z" fill="black" />
                        </svg>


                        <svg width="131" height="20" viewBox="0 0 131 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4209 6.01953C30.1199 6.01953 28.8189 6.52978 27.8181 7.34617V6.12158H24.5156V19.1839H27.9182V10.8158C28.6188 9.79535 29.8197 9.18306 31.0206 9.18306C32.2215 9.18306 31.9213 9.18305 32.4216 9.38715V6.01953H31.4209Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60122 15.2065C2.60198 16.0229 3.8029 16.5331 5.10389 16.5331C6.40488 16.5331 6.70511 16.0229 6.70511 15.4106C6.70511 13.4716 0.500381 14.186 0.500381 9.89992C0.500381 5.61385 2.90221 5.81795 5.40412 5.81795C7.90602 5.81795 8.4064 6.3282 9.7074 7.14459L8.10618 9.69582C7.40564 9.18557 6.50496 8.87943 5.70435 8.77738C4.80366 8.77738 4.00305 9.18557 4.00305 9.79787C4.00305 11.5327 10.2078 10.8184 10.2078 15.3085C10.2078 19.7987 7.80595 19.3905 5.10389 19.3905C2.40183 19.3905 1.50114 18.7782 0 17.6557L1.7013 15.1044L1.60122 15.2065Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1182 12.5517C23.1182 8.87788 20.6163 5.81641 17.1137 5.81641C13.611 5.81641 10.9089 8.97993 10.9089 12.6537C10.8089 16.2254 13.5109 19.2869 17.0136 19.491H17.6141C19.6156 19.491 21.517 18.6746 22.818 17.1439L20.8165 15.1029C20.0159 16.0213 18.815 16.5316 17.6141 16.6336C15.8127 16.6336 14.3115 15.307 14.1114 13.5721H23.0182V12.5517H23.1182ZM14.3115 11.0209C14.6118 9.69428 15.7126 8.67378 17.0136 8.77583C18.3146 8.77583 19.4154 9.79632 19.5155 11.0209H14.2115H14.3115Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6289 14.183L44.1315 6.12109H47.7343L41.8298 19.2854H39.4279L33.5234 6.12109H37.1262L40.6289 14.183Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5376 0C51.7385 0 52.7393 1.02049 52.7393 2.24508C52.7393 3.46967 51.7385 4.49016 50.5376 4.49016C49.3367 4.49016 48.3359 3.46967 48.3359 2.24508C48.3359 1.02049 49.3367 0 50.5376 0Z" fill="black" />
                            <path d="M52.2385 6.12109H48.8359V19.1834H52.2385V6.12109Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.4534 16.5311C65.1524 18.47 62.9507 19.5926 60.6489 19.4905C56.9461 19.4905 53.8438 16.6331 53.8438 12.8573C53.8438 9.08149 56.6459 5.91797 60.3487 5.91797H60.749C62.8506 5.91797 64.8521 6.83641 66.1531 8.57125L63.7513 10.7143C63.0508 9.79584 61.9499 9.18354 60.749 9.18354C58.8476 9.18354 57.3464 10.7143 57.3464 12.6532C57.3464 14.5921 58.7475 16.1229 60.6489 16.2249H60.9492C62.1501 16.2249 63.351 15.5106 64.0515 14.4901L66.6535 16.5311H66.4534Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M78.8622 17.1439C77.5612 18.6746 75.6598 19.491 73.6582 19.491C70.1556 19.6951 67.1533 16.8377 66.9531 13.266V12.6537C66.9531 8.97993 69.355 5.81641 73.1578 5.81641C76.9607 5.81641 79.1624 8.87788 79.1624 12.5517V13.5721H70.2556C70.4558 15.409 71.9569 16.7357 73.7583 16.6336C74.9592 16.6336 76.1601 16.0213 76.9607 15.1029L78.8622 17.1439ZM75.7598 11.0209C75.5597 9.69427 74.5589 8.77583 73.2579 8.77583C71.9569 8.77583 70.756 9.69427 70.5559 11.0209H75.8599H75.7598Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.5625 19.2869V6.12255H83.865V7.14305C84.8658 6.32665 86.1668 5.81641 87.4678 5.81641C88.7688 5.81641 90.7703 6.6328 91.8711 7.95944C92.8719 9.28608 93.3723 10.9189 93.1721 12.5517V19.1848H89.7695V12.2455C89.7695 11.3271 89.5694 10.5107 88.9689 9.79632C88.4685 9.28608 87.768 9.08198 87.0675 9.08198C85.8665 9.08198 84.6656 9.69427 83.9651 10.7148V19.1848H80.5625V19.2869Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M102.076 5.91797C97.9729 5.91797 94.5703 9.28559 94.5703 13.5717C94.5703 17.8577 95.3709 17.6536 96.8721 19.1844C98.3732 20.7151 98.1731 19.6946 98.7735 19.2864C100.675 17.8577 103.277 17.8577 105.178 19.2864C105.779 19.6946 106.579 19.6946 107.08 19.1844C110.082 16.2249 110.182 11.4286 107.38 8.36715C105.979 6.83641 104.078 6.02002 101.976 6.02002M101.976 17.3475C99.9744 17.3475 98.2731 15.8167 98.2731 13.7758V13.5717C98.2731 11.4286 99.9744 9.79584 101.976 9.79584C103.977 9.79584 105.679 11.5307 105.679 13.5717C105.679 15.6126 104.178 17.3475 102.176 17.3475H101.976Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M116.293 19.2854H113.691L108.688 6.12109H112.09L114.892 13.6727L117.594 6.12109H120.497L123.199 13.6727L126.001 6.12109H129.403L124.299 19.2854H121.797L118.995 11.7338L116.293 19.2854Z" fill="black" />
                            <path d="M129.398 17.7549H129.098V18.2651H128.898V16.7344H129.498C129.798 16.7344 129.998 16.9385 129.998 17.2446C129.998 17.4487 129.898 17.6528 129.698 17.6528L129.998 18.2651H129.698L129.398 17.7549ZM129.098 17.5508H129.498C129.598 17.5508 129.698 17.4487 129.698 17.3467C129.698 17.2446 129.598 17.1426 129.498 17.1426H129.098V17.6528V17.5508Z" fill="black" />
                            <path d="M129.398 16.1221C130.199 16.1221 130.799 16.7344 130.799 17.5508C130.799 18.3671 130.199 18.9794 129.398 18.9794C128.597 18.9794 127.997 18.3671 127.997 17.5508C127.997 16.7344 128.597 16.1221 129.398 16.1221ZM129.398 15.918C128.497 15.918 127.797 16.6323 127.797 17.5508C127.797 18.4692 128.497 19.1835 129.398 19.1835C130.299 19.1835 130.999 18.4692 130.999 17.5508C130.999 16.6323 130.299 15.918 129.398 15.918Z" fill="black" />
                        </svg>


                        <svg width="88" height="21" viewBox="0 0 88 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4505 2.19666H26.9011C28.9231 2.19666 30.2417 2.28467 31.3846 3.51467C32.1758 4.39332 32.6154 5.44772 32.6154 6.67785C32.6154 7.90796 32.1758 8.96235 31.2967 9.84103C30.4176 10.7197 29.2747 11.2469 26.3736 11.2469H23.7362V18.5398H21.4505V2.19666ZM23.7362 9.40167H26.3736C27.8681 9.40167 30.1538 9.31401 30.1538 6.58999C30.1538 4.04187 28.0439 4.04188 26.8132 4.04188H23.7362V9.40167ZM39.9121 18.5398C39.7362 18.0126 39.7362 17.3975 39.7362 16.8703C38.6813 18.7155 37.1868 18.8912 36.2198 18.8912C33.5824 18.8912 32.1758 17.3975 32.1758 15.5523C32.1758 14.6737 32.5275 13.1799 34.1978 12.2134C35.4286 11.5105 37.1868 11.5105 38.1538 11.5105C38.6813 11.5105 39.033 11.5105 39.6483 11.5985C39.6483 10.1926 39.6483 9.57755 39.2088 9.05035C38.7692 8.52315 37.8901 8.34741 37.2747 8.34741C35.1648 8.34741 34.989 9.84117 34.989 10.2805H32.8791C32.967 9.66543 33.0549 8.87461 33.6703 8.1717C34.5494 7.20518 36.1319 6.94158 37.3626 6.94158C39.033 6.94158 40.7912 7.46877 41.4066 8.61104C41.7582 9.31398 41.7582 9.84117 41.7582 10.3684L41.6703 15.816C41.6703 15.9917 41.6703 17.4855 41.8461 18.6278H39.9121V18.5398ZM38.4176 12.9163C37.5384 12.9163 34.2857 12.9163 34.2857 15.2008C34.2857 15.9038 34.7253 17.1339 36.6593 17.1339C37.7143 17.1339 38.5934 16.6946 39.1209 15.9038C39.5604 15.113 39.6483 14.4979 39.6483 12.9163C39.2967 13.0043 38.945 12.9163 38.4176 12.9163ZM43.6044 2.19666H45.7143V18.5398H43.6044V2.19666ZM54.8571 18.5398C54.6813 18.0126 54.6813 17.3975 54.6813 16.8703C53.6264 18.7155 52.1319 18.8912 51.1648 18.8912C48.5275 18.8912 47.1209 17.3975 47.1209 15.5523C47.1209 14.6737 47.4725 13.1799 49.1428 12.2134C50.3736 11.5105 52.1319 11.5105 53.0989 11.5105C53.6264 11.5105 53.978 11.5105 54.5934 11.5985C54.5934 10.1926 54.5934 9.57755 54.1538 9.05035C53.7143 8.52315 52.8351 8.34741 52.2198 8.34741C50.1099 8.34741 49.934 9.84117 49.934 10.2805H47.8242C47.9121 9.66543 48 8.87461 48.6154 8.1717C49.4945 7.20518 51.0769 6.94158 52.3077 6.94158C53.978 6.94158 55.7362 7.46877 56.3516 8.61104C56.7033 9.31398 56.7033 9.84117 56.7033 10.3684L56.6154 15.816C56.6154 15.9917 56.6154 17.4855 56.7912 18.6278H54.8571V18.5398ZM53.4505 12.9163C52.5714 12.9163 49.3187 12.9163 49.3187 15.2008C49.3187 15.9038 49.7582 17.1339 51.6923 17.1339C52.7472 17.1339 53.6264 16.6946 54.1538 15.9038C54.5934 15.113 54.6813 14.4979 54.6813 12.9163C54.2417 13.0043 53.978 12.9163 53.4505 12.9163ZM58.6373 8.52302V7.20506H60.7472V9.05022C61.011 8.6109 61.8022 7.0293 64.3516 7.0293C65.4066 7.0293 68.4835 7.38077 68.4835 10.8954V18.6276H66.2857V11.4226C66.2857 10.7197 66.1978 10.0168 65.6703 9.48956C65.1428 8.96237 64.3516 8.69878 63.6483 8.69878C62.0659 8.69878 60.6593 9.84104 60.6593 12.1255V18.6276H58.5494V8.52302H58.6373ZM69.1868 7.20506H71.2088V4.74477L73.3187 4.04188V7.11719H75.8681V8.69878H73.3187V15.4644C73.3187 15.9916 73.3187 16.9582 74.8132 16.9582C75.2527 16.9582 75.6923 16.8702 75.8681 16.8702V18.5396C75.5165 18.6276 74.9011 18.7153 74.1099 18.7153C72.0879 18.7153 71.2088 18.1002 71.2088 16.255V8.69858H69.1868V7.20506ZM77.3626 2.19666H79.9121V4.56906H77.3626V2.19666ZM77.5385 7.20506H79.6483V18.5398H77.5385V7.20506ZM81.6703 9.48956C81.6703 8.69878 81.5824 7.90796 81.5824 7.20506H83.6923L83.7802 9.40167C84.2198 7.82008 85.5385 7.2929 86.5055 7.20506C87.1209 7.11705 87.6484 7.11704 88 7.11704V9.22583C87.9121 9.22583 87.7362 9.13784 87.5604 9.13784C87.3846 9.13784 87.2088 9.13784 86.9451 9.13784C84.3956 9.13784 83.8681 10.6316 83.8681 12.5646V18.6274H81.7582V9.48928L81.6703 9.48956ZM8.35165 0C3.95604 0 0.351647 3.60252 0.351647 7.99584C0.351647 12.3892 3.95604 15.9917 8.35165 15.9917C12.7473 15.9917 16.3516 12.3892 16.3516 7.99584C16.3516 3.60252 12.7473 0 8.35165 0ZM8.35165 13.5314C5.27472 13.5314 2.81319 11.0711 2.81319 7.99584C2.81319 4.92053 5.27472 2.46029 8.35165 2.46029C11.4286 2.46029 13.8901 4.92053 13.8901 7.99584C13.8022 11.0711 11.3407 13.5314 8.35165 13.5314ZM15.4725 15.2887L8.35165 18.364L1.23077 15.2887L0 17.4854L8.35165 21L16.7033 17.4854L15.4725 15.2887Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}