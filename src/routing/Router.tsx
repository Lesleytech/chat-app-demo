import { lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '../modules/Auth/pages/Login';
import ProtectRoute from './ProtectRoute';

const AuthLayout = lazy(() => import('../layouts/Auth'));
const MainLayout = lazy(() => import('../layouts/Main'));

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} index />
        </Route>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <MainLayout />
            </ProtectRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
