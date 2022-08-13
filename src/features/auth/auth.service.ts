import { User } from "./auth.entity";

type UserDTO = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

// export const getUserProfile(): Promise<User> {
//   const response = API.get<UserDTO>(`profile`);
//   return {
//     name: response.name;
// }
// }
