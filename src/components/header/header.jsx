import React from "react";
import s from "./header.module.css";
import HeaderNav from "./headerNav";
import logoImg from "../../img/logo.svg";

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <img className={s.logoImg} src={logoImg} alt="logo" />
                <HeaderNav />
            </header>
            <hr className={s.hr} />
        </>
    );
};

export default Header;
