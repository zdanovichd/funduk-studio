"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./whyussection.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, fasCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function WhyUsSection({
    title = "",
    topData = "",
    bottomData = "",
}) {

    const [isActive, setIsActive] = useState(false);
    // console.log(isActive);


    return (
        <section className={styles.whyussection}>
            <div className={styles.whyussection__wrapper}>
                <h2 className={styles.whyussection__title}>{title}</h2>
                <div className={styles.whyussection__topData} dangerouslySetInnerHTML={{__html: topData}}></div>
                <button
                    className={`${styles.whyussection__button} ${isActive ? styles._active : ''}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        rotation={isActive ? 180 : 270}
                        className={styles.whyussection__button__icon}
                        size="l"
                    />
                    Подробнее
                </button>
                <div className={`${styles.whyussection__bottomData} ${isActive ? styles._active : ''}`} dangerouslySetInnerHTML={{__html: bottomData}}></div>

            </div>
        </section>
    );
}
