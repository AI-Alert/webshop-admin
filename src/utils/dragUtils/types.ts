import { ChangeEvent } from 'react';

export interface IHandleImage {
  e: ChangeEvent<HTMLInputElement>,
  setImage: (is: string) => void,
}
