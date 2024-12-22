import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkAuth } from '../features/auth/authSlice';

const ProtectedRoute = ({ children, allowedRoles }) => {

  const { isLoading ,isAuthenticated,role ,isInitialized} = useSelector((state) => state.auth);

  
  if (isLoading || !isInitialized) {
    return <div> login ... </div>; 
  }
 


  if (!isLoading && !isAuthenticated ) {
    return <Navigate to="/" />;
  }

 
  if (!isAuthenticated || (allowedRoles?.length && !allowedRoles.includes(role))) {
    return <NotFound />;
  }

  return children;
}


export default ProtectedRoute;
