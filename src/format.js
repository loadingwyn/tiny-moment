/*
    format:
        参数：
            date: required Date对象或者符合 IETF-compliant RFC 2822 timestamps 或 version of ISO8601的字符串
            format：required 输出字符串的目标格式，例如：'yyyy-MM-dd', m区分大小写，其余不区分
        返回值：
            目标格式的字符串
 */
import { addZero } from './utils';

export default function format(date, format = 'yyyy-MM-dd') {
  let validDate;
  let result = format;
  if (
    (typeof date === 'string' &&
      !(isNaN(Date.parse(date)) || !Date.parse(date))) ||
    (typeof date === 'number' && date > 0)
  ) {
    validDate = new Date(date);
  } else if (date instanceof Date) {
    validDate = date;
  }

  if (!(validDate instanceof Date) || validDate.toString() === 'Invalid Date') {
    return 'Invalid date';
    //throw new Error('Invalid date');
  }
  if (typeof format !== 'string') {
    return 'Invalid format';
    // throw new Error('Invalid format');
  }
  const handlers = [
    [/yyyy/i, validDate.getFullYear.bind(validDate)],
    [
      /yy/i,
      () =>
        validDate
          .getFullYear()
          .toString()
          .slice(-2),
    ],
    [/MM/, addZero(() => validDate.getMonth() + 1)],
    [/M/, () => validDate.getMonth() + 1],
    [/dd/i, addZero(validDate.getDate.bind(validDate))],
    [/d/i, validDate.getDate.bind(validDate)],
    [/hh/i, addZero(validDate.getHours.bind(validDate))],
    [/h/i, validDate.getHours.bind(validDate)],
    [/mm/, addZero(validDate.getMinutes.bind(validDate))],
    [/m/, validDate.getMinutes.bind(validDate)],
    [/ss/i, addZero(validDate.getSeconds.bind(validDate))],
    [/s/i, validDate.getSeconds.bind(validDate)],
  ];
  handlers.forEach(item => {
    result = result.replace(item[0], item[1]);
  });
  return result;
}
