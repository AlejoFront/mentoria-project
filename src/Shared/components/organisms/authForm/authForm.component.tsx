import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GoogleButton, Input } from "shared/components/atoms";
import { useUserPreferences } from "shared/context";
import "./authForm.component.scss";

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: FormValues) => void;
  onGoogleLogin: () => void;
  isRegister?: boolean;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onGoogleLogin,
  isRegister
}) => {
  const { translate } = useUserPreferences();
  const methods = useForm<FormValues>({ mode: "onBlur" });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const formTexts = isRegister
    ? translate("auth.register")
    : translate("auth.login");

  const redirectLink = isRegister ? '/auth/login' : '/auth/register';

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <h1>{formTexts.title}</h1>
        <p>{formTexts.description}</p>
        <Input
          name={formTexts.email.name}
          type="email"
          label={formTexts.email.label}
          placeholder={formTexts.email.placeholder}
          isError={!!errors.email}
        />
        <Input
          name={formTexts.password.name}
          type="password"
          label={formTexts.password.label}
          placeholder={
            formTexts.password.placeholder
          }
          isError={!!errors.password}
        />
        <button type="submit" className="button">
          {formTexts.button.text}
        </button>
        <GoogleButton text={formTexts.googleButton.text} onClick={onGoogleLogin} />
        <p className="redirect">
            {formTexts.redirectMessage.message}{" "}
            <Link to={redirectLink}>
              {formTexts.redirectMessage.link}
            </Link>
          </p>
      </form>
    </FormProvider>
  );
};
