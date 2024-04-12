import React, { useState } from 'react';
import styles from './loginFinish.module.css';
import flower from "../assets/flowers.webp";
import {useNavigate} from "react-router-dom";

const LoginFinish = () => {

  let navigate=useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const opts = [
    {
      title: 'I\'m a designer looking to share my work',
      image: flower,
      selecte:false
    },
    {
      title: 'I\'m looking to hire a designer',
      image: flower,
      selecte:false
    },
    {
      title: 'I\'m looking for design inspiration',
      image: flower,
      selecte:false
    },
  ];

  let [options,setOptions]=useState(opts)
  
  const handleOptionSelect = (index) => {
    setSelectedOption(true);
    options[index].selecte=true;

  };
  
  

  return (
    <>
    <div className={styles.thirdSection}>
        <h1>What brings you here?</h1>
        <div style={{textAlign:'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus libero architecto eos, quos iure dolor quas </div>
      <div className={styles.cardContainer}>
        {options.map((option, index) => (
          
          <div
          key={index}
          className={`${styles.card} ${option.selecte == true ? styles.selected : ''}`}
          onClick={() => handleOptionSelect(index)}
          >
            <img src={option.image} alt={option.title} className={styles.cardImage} />
            <h3>{option.title}</h3>
            <p >Select the options that best describe you. Don't worry, you can explore other options later.{option.selecte}</p>
            <div 
              className={`${styles.radioButton} ${ option.selecte == true ? styles.selected : ''}`}
              />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className={styles.finishButton}
        disabled={selectedOption === null}
        onClick={()=>{navigate("/lastSection")}}
        >
        Finish
      </button>
      <p className={styles.alreadyMember}>
          or Press RETURN
        </p>
    </div>
  </>
  );
};

export default LoginFinish;

