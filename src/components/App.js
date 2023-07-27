import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({})

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {  
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        name="edit" 
        title="Редактировать профиль" 
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            className="popup__input popup__input_text_name"
          />
          <span className="name-input-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="description-input"
            type="text"
            name="description"
            placeholder="Описание"
            required
            minLength="2"
            maxLength="200"
            className="popup__input popup__input_text_description"
          />
          <span className="description-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="new-item" 
        title="Новое место" 
        buttonText="Добавить"
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            id="place-name-input"
            type="text"
            name="placeName"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            className="popup__input popup__input_place_name"
          />
          <span className="place-name-input-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="place-description-input"
            type="url"
            name="placeLink"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_place_link"
          />
          <span className="place-description-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            id="profile-avatar-input"
            type="url"
            name="avatarLink"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_avatar_link"
          />
          <span className="profile-avatar-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      

      <PopupWithForm 
        name="delete-card" 
        title="Вы уверены?" 
        buttonText="Да"
        isOpen={false} 
        onClose={closeAllPopups}
      ></PopupWithForm >

    </div>
  );
}

export default App;
