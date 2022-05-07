// http://help.microcms.io/ja/knowledge/specification-of-utc-time

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (inputDate: string) => {
        dayjs.extend(utc)
        dayjs.extend(timezone)
        return dayjs.utc(inputDate).tz('Asia/Tokyo').format('YYYY/MM/DD')
      }
    }
  }
})
