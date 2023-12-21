import Link from "next/link"
import Head from 'next/head';

const Button = () => {
        return (
            <div>
                <Head>
                    <link href="https://db.onlinewebfonts.com/c/f3258385782c4c96aa24fe8b5d5f9782?family=Old+English+Text+MT" rel="stylesheet"></link>
                </Head>
                <style jsx>{`
                div {
                    display:inline-block;
                    margin-right: 20px;
                    margin-left: 20px;
                }

                .button {
                    font-size: 27px;
                    background-color: transparent;
                    font-weight: normal;
                    color: white;
                    text-shadow: 2px 2px 4px rgba(128, 0, 64, 0.8);
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    text-align: right;
                    font-family: "Old English Text MT";
                    transition: transform 0.5s ease-in-out;
                }

                .button:hover {
                    text-shadow: 2px 4px 5px rgba(128, 0, 64, 0.8);
                    transform: scale(1.15);
                }

                @font-face{
                    font-family: "Old English Text MT";
                    src: url("f3258385782c4c96aa24fe8b5d5f9782.eot");
                    src: url("f3258385782c4c96aa24fe8b5d5f9782.eot?#iefix")format("embedded-opentype"),
                        url("f3258385782c4c96aa24fe8b5d5f9782.woff")format("woff"),
                        url("f3258385782c4c96aa24fe8b5d5f9782.woff2")format("woff2"),
                        url("f3258385782c4c96aa24fe8b5d5f9782.ttf")format("truetype"),
                        url("f3258385782c4c96aa24fe8b5d5f9782.svg#Old English Text MT")format("svg");
                    font-style:normal;
                    font-display:swap;
                }

                `}</style>
                <div>
                    <Link href="/">
                        <button className="button">Home</button>
                    </Link>
                </div>
                <div>
                    <Link href="/Projects/Projects">
                        <button className="button">Projects</button>
                    </Link>
                </div>
                <div>
                    <Link href="/ContactUs/ContactUs">
                        <button className="button">Contact Us</button>
                    </Link>
                </div>
            </div>
        );
    };
    export default Button;