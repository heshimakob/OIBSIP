import Home from './screens/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Order from './screens/Order';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>

    </Router>
   
  );
}

export default App;
