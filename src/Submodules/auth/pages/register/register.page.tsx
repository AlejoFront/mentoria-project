import { auth } from "config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "shared/components/organisms/loginForm/loginForm.component";
import { createUserByUID, isExistProfileByUID } from "shared/utils";
import "./register.page.scss";

const provider = new GoogleAuthProvider();
export const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterWithEmail = (data: { email: string; password: string }) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({ user }) => {
        await createByIdUser(user);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const onSignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async ({ user }) => {
        await createByIdUser(user);
      })
      .catch((e) => console.log(e));
  };

  const createByIdUser = async (user: any) => {
    if (await isExistProfileByUID(user.uid)) {
      return;
    }
    const data = {
      displayName: user.displayName || "",
      email: user.email,
      photoURL: user.photoURL || "",
    };
    await createUserByUID(data, user.uid);
  };

  return (
    <section className="login">
      <LoginForm
        onSubmit={onRegisterWithEmail}
        onGoogleLogin={onSignInGoogle}
      />
    </section>
  );
};

export default RegisterPage;
