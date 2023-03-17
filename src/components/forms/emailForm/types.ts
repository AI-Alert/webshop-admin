import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IFormValues {
  'email': string,
  'password': string,
}

export interface IProps {
  register: UseFormRegister<{
    'email': string,
    'password': string,
  }>,
  required: boolean,
  errors: FieldErrors<IFormValues>,
}
