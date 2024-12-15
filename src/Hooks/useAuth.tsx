import { useState, useEffect } from "react";
import { auth } from "config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createUserByUID, isExistProfileByUID } from "shared/utils";

const provider = new GoogleAuthProvider();

export const useAuth = (navigate: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { user } = await signInWithPopup(auth, provider);
      if (!(await isExistProfileByUID(user.uid))) {
        const data = {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
        };
        await createUserByUID(data, user.uid);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return { isLoading, setIsLoading, loginWithGoogle };
};
