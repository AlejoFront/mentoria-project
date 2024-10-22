import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GoogleButton, Input } from "shared/components/atoms";
import "./loginForm.component.scss";

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: FormValues) => void;
  onGoogleLogin: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onGoogleLogin,
}) => {
  const methods = useForm<FormValues>({ mode: "onBlur" });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <GoogleButton onClick={onGoogleLogin} />
        <div className="separator">O</div>
        <Input
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="example@example.com"
          isError={!!errors.email}
        />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          placeholder="Escribe aquí tu contraseña"
          isError={!!errors.password}
        />
        <button type="submit" className="login-button">
          Inciar sesión
        </button>
      </form>
    </FormProvider>
  );
};
