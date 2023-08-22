import s from "./authWindow.module.css";
import InputField from "./inputField";
import { login } from "../../utils/login";
import { useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import React, { useEffect, useState } from "react";
import { toggleAuthWindow } from "../../utils/toggleAuthWindow";

const AuthWindow = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [errorMes, setErrorMes] = useState();
    const [formValues, setFormValues] = useState({
        login: "",
        password: "",
    });

    useEffect(() => {
        errorMes && setTimeout(() => setErrorMes(), 5000);
    }, [errorMes]);

    const validatorConfig = {
        login: {
            isRequired: {
                message: "Заполните поле",
            },
            min: {
                message: "Минимум 6 символов",
            },
        },
        password: {
            isRequired: {
                message: "Заполните поле",
            },
            min: {
                message: "Минимум 6 символов",
            },
        },
    };

    const handleSubmit = () => {
        const errors = validator(formValues, validatorConfig);
        const formIsValid = !Object.keys(errors).length;
        setErrors(errors);
        if (formIsValid) {
            const user = login(formValues);
            if (user) {
                navigate("/personal");
                toggleAuthWindow();
            } else {
                setErrorMes("Проверьте логин/пароль");
            }
        }
    };

    const updateValue = ({ name, value }) => {
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        if (errors[name]) {
            delete errors[`${name}`];
            setErrors(errors);
        }
    };

    return (
        <div className={s.authContainer} id="authWindow">
            <form className={s.authForm} onSubmit={handleSubmit}>
                <h2 className={s.authFormName}>Вход</h2>
                <button
                    type="button"
                    className={s.closeBtn}
                    onClick={toggleAuthWindow}
                >
                    x
                </button>
                <InputField
                    name="login"
                    type="text"
                    error={errors.login}
                    updateValue={updateValue}
                    placeholder="введите логин"
                    formValue={formValues.login}
                />

                <InputField
                    name="password"
                    type="password"
                    error={errors.password}
                    updateValue={updateValue}
                    placeholder="введите пароль"
                    formValue={formValues.password}
                />
                {errorMes && <p className={s.errorMes}>{errorMes}</p>}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={s.authFormSubmit}
                    disabled={Object.keys(errors).length}
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default AuthWindow;
