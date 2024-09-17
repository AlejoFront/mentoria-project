  import React from 'react';
  import { useForm, FormProvider } from 'react-hook-form';
  import {GoogleButton, Input} from 'shared/components';
  import './loginForm.component.scss';
import { Link } from 'react-router-dom';

 
type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: FormValues) => void;
  onGoogleLogin: () => void;
  isLogin: boolean;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onGoogleLogin, isLogin }) => {
  const methods = useForm<FormValues>({ mode: 'onBlur' });

  const { handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-header">
          <div className="logo">
            <i className="fas fa-star"></i>
          </div>
          <h2>Bienvenido</h2>
        </div>
        <GoogleButton onClick={onGoogleLogin} />
        <div className="separator">O</div>
        <Input
          name="email"
          type="email"
          // label="Correo electrónico"
          placeholder="example@example.com"
          // isError={!!errors.email}
        />
        <Input
          name="password"
          type="password"
          // label="Contraseña"
          placeholder="Escribe aquí tu contraseña"
          // isError={!!errors.password}
        />
        <button type="submit" className="login-button">{isLogin ? 'Inciar sesión': 'Registrarme'}</button>
        <Link to={isLogin ? '/auth/register':'/auth/login'}>{isLogin ? 'registrarse' :'Iniciar sesion'}</Link>
      </form>
    </FormProvider>
  );
};

export default LoginForm;