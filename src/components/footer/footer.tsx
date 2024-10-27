import Link from "next/link";
import "./ui/style.css";
export default function Footer() {
    return (
        <>
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
                                ].map((field) => (
                                    <div key={field.id} className="input-container">
                                    <input type="text" id="input" required />
                                    <label htmlFor="input" className="label">{field.label}</label>
                                    <span className="input_round"></span>
                                    <div className="underline"></div>
                                </div>
                                ))}
                            </div>
                            <button type="submit" className="footer_sign_up_btn">
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
                                    {([
                                        { label: "First Name", id: "firstname" },
                                        { label: "Last Name", id: "lastname" },
                                        { label: "Company", id: "company" },
                                        { label: "Job Title", id: "jobtitle" },
                                        { label: "Business Email", id: "email" },
                                        { label: "Country", id: "country" },
                                    ] as const).map((field) => (
                                        <div key={field.id} className="input-container">
                                            <input type="text" id="input" required />
                                            <label htmlFor="input" className="label">{field.label}</label>
                                            <span className="input_round"></span>
                                            <div className="underline"></div>
                                        </div>
                                    ))}

                                </div>
                                <button type="submit" className="footer_sign_up_btn">
                                    <span className="footer_sign_up_btn_round"></span>
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <Link href={"#"} className="header_logo_link">
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
                        </Link>
                        <p className="footer_bottom_text">
                            2024 EQTY Lab AG, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}









