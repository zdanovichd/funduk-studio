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
import { faCaretDown, fasCaretDown } from "@fortawesome/free-solid-svg-icons";
import PopupButton from "../../ui/PopupButton/PopupButton";

export default function Header() {
    const [navHidden, setNavHidden] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeMenus, setactiveMenus] = useState({
      services: false,
      design: false,
      repair: false,
      // добавьте другие ID меню по мере необходимости
    });
    const menuRef = useRef(null);
    const navRef = useRef(null);

useEffect(() => {
  const updateNavHeight = () => {
    if (navRef.current) {
      const topHeight = document.querySelector(`.${styles.header__top}`)?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      navRef.current.style.maxHeight = `${windowHeight - topHeight}px`;
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
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (isMobile && menuRef.current && !menuRef.current.contains(event.target)) {
          setactiveMenus({
            services: false,
            design: false,
            repair: false,
            // сброс всех подменю
          });
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isMobile]);

    const toggleMenu = (menuId) => {
      if (isMobile) {
        setactiveMenus(prev => ({
          ...prev,
          [menuId]: !prev[menuId]
        }));
      }
    };

    const handleMouseEnter = (menuId) => {
      if (!isMobile) {
        setactiveMenus(prev => ({
          ...prev,
          [menuId]: true
        }));
      }
    };

    const handleMouseLeave = (menuId) => {
      if (!isMobile) {
        setactiveMenus(prev => ({
          ...prev,
          [menuId]: false
        }));
      }
    };

    return (
        <>
        <header className={styles.header}>
            {/* <!-- Верхняя часть хедера --> */}
            <div className={styles.header__top}>
                <div className={styles.container}>
                    <div className={styles.header__inner}>
                        {/* <!-- Логотип --> */}
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

                        {/* <!-- Информационные блоки --> */}
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

                        {/* <!-- Социальные сети --> */}
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

                        {/* <!-- Телефон --> */}
                        <div className={styles.header__phone}>
                            <Link
                                href="tel:+79810076017"
                                className={styles.phone}
                            >
                                +7 (981) 007-60-17
                            </Link>
                        </div>

                        {/* <!-- Кнопка заказа звонка --> */}
                        <div className={styles.header__callback}>
                            {/* <button
                                className={`${styles.btn} ${styles.btn__callback}`}
                                data-modal="callback"
                            >
                                Заказать звонок
                            </button> */}
                            <PopupButton
                                title="Заказать звонок"
                                color="var(--color-primary)"
                            />
                        </div>

                        {/* <!-- Мобильное меню (только для мобильных) --> */}
                        <div className={styles.header__mobile_menu}>
                            <button
                                className={styles.burger}
                                aria-label="Открыть меню"
                                // onClick={(e) => setNavHidden(!navHidden)}
                                onClick={() => {
                                    setNavHidden(!navHidden);
                                    let elem = document.querySelector("body");
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
            {/* <!-- Основное меню --> */}
            <nav
                className={`${styles.header__nav} ${
                    navHidden ? styles._hidden : ""
                }`}
                ref={navRef}
            >
                <div className={styles.container}>
                    <ul className={styles.nav_menu}
                    ref={menuRef}>
                        <li
                            className={`${styles.nav_menu__item} ${activeMenus.services ? styles._active : ''} ${styles.nav_menu__item_has_children}`}
                            onMouseEnter={() => !isMobile && handleMouseEnter('services')}
                            onMouseLeave={() => !isMobile && handleMouseLeave('services')}
                        >
                            <Link
                                href="/uslugi"
                                className={styles.nav_menu__link}
                                onClick={(e) => {
                                  if (isMobile) {
                                    if (activeMenus.services) {
                                      // Если меню открыто, разрешаем переход
                                      return;
                                    }
                                    // Если меню закрыто, открываем его и предотвращаем переход
                                    e.preventDefault();
                                    toggleMenu('services');
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
                                style={isMobile ? { display: activeMenus.services ? 'block' : 'none' } : undefined}
                            >
                                <li
                                    className={`${styles.sub_menu__item} ${activeMenus.design ? styles._active : ''} ${styles.sub_menu__item_has_children}`}
                                    onMouseEnter={() => !isMobile && handleMouseEnter('design')}
                                    onMouseLeave={() => !isMobile && handleMouseLeave('design')}
                                >
                                    <Link
                                        href="/uslugi/studiya-dizayna-intererov"
                                        className={styles.sub_menu__link}
                                        onClick={(e) => {
                                          if (isMobile) {
                                            if (activeMenus.design) {
                                              // Если меню открыто, разрешаем переход
                                              return;
                                            }
                                            // Если меню закрыто, открываем его и предотвращаем переход
                                            e.preventDefault();
                                            toggleMenu('design');
                                          }
                                        }}
                                    >
                                        Студия дизайна интерьеров{" "}
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            rotation={270}
                                            className={styles.nav_menu__icon}
                                        />
                                    </Link>
                                    <ul
                                        className={styles.sub_sub_menu}
                                        style={isMobile ? { display: activeMenus.design ? 'block' : 'none' } : undefined}
                                    >
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/dizayn-interera"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Дизайн интерьера
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/dizayn-proekt-kvartir"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Дизайн-проект квартир
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li
                                    className={`${styles.sub_menu__item} ${activeMenus.repair ? styles._active : ''} ${styles.sub_menu__item_has_children}`}
                                    onMouseEnter={() => !isMobile && handleMouseEnter('repair')}
                                    onMouseLeave={() => !isMobile && handleMouseLeave('repair')}
                                >
                                    <Link
                                        href="/uslugi/remont-kvartir"
                                        className={styles.sub_menu__link}
                                        onClick={(e) => {
                                          if (isMobile) {
                                            if (activeMenus.repair) {
                                              // Если меню открыто, разрешаем переход
                                              return;
                                            }
                                            // Если меню закрыто, открываем его и предотвращаем переход
                                            e.preventDefault();
                                            toggleMenu('repair');
                                          }
                                        }}
                                    >
                                        Ремонт квартир{" "}
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            rotation={270}
                                            className={styles.nav_menu__icon}
                                        />
                                    </Link>
                                    <ul
                                        className={styles.sub_sub_menu}
                                        style={isMobile ? { display: activeMenus.repair ? 'block' : 'none' } : undefined}
                                    >
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/dizaynerskiy"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Дизайнерский
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/kapitalnyy"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Капитальный
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/kosmeticheskiy"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Косметический
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/v-novostroyke"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Новостройка
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/odnokomnatnaya"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                1 комната
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/dvuhkomnatnaya"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                2 комнаты
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/trehkomnatnaya"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                3 комнаты
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/studiya"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Студия
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                styles.sub_sub_menu__item
                                            }
                                        >
                                            <Link
                                                href="/uslugi/vtorichka"
                                                className={
                                                    styles.sub_sub_menu__link
                                                }
                                            >
                                                Вторичка
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/otdelka-kvartir"
                                        className={styles.sub_menu__link}
                                    >
                                        Отделка квартир
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/evroremont"
                                        className={styles.sub_menu__link}
                                    >
                                        Евроремонт
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/remont-ofisov"
                                        className={styles.sub_menu__link}
                                    >
                                        Ремонт офисов
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/remont-restoranov"
                                        className={styles.sub_menu__link}
                                    >
                                        Ремонт ресторанов
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/remont-domov-i-kottedzhey"
                                        className={styles.sub_menu__link}
                                    >
                                        Ремонт домов и коттеджей
                                    </Link>
                                </li>
                                <li className={styles.sub_menu__item}>
                                    <Link
                                        href="/uslugi/dizajn-kvartir-pod-klyuch"
                                        className={styles.sub_menu__link}
                                    >
                                        Дизайн квартир под ключ
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/o-kompanii"
                                className={styles.nav_menu__link}
                            >
                                О компании
                            </Link>
                        </li>
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/nashi-raboty"
                                className={styles.nav_menu__link}
                            >
                                Наши работы
                            </Link>
                        </li>
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/czeny"
                                className={styles.nav_menu__link}
                            >
                                Цены
                            </Link>
                        </li>
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/blog"
                                className={styles.nav_menu__link}
                            >
                                Блог
                            </Link>
                        </li>
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/otzyvy"
                                className={styles.nav_menu__link}
                            >
                                Отзывы
                            </Link>
                        </li>
                        <li className={styles.nav_menu__item}>
                            <Link
                                href="/kontakty"
                                className={styles.nav_menu__link}
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- Информационные блоки --> */}
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
                    {/* <!-- Телефон --> */}
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
                    {/* <!-- Социальные сети --> */}
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
