
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Employees from './pages/Employees';
import Test from './pages/Test';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path = "/" excat Component={Home}></Route>
          <Route path = "/an" excat Component={Animals}></Route>
          <Route path = "/emp" excat Component={Employees}></Route>
          <Route path = "/test" excat Component={Test}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
