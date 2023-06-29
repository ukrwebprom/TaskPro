// import { useUser } from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = () => {

    // const {isLogged} = useUser();
    // return isLogged? 
    const {isLoggedIn, isRefreshing} = useAuth();
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ?
    <Navigate to='/welcome' /> :
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet/> 
    </Suspense>
    
}