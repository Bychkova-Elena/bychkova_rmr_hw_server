import { KittyScreen } from "../../screens/KittyScreen";
import { LoginScreen } from "../../screens/LoginScreen";

export const routes = {
  login: {
    path: "/login",
    element: LoginScreen,
    create: () => `/login`
  },

  kitty: {
    path: "/kitty",
    element: KittyScreen,
    create: () => `/kitty`
  }
};
