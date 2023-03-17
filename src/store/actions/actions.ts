import {
  ILoginUser,
} from '../../models/service/service';
import { AdminService } from '../../services';
import { routesNames } from '../../utils/constants';
import { clearLocalStorage, fillLocalStorage } from '../../utils/token';
import { AppDispatch } from '../store';

export const loginUser = (data: ILoginUser, navigate: (is: string) => void):
(dispatch: AppDispatch) => Promise<void> => {
  const value = {
    email: data.email,
    password: data.password,
  };
  return async(dispatch: AppDispatch) => {
    try {
      const response = await AdminService.$loginUser(value);
      if (response.data) {
        const res = response.data;
        fillLocalStorage(res);
      }
    }
    catch (error: any) {
      let status: [string, any][] = [];
      let message: string = '';
      const refreshToken = localStorage.getItem('admin_refresh_token');
      if (error instanceof Error) {
        message = error.message;
        status = Object.entries(error);
      }
      else {
        message = String(error);
        status = [];
      }
      const statusCode = status[1][1];
      if (statusCode === 401 && refreshToken) {
        refresh(navigate)(dispatch);
      }
      if (!refreshToken) {
        navigate(routesNames.logIn);
      }
      throw new Error(message);
    }
  };
};

export const logoutUser = ():
(dispatch: AppDispatch) => Promise<void> => async(dispatch: AppDispatch) => {
  try {
    await AdminService.$logoutUser();
  }
  catch (error) {
    let message: string = '';
    if (error instanceof Error) {
      message = error.message;
    }
    else {
      message = String(error);
    }
    throw new Error(message);
  }
  finally {
    clearLocalStorage();
  }
};

export const refresh = (navigate: (is: string) => void):
(dispatch: AppDispatch) => Promise<void> => async(dispatch: AppDispatch) => {
  try {
    const response = await AdminService.$refresh();
    if (response.data) {
      const res = response.data;
      fillLocalStorage(res);
    }
    else {
      clearLocalStorage();
      navigate(routesNames.logIn);
    }
  }
  catch (error) {
    let message: string = '';
    if (error instanceof Error) {
      message = error.message;
    }
    else {
      message = String(error);
    }
    navigate(routesNames.logIn);
    throw new Error(message);
  }
};
