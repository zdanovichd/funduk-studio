"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./textwaccordion.module.css";
import PopupButton from "../../ui/PopupButton/PopupButton";
import Accordion from "../../ui/Accordion/Accordion";

export default function TextWAccordion({
    bannerData = [],
    accordions = [],
}) {

    return (
        <section className={styles.textwaccordion}>
            <div className={styles.textwaccordion__wrapper}>
                <div className={styles.textwaccordion__banner}>
                    <div className={styles.textwaccordion__left}>
                        <h2 className={styles.textwaccordion__title}>{bannerData.title}</h2>
                    </div>
                    <div className={styles.textwaccordion__right}>
                        <div className={styles.textwaccordion__rtop}>
                            <div className={styles.textwaccordion__rimage}>
                                <Image
                                    src={bannerData.image}
                                    width={80}
                                    height={80}
                                    className={styles.textwaccordion__image}
                                    alt={bannerData.name}
                                />
                            </div>
                            <div className={styles.textwaccordion__data}>
                                <p className={styles.textwaccordion__name}>{bannerData.name}</p>
                                <p className={styles.textwaccordion__position}>{bannerData.position}</p>
                            </div>
                        </div>
                        <div className={styles.textwaccordion__rbottom}>
                            <p className={styles.textwaccordion__description}>{bannerData.description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.textwaccordion__accordions}>
                    {accordions.map((accordion, index) => (
                        <Accordion key={index} index={index} data={accordion} />
                    ))}
                </div>
            </div>
        </section>
    );
}
