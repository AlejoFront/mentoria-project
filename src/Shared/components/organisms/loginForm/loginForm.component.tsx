import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GoogleButton, Input } from 'shared/components/atoms';
import {useLanguage} from 'shared/context';
import './loginForm.component.scss';

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
  const {language} =  useLanguage();
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
          name={language.shared.components.loginForm.email.name}
          type="email"
          label={language.shared.components.loginForm.email.label}
          placeholder={language.shared.components.loginForm.email.placeholder}
          isError={!!errors.email}
        />
        <Input
          name={language.shared.components.loginForm.password.name}
          type="password"
          label={language.shared.components.loginForm.password.label}
          placeholder={language.shared.components.loginForm.password.placeholder}
          isError={!!errors.password}
        />
        <button type="submit" className="login-button">
        {language.shared.components.loginForm.button.text}
        </button>
      </form>
    </FormProvider>
  );
};
