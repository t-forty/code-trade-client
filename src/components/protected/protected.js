import React from 'react';
import auth from '../../auth/auth';
import Login from '../auth/login';
import Profile from '../profile/profile';
import Company from '../company/company';
import Program from '../program/program';
import Undefined from '../undefined/undefined';

import { useLocation } from 'react-router-dom';

export default function Protected(props) {
    const routes = ['/profile', '/company/profile','/company/program' ];
    const location = useLocation();
    const index = routes.indexOf(location.pathname);

    if(!auth.isAuthenticated){
        if(index < 0){
            return(
                <Undefined route={location.pathname} />
            );
        }else{
            return(
                <div>
                    <Login />
                </div>
            );
        }
    }else{
        // read param for route and view component
        switch(location.pathname){
            case "/profile":
                return(
                    <div>
                        <Profile />
                    </div>
                );
            case "/company/profile":
                return(
                    <div>
                        <Company />
                    </div>
                );
            case "/company/program":
                return(
                    <div>
                        <Program />
                    </div>
                );
            default:
                // if route not recognized go to login
                return(
                    <div>
                        <Undefined route={location.pathname} />
                    </div>
                );
        }
    }
};