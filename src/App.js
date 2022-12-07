import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import { setAuthUserData } from './redux/Auth/actions';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    check().then(data =>{
      console.log(data, 'app-userData');
      dispatch(setAuthUserData(null, null, true, null))
    }).finally(()=> setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}




export default App

