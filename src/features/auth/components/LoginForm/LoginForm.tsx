import React, { useCallback } from "react";
import FieldView from "../../../../ui-library/components/FieldView";
import Button, { ButtonType } from "../../../../ui-library/components/Button";
import { Form, isEmail, isRequired } from "@altiore/form";
import "./LoginForm.css"
import routes from "../../../../infrastructure/routes/routes";
import { useNavigate } from "react-router-dom";
import { validPassword, validPhone } from "../../auth.validators";
import { login } from "../../auth.service";

const LoginForm: React.FC = () => { 
  let navigate = useNavigate();

  const handleSubmit = useCallback((values: any) => {
    login(values).then(() => {
          navigate(`${routes.kitty.create()}`);
        }).catch(e => {
          console.log(e);
          if (e.response.data.statusCode == 401) { 
            alert('Вы не имеете права видеть нашего котика!\nДля вас мы оставили ссылку на котиков в футере.');
          }
        });
  }, []);

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
          <FieldView.Text name = "phone" label="Phone:" validate={[isRequired(), validPhone]} />
          <FieldView.Pass name = "password" label="Password:" validate={[isRequired(), validPassword]} />
          <Button type={ButtonType.Submit}>Go To Kitty</Button>
        </div>
      </Form>
    </div>

  );
}

export default React.memo(LoginForm);