import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { setAuthUserData } from "../redux/Auth/actions";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = ({user}) => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const click = async () => {
    try{
      let data
    if(isLogin){
       data = await login(email, password)
    } else {
      data = await registration(email, password)
      console.log(data, 'data from Auth/pages');    
  }
   dispatch(setAuthUserData(null, null, true, null))
   history.push(SHOP_ROUTE)
  } catch (e) {
    alert(e.response.data.message)
  }
    
  }

  return (
  <Container className="d-flex justify-content-center align-items-center"
  style = {{height: window.innerHeight - 54}}>
    <Card style={{width: 600}} className="p-5">
      <h2 className="m-auto">{ isLogin ? 'Autorization' : 'Registration'} </h2>
      <Form className="d-flex flex-column">
        <Form.Control
        className="mt-3"
        placeholder="Enter your email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <Form.Control
        className="mt-3"
        placeholder="Enter your password..."
        value={password}
        onChange={e => setPassword(e.target.value)}
        type = "password"
        />
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3"
        style={{width: 515}}
        >     
        {isLogin ?     
          <div style={{width: 300}} >
            Have not accaunt? <NavLink to={REGISTRATION_ROUTE}>Registration...</NavLink>
          </div>
          :
          <div style={{width: 300}} >
            Have accaunt? <NavLink to={LOGIN_ROUTE}>Enter...</NavLink>
          </div>
          }
          <Button 
          variant={"outline-success"}
          onClick={click} 
          style={{width: 120}}>
            {isLogin ? 'Enter' : 'Registration'}
          </Button>
          
        </Row>
      </Form>
    </Card>
  </Container>);
};


const mapStateToProps = state => {
  return{
      user: state.auth
  }
}

export default connect(mapStateToProps, null)(Auth)

