import { auth } from "config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "shared/components/templates/layout/layout";
import { setProfile } from "shared/utils/helpers";
import { useAppSelector } from "store/hooks";
import { selectProfileInfo } from "store/slices";
import { useLanguage } from "shared/context";
import "./profilePrivate.page.scss";

export const ProfilePrivate = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const texts = language.profilePrivate;

  const {
    Profile: { displayName, email, photoURL, uid },
  } = useAppSelector(selectProfileInfo);

  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rh, setRh] = useState("");
  const [profesion, setProfesion] = useState("");

  const handleSave = () => {
    setProfile({ address, phone, rh, profesion }, uid);
    setIsEditing(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Layout>
      <div className="profile-private">
        <div className="profile-info">
          <img src={photoURL} alt={displayName} className="profile-photo" />
          <p className="profile-name">{displayName}</p>
          <p className="profile-email">{email}</p>
        </div>
        {isEditing ? (
          <div className="profile-form">
            <div className="input-group">
              <label htmlFor="phone">{texts.labels.phone}</label>
              <p className="description">{texts.descriptions.phone}</p>
              <input
                id="phone"
                type="text"
                placeholder={texts.placeholders.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">{texts.labels.address}</label>
              <p className="description">{texts.descriptions.address}</p>
              <input
                id="address"
                type="text"
                placeholder={texts.placeholders.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="rh">{texts.labels.rh}</label>
              <p className="description">{texts.descriptions.rh}</p>
              <input
                id="rh"
                type="text"
                placeholder={texts.placeholders.rh}
                value={rh}
                onChange={(e) => setRh(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="profesion">{texts.labels.profession}</label>
              <p className="description">{texts.descriptions.profession}</p>
              <input
                id="profesion"
                type="text"
                placeholder={texts.placeholders.profession}
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                onClick={() => setIsEditing(false)}
                className="secondary-button"
              >
                {texts.buttons.cancel}
              </button>
              <button onClick={handleSave} className="primary-button">
                {texts.buttons.save}
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <p>{phone || texts.messages.noPhone}</p>
            <p>{address || texts.messages.noAddress}</p>
            <p>{rh || texts.messages.noRh}</p>
            <p>{profesion || texts.messages.noProfession}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="primary-button"
            >
              {texts.buttons.edit}
            </button>
            <button onClick={handleLogout} className="secondary-button">
              {texts.buttons.logout}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePrivate;
