import React from "react";
import s from "./header.module.css";
import { logout } from "../../utils/logout";
import { Link, useLocation } from "react-router-dom";
import { toggleAuthWindow } from "../../utils/toggleAuthWindow";

const HeaderNav = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("authUser")) || {};

    return (
        <nav className={s.headerNav}>
            {location.pathname !== "/" && (
                <Link className={s.headerLink} to={""}>
                    Главная
                </Link>
            )}

            {location.pathname !== "/contacts" && (
                <Link className={s.headerLink} to={"contacts"}>
                    Контакты
                </Link>
            )}

            {location.pathname !== "/personal" && user._id && (
                <Link
                    id={s.personalPage}
                    className={s.headerLink}
                    to={"/personal"}
                >
                    Личный кабинет
                </Link>
            )}

            {user._id ? (
                <button onClick={logout} className={s.headerBtn}>
                    Выйти
                </button>
            ) : (
                <button onClick={toggleAuthWindow} className={s.headerBtn}>
                    Войти
                </button>
            )}
        </nav>
    );
};

export default HeaderNav;
