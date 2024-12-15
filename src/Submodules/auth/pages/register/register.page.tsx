import { useAuth } from "hooks/useAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "config";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "shared/components/organisms/loginForm/loginForm.component";
import { Layout } from "shared/components";
import "./register.page.scss";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, loginWithGoogle } = useAuth(navigate);

  const onRegisterWithEmail = (data: { email: string; password: string }) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) return <>Cargando.....</>;

  return (
    <Layout className="login">
      <LoginForm onSubmit={onRegisterWithEmail} onGoogleLogin={loginWithGoogle} isRegister/>
    </Layout>
  );
};

export default RegisterPage;
