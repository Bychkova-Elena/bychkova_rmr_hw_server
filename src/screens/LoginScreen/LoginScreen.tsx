import { LoginForm } from "../../features/auth/components/LoginForm";
import React from "react";
import { Header } from "../../features/layout/header/components";

export const LoginScreen: React.FC = () => {

  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>

  );
};