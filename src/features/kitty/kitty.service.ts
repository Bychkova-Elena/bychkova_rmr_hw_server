import API from "../../infrastructure/request/request.service";
import { KittyImg } from "./kitty.entity";

export const getKitty = async (): Promise<KittyImg> => {
  const response = await API.get("kitty");
  return {
    src: response.data.data.src
  };
};
