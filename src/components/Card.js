import React from "react";

const Card = ({ imageSrc, header, likes, isUser, onCardClick}) => {

  function handleClick() {
    onCardClick(imageSrc);
  }  

  return (
    <article className="card">
      <img src={imageSrc} className="card__image" onClick={handleClick}/>
      <div className="card__description">
        <h2 className="card__text">{header}</h2>
        <button type="button" className="card__like"></button>
        <p className="card__like-number">{likes}</p>
      </div>
      <button 
        style={isUser ? {} : {display: 'none'}} 
        type="button" 
        aria-label="удалить" 
        className="card__delete"
      >
        <div className="card__trash-lid"></div>
        <div className="card__trash"></div>
      </button>
    </article>
  )
}

export default Card;
