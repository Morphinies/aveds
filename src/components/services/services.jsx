import React from "react";
import img1 from "../../img/img1.svg";
import img2 from "../../img/img2.svg";
import img3 from "../../img/img3.svg";
import s from "./services.module.css";
import ServiceItem from "./serviceItem";

const servicesList = [
    { img: img3, name: "Лечение рака", desc: "Рыба текст" },
    { img: img1, name: "Онлайн-прием", desc: "Рыба текст" },
    { img: img2, name: "Экстренный Случай", desc: "Рыба текст" },
];

const Services = () => {
    return (
        <ul className={s.servicesList}>
            {servicesList.map((service) => (
                <ServiceItem
                    img={service.img}
                    key={service.name}
                    name={service.name}
                    desc={service.desc}
                />
            ))}
        </ul>
    );
};

export default Services;
