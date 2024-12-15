import { auth } from "config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "shared/components/templates/layout/layout";
import { setProfile } from "shared/utils/helpers";
import { useAppSelector } from "store/hooks";
import { selectProfileInfo } from "store/slices";
import "./profilePrivate.page.scss";

export const ProfilePrivate = () => {
  const navigate = useNavigate();
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
              <label htmlFor="phone">Teléfono</label>
              <p className="description">
                Incluye el código de tu país si es necesario.
              </p>
              <input
                id="phone"
                type="text"
                placeholder="Ingresa tu número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Dirección</label>
              <p className="description">
                Escribe la dirección completa, incluyendo ciudad y país.
              </p>
              <input
                id="address"
                type="text"
                placeholder="Ingresa tu dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="rh">Grupo sanguíneo (RH)</label>
              <p className="description">
                Indica tu grupo sanguíneo y factor RH.
              </p>
              <input
                id="rh"
                type="text"
                placeholder="Ejemplo: O+, A-"
                value={rh}
                onChange={(e) => setRh(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="profesion">Profesión</label>
              <p className="description">
                Ejemplo: Ingeniero de Software, Médico, etc.
              </p>
              <input
                id="profesion"
                type="text"
                placeholder="Ingresa tu profesión"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                onClick={() => setIsEditing(false)}
                className="secondary-button"
              >
                Cancelar
              </button>
              <button onClick={handleSave} className="primary-button">
                Guardar Información
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <p>{phone || "Teléfono no registrado"}</p>
            <p>{address || "Dirección no registrada"}</p>
            <p>{rh || "RH no registrado"}</p>
            <p>{profesion || "Profesión no registrada"}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="primary-button"
            >
              Editar Información
            </button>
            <button onClick={handleLogout} className="secondary-button">
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePrivate;
