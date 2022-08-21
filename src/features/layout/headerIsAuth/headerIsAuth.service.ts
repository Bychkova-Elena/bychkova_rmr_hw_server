import { API } from "../../../infrastructure/request/request.service";
import { UserProfile } from "./headerIsAuth.entity";

export const getUserName = async (): Promise<UserProfile> => {
  const response = await API.get("profile");
  return {
    name: response.data.data.name
  };
};

export const logout = async () => {
  await API.post("logout");
};
