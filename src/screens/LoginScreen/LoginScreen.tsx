import { LoginForm } from "../../features/auth/components/LoginForm";
import React from "react";
import { Header } from "../../features/layout/components/Header";

export const LoginScreen: React.FC = () => {

  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>

  );
};