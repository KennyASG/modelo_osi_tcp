import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import App from './App';
import Modelosi from './components/modelosi';
import Modelotcpip from './components/modelotcpip';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/modelosi' element={<Modelosi />} />
        <Route path='/modelotcpip' element={<Modelotcpip />} />
      </Routes>
    </Router>
  ) 
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
