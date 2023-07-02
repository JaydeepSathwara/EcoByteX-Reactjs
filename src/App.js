import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import { UserContextProvider } from './UserContext';
import Article from './Pages/ArticlePage/ArticlePage';
import ArticlePage from './Pages/ArticlePage/ArticlePage';
import Articles from './Pages/Articles/Articles.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='container'>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/article/:id" element={<ArticlePage />} />
            <Route exact path="/search/:keyword" element = {<Articles />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
