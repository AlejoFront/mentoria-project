import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from 'Config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {isExistProfileByUID, createUserByUID} from 'Shared/utils'
import LoginForm from 'Shared/components/organisms/loginForm/loginForm';
import './login.page.scss';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
export const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginWithEmail = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        /// console.log(response)
        navigate('/')
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
    <section className='login'>
      <LoginForm isLogin={true} onSubmit={onLoginWithEmail} onGoogleLogin={onSignInGoogle}/>
    </section>
  )
}

export default LoginPage