import React from "react";

const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_card ${card ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button 
          type="button" 
          aria-label="Закрыть" 
          onClick={onClose}
          className="popup__close popup__close_button_card"
        ></button>
        <img className="popup__image" src={card}/>
        <p className="popup__image-description"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
