import React from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import WhatsNew from "./pages/whatsNew";
import Bookmark from "./pages/Bookmark";
import Search from "./pages/Search";
import AccountSettings from "./pages/AccountSettings";
import History from "./pages/History";
import Rated from "./pages/Rated";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  
  return (
    <div className="bg-transparent">
      <Router>
        <div className="m-4">
        <NavBar/>
        </div>
        <Routes baseline="/Home">
          <Route path="/Home" element={<Home/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/WhatsNew" element={<WhatsNew/>} />
          <Route path="/AccountSettings" element={<AccountSettings/>} />
          <Route path="/AccountSettings/Bookmark" element={<Bookmark/>} />
          <Route path="/AccountSettings/History" element={<History/>} />
          <Route path="/AccountSettings/Rated" element={<Rated/>} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
