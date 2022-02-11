import { FormControl, TextField } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';

interface InputProps {
  label?: string;
  inputId?: string;
  errors?: boolean;
  errorText?: string;
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_: React.KeyboardEvent<HTMLDivElement>) => void;
  helperText?: string;
  name?: string;
  type?: string;
  value?: any;
  placeholder?: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  errors,
  type = 'text',
  name,
  onChange,
  onKeyDown,
  helperText,
  value,
  placeholder,
  size = 'medium',
  disabled = false,
}) => (
  <FormControl sx={{ width: '100%', mt: 0.75, mb: 0.75 }}>
    <TextField
      error={errors}
      helperText={helperText}
      id='component-simple'
      onChange={onChange}
      type={type}
      label={label}
      name={name}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
    />
  </FormControl>
);

export default Input;
