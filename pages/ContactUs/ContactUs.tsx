import React from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";

const ContactUs: NextPage = () => {
    return (
        <div className="bg">
            <style jsx>{`
            .bg {
                background-image: url('/bg/bg.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            .ImgContainer {
                width: 80%;
                height: 250px;
                margin-left: auto;
                margin-right: auto;
                transition: transform 0.5s ease-in-out;
            }

            .ImgContainer:hover {
                transform: scale(1.04);
            }

            .container1 {
                border-radius: 3rem;
                margin: 0 auto;
                background-color: white;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
                padding: 3rem;
                width: 70%;
                height: 70%;
                margin: 0 auto;
                transition: transform 0.5s ease-in-out;
            }

            .container1:hover {
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                transform: scale(1.015);
            }

            .picture {
                background-color: transparent;
                width: 330px;
                height: 330px;
                border-radius: 50%;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
                margin: 0 auto;
                transition: transform 0.5s ease-in-out;

            }

            .picture:hover {
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                transform: scale(1.03);
            }

            .containerDiv {
                margin-top: 40px;
            }

            .headerFont {
                font-size: 27px;
                color: white;
                text-shadow: 2px 2px 4px rgba(128, 0, 64, 1);
                font-family: "Old English Text MT";
                transition: transform 0.5s ease-in-out;
                padding-right: 1.25rem;
                padding-bottom: 0.8rem;
                text-align: left;
                }

                .container1:hover .headerFont{
                text-shadow: 2px 2px 4px rgba(128, 0, 64, 1);
                transform: scale(1.05);
                text-decoration: underline;
                text-underline-offset: 5px;
                }

                .header1 {
                font-size: 17px;
                font-weight: bold;
                padding-bottom: 4px;
                padding-top: 4px;
                }

                .margin-left {
                margin-left: 10px;
                }

                .margin-left2 {
                margin-left: 20px;
                }
            `}</style>
            <Navbar>
            </Navbar>
            <div className={styles.container}>
                <Head>
                    <title>Contact Us</title>
                    <meta name="description" content="Contact Us Page" />
                    <link rel="icon" href="/bg/logo icon.png" />
                </Head>
            </div>

            <main className={`${styles.main}`}>
            <br></br>
            <>
                <div>
                    <div className="container">
                        <div className="ImgContainer p-4">
                            <Image src="/bg/contactus.png" alt="contactUs Title" className="h-auto w-100% mx-auto" width={4434} height={615}/>
                        </div>
                        <div className="containerDiv picture">
                            <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="rounded-full h-auto w-auto" width={670} height={797} />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="containerDiv container1 p-4">
                            <p className="headerFont">Email&nbsp;&nbsp;</p>
                            <li className="margin-left">jessicachan292003@gmail.com</li>
                        </div>
                        <div className="containerDiv container1 p-4">
                            <p className="headerFont">Phone Number&nbsp;&nbsp;</p>
                            <li className="margin-left">+60176944154</li>
                            <br></br>
                        </div>
                    </div>
                </div>
            </>
            </main>

            <footer className={styles.footer}>
            <Image
                src="/bg/name logo no bg2.png"
                alt="Logo"
                width={213}
                height={123}
                className="relative mx-auto w-1/6 h-auto"
                />
            </footer>
        </div>
        )
    }


export default ContactUs;

