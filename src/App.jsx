import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar/NavBar.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Comments from "./components/Comments/Comments.jsx";

const App = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar/>
            <Hero/>
            <Services />
            <Banner />
            <AppStore />
            <Comments/>
            <Footer />
        </div>
    );
};

export default App;