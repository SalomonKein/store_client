import React from 'react';
import { connect, useDispatch } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import {Navbar, Container, Nav, Button, } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { setAuthUserData } from '../redux/Auth/actions';
// import { setAuthUserData } from '../redux/Auth/actions';



const NavBar = ({isAuth}) => {
    const history = useHistory()
    const dispatch = useDispatch()
const logOut = ()  => {  
dispatch(setAuthUserData(null, null, false, null))
localStorage.removeItem('token')
}


       return(
        <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink style={{color:'white'}} to = {SHOP_ROUTE}>KievCF</NavLink>
    {isAuth ?
    <Nav className="ml-auto" style={{color:'white'}}>
      <Button variant={"outline-light"} onClick={() =>history.push(ADMIN_ROUTE)}>Admin panel</Button>
      <Button variant={"outline-light"} onClick={() =>logOut()} style={{marginLeft:'10px'}}>Exit</Button>
    </Nav>
    :
    <Nav className="ml-auto" style={{color:'white'}}>
      <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} >Autorization</Button>
    </Nav>
    }
    </Container>
  </Navbar>
    );
}


const mapStateToProps = state => {
    return{
        isAuth: state.auth.isAuth 
    }
  }
  
  export default connect(mapStateToProps, null)(NavBar)
