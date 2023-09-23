import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './data/userData.jsx'
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserProvider>
    <Router>
    <App />
    </Router>
    </UserProvider>
  </React.StrictMode>,
)
