import React from 'react';
import './styles/global.scss';
import './styles/adaptive.scss';

import Background from './pages/bg/bg';
import Test from './pages/test/Test';
function App() {
  const isDevMode = process.env.NODE_ENV === 'development'
  const devModules = isDevMode && (<Background />)
  return (
      <>
      {devModules}
      <div id="box">
        <Test/>
      </div>
      </>
    );
}

export default App;
