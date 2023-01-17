import React, { useEffect } from 'react'
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { getUserAuth } from './action';
function App(props) {
  useEffect(()=>{
    props.getAuth();
  },[]);
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
const mapStateToProps=(state)=>{
  return {};
};
const mapDispatchToProps=(dispatch)=>({
  getAuth:()=>dispatch(getUserAuth()),
});
 export default connect(mapStateToProps,mapDispatchToProps,)(App);
