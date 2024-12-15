import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {db} from 'config';
import { clearData } from './general';

export const getUserByUID = async (uid: string) => {
    const response = (await getDoc(doc(db, 'users',uid))).data()!;
    return await response;
}

export const createUserByUID = async (data: {displayName: string, email: string, photoURL: string},uid: string) => {
    return await setDoc(doc(db, 'users', uid), {
       displayName: data.displayName || '',
       email: data.email,
       photoURL: data.photoURL || ''
      });
}

export const isExistProfileByUID = async (uid: string) => {
    return !!await getUserByUID('uid')
}

export const setProfile = async (data: {photoURL?: string, address?: string, phone?: string, rh?: string, profesion?: string }, uid: string) => {
    return await updateDoc(doc(db, 'users', uid), clearData(data));
}
