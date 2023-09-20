import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../utils/hooks/useAppSelector';

const ProtectRoute: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useAppSelector((state) => state.auth);

  if (!currentUser) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
};

export default ProtectRoute;
