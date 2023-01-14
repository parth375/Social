import React, { useEffect } from 'react'
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import { getUserAuth } from './action';
import { connect } from 'react-redux';
function App(props) {
return(
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
// const mapStateToProps=(state)=>{
//   return {};
// };
// const mapDispatchToProps=(dispatch)=>({
//   getUserAuth:()=>dispatch(getUserAuth()),
// });
 export default (App);
