import React, { useState, useEffect } from "react";
import "../styles/Input.scss";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

const emailValidation = email => {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return emailRegex.test(email);
};

const Input = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [visible, setVisible] = useState(false);

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const toggleVisible = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    if (emailValidation(email)) {
      setIsEmail(true);
      setShowError(false);
    } else {
      setIsEmail(false);
    }
  }, [email]);

  return (
    <div className='container'>
      <div className='email-wrapper'>
        <div className='title'>E-mail</div>
        <input
          className='e-mail'
          type='text'
          placeholder='E-mail'
          onChange={e => onChangeEmail(e)}
          value={email}
          onBlur={
            !isEmail
              ? () => {
                  setShowError(true);
                }
              : () => {}
          }
        />
        <AiFillCheckCircle
          className={`check-circle ${isEmail ? "confirmed" : ""}`}
        />
      </div>
      {showError && <div className='invalid'>Invalid e-mail address</div>}
      <div className='password-wrapper'>
        <div className='title'>Password</div>
        <input
          className='password'
          type={visible ? "text" : "password"}
          placeholder='Password'
          onChange={e => onChangePassword(e)}
          value={password}
        />
        {visible ? (
          <AiFillEye onClick={toggleVisible} className='visible-icon visible' />
        ) : (
          <AiFillEyeInvisible
            onClick={toggleVisible}
            className='visible-icon'
          />
        )}
      </div>
    </div>
  );
};

export default Input;
