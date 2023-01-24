export const getValueFromStorage = <T extends string | number | object | boolean>(
  key: string,
  substituteValue: T
): T => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);

    if (value !== null) {
      switch (typeof substituteValue) {
        case `boolean`:
          return (value === 'true') as T;

        case `number`:
          return parseFloat(value) as T;

        case `object`:
          return JSON.parse(value);

        default:
          return value as T;
      }
    }
  }
  return substituteValue;
};
