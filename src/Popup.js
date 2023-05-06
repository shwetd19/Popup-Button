import React, { useState } from 'react';
import styled from 'styled-components';
// import closeIcon from './close.png'; 
// assuming the close icon is saved as "close.png" in the same directory as this file

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #0077FF;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 999;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  opacity: ${props => props.visible ? 1 : 0};
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const PopupText = styled.div`
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  margin: 0 20px;
`;

const Popup = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <Button onClick={togglePopup}>About Me</Button>
      <PopupContainer visible={popupVisible}>
        <ProfileImage src={"./02.png"} alt="My Profile Image" />
        <PopupText>
          <h2>About Me</h2>
          <p>Hello, my name is Shwetas Dhake and I am a Full-Stack Developer.</p>
        </PopupText>
        <CloseButton onClick={togglePopup}>
          <img src={"./close.png"} alt="Close" style={{ width: '30px', height: '30px'  }} />
        </CloseButton>
      </PopupContainer>
    </>
  );
};

export default Popup;
