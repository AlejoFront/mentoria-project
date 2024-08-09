import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import {useAppDispatch, useAppSelector} from 'Store/hooks';
import {selectAuthInfo, setAuth,setProfile} from 'Store/slices';
import {getUserByUID,isExistProfileByUID,createUserByUID} from 'Shared/utils'
import RoutersMain from './RoutersMain';
import { auth } from 'Config';


export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const {Auth: {isAuthenticated, isLoading}} = useAppSelector(selectAuthInfo);

  useEffect(() => {
    dispatch(setAuth({isAuthenticated: false, isLoading: true}));
    onAuthStateChanged(auth, async user => {
      if(user) {
        const data = { displayName: user.displayName!,email: user.email!, photoURL: user.photoURL!};
        if(!!await isExistProfileByUID(user.uid)) {
          await createUserByUID(data,user.uid);
        }
        const { displayName, email, photoURL, phone } = await getUserByUID(user.uid);
        dispatch(setProfile({email: email || '', displayName: displayName || '', photoURL: photoURL || '', uid: user.uid, phone: phone || ''}));
        dispatch(setAuth({isAuthenticated: true, isLoading: false}));
        return; 
      }
      dispatch(setAuth({isAuthenticated: false, isLoading: false}));
    });
  
    return () => {}
  }, [dispatch])
  

  if(isLoading) return <>Cargando.....</>

  return (
    <Router>
      <RoutersMain isAthenticated={isAuthenticated} />
    </Router>
  )
}

export default AppRoutes