import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import {useAppDispatch, useAppSelector} from 'Store/hooks';
import {selectAuthInfo, setAuth} from 'Store/slices';
import RoutersMain from './RoutersMain';
import { auth } from 'Config';


export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const {Auth: {isAuthenticated, isLoading}} = useAppSelector(selectAuthInfo);

  useEffect(() => {
    
    onAuthStateChanged(auth, async user => {
      dispatch(setAuth({isAuthenticated: false, isLoading: true}));
      if(user) {
        dispatch(setAuth({isAuthenticated: true, isLoading: false}));
console.log(user)
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