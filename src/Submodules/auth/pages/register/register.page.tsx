import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from 'Config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {isExistProfileByUID, createUserByUID} from 'Shared/utils'
import LoginForm from 'Shared/components/organisms/loginForm/loginForm';
import './register.page.scss';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
export const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterWithEmail = (data: { email: string; password: string }) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({user}) => {
        await createByIdUser(user);
        navigate('/')
      })
      .catch(e => console.log(e))
  }

  const onSignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async ({user}) => {
        await createByIdUser(user);
      }).catch((e) => console.log(e))
  }

  const createByIdUser = async (user: any) => {
      if(await isExistProfileByUID(user.uid)) {return;}
      const data = { displayName: user.displayName || '',email: user.email, photoURL: user.photoURL || ''};
      await createUserByUID(data,user.uid);
  }

  return (
    <section className='login'>
      <LoginForm isLogin={false} onSubmit={onRegisterWithEmail} onGoogleLogin={onSignInGoogle}/>
    </section>
  )
}

export default RegisterPage