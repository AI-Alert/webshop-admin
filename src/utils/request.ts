import axios from 'axios';

interface ISystemError {
  code: string;
}
interface IResponseErrorPayload {
  error: string | ISystemError;
}
export interface IResponseError extends Error {
  url: string;
  status: number;
  payload?: IResponseErrorPayload;
  response?: Response;
  text?: string;
}

export const fetchRequest = (
  url: string,
  { method = 'GET', body }: RequestInit = {},
) => axios({
  url,
  method,
  data: body,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.admin_token
      ? `Bearer ${localStorage.admin_token}`
      : undefined,
  },
}).catch((err) => {
  const error: IResponseError = new Error(err) as IResponseError;
  error.url = url;
  error.status = err.response.data.statusCode;
  error.text = error.message; // NOTE because JSON.stringify don't show err.message
  throw error;
});
