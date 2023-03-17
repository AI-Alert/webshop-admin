import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AlertPopup } from '../components/alertPopup/AlertPopup';
import { PrivateRoute } from '../components/privateRoute/PrivateRoute';
import { Login } from '../pages/login/Login';
import { Main } from '../pages/main/Main';
import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage';
import { routesNames } from '../utils/constants';

export const Routing: FC = () => (
  <BrowserRouter basename="/admin">
    <Routes>
      <Route
        path={routesNames.main}
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      >
      </Route>
      <Route path={routesNames.init} element={ <Navigate replace={true} to={routesNames.main} /> } />
      <Route path={routesNames.logIn} element={
        <div>
          <Login />
        </div>
      } />\
      <Route path={routesNames.notFound} element={<NotFoundPage />} />
    </Routes>
    <AlertPopup />
  </BrowserRouter>
);
