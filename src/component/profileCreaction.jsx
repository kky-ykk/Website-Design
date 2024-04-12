import React, { useContext, useState } from 'react';
import styles from './profileCreation.module.css';
import {useNavigate} from "react-router-dom";

const ProfileCreation = () => {

  let navigate=useNavigate();
   const [avatarImage, setAvatarImage] = useState(null);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setAvatarImage(URL.createObjectURL(file));
    
  };

  return (
    <>
    <div className={styles.dribbbleSignUp}>
      <div className={styles.rightContent}>
        <h2>Welcome! Let's create your profile</h2>
        <p>Let others get to know you better! You can do these later</p>
        <div className={styles.avatarUploadContainer}>
          <div className={styles.avatarContainer}>
            {avatarImage ? (
              <img src={avatarImage} alt="Avatar" className={styles.avatar} />
            ) : null}
          </div>
          <label htmlFor="avatarUpload" className={styles.avatarUploadLabel}>
            Choose image
          </label>
          <input
            type="file"
            id="avatarUpload"
            name="avatarUpload"
            accept="image/*"
            onChange={handleAvatarUpload}
            className={styles.avatarUploadInput}
            />
        </div>
        <div>
          <h3>Add your location</h3>
          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" placeholder="San Francisco" />
          </div>
        </div>
        <button type="submit" className={styles.createAccountBtn} onClick={()=>navigate("/loginfinish")}>
          Next
        </button>
        <p className={styles.alreadyMember}>
          or Press RETURN
        </p>
      </div>
    </div>
  </>
  );
};


export default ProfileCreation;