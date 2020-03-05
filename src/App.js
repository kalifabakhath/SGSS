import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
import {Configstore} from './redux/configurestore'

const store = Configstore()
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>     
        <Main />
     </BrowserRouter>
    </Provider>
  );
}

export default App;
