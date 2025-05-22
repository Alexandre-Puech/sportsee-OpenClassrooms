//appeler les url et les modéliser
import { get } from "../utils/fetch";
import { User } from "./models/users";
import { DailyActivity } from "./models/dailyActivity";
import { AverageSessions } from "./models/averageSessions";

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

export async function getUserAverageSessions(userId) {
  const data = await get(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  const model = new AverageSessions(data);
  return model;
}
