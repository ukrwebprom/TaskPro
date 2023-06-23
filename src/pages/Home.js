import { HomeLayout } from "components/HomeLayout/HomeLayout";
import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    )
}

export default Home;