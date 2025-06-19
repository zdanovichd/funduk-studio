"use client";
import styles from "./header.module.css";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram,
    faWhatsapp,
    faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PopupButton from "../../ui/PopupButton/PopupButton";
import data from "/src/app/json/data.json";
// src/app/json/data.json

const MenuItem = ({ item, level = 0, activeMenus, toggleMenu, isMobile }) => {
    const hasChildren = data.some((child) => child.parent === item.slug);
    const isLink = item.is_page;
    const menuId = item.slug;

    const itemClass =
        level === 0
            ? `${styles.nav_menu__item} ${
                  activeMenus[menuId] ? styles._active : ""
              } ${hasChildren ? styles.nav_menu__item_has_children : ""}`
            : level === 1
            ? `${styles.sub_menu__item} ${
                  activeMenus[menuId] ? styles._active : ""
              } ${hasChildren ? styles.sub_menu__item_has_children : ""}`
            : `${styles.sub_sub_menu__item}`;

    const linkClass =
        level === 0
            ? styles.nav_menu__link
            : level === 1
            ? styles.sub_menu__link
            : styles.sub_sub_menu__link;

    const subMenuClass = level === 0 ? styles.sub_menu : styles.sub_sub_menu;

    const handleClick = (e) => {
        if (isMobile && hasChildren) {
            e.preventDefault();
            toggleMenu(menuId);
        }
    };

    return (
        <li
            className={itemClass}
            onMouseEnter={() => !isMobile && toggleMenu(menuId, true)}
            onMouseLeave={() => !isMobile && toggleMenu(menuId, false)}
        >
            {(isLink || hasChildren) &&
                (isLink ? (
                    <Link
                        href={`/uslugi/${item.slug}`}
                        className={linkClass}
                        onClick={handleClick}
                    >
                        {item.h1}
                        {hasChildren && (
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                rotation={level > 0 ? 270 : undefined}
                                className={styles.nav_menu__icon}
                            />
                        )}
                    </Link>
                ) : (
                    <span className={linkClass}>
                        {item.h1}
                        {hasChildren && (
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                rotation={level > 0 ? 270 : undefined}
                                className={styles.nav_menu__icon}
                            />
                        )}
                    </span>
                ))}

            {hasChildren && (
                <ul
                    className={subMenuClass}
                    style={
                        isMobile
                            ? {
                                  display: activeMenus[menuId]
                                      ? "block"
                                      : "none",
                              }
                            : undefined
                    }
                >
                    {data
                        .filter((child) => child.parent === item.slug)
                        .map((child) => (
                            <MenuItem
                                key={child.slug}
                                item={child}
                                level={level + 1}
                                activeMenus={activeMenus}
                                toggleMenu={toggleMenu}
                                isMobile={isMobile}
                            />
                        ))}
                </ul>
            )}
        </li>
    );
};

export default function Header() {
    const [navHidden, setNavHidden] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeMenus, setActiveMenus] = useState({});
    const menuRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const updateNavHeight = () => {
            if (navRef.current) {
                const topHeight =
                    document.querySelector(`.${styles.header__top}`)
                        ?.offsetHeight || 0;
                const windowHeight = window.innerHeight;
                navRef.current.style.maxHeight = `${
                    windowHeight - topHeight
                }px`;
            }
        };

        updateNavHeight();
        window.addEventListener("resize", updateNavHeight);
        return () => window.removeEventListener("resize", updateNavHeight);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobile &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setActiveMenus({});
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobile]);

    const toggleMenu = (menuId, isActive) => {
        if (isMobile && typeof isActive === "undefined") {
            setActiveMenus((prev) => ({
                ...prev,
                [menuId]: !prev[menuId],
            }));
        } else if (!isMobile) {
            setActiveMenus((prev) => ({
                ...prev,
                [menuId]: isActive,
            }));
        }
    };

    const mainServices = data.filter((item) => !item.parent);
    const repairServices = data.filter(
        (item) => item.parent === "remont-kvartir"
    );
    const designServices = data.filter((item) => item.parent === "dizajn");
    const cleanPhone = (phone) =>
        phone.replace(/[^\d+]/g, "").replace(/^(\+?7|8)/, "+7");

    return (
        <>
            <header className={styles.header}>
                {/* Верхняя часть хедера */}
                <div className={styles.header__top}>
                    <div className={styles.container}>
                        <div className={styles.header__inner}>
                            {/* Логотип */}
                            <div className={styles.header__logo}>
                                <Link href="/" className={styles.logo}>
                                    <Image
                                        src="/logo.png"
                                        width={347}
                                        height={91}
                                        alt="Логотип компании"
                                        className={styles.logo__img}
                                        priority
                                    />
                                </Link>
                            </div>

                            {/* Информационные блоки */}
                            <div
                                className={`${styles.header__info} ${styles.header__info_worktime}`}
                            >
                                <div className={styles.info_block}>
                                    <p className={styles.info_block__title}>
                                        Режим работы
                                    </p>
                                    <p className={styles.info_block__text}>
                                        Пн-Пт: c 10:00 до 18:00
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`${styles.header__info} ${styles.header__info_question}`}
                            >
                                <div className={styles.info_block}>
                                    <p className={styles.info_block__title}>
                                        Есть вопрос?
                                    </p>
                                    <p className={styles.info_block__text}>
                                        Задайте его напрямую
                                    </p>
                                </div>
                            </div>

                            {/* Социальные сети */}
                            <div className={styles.header__socials}>
                                <ul className={styles.socials}>
                                    <li className={styles.socials__item}>
                                        <Link
                                            href="https://t.me/fundukstudiospb"
                                            target="_blank"
                                            className={styles.socials__link}
                                            aria-label="Telegram"
                                        >
                                            <FontAwesomeIcon
                                                icon={faTelegram}
                                                size="lg"
                                                className={styles.socials__icon}
                                            />
                                        </Link>
                                    </li>
                                    <li className={styles.socials__item}>
                                        <Link
                                            href="https://api.whatsapp.com/send?phone=79312236014"
                                            target="_blank"
                                            className={styles.socials__link}
                                            aria-label="WhatsApp"
                                        >
                                            <FontAwesomeIcon
                                                icon={faWhatsapp}
                                                size="lg"
                                                className={styles.socials__icon}
                                            />
                                        </Link>
                                    </li>
                                    <li className={styles.socials__item}>
                                        <Link
                                            href="https://vk.com/brusnikaremontspb"
                                            target="_blank"
                                            className={styles.socials__link}
                                            aria-label="ВКонтакте"
                                        >
                                            <FontAwesomeIcon
                                                icon={faVk}
                                                size="lg"
                                                className={styles.socials__icon}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Телефон */}
                            <div className={styles.header__phone}>
                                <Link
                                    href={`tel:${cleanPhone(
                                        process.env.NEXT_PUBLIC_PHONE_NUMBER
                                    )}`}
                                    className={styles.phone}
                                >
                                    {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                                </Link>
                            </div>

                            {/* Кнопка заказа звонка */}
                            <div className={styles.header__callback}>
                                <PopupButton
                                    title="Заказать звонок"
                                    color="var(--color-primary)"
                                />
                            </div>

                            {/* Мобильное меню */}
                            <div className={styles.header__mobile_menu}>
                                <button
                                    className={styles.burger}
                                    aria-label="Открыть меню"
                                    onClick={() => {
                                        setNavHidden(!navHidden);
                                        let elem =
                                            document.querySelector("body");
                                        elem.classList.toggle("stop-scrolling");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <svg
                                        className={styles.burger__line}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="11"
                                        viewBox="0 0 20 11"
                                        fill="none"
                                    >
                                        <rect
                                            y="0.916992"
                                            width="20"
                                            height="2.42424"
                                            rx="1.21212"
                                            fill="#462E2D"
                                        ></rect>
                                        <rect
                                            y="7.65918"
                                            width="14.5455"
                                            height="2.42424"
                                            rx="1.21212"
                                            fill="#462E2D"
                                        ></rect>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Основное меню */}
            <nav
                className={`${styles.header__nav} ${
                    navHidden ? styles._hidden : ""
                }`}
                ref={navRef}
            >
                <div className={styles.container}>
                    <ul className={styles.nav_menu} ref={menuRef}>
                        <li
                            className={`${styles.nav_menu__item} ${
                                activeMenus.services ? styles._active : ""
                            } ${styles.nav_menu__item_has_children}`}
                            onMouseEnter={() =>
                                !isMobile && toggleMenu("services", true)
                            }
                            onMouseLeave={() =>
                                !isMobile && toggleMenu("services", false)
                            }
                        >
                            <Link
                                href="/uslugi"
                                className={styles.nav_menu__link}
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        toggleMenu("services");
                                    }
                                }}
                            >
                                Услуги{" "}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={styles.nav_menu__icon}
                                />
                            </Link>

                            <ul
                                className={styles.sub_menu}
                                style={
                                    isMobile
                                        ? {
                                              display: activeMenus.services
                                                  ? "block"
                                                  : "none",
                                          }
                                        : undefined
                                }
                            >
                                {mainServices.map((service) => (
                                    <MenuItem
                                        key={service.slug}
                                        item={service}
                                        level={1}
                                        activeMenus={activeMenus}
                                        toggleMenu={toggleMenu}
                                        isMobile={isMobile}
                                    />
                                ))}
                            </ul>
                        </li>

                        {/* <li
                            className={`${styles.nav_menu__item} ${
                                activeMenus.portfolio ? styles._active : ""
                            } ${styles.nav_menu__item_has_children}`}
                            onMouseEnter={() =>
                                !isMobile && toggleMenu("portfolio", true)
                            }
                            onMouseLeave={() =>
                                !isMobile && toggleMenu("portfolio", false)
                            }
                        >
                            <Link
                                href="#"
                                className={styles.nav_menu__link}
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        toggleMenu("portfolio");
                                    }
                                }}
                            >
                                Портфолио{" "}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={styles.nav_menu__icon}
                                />
                            </Link>

                            <ul
                                className={styles.sub_menu}
                                style={
                                    isMobile
                                        ? {
                                              display: activeMenus.portfolio
                                                  ? "block"
                                                  : "none",
                                          }
                                        : undefined
                                }
                            >
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="#"
                                        className={styles.sub_menu__link}
                                    >
                                        Ремонт и Дизайн квартир
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="#"
                                        className={styles.sub_menu__link}
                                    >
                                        Ремонт и Дизайн Домов и коттеджей
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="#"
                                        className={styles.sub_menu__link}
                                    >
                                        Коммерческие
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        {/* <li className={styles.nav_menu__item}>
                            <Link
                                href="#"
                                className={styles.nav_menu__link}
                            >
                                Скидки и Акции
                            </Link>
                        </li> */}
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/blog"
                                className={styles.nav_menu__link}
                            >
                                Блог
                            </Link>
                        </li>

                        <li
                            className={`${styles.nav_menu__item} ${
                                activeMenus.about ? styles._active : ""
                            } ${styles.nav_menu__item_has_children}`}
                            onMouseEnter={() =>
                                !isMobile && toggleMenu("about", true)
                            }
                            onMouseLeave={() =>
                                !isMobile && toggleMenu("about", false)
                            }
                        >
                            <span
                                className={styles.nav_menu__link}
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        toggleMenu("about");
                                    }
                                }}
                            >
                                О нас{" "}
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={styles.nav_menu__icon}
                                />
                            </span>

                            <ul
                                className={styles.sub_menu}
                                style={
                                    isMobile
                                        ? {
                                              display: activeMenus.about
                                                  ? "block"
                                                  : "none",
                                          }
                                        : undefined
                                }
                            >
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/nasha-komanda"
                                        className={styles.sub_menu__link}
                                    >
                                        Наша команда
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/vacancy"
                                        className={styles.sub_menu__link}
                                    >
                                        Вакансии
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/contacts"
                                        className={styles.sub_menu__link}
                                    >
                                        Контакты
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/about"
                                        className={styles.sub_menu__link}
                                    >
                                        О компании
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/reviews"
                                        className={styles.sub_menu__link}
                                    >
                                        Отзывы
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/garantii"
                                        className={styles.sub_menu__link}
                                    >
                                        Гарантии
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    {/* Информационные блоки */}
                    <div
                        className={`${styles.nav__info} ${styles.nav__info_worktime}`}
                    >
                        <div className={styles.info_block}>
                            <p className={styles.info_block__title}>
                                Режим работы
                            </p>
                            <p className={styles.info_block__text}>
                                Пн-Пт: c 10:00 до 18:00
                            </p>
                        </div>
                    </div>

                    {/* Телефон */}
                    <div className={styles.nav__phone}>
                        <Link href="tel:+79810076017" className={styles.phone}>
                            +7 (981) 007-60-17
                        </Link>
                    </div>

                    <div
                        className={`${styles.nav__info} ${styles.nav__info_question}`}
                    >
                        <div className={styles.info_block}>
                            <p className={styles.info_block__title}>
                                Есть вопрос?
                            </p>
                            <p className={styles.info_block__text}>
                                Задайте его напрямую
                            </p>
                        </div>
                    </div>

                    {/* Социальные сети */}
                    <div className={styles.nav__socials}>
                        <ul className={styles.socials}>
                            <li className={styles.socials__item}>
                                <Link
                                    href="https://t.me/fundukstudiospb"
                                    target="_blank"
                                    className={styles.socials__link}
                                    aria-label="Telegram"
                                >
                                    <FontAwesomeIcon
                                        icon={faTelegram}
                                        size="lg"
                                        className={styles.socials__icon}
                                    />
                                </Link>
                            </li>
                            <li className={styles.socials__item}>
                                <Link
                                    href="https://api.whatsapp.com/send?phone=79312236014"
                                    target="_blank"
                                    className={styles.socials__link}
                                    aria-label="WhatsApp"
                                >
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        size="lg"
                                        className={styles.socials__icon}
                                    />
                                </Link>
                            </li>
                            <li className={styles.socials__item}>
                                <Link
                                    href="https://vk.com/brusnikaremontspb"
                                    target="_blank"
                                    className={styles.socials__link}
                                    aria-label="ВКонтакте"
                                >
                                    <FontAwesomeIcon
                                        icon={faVk}
                                        size="lg"
                                        className={styles.socials__icon}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
