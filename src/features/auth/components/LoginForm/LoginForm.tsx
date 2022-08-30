import React, { useCallback } from "react";
import { FieldView } from "../../../../ui-library/components/FieldView";
import { Button, ButtonType } from "../../../../ui-library/components/Button";
import { Form, isEmail, isRequired } from "@altiore/form";
import styles from "./LoginForm.module.scss";
import { routes } from "../../../../infrastructure/routes/routes";
import { useNavigate } from "react-router-dom";
import { validPassword, validPhone } from "../../auth.validators";
import { login } from "../../auth.service";

export const LoginForm: React.FC = () => { 
  const navigate = useNavigate();

  const handleSubmit = useCallback((values: any) => {
    login(values).then(() => {
      navigate(`${routes.kitty.create()}`);
    }).catch(e => {
      if (e.response.data.statusCode == 401) {
        alert('Вы не имеете права видеть нашего котика!\nДля вас мы оставили ссылку на котиков в футере.');
      }
    });
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit} className={ styles.form }>
        <div className={ styles.con }>
          <div className={ styles.headForm }>
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