import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
function utcFormat(time, format = 'YYYY年MM月DD日 HH:mm:ss') {
  return dayjs.utc(time).format(format)
}
export { utcFormat }
