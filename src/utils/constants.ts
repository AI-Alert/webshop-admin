export const routesNames = {
  main: '/management',
  volunteers: '/management/volunteers',
  logIn: '/log-in',
  qualifications: '/management/qualifications',
  init: '/',
  notFound: '*',
};

export const errorNames = {
  goalsRequired: 'Goals required!',
  imageRequired: 'Image required!',
  emailRequired: 'Email required!',
  invalidPhone: 'Invalid phone number!',
  passwordRequired: 'Password required!',
  invalidEmail: 'Invalid email address!',
  categoryRequired: 'Category required!',
  qualificationRequired: 'Field is empty!',
  invalidConfirm: 'Password should be same!',
  codeRequired: 'Verification code required!',
  nameRequired: 'Organisation name required!',
  confirmRequired: 'Confirm password required!',
  invalidPassword: 'Password needs uppercase and digit',
  addressLength: 'Address is allowed 200 characters long!',
  websiteLength: 'Website is allowed 100 characters long!',
  codePattern: 'Verification code should be 6 digits long',
  qualificationLength: 'Field is allowed 101 characters long',
  passwordLength: 'Password should be at least 8 characters long',
  contactNameLength: 'Contact name is allowed 100 characters long!',
  nameLength: 'Organisation name is allowed 100 characters long!',
  descriptionLength: 'Contact name is allowed 3000 characters long!',
};

export const confirmRegExp = (value: string) => new RegExp(`^${value}$`);
export const errorRegExp = {
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  password: /^(?=.*[A-Z])(?=.*\d).+$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  code: /^[0-9][0-9][0-9][0-9][0-9][0-9]$/,
};
