"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./bannerfeedback.module.css";
import PhoneForm from "../../ui/PhoneForm/PhoneForm";

export default function BannerFeedback({ bg_url = "/bg.webp", title = [], description = [], form_title = [], form_subtitle = [], form_button = [] }) {

    return (
        <section className={styles.banner}>

            <div className={styles.banner__wrapper}>
                <Image
                    src={bg_url}
                    alt="Фон"
                    className={styles.bgImage}
                    fill
                    priority
                />
                <div className={styles.overlay}></div>
                <div className={styles.banner__content}>
                    <div className={styles.banner__item}>
                        <h2 className={styles.banner__title}>{title}</h2>
                        <p className={styles.banner__description}>{description}</p>
                    </div>
                    <div className={styles.banner__item}>
                        <PhoneForm
                            title={form_title}
                            subtitle={form_subtitle}
                            button={form_button}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
