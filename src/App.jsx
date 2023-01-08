import react from 'react'
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
  <>
 <Router>
  <Routes>
    <Route path="/" element={<><Header/><Home/></>} />
    <Route path="Login" element={<><Login/></>}/>
  </Routes>
 </Router>
  </>
  );
}
 export default App;
