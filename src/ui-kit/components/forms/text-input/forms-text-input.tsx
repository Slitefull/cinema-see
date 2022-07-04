import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "@/ui-kit/components/text-input/text-input";


interface FormsTextInputProps
  extends Omit<TextInputProps, "onChange" | "value"> {
  name: `${string}`;
  error?: string;
  control?: any;
  autoComplete?: string;
}

export const FormsTextInput: FC<FormsTextInputProps> = (
  {
    name,
    error,
    control,
    helperText,
    autoComplete,
    ...props
  }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { ref, ...rest } }) => (
      <TextInput
        helperText={error}
        {...props}
        {...rest}
        autoComplete={autoComplete}
      />
    )}
  />
);
