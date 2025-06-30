'use client'
import styles from "./phoneform.module.css";
import React, { useState, useEffect, useRef } from 'react';

export default function PhoneForm({ title = [], subtitle = [], button = [] }) {

    const [value, setValue] = useState('');
    const [consentPrivacy, setConsentPrivacy] = useState(false);
    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const formatPhoneNumber = (input) => {
        if (!input) return '+7 (';

        // Удаляем все нецифровые символы
        let digits = input.replace(/\D/g, '');

        // Убираем ведущую 8 или 7 (если была указана явно)
        if (digits.startsWith('8') || digits.startsWith('7')) {
        digits = digits.slice(1);
        }

        // Обрезаем до 10 цифр
        digits = digits.slice(0, 10);

        // Собираем маску: +7 (999) 999-99-99
        let result = '+7 (';
        if (digits.length >= 1) result += digits.slice(0, 3);
        if (digits.length >= 4) result += ') ' + digits.slice(3, 6);
        if (digits.length >= 7) result += '-' + digits.slice(6, 8);
        if (digits.length >= 9) result += '-' + digits.slice(8, 10);

        return result;
    };

    const handleChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setValue(formatted);
    };

    const handleFocus = () => {
        // При фокусе подставляем "+7 (" если поле пустое
        if (value.trim() === '') {
        setValue('+7 (');
        }
    };

    const handleBlur = () => {
        if (value.trim() === '+7 (') {
            setValue('');
        }
    }



    useEffect(() => {
        // Обрабатываем автозаполнение
        const raw = inputRef.current?.value;
        if (raw && value === '') {
        const formatted = formatPhoneNumber(raw);
        setValue(formatted);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            const data = { value, consentPrivacy };
            console.log(data);
            await fetch('../api/callback', {
                method: 'POST',
                body: JSON.stringify(data),
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setValue('');
            setIsLoading(false);
            setConsentPrivacy(false)
        }
    }

    return (
        <div className={styles.feedback}>
            <p className={styles.feedback__title} dangerouslySetInnerHTML={{ __html: title }}></p>
            <p className={styles.feedback__subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            <form action="" method="get" className={styles.feedback__form} onSubmit={handleSubmit}>
                <input
                    className={styles.feedback__phone}
                    ref={inputRef}
                    id="phone"
                    type="tel"
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Введите Ваш телефон"
                    autoComplete="tel"
                    required
                />
                <button
                    className={styles.feedback__submit}
                    type="submit"
                    dangerouslySetInnerHTML={{ __html: button }}
                    disabled={isLoading}
                ></button>
                <div className={styles.feedback__checkbox}>
                    <input
                        type="checkbox"
                        id="consent"
                        checked={consentPrivacy}
                        onChange={() => setConsentPrivacy(!consentPrivacy)}
                        required
                        className={styles.feedback__checkbox_input}
                    />
                    <label htmlFor="consent" className={styles.feedback__checkbox_label}>
                        * Нажимая на кнопку, я даю согласие на обработку персональных данных
                    </label>
                </div>
            </form>
        </div>
    )
}

