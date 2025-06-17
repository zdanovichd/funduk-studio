'use client'
import PhoneForm from "../PhoneForm/PhoneForm";
import styles from "./popupbutton.module.css";
import React, { useState, useEffect } from 'react';

export default function PopupButton({
    color="var(--color-accent)",
    title="Оставить заявку",
    bgcolor="#ffffff",
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);



    useEffect(() => {
        if (isModalOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }

        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [isModalOpen])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <button className={styles.modalButton} onClick={openModal} style={{borderColor: color, color: color, backgroundColor: bgcolor}}>
                {title}
            </button>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={closeModal}>
                    &times;
                    </button>
                    <PhoneForm
                        title="Оставьте заявку</br>на расчет стоимости ремонта"
                        subtitle="Мы перезвоним Вам в течение 10 минут"
                        button="Получить расчет стоимости"
                    />
                </div>
                </div>
            )}
        </>
    )
}

