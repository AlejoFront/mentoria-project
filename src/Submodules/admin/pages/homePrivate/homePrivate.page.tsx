import {signOut} from 'firebase/auth';
import {auth} from 'Config'

export const HomePrivate = () => {

  const onSignOut = async () => {
    await signOut(auth);
  }
  return (
    <>
        Home Admin

        <button type="button" onClick={() => onSignOut()} >Salir</button>
    </>
  )
}

export default HomePrivate
