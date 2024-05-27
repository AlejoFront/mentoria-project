import React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import './input.scss';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
};

const Input: React.FC<InputProps> = ({ name, label, type = 'text', placeholder, className, isError }) => {
  const { register } = useFormContext();

  const inputClass = classNames('input-wrapper', className, {
    'input-wrapper--error': isError,
  });

  return (
    <div className={inputClass}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} {...register(name)} />
    </div>
  );
};

export default Input;
