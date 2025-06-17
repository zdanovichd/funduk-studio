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
    showMoreEnabled = true,
    bottomData = "",
    beforeTitle = "",
    bottomEnabled = false,
    bottomImage = "/rectangle-31.webp",
    afterBottom = "",
}) {

    const [isActive, setIsActive] = useState(false);
    // console.log(isActive);


    return (
        <section className={styles.whyussection}>
            <div className={styles.whyussection__wrapper}>
                {beforeTitle &&
                    <div className={styles.whyussection__beforeTitle} dangerouslySetInnerHTML={{__html: beforeTitle}}></div>
                }
                {title &&
                    <h2 className={styles.whyussection__title}>{title}</h2>
                }
                {topData &&
                    <div className={styles.whyussection__topData} dangerouslySetInnerHTML={{__html: topData}}></div>
                }
                {showMoreEnabled &&
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
                }
                <div className={`${styles.whyussection__bottomData} ${isActive || !showMoreEnabled ? styles._active : ''}`} dangerouslySetInnerHTML={{__html: bottomData}}></div>
                {bottomEnabled &&
                    <div className={styles.whyussection__bottomImage}>
                        <Image
                            className={styles.whyussection__bottomImage__img}
                            src={bottomImage}
                            fill
                            alt="banner"
                        />
                    </div>
                }
                {afterBottom &&
                    <div className={styles.whyussection__afterBottom} dangerouslySetInnerHTML={{__html: afterBottom}}></div>
                }
            </div>
        </section>
    );
}
