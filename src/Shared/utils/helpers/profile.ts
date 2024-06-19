import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {auth, db} from 'Config';
import { IProfile } from 'Shared/utils/interfaces';

export const getUserByUID = async (uid: string) => {
    const response = (await getDoc(doc(db, 'admin',uid))).data()!;
    return await response;
}

export const createUserByUID = async (data: {displayName: string, email: string, photoURL: string},uid: string) => {
    return await setDoc(doc(db, 'admin', uid), {
       displayName: data.displayName,
       email: data.email,
       photoURL: data.photoURL
      });
}

export const isExistProfileByUID = async (uid: string) => {
    return !!await getUserByUID('uid')
}

export const setProfile = async (data: {phone: string, rh: string}, uid: string) => {
    return await updateDoc(doc(db, 'admin', uid), {
        phone: data.phone,

    });
}