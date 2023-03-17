interface IRes {
  accessToken: string,
  refreshToken: string
}

export const clearLocalStorage = () => {
  localStorage.setItem('admin_isAuth', '');
  localStorage.setItem('admin_token', '');
  localStorage.setItem('admin_refresh_token', '');
};

export const fillLocalStorage = (res: IRes) => {
  localStorage.setItem('admin_isAuth', 'true');
  localStorage.setItem('admin_token', res.accessToken);
  localStorage.setItem('admin_refresh_token', res.refreshToken);
};
