import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
