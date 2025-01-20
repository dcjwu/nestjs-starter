export const helloWorld = (key: string): boolean => {
  const isValid = key === 'hello world';

  if (!isValid) {
    throw new Error(`Invalid key: ${key}.`);
  }

  return isValid;
};
