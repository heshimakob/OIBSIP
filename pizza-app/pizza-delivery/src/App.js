import Home from './screens/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Order from './screens/Order';
import Register from './screens/Register';
import OrderScreen from './screens/OrderScreen';
import { Card } from './screens/Card';
import Admin from './screens/Admin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path="/card" element={<Card/>}/>
          <Route exact path="/orders" element={<OrderScreen/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </div>

    </Router>
   
  );
}

export default App;
