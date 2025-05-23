"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./multistepform.module.css";

export default function MultistepForm() {
    const [step, setStep] = useState(1);
    const [value, setValue] = useState('');
    const [formData, setFormData] = useState({
        area: "",
        repairType: "",
        apartmentCondition: "",
        rooms: "studio",
        bathroom: "separate",
        electricalWorks: [],
        plumbingWorks: [],
        additionalWorks: [],
        gift: "",
        contactMethod: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const updatedArray = checked
                ? [...formData[name], value]
                : formData[name].filter((item) => item !== value);

            setFormData((prev) => ({
                ...prev,
                [name]: updatedArray,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
        // console.log(formData);
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);


    // Включить при подключении API
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch("/api/submit-form", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             alert("Форма отправлена! Мы свяжемся с вами в течение 30 минут.");

    //             // Сброс формы после успешной отправки
    //             setFormData({
    //                 area: "",
    //                 repairType: "",
    //                 apartmentCondition: "",
    //                 rooms: "studio",
    //                 bathroom: "separate",
    //                 electricalWorks: [],
    //                 plumbingWorks: [],
    //                 additionalWorks: [],
    //                 gift: "",
    //                 contactMethod: "",
    //                 phone: "",
    //             });
    //             setStep(1);
    //             setValue("");
    //         } else {
    //             alert("Ошибка при отправке формы. Пожалуйста, попробуйте ещё раз.");
    //         }
    //     } catch (error) {
    //         console.error("Ошибка:", error);
    //         alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
    //     }
    // };

    // Удалить при подключении API
    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверка обязательных полей (если нужно)
        if (!formData.phone || !formData.contactMethod) {
            alert("Пожалуйста, заполните все обязательные поля!");
            return;
        }

        console.log("Form submitted:", formData);
        alert("Форма отправлена! Мы свяжемся с вами в течение 30 минут.");

        // Полный сброс формы
        setFormData({
            area: "",
            repairType: "",
            apartmentCondition: "",
            rooms: "studio",
            bathroom: "separate",
            electricalWorks: [],
            plumbingWorks: [],
            additionalWorks: [],
            gift: "",
            contactMethod: "",
            phone: "",
        });
        setStep(1); // Возврат к первому шагу
        setValue(""); // Сброс маски телефона
    };

        const inputRef = useRef(null);

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

        const handleChangePhone = (e) => {
            const formatted = formatPhoneNumber(e.target.value);
            setValue(formatted);
            formData.phone = value;
        };

        const handleFocus = () => {
            // При фокусе подставляем "+7 (" если поле пустое
            if (value.trim() === '') {
            setValue('+7 (');
            formData.phone = value;
            }
        };

        const handleBlur = () => {
            if (value.trim() === '+7 (') {
                setValue('');
                formData.phone = value;
            }
        }

        useEffect(() => {
            // Обрабатываем автозаполнение
            const raw = inputRef.current?.value;
            if (raw && value === '') {
                const formatted = formatPhoneNumber(raw);
                setValue(formatted);
                formData.phone = value;
            }
        }, []);

    return (
        <section className={styles.form}>
            <div className={styles.form__inner}>
                <div className={styles.form__top}>
                    <h2 className={styles.form__title}>
                        Рассчитайте актуальную стоимость ремонта вашей квартиры
                        &quot;под ключ&quot; и&nbsp;забронируйте свой подарок
                    </h2>
                    <p className={styles.form__subtitle}>
                        при заявке на&nbsp;расчёт до&nbsp;30&nbsp;ноября 2025 года
                    </p>
                </div>
                <div className={styles.form__bottom}>

                    <div className={styles.form__image}>
                        <Image
                            src="/al.webp"
                            alt="Александр Инженер-Сметчик"
                            className={styles.bgImage}
                            width={800}  // оригинальная ширина
                            height={960} // оригинальная высота
                            // style={{
                            //     position: 'absolute',
                            //     width: '35%', // 35% от родителя
                            //     height: 'auto', // высота подстроится автоматически
                            //     objectFit: 'contain' // сохраняет пропорции
                            // }}
                        />
                    </div>
                    <div className={styles.form__container}>
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form__container__inner}
                        >
                            {/* Шаг 1: Основная информация */}
                            {step === 1 && (
                                <div className={styles.form__step}>
                                    <div className={styles.form__fields}>


                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            <span>01.</span>Укажите общую площадь квартиры по&nbsp;полу:
                                        </label>
                                        <input
                                            type="number"
                                            name="area"
                                            value={formData.area}
                                            onChange={handleChange}
                                            placeholder="Например, 134 м²"
                                            className={styles.form__input}
                                            required
                                        />
                                    </div>

                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            <span>02.</span>Выберите тип ремонта:
                                        </label>
                                        <div className={styles.form__options}>
                                            {[
                                                "cosmetic",
                                                "capital",
                                                "capital-design",
                                            ].map((type) => (
                                                <label
                                                    key={type}
                                                    className={styles.form__option}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="repairType"
                                                        value={type}
                                                        checked={
                                                            formData.repairType === type
                                                        }
                                                        onChange={handleChange}
                                                        className={styles.form__radio}
                                                        required
                                                    />
                                                    <span
                                                        className={
                                                            styles.form__optionText
                                                        }
                                                    >
                                                        {type === "cosmetic" &&
                                                            "Косметический ремонт"}
                                                        {type === "capital" &&
                                                            "Капитальный ремонт"}
                                                        {type === "capital-design" &&
                                                            "Капитальный по дизайн-проекту"}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    </div>
                                    <div className={styles.form__actions}>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`${styles.form__button} ${styles.form__button_next}`}
                                            disabled={
                                                !formData.area || !formData.repairType
                                            }
                                        >
                                            Далее →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Шаг 2: Состояние квартиры */}
                            {step === 2 && (
                                <div className={styles.form__step}>
                                    <div className={styles.form__fields}>
                                    <div className={styles.form__field} style={{flexGrow: "1"}}>
                                        <label className={styles.form__label}>
                                            <span>03.</span>Какое состояние квартиры:
                                        </label>
                                        <div className={styles.form__options}>
                                            {[
                                                "secondary-old",
                                                "new-finished",
                                                "new-rough",
                                                "new-no",
                                            ].map((condition) => (
                                                <label
                                                    key={condition}
                                                    className={styles.form__option}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="apartmentCondition"
                                                        value={condition}
                                                        checked={
                                                            formData.apartmentCondition ===
                                                            condition
                                                        }
                                                        onChange={handleChange}
                                                        className={styles.form__radio}
                                                        required
                                                    />
                                                    <span
                                                        className={
                                                            styles.form__optionText
                                                        }
                                                    >
                                                        {condition ===
                                                            "secondary-old" &&
                                                            "Вторичка со старым ремонтом"}
                                                        {condition === "new-finished" &&
                                                            "Новостройка с чистовой отделкой"}
                                                        {condition === "new-rough" &&
                                                            "Новостройка с черновой отделкой"}
                                                        {condition === "new-no" &&
                                                            "Новостройка без отделки"}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.form__field} style={{flexGrow: "0", flexBasis: "48%"}}>
                                        <label className={styles.form__label}>
                                            <span>04.</span>Количество комнат:
                                        </label>
                                        <div className={styles.select__wrapper}>
                                            <select
                                                name="rooms"
                                                value={formData.rooms}
                                                onChange={handleChange}
                                                className={styles.form__select}
                                            >
                                                <option value="studio">Студия</option>
                                                <option value="1">1 комнатная</option>
                                                <option value="2">2х комнатная</option>
                                                <option value="3">3х комнатная</option>
                                                <option value="4">4х комнатная</option>
                                                <option value="5+">5 и более комнат</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.form__field} style={{flexGrow: "0", flexBasis: "48%"}}>
                                        <label className={styles.form__label}>
                                            <span>05.</span>Санузел:
                                        </label>
                                        <div className={styles.select__wrapper}>
                                            <select
                                                name="bathroom"
                                                value={formData.bathroom}
                                                onChange={handleChange}
                                                className={styles.form__select}
                                            >
                                                <option value="separate">Раздельный</option>
                                                <option value="combined">Совмещенный</option>
                                                <option value="2">2 санузла</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={styles.form__actions}>
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`${styles.form__button} ${styles.form__button_prev}`}
                                        >
                                            ← Назад
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`${styles.form__button} ${styles.form__button_next}`}
                                            disabled={!formData.apartmentCondition}
                                        >
                                            Далее →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Шаг 3: Работы */}
                            {step === 3 && (
                                <div className={styles.form__step}>
                                <div className={styles.form__fields}>
                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            <span>06.</span>Электромонтажные работы:
                                        </label>
                                        <div className={styles.form__checkboxes}>
                                            {["wiring", "sockets"].map((work) => (
                                                <label
                                                    key={work}
                                                    className={styles.form__checkbox}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="electricalWorks"
                                                        value={work}
                                                        checked={formData.electricalWorks.includes(
                                                            work
                                                        )}
                                                        onChange={handleChange}
                                                        className={
                                                            styles.form__checkboxInput
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            styles.form__checkboxText
                                                        }
                                                    >
                                                        {work === "wiring" &&
                                                            "Разводка эл. проводки"}
                                                        {work === "sockets" &&
                                                            "Установка розеток и выключателей"}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            <span>07.</span>Сантехнические работы:
                                        </label>
                                        <div className={styles.form__checkboxes}>
                                            {["pipes", "radiators"].map((work) => (
                                                <label
                                                    key={work}
                                                    className={styles.form__checkbox}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="plumbingWorks"
                                                        value={work}
                                                        checked={formData.plumbingWorks.includes(
                                                            work
                                                        )}
                                                        onChange={handleChange}
                                                        className={
                                                            styles.form__checkboxInput
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            styles.form__checkboxText
                                                        }
                                                    >
                                                        {work === "pipes" &&
                                                            "Замена труб ГХВС и канализации"}
                                                        {work === "radiators" &&
                                                            "Замена радиаторов отопления"}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            <span>08.</span>Дополнительные работы:
                                        </label>
                                        <div className={styles.form__checkboxes}>
                                            {[
                                                "windows",
                                                "conditioners",
                                                "smart-home",
                                                "doors",
                                                "balcony",
                                            ].map((work) => (
                                                <label
                                                    key={work}
                                                    className={styles.form__checkbox}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="additionalWorks"
                                                        value={work}
                                                        checked={formData.additionalWorks.includes(
                                                            work
                                                        )}
                                                        onChange={handleChange}
                                                        className={
                                                            styles.form__checkboxInput
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            styles.form__checkboxText
                                                        }
                                                    >
                                                        {work === "windows" &&
                                                            "Замена окон"}
                                                        {work === "conditioners" &&
                                                            "Установка кондиционеров"}
                                                        {work === "smart-home" &&
                                                            'Система "умный дом"'}
                                                        {work === "doors" &&
                                                            "Установка дверей"}
                                                        {work === "balcony" &&
                                                            "Отделка балкона/поджим"}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
</div>
                                    <div className={styles.form__actions}>
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`${styles.form__button} ${styles.form__button_prev}`}
                                        >
                                            ← Назад
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`${styles.form__button} ${styles.form__button_next}`}
                                            disabled={
                                                !formData.plumbingWorks.length ||
                                                !formData.additionalWorks.length ||
                                                !formData.electricalWorks.length
                                            }
                                        >
                                            Далее →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Шаг 4: Подарок */}
                            {step === 4 && (
                                <div className={styles.form__step}>
                                <div className={styles.form__fields}>
                                    <div className={`${styles.form__field} ${styles.form__field_auto}`}>
                                        <label className={styles.form__label}>
                                            Выберите подарок к&nbsp;ремонту:
                                        </label>
                                        <div className={`${styles.form__options_images}`}>
                                        {[
                                            { value: "ceiling", label: "Натяжные потолки", image: "/np.webp" },
                                            { value: "design", label: "Дизайн-проект", image: "/dp.webp" },
                                            { value: "appliances", label: "Бытовая техника", image: "/bt.webp" }
                                        ].map((option) => (
                                            <label
                                                key={option.value}
                                                // className={styles.giftOption}
                                                className={`${styles.giftOption} ${
                                                    formData.gift === option.value ? styles.active : ""
                                                }`}
                                            >

                                                <input
                                                    type="radio"
                                                    name="gift"
                                                    value={option.value}
                                                    checked={formData.gift === option.value}
                                                    onChange={handleChange}
                                                    className={styles.hiddenRadio}
                                                />
                                                <div className={styles.giftImageWrapper}>
                                                    <Image
                                                        src={option.image}
                                                        alt={option.label}
                                                        width={120}
                                                        height={80}
                                                        className={styles.giftImage}
                                                    />
                                                </div>
                                                <span className={styles.giftLabel}>{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    </div>
</div>
                                    <div className={styles.form__actions}>
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`${styles.form__button} ${styles.form__button_prev}`}
                                        >
                                            ← Назад
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`${styles.form__button} ${styles.form__button_next}`}
                                        >
                                            Далее →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Шаг 5: Контактная информация */}
                            {step === 5 && (
                                <div className={styles.form__step}>
                                <div className={styles.form__fields}>
                                    <p className={styles.form__infoText}>
                                        Мы&nbsp;подготовим расчет и&nbsp;сообщим результат в&nbsp;течение 30&nbsp;минут
                                    </p>

                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            Удобный способ связи:
                                        </label>
                                        <div className={styles.form__options}>
                                            {["whatsapp", "telegram", "phone"].map(
                                                (method) => (
                                                    <label
                                                        key={method}
                                                        className={styles.form__option}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="contactMethod"
                                                            value={method}
                                                            checked={
                                                                formData.contactMethod ===
                                                                method
                                                            }
                                                            onChange={handleChange}
                                                            className={
                                                                styles.form__radio
                                                            }
                                                            required
                                                        />
                                                        <span
                                                            className={
                                                                styles.form__optionText
                                                            }
                                                        >
                                                            {method === "whatsapp" &&
                                                                "Отправить в WhatsApp"}
                                                            {method === "telegram" &&
                                                                "Отправить в Telegram"}
                                                            {method === "phone" &&
                                                                "Бесплатная консультация по телефону (хочу узнать подробные условия и задать вопросы)"}
                                                        </span>
                                                    </label>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.form__field}>
                                        <label className={styles.form__label}>
                                            Номер телефона:
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            // value={formData.phone}
                                            // onChange={handleChange}
                                            placeholder="Номер телефона"
                                            className={styles.form__input}
                                            required

                                            ref={inputRef}
                                            id="multi_phone"
                                            value={value}
                                            onChange={handleChangePhone}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                    </div>
</div>
                                    <div className={styles.form__actions}>
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`${styles.form__button} ${styles.form__button_prev}`}
                                        >
                                            ← Назад
                                        </button>
                                        <button
                                            type="submit"
                                            className={`${styles.form__button} ${styles.form__button_submit}`}
                                            disabled={
                                                !formData.contactMethod ||
                                                !formData.phone
                                            }
                                        >
                                            Получить расчет стоимости
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                    <div className={styles.form__bottom__inner}>
                        <div className={styles.form__bottom__item}>
                            <p className={styles.form__bottom__title}>
                                В конце теста вы получите:
                            </p>
                        </div>
                        <div className={styles.form__bottom__wrapper}>
                            <div className={styles.form__bottom__item}>
                                        <span className={styles.form__bottom__icon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                            >
                                                <rect
                                                    width="30"
                                                    height="30"
                                                    rx="8"
                                                    fill="#F4F4F4"
                                                ></rect>
                                                <path
                                                    d="M18.3342 14.126V11.5002C18.3342 9.56991 16.8393 8.00024 15.0009 8.00024C13.1625 8.00024 11.6676 9.56991 11.6676 11.5002V14.126C10.747 14.126 9.99951 14.9079 9.99951 15.8745V20.2488C9.99951 21.2154 10.747 22.0002 11.6676 22.0002H18.3342C19.2548 22.0002 20.0023 21.2154 20.0023 20.2488V15.8745C19.9995 14.9079 19.2521 14.126 18.3342 14.126ZM15.4158 18.3675V19.8131C15.4158 20.0555 15.229 20.2517 14.9981 20.2517C14.7673 20.2517 14.5804 20.0555 14.5804 19.8131V18.3675C14.3359 18.2146 14.1627 17.9462 14.1627 17.626C14.1627 17.1412 14.5365 16.7517 14.9954 16.7517C15.4543 16.7517 15.828 17.1441 15.828 17.626C15.8335 17.9462 15.6604 18.2146 15.4158 18.3675ZM16.6662 14.126H13.3328V11.5002C13.3328 10.5336 14.0803 9.7488 15.0009 9.7488C15.9187 9.7488 16.6662 10.5336 16.6662 11.5002V14.126Z"
                                                    fill="#999998"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className={styles.form__bottom__text}>
                                            Актуальную стоимость
                                        </span>
                            </div>
                            <div className={styles.form__bottom__item}>

                                        <span className={styles.form__bottom__icon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                            >
                                                <rect
                                                    width="30"
                                                    height="30"
                                                    rx="8"
                                                    fill="#F4F4F4"
                                                ></rect>
                                                <path
                                                    d="M18.3342 14.126V11.5002C18.3342 9.56991 16.8393 8.00024 15.0009 8.00024C13.1625 8.00024 11.6676 9.56991 11.6676 11.5002V14.126C10.747 14.126 9.99951 14.9079 9.99951 15.8745V20.2488C9.99951 21.2154 10.747 22.0002 11.6676 22.0002H18.3342C19.2548 22.0002 20.0023 21.2154 20.0023 20.2488V15.8745C19.9995 14.9079 19.2521 14.126 18.3342 14.126ZM15.4158 18.3675V19.8131C15.4158 20.0555 15.229 20.2517 14.9981 20.2517C14.7673 20.2517 14.5804 20.0555 14.5804 19.8131V18.3675C14.3359 18.2146 14.1627 17.9462 14.1627 17.626C14.1627 17.1412 14.5365 16.7517 14.9954 16.7517C15.4543 16.7517 15.828 17.1441 15.828 17.626C15.8335 17.9462 15.6604 18.2146 15.4158 18.3675ZM16.6662 14.126H13.3328V11.5002C13.3328 10.5336 14.0803 9.7488 15.0009 9.7488C15.9187 9.7488 16.6662 10.5336 16.6662 11.5002V14.126Z"
                                                    fill="#999998"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className={styles.form__bottom__text}>
                                            Подарок на выбор
                                        </span>

                            </div>
                            <div className={styles.form__bottom__item}>

                                        <span className={styles.form__bottom__icon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                            >
                                                <rect
                                                    width="30"
                                                    height="30"
                                                    rx="8"
                                                    fill="#F4F4F4"
                                                ></rect>
                                                <path
                                                    d="M18.3342 14.126V11.5002C18.3342 9.56991 16.8393 8.00024 15.0009 8.00024C13.1625 8.00024 11.6676 9.56991 11.6676 11.5002V14.126C10.747 14.126 9.99951 14.9079 9.99951 15.8745V20.2488C9.99951 21.2154 10.747 22.0002 11.6676 22.0002H18.3342C19.2548 22.0002 20.0023 21.2154 20.0023 20.2488V15.8745C19.9995 14.9079 19.2521 14.126 18.3342 14.126ZM15.4158 18.3675V19.8131C15.4158 20.0555 15.229 20.2517 14.9981 20.2517C14.7673 20.2517 14.5804 20.0555 14.5804 19.8131V18.3675C14.3359 18.2146 14.1627 17.9462 14.1627 17.626C14.1627 17.1412 14.5365 16.7517 14.9954 16.7517C15.4543 16.7517 15.828 17.1441 15.828 17.626C15.8335 17.9462 15.6604 18.2146 15.4158 18.3675ZM16.6662 14.126H13.3328V11.5002C13.3328 10.5336 14.0803 9.7488 15.0009 9.7488C15.9187 9.7488 16.6662 10.5336 16.6662 11.5002V14.126Z"
                                                    fill="#999998"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className={styles.form__bottom__text}>
                                            Экскурсию на объекты
                                        </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
