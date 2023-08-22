import React from "react";
import s from "./common.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";
import { toggleAuthWindow } from "../utils/toggleAuthWindow";

const MainNav = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("authUser")) || {};
    console.log(user);

    const goToContacts = () => {
        return navigate("/contacts");
    };

    return (
        <nav className={s.mainNav}>
            {!user._id && (
                <>
                    <button onClick={toggleAuthWindow} className={s.btn}>
                        Войти
                    </button>
                    <button onClick={goToContacts} className={s.btn}>
                        Контакты
                    </button>
                </>
            )}
            {user._id && (
                <>
                    <button onClick={logout} className={s.btn}>
                        Выйти из аккаунта
                    </button>
                    <button onClick={goToContacts} className={s.btn}>
                        Перейти в контакты
                    </button>
                </>
            )}
        </nav>
    );
};

export default MainNav;
