import React, {useEffect, useState} from 'react';
import Main from './src/components/screens/main';
import Login from './src/components/screens/login';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      {loginStatus ? (
        <Main openLogin={() => setLoginStatus(false)} />
      ) : (
        <Login openMain={() => setLoginStatus(true)} />
      )}
    </>
  );
}
