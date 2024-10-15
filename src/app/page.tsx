import "./globals.css"

import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Pagination, Autoplay } from 'swiper/modules';

import Image from "next/image";
import header_logo from "./img/header/header_logo.svg";
import hero_bg from "./img/hero/hero_bg.png";
import compute_card from "./img/compute/card.png"
import compute_bg from "./img/compute/compute_bg.png"
import compute1 from "./img/compute/compute_1.png"
import compute2 from "./img/compute/compute_2.png"
import compute_center_logo from "./img/compute/center_logo.svg"
import arrow from "./img/varifable/arrow.svg"
import certificate from "./img/varifable/certificate.svg"
import cpu from "./img/varifable/cpu.svg"
import database from "./img/varifable/database.svg"
import fingerprint from "./img/varifable/fingerprint.svg"
import varifable_card from "./img/varifable/varifable_card.png"
import risk_bg from "./img/risk/bg.png"
import dont_card_bg from "./img/dont/card_bg.png"

export default function Home() {
  return (
    <>
      <div className="Header_top">
        <p className="Header_top_text">
          Verifiable Builds Launches with GitLab and Github
        </p>
      </div>

      <header className="header">
        <div className="header_container">
          <a href="#" className="header_logo_link">
            <Image src={header_logo} alt="" />
          </a>
          <ul className="header_nav_list">
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Why EQTY
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Products
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Technology
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Solutions
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                About
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Partners
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <button className="header_sign_up_btn">
            <span className="header_sign_up_btn_round"></span>
            Sign Up
          </button>
          <button className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="hero_big_wrapper">
        <div className="hero_big_container">
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#" className="nav_link border_r">
                  Overview
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link border_r pl-7">
                  Technology
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link border_r pl-7">
                  Customer Testimonials
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link pl-7">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
          <section className="hero">
            <div className="hero_container">
              <h1 className="hero_title">Verify to Trust, AI</h1>
              <p className="hero_text">
                Introducing Verifiable Compute. <br />
                Ready for Agentic AI.
              </p>
              <p className="hero_bottom_text">
                Certify and Protect Agentic Workflows with{" "}
                <br className="hero_bottom_text_br" /> the{" "}
                <span>First Auditable Proof of Governance.</span>
              </p>
            </div>
          </section>
          <div className="hero_bg">
            <Image src={hero_bg} alt="" className="hero_bg_image" />
          </div>
        </div>
      </div>

      <section className="compute" style={{
        backgroundImage: `url(${compute_bg.src})`,
      }}>
        <div className="compute_container">
          <h2 className="compute_title">A New Era of Compute</h2>
          <p className="compute_text">Launching in 2025. <br /> Evolves Trust for Agentic AI</p>
          <div className="compute_center">
            <div className="compute_center_card">
              <Image src={compute1} alt='' className='compute_card_img' />
            </div>
            <div className='compute_center_logo'>
              <Image src={compute_center_logo} alt="" className="center_logo" />
            </div>
            <div className="compute_center_card compute_center_card_2">
              <Image src={compute2} alt='' className='compute_card_img' />
            </div>
          </div>
          <div className="compute_bottom_card" style={{
            backgroundImage: `url(${varifable_card.src})`,
          }}>
            <h3 className="compute_card_title">
              Introduction: <br />
              Verifiable Compute
            </h3>
            <h4 className="compute_card_title_2 line_27">How does it work?</h4>
            <button className='compute_card_btn'>
              <span className='compute_card_btn_round'></span>
              Video: Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="varifable">
        <div className="varifable-container">
          <div className="varifable-info">
            <h2 className="varifable-basic">The Basics</h2>
            <h2 className="varifable-title">Verifiable Compute</h2>
            <div className="verify">
              <p className="verify-text">Let&apos;s you Verify:</p>
              <div className="verify-cards">
                <div className="verify-card">
                  <div className="verify-card-img">
                    <Image src={database} alt="" />
                    <Image className="arrows" src={arrow} alt="" />
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
                    <Image src={cpu} alt="" />
                    <Image className="arrows" src={arrow} alt="" />
                  </div>
                  <div>
                    <p className="verify-card-text">
                      What code is run and where
                      it is executed
                    </p>
                  </div>
                </div>
                <div className="verify-card">
                  <div className="verify-card-img">
                    <Image src={fingerprint} alt="" />
                    <Image className="arrows" src={arrow} alt="" />
                  </div>
                  <div>
                    <p className="verify-card-text">
                      The AI output is genuine and secure
                    </p>
                  </div>
                </div>
                <div className="verify-card">
                  <div className="verify-card-img">
                    <Image src={certificate} alt="" />
                  </div>
                  <div>
                    <p className="verify-card-text">
                      AI is governed by policies and regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="compute_bottom_card varifable_bottom_card" style={{
              backgroundImage: `url(${compute_card.src})`,
            }}>
              <span className="varifable_free_text">Free</span>
              <h4 className="compute_card_title_2 varifable_bottom_card_text">See Verifiable Compute implementations.</h4>
              <button className='compute_card_btn'>
                <span className='compute_card_btn_round'></span>
                View Demo
              </button>
            </div>
          </div>
          <div className="evolved">
            <div className="evolved-info">
              <h2 className="varifable-basic">The Problem</h2>
            </div>
            <h2 className="evolved-title">Evolved AI = Evolved Threats</h2>
          </div>
        </div>
      </section>

      <section className="risk"
        style={{
          backgroundImage: `url(${risk_bg.src})`,
        }}
      >
        <div className="risk_container">
          <div className="risk-info">
            <p className="risk-text-one">
              <span className="risk-span">91% of enterprises</span> face
              software
            </p>
            <p className="risk-text-two">supply chain attacks each year.</p>
            <p className="risk_title mb-2">91% of enterprises face software</p>
            <p className="risk_title mb-10">supply chain attacks each year.</p>
            <div
              style={{
                maxWidth: "533px",
              }}
            >
              <p className="risk-text-three risk_center_text mb-10">
                This problem will grow exponentially software as billions of
                autonomous AI agents are assembled and provisioned in the next 5
                years.
              </p>
              <p className="risk-text-four risk_center_text mb-100">
                You need new solutions to address new vulnerabilities
                distributed across your AI developers, partners, and suppliers.
              </p>

              <p className="risk-text-five">
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
              <h3 className="dont_title backgroundClip">Don't Just Trust AI</h3>
              <h4 className="dont_title_center">At Runtime, <span>Verify</span></h4>
              <div className="compute_bottom_card dont_bottom_card" style={{
                backgroundImage: `url(${dont_card_bg.src})`,
              }}>
                <h4 className="compute_card_title_2 varifable_bottom_card_text mb-3">Unlock innovation with</h4>
                <span className="varifable_free_text mb-8">Verifiable AI</span>
                <button className='compute_card_btn'>
                  <span className='compute_card_btn_round'></span>
                  Download White paper
                </button>
              </div>
            </div>
            <div className="dont_right">
              <div className="dont_right_top"></div>
              {/* <Swiper
                direction={'vertical'}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper> */}
              <div className="dont_right_card">
                <h3 className="dont_right_title">AI Training and Inference</h3>
                <p className="dont_right_text">Proof AI deployments are untampered</p>
              </div>
              <div className="dont_right_card">
                <h3 className="dont_right_title">AI Privacy</h3>
                <p className="dont_right_text">Proof AI models and data are confidential</p>
              </div>
              <div className="dont_right_card dont_right_card_active">
                <h3 className="dont_right_title">AI Safeguards</h3>
                <p className="dont_right_text">Proof AI guardrails are implemented</p>
              </div>
              <div className="dont_right_card">
                <h3 className="dont_right_title">AI Benchmarks</h3>
                <p className="dont_right_text">Proof AI systems are performant</p>
              </div>
              <div className="dont_right_card">
                <h3 className="dont_right_title">AI FinOps</h3>
                <p className="dont_right_text">Proof AI workloads stay in budget</p>
              </div>
              <div className="dont_right_bottom"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer_top_responsive">
        <div className="footer_top_responsive_container">
          <div className="footer_left_responsive">
            <h2 className="footer_title_responsive">
              <span>Ready</span> for Verifiable Compute?
            </h2>
            <p className="footer_text">Schedule a demo</p>
          </div>
          <div className="footer_right_responsive">
            <form className="footer_form_responsive">
              <div className="footer_form_box_responsive">
                {[
                  { label: "First Name", id: "firstname", name: "firstname" },
                  { label: "Last Name", id: "lastname", name: "lastname" },
                  { label: "Company", id: "company", name: "company" },
                  { label: "Job Title", id: "jobtitle", name: "jobtitle" },
                  { label: "Business Email", id: "email", name: "email" },
                  { label: "Country", id: "country", name: "country" },
                ].map((field, index) => (
                  <div
                    key={field.id}
                    className="footer_inp_box"
                  >
                    <span className="footer_inp_round"></span>
                    <label
                      className={`transition_default footer_inp_label`}
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      name={field.name}
                      className="footer_inp"
                    />
                  </div>
                ))}
              </div>
              <button type="button" className="footer_sign_up_btn">
                <span className="footer_sign_up_btn_round"></span>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer_container">
          <div className="footer_top">
            <div className="footer_left">
              <h2 className="footer_title">
                <span>Ready</span> for Verifiable Compute?
              </h2>
              <p className="footer_text">Schedule a demo</p>
            </div>
            <div className="footer_right">
              <form className="footer_form">
                <div className="footer_form_box">
                  {[
                    { label: "First Name", id: "firstname", name: "firstname" },
                    { label: "Last Name", id: "lastname", name: "lastname" },
                    { label: "Company", id: "company", name: "company" },
                    { label: "Job Title", id: "jobtitle", name: "jobtitle" },
                    { label: "Business Email", id: "email", name: "email" },
                    { label: "Country", id: "country", name: "country" },
                  ].map((field, index) => (
                    <div
                      key={field.id}
                      className="footer_inp_box"
                    >
                      <span className="footer_inp_round"></span>
                      <label
                        className={`transition_default footer_inp_label`}
                        htmlFor={field.id}
                      >
                        {field.label}
                      </label>
                      <input
                        type="text"
                        id={field.id}
                        name={field.name}
                        className="footer_inp"
                      />
                    </div>
                  ))}
                </div>
                <button type="button" className="footer_sign_up_btn">
                  <span className="footer_sign_up_btn_round"></span>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="footer_bottom">
            <a href="#" className="header_logo_link">
              <svg
                width="171"
                height="34"
                viewBox="0 0 171 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.13643 20.1547H21.4436V13.3681H7.13643V7.4976H22.4386V0.710938H0V33.9995H22.9532V27.1789H7.13643V20.1547Z"
                  fill="black"
                />
                <path
                  d="M101.179 0.712592L93.528 12.725L85.8769 0.712592H54.0375V7.49926H63.9187V27.1467H53.4199C53.9688 26.468 54.4149 25.7554 54.8266 25.0089C56.0617 22.6335 56.7136 19.9189 56.7136 16.9667C56.7136 14.0145 56.2676 12.2499 55.4442 10.2139C54.5864 8.14399 53.3856 6.31159 51.8759 4.81853C50.3663 3.29153 48.5479 2.10386 46.455 1.25553C44.3964 0.407194 42.132 0 39.7646 0C37.3972 0 35.0985 0.441127 33.0399 1.25553C30.9813 2.10386 29.1629 3.29153 27.6189 4.81853C26.1093 6.34553 24.9085 8.14399 24.0507 10.2139C23.193 12.2839 22.7812 14.5574 22.7812 16.9667C22.7812 19.3759 23.2273 21.6834 24.0507 23.7194C24.9085 25.7893 26.1093 27.6217 27.6189 29.1148C29.1286 30.6418 30.947 31.8295 33.0399 32.6778C35.0985 33.5261 37.3629 33.9333 39.7646 33.9333H71.0551V7.46533H81.6569L89.9598 19.9189V33.9333H97.0963V19.9867L109.894 0.712592H101.179ZM48.6165 20.9369C48.1705 22.1585 47.5529 23.2443 46.7295 24.1605C45.906 25.0767 44.9111 25.8233 43.7445 26.3662C42.578 26.9091 41.2399 27.1806 39.7303 27.1806C38.2207 27.1806 36.8483 26.9091 35.6817 26.3662C34.5152 25.8233 33.4859 25.0767 32.6968 24.1605C31.8733 23.2443 31.2215 22.1585 30.8097 20.9369C30.3637 19.6813 30.1235 18.3579 30.1235 16.9667C30.1235 15.5754 30.3637 14.252 30.8097 12.9965C31.2558 11.7749 31.8733 10.689 32.6968 9.77279C33.5202 8.85659 34.5152 8.11006 35.6817 7.56713C36.8483 7.02419 38.2207 6.75273 39.7303 6.75273C41.2399 6.75273 42.578 7.02419 43.7445 7.56713C44.9111 8.11006 45.9404 8.85659 46.7295 9.77279C47.5529 10.689 48.2048 11.7749 48.6165 12.9965C49.0625 14.252 49.3027 15.5754 49.3027 16.9667C49.3027 18.3579 49.0625 19.6813 48.6165 20.9369Z"
                  fill="black"
                />
                <path
                  d="M135.249 2.75L123.481 29.4895H111.472V2.75H108.728V31.9666H125.299L128.627 24.1959H144.272L147.498 31.9666H150.585L138.165 2.75H135.249ZM129.691 21.7187L136.587 5.7022L143.278 21.7187H129.691Z"
                  fill="black"
                />
                <path
                  d="M170.485 20.9734C170.177 20.1251 169.731 19.3786 169.113 18.7678C168.53 18.157 167.844 17.648 167.02 17.2747C166.197 16.9014 165.339 16.6639 164.344 16.596V16.5282C166.094 16.1549 167.432 15.4423 168.29 14.3564C169.182 13.2706 169.628 11.9472 169.628 10.488C169.628 9.02889 169.353 7.50189 168.77 6.51782C168.187 5.49982 167.466 4.71936 166.574 4.17642C165.682 3.59956 164.653 3.2263 163.521 3.05663C162.388 2.88696 161.256 2.78516 160.158 2.78516H151.649V32.0018H161.085C162.08 32.0018 163.178 31.9 164.31 31.6624C165.476 31.4588 166.54 31.0177 167.535 30.4408C168.53 29.83 169.353 29.0156 170.005 27.9298C170.657 26.8778 171 25.4866 171 23.8238C170.966 22.7719 170.794 21.8218 170.485 20.9734ZM160.501 5.22836C161.359 5.22836 162.183 5.29622 162.972 5.46589C163.761 5.63555 164.447 5.90702 165.03 6.31422C165.613 6.72142 166.094 7.26436 166.437 7.90909C166.78 8.58776 166.952 9.43609 166.952 10.4541C166.952 11.4721 166.883 11.4382 166.711 12.015C166.54 12.5919 166.197 13.1009 165.716 13.6099C165.202 14.1189 164.516 14.5261 163.624 14.8654C162.731 15.2048 161.565 15.3744 160.158 15.3744H154.429V5.22836H160.501ZM167.947 25.6223C167.775 26.267 167.398 26.8778 166.883 27.4547C166.368 28.0316 165.579 28.5066 164.619 28.9138C163.624 29.2871 162.32 29.4907 160.707 29.4907H154.394V17.8516H161.119C161.977 17.8516 162.834 17.9534 163.692 18.1909C164.55 18.3945 165.305 18.7678 165.957 19.2428C166.608 19.7179 167.157 20.3626 167.569 21.1092C167.981 21.8896 168.187 22.8058 168.187 23.8578C168.221 24.4007 168.118 24.9776 167.947 25.6223Z"
                  fill="black"
                />
              </svg>
            </a>
            <p className="footer_bottom_text">
              2024 EQTY Lab AG, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
