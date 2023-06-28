// import { useUser } from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = () => {

    // const {isLogged} = useUser();
    // return isLogged? 
    const {isLoggedIn} = useAuth();
    return isLoggedIn ?
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet/> 
    </Suspense> 
    :
    <Navigate to='/welcome' />
}