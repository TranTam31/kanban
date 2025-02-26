import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routers/Routers';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <ConfigProvider theme={{
      token: {
      },
      components: {
        
      }
    }}>
      <Provider store={store}>
        <Routers />
      </Provider>
    </ConfigProvider>
  )
}

export default App;
