//appeler les url et les modéliser
import { get } from "../utils/fetch";
import { User } from "./models/users";
import { DailyActivity } from "./models/dailyActivity";

export async function getUserData(userId) {
  const data = await get(`http://localhost:3000/user/${userId}`);
  const model = new User(data);
  return model;
}

export async function getUserActivity(userId) {
  const data = await get(`http://localhost:3000/user/${userId}/activity`);
  const model = new DailyActivity(data);
  return model;
}
