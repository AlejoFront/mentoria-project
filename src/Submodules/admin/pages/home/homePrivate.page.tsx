import {signOut} from 'firebase/auth';
import {auth} from 'Config'
import {Link} from 'react-router-dom';
export const HomePrivate = () => {

  const onSignOut = async () => {
    await signOut(auth);
  }
  return (
    <>
        <h1>Home Admin</h1>
        <br />
        <Link to={'/profile'} >Profile</Link>
        <button type="button" onClick={() => onSignOut()} >Salir</button>
    </>
  )
}

export default HomePrivate
