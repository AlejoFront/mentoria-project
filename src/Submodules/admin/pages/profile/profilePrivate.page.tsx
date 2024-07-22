import {setProfile, setProfileAddress } from 'Shared/utils/helpers';
import {useAppSelector} from 'Store/hooks';
import {selectProfileInfo} from 'Store/slices'
import { useState } from 'react';

export const ProfilePrivate = () => {
  const {Profile: {displayName,email,photoURL, uid}} = useAppSelector(selectProfileInfo);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [rh, setRh] = useState('')
  const [profesion, setProfesion] = useState()
  return (
    <>

      <ul>
        <li>Nombre: {displayName}</li>
        <li>Email: {email}</li>
        <li>Foto: <img src={photoURL} alt="foto" /> </li>
      </ul>
      
      <div>
        <input type="text" placeholder='Telefono' value={phone} onChange={e => setPhone(e.target.value)} /><br />
        <input type="text" placeholder='Dirección' value={address} onChange={e => setAddress(e.target.value)} /><br />
        <input type="text" placeholder='RH' value={rh} onChange={e => setRh(e.target.value)} /><br />
        <input type="text" placeholder='Profesion' />
        <br />
        <button onClick={() => setProfile({address, phone}, uid)}>Agregar Informacion</button>
      </div>
    </>
  )
}

export default ProfilePrivate