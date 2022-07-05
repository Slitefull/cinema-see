import React, { FC, useCallback } from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { email, password } from '@/ui-kit/helpers/validators';
import { FormsTextInput } from '@/ui-kit/components/forms/text-input/forms-text-input';
import { LoginForm } from "@/pages/login/styled";
import { LS_AUTH_KEY } from "@/constants/localStorage";
import { useNavigate } from "react-router-dom";
import { ROOT_ROUTE } from "@/constants/routes";
import CustomButton from "@/ui-kit/components/buttons/custom-button/custom-button";

import { LoginProps } from "@/pages/login/types/login";


interface LoginValues {
  email: string;
  password: string;
}

const Login: FC<LoginProps> = ({ setIsAuth }): JSX.Element => {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: email(),
    password: password(),
  });

  const defaultValues = {
    email: "",
    password: "",
  }

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = useCallback(() => {
    localStorage.setItem(LS_AUTH_KEY, 'true');
    setIsAuth(true);
    navigate(ROOT_ROUTE);
  }, [navigate, setIsAuth])

  return (
    <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
      <FormsTextInput
        name="email"
        control={control}
        placeholder={"email"}
        error={errors.email?.message}
      />
      <FormsTextInput
        name="password"
        control={control}
        placeholder={"password"}
        error={errors.password?.message}
      />
      <CustomButton
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </CustomButton>
    </LoginForm>
  );
};

export default Login;
