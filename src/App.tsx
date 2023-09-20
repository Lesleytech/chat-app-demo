import { AppProviders } from './providers';
import Router from './routing/Router';

const App = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
};

export default App;
