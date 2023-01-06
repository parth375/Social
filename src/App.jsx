import react from 'react'
import Login from './Login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
  <>
 <Router>
  <Routes>
    <Route path="/" element={<h1>Hi</h1>} />
    <Route path="Login" element={<><Login/></>}/>
  </Routes>
 </Router>
  </>
  );
}
 export default App;
