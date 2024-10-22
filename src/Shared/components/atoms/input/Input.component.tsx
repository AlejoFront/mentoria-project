import React, { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import "./input.component.scss";

type InputProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
};

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  className,
  isError,
}) => {
  const { register } = useFormContext();

  const inputClass = classNames("input-wrapper", className, {
    "input-wrapper--error": isError,
  });

  return (
    <div className={inputClass}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
