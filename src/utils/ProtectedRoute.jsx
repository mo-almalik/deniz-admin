import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkAuth } from '../features/auth/authSlice';
import Loading from '../components/Loading';

const ProtectedRoute = ({ children, allowedRoles }) => {

  const { isLoading ,isAuthenticated,role ,isInitialized} = useSelector((state) => state.auth);

  
  if (isLoading || !isInitialized) {
    return <Loading />
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
