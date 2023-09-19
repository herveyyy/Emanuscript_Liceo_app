import React from "react"
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import WhatsNew from "./components/whatsNew";
import Bookmark from "./pages/Bookmark";
import Search from "./components/Search";
import AccountSettings from "./pages/AccountSettings";
import History from "./pages/History";
import Rated from "./pages/Rated";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/WhatsNew" element={<WhatsNew/>} />
          <Route path="/AccountSettings" element={<AccountSettings/>} />
          <Route path="/Bookmark" element={<Bookmark/>} />
          <Route path="/History" element={<History/>} />
          <Route path="/Rated" element={<Rated/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
