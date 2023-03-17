import { IHandleImage } from './types';

export const handleChangeImage = ({ e, setImage }: IHandleImage):void => {
  e.preventDefault();
  if (e.target.files && e.target.files[0]) {
    const FReader = new FileReader();
    FReader.onload = (event: ProgressEvent<FileReader>):void => {
      setImage(String(event?.target?.result));
    };
    FReader.readAsDataURL(e.target.files[0]);
  }
};
