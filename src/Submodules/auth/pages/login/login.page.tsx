import { auth } from "config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "shared/components/organisms/loginForm/loginForm.component";
import { Layout } from "shared/components/templates/layout/layout";
import { createUserByUID, isExistProfileByUID } from "shared/utils";

import "./login.page.scss";

const provider = new GoogleAuthProvider();
export const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginWithEmail = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const onSignInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async ({ user }) => {
        if (await isExistProfileByUID(user.uid)) {
          return;
        }
        const data = {
          displayName: user.displayName!,
          email: user.email!,
          photoURL: user.photoURL!,
        };
        await createUserByUID(data, user.uid);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Layout className="login">
      <LoginForm onSubmit={onLoginWithEmail} onGoogleLogin={onSignInGoogle} />
    </Layout>
  );
};

export default LoginPage;
