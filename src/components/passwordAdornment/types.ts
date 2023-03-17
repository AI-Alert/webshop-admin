export interface IPasswordAdornment {
  setShowPassword: (show: (is: boolean) => boolean) => void,
  showPassword: boolean,
}
