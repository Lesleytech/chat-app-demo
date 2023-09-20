import { lazy } from 'react';

import GlobalModals from '../../modules/Main/components/GlobalModals';
import { mediaQueries } from '../../theme/breakpoints';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';

const DesktopLayout = lazy(() => import('./Desktop'));

const MainLayout = () => {
  const isMobile = useMediaQuery(mediaQueries.MOBILE);

  return (
    <>
      <GlobalModals />
      {isMobile ? <></> : <DesktopLayout />}
    </>
  );
};

export default MainLayout;
