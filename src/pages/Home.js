import { HomeLayout } from "components/HomeLayout/HomeLayout";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBoards } from "redux/boards/operations";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {    
         dispatch(fetchBoards())
        });
    return(
        <Suspense fallback={<p>Loading...</p>}>
        <HomeLayout>
            <Outlet />
        </HomeLayout>
        </Suspense>
    )
}

export default Home;