import React from "react";

const Card = ({ card, onCardClick}) => {

  function handleClick() {
    onCardClick(card);
  }  

  return (
    <article className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <div className="card__description">
        <h2 className="card__text">{card.name}</h2>
        <button type="button" className="card__like"></button>
        <p className="card__like-number">{card.likes.length}</p>
      </div>
      <button 
        style={card.isUser ? {} : {display: 'none'}} 
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
