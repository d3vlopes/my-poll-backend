import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { IDateAdapter } from '../IDateAdapter'

dayjs.extend(utc)

export class DateAdapter implements IDateAdapter {
  convertToUTC(date: Date) {
    return dayjs(date).utc().local().format()
  }

  dateNow() {
    return dayjs().toDate()
  }

  compareIfAfter(start_date: Date, end_date: Date) {
    return dayjs(start_date).isAfter(end_date)
  }
}
