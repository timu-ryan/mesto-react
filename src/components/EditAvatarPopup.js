import React, {useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef();


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 
  return (
    <>
      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        buttonText="Сохранить"
        isOpen={isOpen} 
        onClose={onClose}
        handleSubmit={handleSubmit}
      >
        <label className="popup__field">
          <input
            id="profile-avatar-input"
            ref={avatarRef}
            type="url"
            name="avatarLink"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_avatar_link"
          />
          <span className="profile-avatar-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
    </>
  )
} 

export default EditAvatarPopup;
