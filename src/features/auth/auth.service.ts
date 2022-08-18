import API from "../../infrastructure/request/request.service";
import { User } from "./auth.entity";

export const login = async (values: User) => {
  await API.post("login", values);
};
