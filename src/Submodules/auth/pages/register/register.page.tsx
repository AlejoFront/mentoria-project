import { auth } from "config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Layout } from "shared/components";
import { LoginForm } from "shared/components/organisms/authForm/authForm.component";
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
