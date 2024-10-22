import { useState } from "react";
import { Layout } from "shared/components/templates/layout/layout";
import { setProfile } from "shared/utils/helpers";
import { useAppSelector } from "store/hooks";
import { selectProfileInfo } from "store/slices";

export const ProfilePrivate = () => {
  const {
    Profile: { displayName, email, photoURL, uid },
  } = useAppSelector(selectProfileInfo);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rh, setRh] = useState("");
  const [profesion, setProfesion] = useState("");

  return (
    <Layout>
      <ul>
        <li>Nombre: {displayName}</li>
        <li>Email: {email}</li>
        <li>
          Foto: <img src={photoURL} alt="foto" />{" "}
        </li>
      </ul>
      <div>
        <input
          type="text"
          placeholder="Telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="RH"
          value={rh}
          onChange={(e) => setRh(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Profesion"
          value={profesion}
          onChange={(e) => setProfesion(e.target.value)}
        />
        <br />
        <button onClick={() => setProfile({ address, phone }, uid)}>
          Agregar Informacion
        </button>
      </div>
    </Layout>
  );
};

export default ProfilePrivate;
