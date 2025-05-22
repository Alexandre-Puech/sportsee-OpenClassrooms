export class AverageSessions {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => {
      return {
        day: session.day,
        sessionLength: session.sessionLength,
      };
    });
  }
}
