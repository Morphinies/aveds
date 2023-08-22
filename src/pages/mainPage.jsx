import React from "react";
import MainNav from "../components/mainNav";
import Headline from "../components/headline";
import Services from "../components/services/services";

const MainPage = () => {
    return (
        <>
            <div className="firstSection">
                <Headline name="Место для получения медицинской помощи" />
                <MainNav />
            </div>
            <div className="secondSection">
                <Services />
            </div>
        </>
    );
};

export default MainPage;
