import { Suspense, useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import Loader from "../Utilis/Loader";
import Choose from "./Choose";
import Courses from "./Courses";
import Cta from "./Cta";
import Hero from "./Hero";
import Topinstructor from "./Topinstructor";

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log('in home',user)
    return (
        <>
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