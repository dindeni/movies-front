const debounce = <T>(callback: (...arg: T[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...arg) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
};

export { debounce };
