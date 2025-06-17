'use client'
import styles from "./accordion.module.css";
import Image from "next/image";
import React, { useState } from 'react';
import PopupButton from "../../ui/PopupButton/PopupButton";

export default function Accordion({ index, data = [] }) {

    const [isActive, setIsActive] = useState(index === 0);


    return (
        <div className={`${styles.accordion} ${isActive ? styles.__active : ''}`}>
            <div
                className={styles.accordion__inner}
                onClick={() => setIsActive(!isActive)}
            >
                <h3 className={styles.accordion__question}>{data.question}</h3>
                <button className={styles.accordion__toggle}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#579E6E"/>
                        <line x1="20" y1="13" x2="20" y2="27" stroke="white" strokeWidth="2"/>
                        <line x1="13" y1="20" x2="27" y2="20" stroke="white" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
            <div className={styles.accordion__answer}>
                <div dangerouslySetInnerHTML={{__html: data.answer}}></div>
                {data.button && <PopupButton />}
            </div>

        </div>
    )
}

