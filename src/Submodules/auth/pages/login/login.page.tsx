import { useAuth } from "hooks/useAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "shared/components/organisms/loginForm/loginForm.component";
import { Layout } from "shared/components/templates/layout/layout";
import "./login.page.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, loginWithGoogle } = useAuth(navigate);

  const onLoginWithEmail = (data: { email: string; password: string }) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) return <>Cargando.....</>;

  return (
    <Layout className="login">
      <LoginForm onSubmit={onLoginWithEmail} onGoogleLogin={loginWithGoogle} />
    </Layout>
  );
};

export default LoginPage;
