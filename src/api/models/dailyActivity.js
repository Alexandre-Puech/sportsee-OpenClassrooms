export class DailyActivity {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => {
      return {
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      };
    });
  }
}
