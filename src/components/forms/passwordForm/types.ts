import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../emailForm/types';

export interface IProps {
  register: UseFormRegister<IFormValues>,
  required: boolean,
  errors: FieldErrors<IFormValues>,
}
