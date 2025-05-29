import { get } from "../utils/fetch";
import { User } from "./models/users";
import { DailyActivity } from "./models/dailyActivity";
import { AverageSessions } from "./models/averageSessions";
import { UserPerformance } from "./models/userPerformance";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/data.js";

export async function getUserData(userId, mockedData) {
  const data = mockedData
    ? USER_MAIN_DATA.find((user) => user.id === userId)
    : await get(`http://localhost:3000/user/${userId}`);
  if (!data) {
    return null;
  }
  const model = new User(data);
  return model;
}

export async function getUserActivity(userId, mockedData) {
  const data = mockedData
    ? USER_ACTIVITY.find((activity) => activity.userId === userId)
    : await get(`http://localhost:3000/user/${userId}/activity`);
  if (!data) {
    return null;
  }
  const model = new DailyActivity(data);
  return model;
}

export async function getUserAverageSessions(userId, mockedData) {
  const data = mockedData
    ? USER_AVERAGE_SESSIONS.find((session) => session.userId === userId)
    : await get(`http://localhost:3000/user/${userId}/average-sessions`);
  if (!data) {
    return null;
  }
  const model = new AverageSessions(data);
  return model;
}

export async function getUserPerformance(userId, mockedData) {
  const data = mockedData
    ? USER_PERFORMANCE.find((perf) => perf.userId === userId)
    : await get(`http://localhost:3000/user/${userId}/performance`);
  if (!data) {
    return null;
  }
  const model = new UserPerformance(data);
  return model;
}
