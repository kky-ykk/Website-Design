import React from "react";
import styles from "./signUp.module.css";
import signUpImg from "../assets/signUp.png";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  let navigate=useNavigate();

  function fun(event){
    event.preventDefault();
    navigate("/profileCreation");
  }

  return (
    <div className={styles.dribbbleSignUp}>
      {/* <span className={styles.logo}>Logo</span> */}
      <div className={styles.leftContent}>
        <h1>Discover the world's top Designers & Creatives.</h1>
        <div className={styles.artwork}>
          <img src={signUpImg} alt="artWork" style={{height: '14rem', width: '18rem'}}/>
          <p style={{textDecoration:'underline'}}>Art by Krishna Yadav</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <p className={styles.alreadyMember}>
          Already a member? <a href="#">Sign In</a>
        </p>
        <h2>Sign up to Dribbble</h2>
        <form onSubmit={(event)=>{fun(event)}}>
          <div className={styles.namesContainer}>

            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Ram" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ram"
                required
                />
            </div>
              </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ram@gmai.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="6+ characters"
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              Creating an account means you're okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </div>
          <button type="submit" className={styles.createAccountBtn} >       
             Create Account
          </button>
          <div className={styles.shortDesc}>This site is protected by reCAPTCHA and the Google 
            <a href="#" style={{textDecoration:'none'}}>Privacy Policy</a> and 
            <a href="#" style={{textDecoration:'none'}}>Terms of Service</a> apply.
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
