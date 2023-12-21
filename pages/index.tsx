import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../Components/Navigation/Navbar';



const Home: NextPage = () => {
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
          width: 85%;
          height: auto;
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

        @font-face{
          font-family: "Old English Text MT";
          src: url("f3258385782c4c96aa24fe8b5d5f9782.eot");
          src: url("f3258385782c4c96aa24fe8b5d5f9782.eot?#iefix")format("embedded-opentype"),
              url("f3258385782c4c96aa24fe8b5d5f9782.woff")format("woff"),
              url("f3258385782c4c96aa24fe8b5d5f9782.woff2")format("woff2"),
              url("f3258385782c4c96aa24fe8b5d5f9782.ttf")format("truetype"),
              url("f3258385782c4c96aa24fe8b5d5f9782.svg#Old English Text MT")format("svg");
          font-style:normal;
          font-weight: normal;
          font-display:swap;
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

        .justify {
          text-align: justify;
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

        .margin-left3 {
          margin-left: 40px;
        }

      `}</style>
      <Navbar>
      </Navbar>
      <div className={styles.container}>
          <Head>
            <title>Jessica Portfolio</title>
            <meta name="description" content="Welcome to My Portfolio" />
            <link rel="icon" href="/bg/logo icon.png" />
            <link href="https://db.onlinewebfonts.com/c/f3258385782c4c96aa24fe8b5d5f9782?family=Old+English+Text+MT" rel="stylesheet"></link>
          </Head>
      </div>

      <main className={`${styles.main}`}>
        <>
          <div>
            <div className="container">
              <div className="ImgContainer p-4">
                <Image src="/bg/name.png" alt="Name Jessica" className="h-auto w-100% mx-auto" width={4434} height={615}/>
              </div>
              <div className="containerDiv picture">
                  <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="rounded-full h-auto w-auto" width={670} height={797} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="containerDiv container1">
                <p className="headerFont">About Me&nbsp;&nbsp;</p>
                <p className="justify">
                    Hey there! I&apos;m Jessica, born in Indonesia and now in my final year of studying BSc (Hons) Information Technology
                    specifically in Computer Networking and Security at Sunway University. I&apos;ve been in Malaysia since April 2021, starting
                    this awesome journey after finishing my foundation year. Beyond just learning about IT, computer networking, and security,
                    I&apos;ve also made some really great friends. I&apos;m super passionate about technology and love getting into cool projects, teaming
                    up with other tech enthusiasts, and whenever I can, exploring new places. Every day is a chance to learn, grow, and make
                    awesome memories. I&apos;m really excited about what&apos;s coming next in this incredible adventure! 🚀🌏
                </p>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Skills&nbsp;&nbsp;</p>
                <li>Skilled in Wireshark for Network and Packet Analyzer.</li>
                <li>Expertise and knowledge in Network and Computer Security, including detection tools.</li>
                <li>Proficient user of Windows and Linux Operating System such as Kali Linux, Ubuntu, etc. </li>
                <li>Expert in using Virtual Machines like VMware, and Virtual Box.</li>
                <li>Designed, and implemented a network topology using cisco packet tracer.</li>
                <li>Configured devices such as a router, switch, and PC using cisco packet tracer.</li>
                <li>Strong in HTML, CSS, JavaScript, PHP, SQL, PhpMyAdmin, Python, Java, Object Oriented Programming (OOP) and XAMPP</li>
                <li>Proficient user of Dr. Java, Eclipse, and Visual Studio Code</li>
                <li>Designed a business-related database using SQL Oracle APEX</li>
                <li>Proficient user of Microsoft Word, Excel, PowerPoint, </li>
                <li>Highly experienced in Adobe Photoshop, Canva, Adobe Illustrator, Inkscape, Gravit designer, Pixlr, and Davinci Resolve</li>
                <li>Able to adapt, learn quickly, and eager to learn.</li>
                <li>A good team player who is organized and can also work independently.</li>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Achievements&nbsp;&nbsp;</p>
                <p className="header1">August 2021 - Present</p>
                <p className="margin-left">Jeffrey Cheah ACE Scholarship</p>
                <li className="margin-left2">Received an amount of RM 16,000 Scholarship for 3 years continuously.</li>
                <br></br>
                <p className="header1">Jun 2021</p>
                <p className="margin-left">Ontario Scholar. Merite scolaire de l’Ontario</p>
                <li className="margin-left2">Obtained an average of at least eighty percent in CIMP.</li>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Language&nbsp;&nbsp;</p>
                <li>English</li>
                <li>Bahasa Malay</li>
                <li>Mandarin</li>
                <li>Bahasa Indonesia</li>
                <li>Chinese (Hokkien or Fujian)</li>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Education&nbsp;&nbsp;</p>
                <p className="header1">August 2021 - Present (Expected to graduate in August 2024)</p>
                <p className="margin-left">Bachelor of Information Technology (Computer Networking and Security)</p>
                <li className="margin-left2">School of Engineering and Technology, Sunway University, Petaling Jaya</li>
                <li className="margin-left2"><strong>Major: </strong>Computer Networking and Security</li>
                <li className="margin-left3"><strong>Year 1 CGPA: </strong>4.00</li>
                <li className="margin-left3"><strong>Year 2 CGPA: </strong>3.79</li>
                <li className="margin-left3"><strong>Current CGPA: </strong>3.79</li>
                <br></br>
                <p className="header1">Sep 2020 - May 2021</p>
                <p className="margin-left">Canadian International Matriculation Program</p>
                <li className="margin-left2">Sunway College, Petaling Jaya</li>
                <li className="margin-left2"><strong>Major: </strong>Mathematics, Computer Science, and Communication Technology</li>
                <li className="margin-left3"><strong>Overall Average: </strong>92.83</li>
                <br></br>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Extracurricular Activities&nbsp;&nbsp;</p>
                <p className="header1">Sep 2021 - Sep 2023</p>
                <p className="margin-left">Sunway Tech Club, Sunway University, Bandar Sunway</p>
                <li className="margin-left2"><strong>Member</strong></li>
                <li className="margin-left3">Participated in club activities</li>
                <li className="margin-left3">Enhanced technical skills based on the workshops</li>
                <br></br>
                <p className="header1">Aug 2022 – Aug 2023</p>
                <p className="margin-left">Sunway Student Volunteer, Sunway University, Bandar Sunway</p>
                <li className="margin-left2"><strong>Member</strong></li>
                <li className="margin-left3">Participated in club activities</li>
                <br></br>
                <p className="header1">May 2022 – May 2023</p>
                <p className="margin-left">Sunway Analytics Society, Sunway University, Bandar Sunway</p>
                <li className="margin-left2"><strong>Member</strong></li>
                <li className="margin-left3">Participated in club activities</li>
                <li className="margin-left3">Enhanced technical skills based on the workshops</li>
                <br></br>
                <p className="header1">2018 - 2019</p>
                <p className="margin-left">Photo Editing, Design, and Animation, Mondial School, Batam City, Indonesia</p>
                <li className="margin-left2"><strong>Member</strong></li>
                <li className="margin-left3">Participated in club activities</li>
                <li className="margin-left3">Enhanced design, and editing skills based on the classes</li>
                <li className="margin-left3">Done quite a lot of editing, and design projects</li>
                <br></br>
                <p className="header1">2018</p>
                <p className="margin-left">Robotics, Mondial School, Batam City, Indonesia</p>
                <li className="margin-left2"><strong>Member</strong></li>
                <li className="margin-left3">Participated in club activities</li>
                <li className="margin-left3">Enhanced technical skills based on the classes</li>
                <li className="margin-left3">Done some mini experiments using Arduino</li>
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

export default Home
