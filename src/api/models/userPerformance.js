export class UserPerformance {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((item) => ({
      value: item.value,
      kind: item.kind,
      label: data.kind[item.kind],
    }));
  }
}
