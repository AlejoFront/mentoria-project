import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from 'Store';
import {IProfile} from 'Shared/utils/interfaces';

const initialStateProfile: IProfile = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: ''
}

const profileSlice = createSlice({
    name: 'Profile',
    initialState: initialStateProfile,
    reducers: {
        setProfile(state, action: PayloadAction<IProfile>) {
            const { displayName, email, photoURL, uid } = action.payload;
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
            state.uid = uid;
        }
    }
});

export const {
    setProfile
} = profileSlice.actions;

export const selectProfileInfo = (state: RootState) => state;
export default profileSlice.reducer;