import { HomeLayout } from "components/HomeLayout/HomeLayout";
import Screens from "./Screens";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const { boardName } = useParams()
    return(
        <Suspense fallback={<p>Loading...</p>}>
        <HomeLayout boards={'test'}>
            {<Outlet />}
        </HomeLayout>
        </Suspense>
    )
}

export default Home;