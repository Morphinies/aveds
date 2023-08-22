import React from "react";
import MainNav from "../components/mainNav";
import Headline from "../components/headline";

const PersonalPage = () => {
    const user = JSON.parse(localStorage.getItem("authUser")) || {};

    return (
        <>
            {user._id && (
                <div className="firstSection">
                    <Headline name={`Привет, ${user.name}`} />
                    <MainNav />
                </div>
            )}
        </>
    );
};

export default PersonalPage;
