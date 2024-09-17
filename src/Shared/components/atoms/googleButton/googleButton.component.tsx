import React from 'react';
import './googleButton.component.scss';
import googleIcon from 'shared/assets/img/google-icon.svg';

type GoogleButtonProps = {
  onClick: () => void;
};

export const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <button className="google-button" onClick={onClick}>
      <img src={googleIcon} alt="Google icon" />
      <span>Iniciar sesión con Google</span>
    </button>
  );
};

export default GoogleButton;
