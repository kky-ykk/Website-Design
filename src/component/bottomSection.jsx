
import React from 'react';
import styles from './bottomSection.module.css';
import { MdMarkEmailRead } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaBasketball } from "react-icons/fa6";
import { IoBagRemove } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";


// import profile from "../assets/"
// import { avatarImage } from './SecondSection';

const LastSection = () => {
  return (
    <>
    <div className={styles.container}>

    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt=" logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">Find Work</a>
          </li>
          <li>
            <a href="#">Learn Design</a>
          </li>
          <li>
            <a href="#">Go Pro</a>
          </li>
          <li>
            <a href="#">Hire Designers</a>
          </li>
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.bag}>
          <IoBagRemove />
        </div>
        <div className={styles.profile}>
          {/* <img  alt="Profile photo" /> */}                   
          <IoPerson />
        </div>
        <div className={styles.upload}>
          <button style={{cursor:'pointer'}}>Upload</button>
        </div>
      </div>
    </header>
{/* --------------------------------------------------- */}
        <div className={styles.mailContainer}>

            <h2>Please verigy your email...</h2>
            <div className={styles.mailVerify} >
                <MdMarkEmailRead className={styles.mailStyle} />
                <p style={{lineHeight:'27px',color:'#333'}}>
                    Please verify you email address. We'vs sent a confirmation email to:
                    <b style={{display:'block'}}>account@refero.design</b>
                    Click the confirmation in the link that email to begin using Dribble.
                    Didn't receive the mail? Check your Spam fodler, it may have been caough by a filter. If 
                    you still don't see it, you can <span style={{color:'#ea4b8a',cursor:'pointer'}}>resend the condfirmation email</span>.
                    <br/> Wrong email address? Change it.  <span style={{color:'#ea4b8a',cursor:'pointer'}}>Change it</span>
                </p>
            </div>

        </div>

        {/* ---------------- footer */}

        <div className={styles.mainFooter}>
            <div className={styles.footerContainer}>
                <div className={styles.socialMedia}>
                    <h2>DDDD</h2>
                    <h4>Dribble is the world's leading community for cerative to share, grow , and get hired</h4>
                    <div className={styles.socialLinks}>
                    <FaPinterestSquare />
                    <CiBasketball />
                    <FaTwitter />   
                    <FaFacebookSquare />
                    <FaSquareInstagram />
                    </div>
                </div>
                <div className={styles.forDesigner}>
                    <h4>For designers</h4>
                    <ul>
                        <li>Go pro!</li>
                        <li>Explore design work</li>
                        <li>Design blog</li>
                        <li>Overtime podCast</li>
                    </ul>
                </div>
                <div className="hireDesigner">
                <h4>Hire designers</h4>
                    <ul>
                        <li>Post a job opening</li>
                        <li>post a freelance project</li>
                        <li>Search for designers</li>
                    </ul>
                </div>
                <div className="company">
                <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Testimonials</li>
                        <li>API</li>
                        <li>Terms of Service</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>
                <div className="directories">
                <h4>Hire designers</h4>
                    <ul>
                        <li>Design jobs</li>
                        <li>Designer for hire</li>
                        <li>Freelance designers for hire</li>
                        <li>Tags</li>
                        <li>Places</li>
                        
                    </ul>
                </div>
                <div className="designRes">
                <h4>Hire designers</h4>
                    <ul>
                        <li>Freelancing</li>
                        <li>Design hiring</li>
                        <li>Design Porfolio</li>
                        <li>Design Education</li>
                        <li>Creative Process</li>
                        <li>Design Industry Trends</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className={styles.bottomFooter}>
                <p>2024 Dribble. ALl rihts reserved.</p>
                <div>
                    <b style={{color:'black'}}>20,200,2000</b> shots Dribbled <FaBasketball style={{color:'#ea4b8a'}} />
                </div>
            </div>
        </div>
    </div>
</>
    

  );
};

export default LastSection;