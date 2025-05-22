//appeler les url et les modéliser
import { get } from "../utils/fetch";
import { User } from "./models/users";

export async function getUserData(userId) {
  const data = await get(`http://localhost:3000/user/${userId}`);
  const model = new User(data);
  return model;
}
