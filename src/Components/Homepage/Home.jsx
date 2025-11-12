import { Suspense } from "react";
import { Helmet } from 'react-helmet';
import Loader from "../Utilis/Loader";
import Choose from "./Choose";
import Courses from "./Courses";
import Cta from "./Cta";
import Hero from "./Hero";
import Topinstructor from "./Topinstructor";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Mentor | Learn anything from us</title>
            </Helmet>
            <Hero></Hero>
            <Suspense fallback={<Loader></Loader>}>
                <Courses></Courses>
            </Suspense>

            <Choose></Choose>
            <Topinstructor></Topinstructor>
            <Cta></Cta>
        </>
    );
};

export default Home;