import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
function ProtectedRoute({children}) {
    console.log("children", children);
    const {user} = useContext(AuthContext);


const isAuth = user  ? true : false;




return <>{isAuth ? children : <Navigate to="/homepage" />}</>;  
  
}

export default ProtectedRoute