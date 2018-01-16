/*
    parse:
        参数：
            date: required 时间字符串
            format: required 输入的时间字符串的格式
            exportFormat: optional 输出字符串的目标格式(使用format.js)
        返回值：
            无目标格式时返回Date对象，否则返回目标格式的字符串
 */
import dateFormat from './format';
import { replace } from './utils';

export default function parse(date, format, exportFormat) {
  if (date.length !== format.length) {
    throw new Error('Not match');
  }
  const temps = [
    ['yyyy', '(\\d{4})', false],
    ['MM', '(\\d{2})', true],
    ['dd', '(\\d{2})', false],
    ['hh', '(\\d{2})', false],
    ['mm', '(\\d{2})', true],
    ['ss', '(\\d{2})', false],
  ];
  const template = '.'.repeat(format.length);
  function getTarget(temp, targetReg, matchCase = false) {
    const position = format.indexOf(temp);
    const regString = replace(template, position, temp.length, targetReg);
    const reg = new RegExp(regString, matchCase ? 'i' : '');
    return reg.test(date) ? reg.exec(date)[1] : 0;
  }
  const actualDate = [];
  temps.forEach(item => {
    actualDate.push(parseInt(getTarget(...item), 10));
  });
  const result = new Date(...actualDate);
  if (!result || result.toString() === 'Invalid Date' || actualDate[0] === 0) {
    throw new Error('Invalid Date');
  }
  return exportFormat ? dateFormat(result, exportFormat) : result;
}
