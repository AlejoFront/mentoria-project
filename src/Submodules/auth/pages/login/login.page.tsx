import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from 'Config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    signInWithEmailAndPassword(auth,email, password).then((response) => {
      console.log(response)
    })
    .catch(e => console.log(e))
  }

  const onSignInGoogle = () => {
    signInWithPopup(auth, provider)
    .then((response) => {
      console.log(response)
    }).catch((e) => console.log(e))
  }

  return (
    <>
      <input 
        type="email" 
        placeholder="email" 
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password" 
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        type="button"
        onClick={() => handleClick()}
      >Iniciar</button>
      <label onClick={() => onSignInGoogle()} >Iniciar con google</label>
    </>
  )
}

export default LoginPage