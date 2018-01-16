function addZero(func) {
  return () => {
    const num = func();
    if (num < 10 && num >= 0) {
      return `0${num}`;
    }
    return num;
  };
}

function replace(oldString, index, length, newString) {
  return (
    oldString.slice(0, index) + newString + oldString.slice(index + length)
  );
}

export { addZero, replace };
