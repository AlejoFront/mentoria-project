import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from 'store';
import {IAuth} from 'shared/utils/interfaces';

const initialStateAuth: IAuth = {
    isAuthenticated: false,
    isLoading: false
}

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialStateAuth,
    reducers: {
        setAuth(state, action: PayloadAction<IAuth>) {
            const { isAuthenticated, isLoading } = action.payload;
            state.isAuthenticated = isAuthenticated;
            state.isLoading = isLoading;
        }
    }
});

export const {
    setAuth
} = authSlice.actions;

export const selectAuthInfo = (state: RootState) => state.Auth;
export default authSlice.reducer;