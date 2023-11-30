import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LoginAdmin from './screens/LoginAdmin';
import HomeAdmin from './screens/HomeAdmin';



function App() {
  return (
    <Router>
      <div>
        <Routes>
       
          {/* <Route exact path="/order" element={<Order/>}/> */}
          <Route exact path="/" element={<LoginAdmin/>}/>
          <Route exact path="/home" element={<HomeAdmin/>}/>
        </Routes>
      </div>

    </Router>
   
  );
}

export default App;
