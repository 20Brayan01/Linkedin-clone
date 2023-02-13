import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Layout from './Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/" element = {<Login/>}/>
          <Route exact path="/header" element = {<Header/>}/>
          <Route exact path="/home" element = {<Layout/>}>
        </Route>
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;