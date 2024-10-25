// import "./ui/style.css"
// import Image from "next/image";

// import header_logo from "../../app/img/header/header_logo.svg";
// import compute_card from "../../app/img/compute/card.png"
// import compute1 from "../../app/img/compute/compute_1.png"
// import compute2 from "../../app/img/compute/compute_2.png"
// import compute_center_logo from "../../app/img/compute/center_logo.svg"
// import hero_bg from "../../app/img/hero/hero_bg.png"
// import varifable_card from "../../app/img/varifable/varifable_card.png"
// import compute_bg from "../../app/img/compute/compute_bg.png"
// import Link from "next/link";
// export default function Header_hero() {
//     return (
//         <>
//             <div className="hero_header_compute_bg">
//                 <div className="Header_top top_animation">
//                     <p className="Header_top_text">
//                         Verifiable Builds Launches with GitLab and Github
//                     </p>
//                 </div>

//                 <header className="header top_animation">
//                     <div className="header_container">
//                         <Link href={"#"} className="jump_animation header_logo_link">
//                             <Image src={header_logo} alt="" />
//                         </Link>
//                         <ul className="header_nav_list">
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     Why EQTY
//                                 </Link>
//                             </li>
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     Products
//                                     <svg
//                                         width="12"
//                                         height="8"
//                                         viewBox="0 0 12 8"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
//                                             stroke="white"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     Technology
//                                     <svg
//                                         width="12"
//                                         height="8"
//                                         viewBox="0 0 12 8"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
//                                             stroke="white"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     Solutions
//                                     <svg
//                                         width="12"
//                                         height="8"
//                                         viewBox="0 0 12 8"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
//                                             stroke="white"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     About
//                                     <svg
//                                         width="12"
//                                         height="8"
//                                         viewBox="0 0 12 8"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
//                                             stroke="white"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li className="list_nav_item">
//                                 <Link href={"#"} className="header_nav_link">
//                                     Partners
//                                     <svg
//                                         width="12"
//                                         height="8"
//                                         viewBox="0 0 12 8"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
//                                             stroke="white"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Link>
//                             </li>
//                         </ul>
//                         <button className="jump_animation header_sign_up_btn">
//                             <span className="header_sign_up_btn_round"></span>
//                             Sign Up
//                         </button>
//                         <button className="jump_animation hamburger">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 className="size-6"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </header>

//                 <div className="hero_big_wrapper">
//                     <div className="hero_big_container">
//                         <nav className="nav">
//                             <ul className="nav_list">
//                                 <li className="nav_item">
//                                     <Link href={"#"} className="nav_link ">
//                                         Overview
//                                     </Link>
//                                 </li>
//                                 <li className="nav_item">
//                                     <div className="border_r"></div>
//                                 </li>
//                                 <li className="nav_item">
//                                     <Link href={"#"} className="nav_link  pl-7">
//                                         Technology
//                                     </Link>
//                                 </li>
//                                 <li className="nav_item">
//                                     <div className="border_r"></div>
//                                 </li>
//                                 <li className="nav_item">
//                                     <Link href={"#"} className="nav_link  pl-7">
//                                         Customer Testimonials
//                                     </Link>
//                                 </li>
//                                 <li className="nav_item">
//                                     <div className="border_r"></div>
//                                 </li>
//                                 <li className="nav_item">
//                                     <Link href={"#"} className="nav_link pl-7">
//                                         Resources
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </nav>
//                         <section className="hero">
//                             <div className="hero_container">
//                                 <h1 className="hero_title"><span className="hero_title_span">Verify</span> <span className="hero_title_span">to</span> <span className="hero_title_span">Trust,</span> <span className="hero_title_span">AI</span></h1>
//                                 <div className="hero_text">
//                                     <p>Introducing Verifiable Compute.</p>
//                                     <p>Ready for Agentic AI.</p>
//                                 </div>
//                                 <div className="hero_bottom_box">
//                                     <p className="hero_bottom_text">Certify and Protect Agentic Workflows with{" "}</p>
//                                     <span className="hero_bottom_text">The First Auditable Persistent Secure Proof of Governance.</span>
//                                 </div>
//                             </div>
//                         </section>
//                         <Image src={hero_bg} alt="" className="hero_bg" />
//                     </div>
//                 </div>

//                 <section className="compute" style={{
//                     backgroundImage: `url(${compute_bg.src})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}>
//                     <div className="compute_container">
//                     <h2 className="compute_title">A New Era of Compute</h2>
//                         <div className="compute_text">
//                             <p>Launching in 2025.</p>
//                             <p>Evolves Trust for Agentic AI</p>
//                         </div>
//                         <div className="compute_center">
//                             <div className="compute_center_card compute_center_card_left">
//                                 <Image src={compute1} alt='' className='compute_card_img' />
//                             </div>
//                             <div className='compute_center_logo'>
//                                 <Image src={compute_center_logo} alt="" className="center_logo" />
//                             </div>
//                             <div className="compute_center_card compute_center_card_2 compute_center_card_left_right">
//                                 <Image src={compute2} alt='' className='compute_card_img' />
//                             </div>
//                         </div>
//                         <div className="compute_bottom_card compute_card_animation scale_0" style={{
//                             backgroundImage: `url(${varifable_card.src})`,
//                         }}>
//                             <h3 className="compute_card_title">
//                                 Introduction: <br />
//                                 Verifiable Compute
//                             </h3>
//                             <h4 className="compute_card_title_2 line_27">How does it work?</h4>
//                             <button className='compute_card_btn'>
//                                 <span className='compute_card_btn_round'></span>
//                                 Video: Learn more
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }
