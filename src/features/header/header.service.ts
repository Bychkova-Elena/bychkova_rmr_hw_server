import API from "../../infrastructure/request/request.service";
import { UserProfile } from "./header.entity";

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = API.get(`profile`, {
    withCredentials: true
  });

  return {
    name: (await response).data.name
  };
};

export const logout = () => {
  return API.post(`logout`, {
    withCredentials: true
  });
};
