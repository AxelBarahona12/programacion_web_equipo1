// schedule.model.ts

export class Schedule {
  id: number;
  day: string;
  startTime: string;
  endTime: string;

  constructor(id: number, day: string, startTime: string, endTime: string) {
    this.id = id;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
