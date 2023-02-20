import React, { useState, useEffect } from 'react';
import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

const RouteProtection = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<any | undefined>(undefined);
    const navigate = useNavigate();

    const checkAuthentication = async () => {
      try {
        const response = await authService.isLoggedIn();
        if (response && response.data) {
          setUser(response.data.user);
          setAuthenticated(true);
        }
      } catch (error: any) {
        navigate('/auth/login');
      }
    };

    useEffect(() => {
      checkAuthentication();
    }, []);

    if (authenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  return Wrapper;
};

export default RouteProtection;
