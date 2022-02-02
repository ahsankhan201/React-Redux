import React from 'react';
import Mainnavbar from './components/Navbars/mainnav'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Mainnavbar/>
      <Outlet/>
    </div>
  );
}

export default App;
