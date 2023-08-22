import React from "react";
import s from "./common.module.css";

const Headline = ({ name }) => {
    return <h1 className={s.headline}>{name}</h1>;
};

export default Headline;
