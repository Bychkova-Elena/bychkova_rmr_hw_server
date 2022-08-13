import React, { useCallback } from "react";
import Input from "../../../../ui-library/components/Input";
import Button, { ButtonType } from "../../../../ui-library/components/Button";
import { Form } from "@altiore/form";

const LoginForm: React.FC = () => { 

  const handleSubmit = useCallback((values: any) => {
    console.log('form.values is', values);
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input name = "email" type="email" placeholder="Email"/>
        <Input name = "phone" type="tel" placeholder="Phone"/>
        <Input name = "password" type="password" placeholder="Password" />
        <Button type = { ButtonType.Submit }>Go To Kitty</Button>
      </Form>
    </div>

  );
}

export default LoginForm;