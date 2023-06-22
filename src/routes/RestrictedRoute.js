import { useUser } from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const RestrictedRoute = () => {
    const {isLogged} = useUser();
    return isLogged? 
    <Navigate to='/home' />
    :
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet/> 
    </Suspense> 
}