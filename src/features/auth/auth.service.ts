import API from "../../infrastructure/request/request.service";
import { User } from "./auth.entity";

export const login = (values: User) => {
  return API.post(`login`, values);
};
