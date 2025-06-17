"use client";
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";
import styles from "./komanda.module.css";

export default function Komanda({ title = "", workers = [], description = "" }) {
    console.log(workers);
    return (
        <section className={styles.komanda}>
            <div className={styles.komanda__wrapper}>
                <h2 className={styles.komanda__title}>{title}</h2>
                <div className={styles.komanda__inner}>
                    {workers &&
                        workers.map((item, key) => (
                            <div key={key} className={styles.komanda__item}>
                                <div className={styles.komanda__photo}>
                                    <Image
                                        src={item.photo}
                                        fill
                                        alt={item.alt}
                                    />
                                </div>
                                <p className={styles.komanda__name}>{item.name}</p>
                                <p className={styles.komanda__post}>{item.post}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.komanda__description} dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
        </section>
    );
}
