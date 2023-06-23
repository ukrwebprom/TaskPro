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

/* import { useUser } from '../hooks/useUser';
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const {isLogged} = useUser();

    return (
        isLogged ? <Component /> : <Navigate to={redirectTo}/>  
    )
};

export default PrivateRoute; */