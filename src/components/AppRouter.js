import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";


const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.isAuth )
    
  return(
   <Switch>
       
        {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
        )}
        <Redirect to={SHOP_ROUTE}/>
  </Switch>
  );
};

// const mapStateToProps = state => {
//     return   console.log(state);     
//   }
//   mapStateToProps();

export default AppRouter;
