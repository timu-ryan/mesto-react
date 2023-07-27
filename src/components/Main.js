import React, { useEffect, useState } from "react";
import api from '../utils/api';
import Card from "./Card";

const Main = ({
    onEditProfile,
    onAddPlace,
    onEditAvatar, 
    onCardClick
  }) => {
    
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getMyProfile(), api.getInitialCards()])
      .then(([profile, initialCards]) => {
        setUserAvatar(profile.avatar);
        setUserName(profile.name);
        setUserDescription(profile.about);
        initialCards.forEach(card => card.isUser = profile._id === card.owner._id);
        setCards([...initialCards]);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  

  return (
    <main className="content">
      <section className="profile">
      <img src={userAvatar} alt="аватар" className="profile__avatar" />
        <button type="button" className="profile__pen" onClick={onEditAvatar}></button>
        <div>
          <div className="profile__name">
            <h1 className="profile__name-text">{userName}</h1>
            <button type="button" className="profile__edit" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__button" onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        {cards.map(card => 
          <Card 
            key={card._id}
            imageSrc={card.link} 
            header={card.name} 
            likes={card.likes.length}
            isUser={card.isUser}
            onCardClick={onCardClick}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
