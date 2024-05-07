import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from 'Config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {isExistProfileByUID, createUserByUID} from 'Shared/utils'

const provider = new GoogleAuthProvider();
export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    signInWithEmailAndPassword(auth,email, password).then((response) => {
      /// console.log(response)
    })
    .catch(e => console.log(e))
  }

  const onSignInGoogle = () => {
    signInWithPopup(auth, provider)
    .then(async ({user}) => {
      if(await isExistProfileByUID(user.uid)) {return;}
      const data = { displayName: user.displayName!,email: user.email!, photoURL: user.photoURL!};
      await createUserByUID(data,user.uid);
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