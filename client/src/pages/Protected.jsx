import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
 function Protected({ children }) {
    const {user, error, loading } = useAuth();

    if(loading) return <h1>Loading...</h1>;
    if(error) return <h1>Error...</h1>;

    if(!user || !user?.fullname) return <Navigate to="/" replace />
    
  return <>
    {children}    
  </>
  
}
export default Protected;