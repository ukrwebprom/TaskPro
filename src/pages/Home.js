import { HomeLayout } from "components/HomeLayout/HomeLayout";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


const Home = () => {
    return(
        <Suspense fallback={<p>Loading...</p>}>
        <HomeLayout>
            <Outlet />
        </HomeLayout>
        </Suspense>
    )
}

export default Home;