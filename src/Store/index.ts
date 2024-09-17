import {AnyAction, configureStore} from '@reduxjs/toolkit';
import Auth from 'store/slices/auth/auth.slice';
import Profile from 'store/slices/profile/profile.slice';
export * from './hooks';


const store = configureStore( {
    reducer: {
       Auth,
       Profile
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store