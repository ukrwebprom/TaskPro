import { useUser } from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const PrivateRoute = () => {
    const {isLogged} = useUser();
    return isLogged? 
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet/> 
    </Suspense> 
    :
    <Navigate to='/welcome' />
}