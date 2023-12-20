import React from 'react';
import PublicRoutes from './routes/Route';
import {Provider} from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PublicRoutes/>
      </Provider>  
    </>
  );
}

export default App;
