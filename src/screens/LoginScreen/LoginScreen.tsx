import LoginForm from "../../features/auth/components/LoginForm";
import React from "react";
import Header from "../../features/header/components";

const LoginScreen: React.FC = () => {

  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
    </div>

  );
};

export default LoginScreen;