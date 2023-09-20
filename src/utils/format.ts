import * as dayjs from 'dayjs';

export function formatUnixTime(time: number) {
  return dayjs.unix(time).format('D/M/YY h:mm A');
}
