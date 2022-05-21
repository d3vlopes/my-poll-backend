export interface IDateAdapter {
  convertToUTC(date: Date): string
  dateNow(): Date
  compareIfAfter(start_date: Date, end_date: Date): boolean
}
