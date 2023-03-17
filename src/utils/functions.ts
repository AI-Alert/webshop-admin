/* eslint-disable */
export const replaceWithEnumValue = (
  enumConst: { [key: string]: string },
  array: string[]
): string[] => {
  const newArray: string[] = [];
  for (const key of array) {
    newArray.push(enumConst[key]);
  }
  return newArray;
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const regex = /\+?(\d{1})?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{3})/;
  const match = regex.exec(phoneNumber);
  if (!match) {
    return phoneNumber;
  }
  const countryCode = match[1] ? `+${match[1]}` : '';
  const formattedNumber = `${countryCode} ${match[2]} ${match[3]} ${match[4]}`;
  return formattedNumber;
}

export const replaceWithEnumValueCategory = (
  enumConst: { [key: string]: string },
  array: string[]
): string => {
  let result = '';
  for (const key of array) {
    result = enumConst[key];
  }
  return result;
};
