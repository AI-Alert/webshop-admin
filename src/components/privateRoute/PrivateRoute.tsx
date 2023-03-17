import { Navigate } from 'react-router-dom';
import { AdminService } from '../../services';
import { routesNames } from '../../utils/constants';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authed = AdminService.$isLoggedIn();
  return authed ? children : <Navigate replace={true} to={routesNames.logIn} />;
};
