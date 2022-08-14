import React, { useCallback } from "react";
import FieldView from "../../../../ui-library/components/FieldView";
import Button, { ButtonType } from "../../../../ui-library/components/Button";
import { Form, isEmail, isPhone, isRequired } from "@altiore/form";
import "./LoginForm.css"
import routes from "../../../../infrastructure/routes/routes";
import { useNavigate } from "react-router-dom";
import { useKittyContext } from "../../../../App";


const LoginForm: React.FC = () => { 

  const kittyContext = useKittyContext();
  let navigate = useNavigate();


  const handleSubmit = useCallback((values: any) => {
    console.log('form.values is', values);
    navigate(`${routes.kitty.create()}`);
    kittyContext.isAuth = true;
  }, []);


  const validPassword = (value: string): string | undefined => { 
    var reg=/^[\w\dА-я]+$/;
    if (value.length < 4) {
      return "Пароль должен содержать минимум 4 символа";
    }
    else if (!reg.test(value)) {
      return "Пароль может содержать только буквы и цифры";
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form">
        <div className="con">
          <div className="head-form">
            <h2>Log In</h2>
            <p>Do you want a kitty? Go ahead!</p>
          </div>
          <br></br>
          <FieldView.Email name="email" label="Email:" validate={[isRequired(), isEmail()]} />
          <FieldView.Phone name = "phone" label="Phone:" validate={[isRequired(), isPhone()]} />
          <FieldView.Pass name = "password" label="Password:" validate={[isRequired(), validPassword]} />
          <Button type={ButtonType.Submit}>Go To Kitty</Button>
        </div>
      </Form>
    </div>

  );
}

export default LoginForm;