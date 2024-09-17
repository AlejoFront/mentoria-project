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

export const setProfilePhone = async (data: {phone: string}, uid: string) => {
    return await updateDoc(doc(db, 'users', uid), {
        phone: data.phone
    });
}

export const setProfileAddress = async (data: {address: string}, uid: string) => {
    return await updateDoc(doc(db, 'users', uid), {
        address: data.address
    });
}


export const setProfile = async (data: {address?: string, phone?: string}, uid: string) => {
    return await updateDoc(doc(db, 'users', uid), clearData(data));
}
