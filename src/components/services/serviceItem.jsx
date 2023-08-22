import React from "react";
import s from "./services.module.css";

const ServiceItem = ({ name, desc, img }) => {
    return (
        <div className={s.serviceItem}>
            <div className={s.serviceImgWrapper}>
                <img src={img} alt="" />
            </div>
            <h5 className={s.serviceName}>{name}</h5>
            <hr />
            <p className={s.serviceDesc}>{desc}</p>
        </div>
    );
};

export default ServiceItem;
