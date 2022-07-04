import React, { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, } from "react";
import { StyledFormInput } from "@/ui-kit/components/text-input/styled";


type DefaultInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "onChange">;

export interface TextInputProps extends DefaultInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: any;
  helperText?: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = (
  {
    onChange,
    helperText,
    inputRef,
    placeholder,
    ...props
  }): JSX.Element => {

  return (
    <>
      <StyledFormInput
        ref={inputRef}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {helperText && (
        <>
          <span>{helperText}</span>
        </>
      )}
    </>
  );
};
