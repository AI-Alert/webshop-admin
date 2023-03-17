import {
  ILoginUser,
  IReturnPromise,
} from '../models/service/service';
import { fetchRequest } from '../utils/request';

const base_url = process.env.REACT_APP_BASE_URL || '';

const endpoints = {
  login: '/auth/login',
  logout: '/auth/logout',
  refresh: '/auth/refresh',
  organization: '/management/organization',
  volunteers: '/management/volunteers',
  invite: '/management/organization/invite',
  qualifications: '/management/required-qualification',
};

export class AdminService {

  static $loginUser(data: ILoginUser): Promise<IReturnPromise> {
    return fetchRequest(base_url + endpoints.login, { method: 'POST', body: JSON.stringify(data) });
  }

  static $logoutUser(): Promise<IReturnPromise> {
    return fetchRequest(base_url + endpoints.logout, { method: 'POST' });
  }

  static $refresh(): Promise<IReturnPromise> {
    return fetchRequest(base_url + endpoints.refresh, { method: 'POST' });
  }
  static $isLoggedIn(): boolean {
    return localStorage.admin_isAuth && localStorage.admin_token;
  }

}
