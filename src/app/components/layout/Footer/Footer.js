'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faTelegram,
  faVk
} from '@fortawesome/free-brands-svg-icons';
import styles from "./footer.module.css";
import PopupButton from "../../ui/PopupButton/PopupButton";

export default function Footer() {

  const currentYear = new Date().getFullYear();
  const companyLinks = [
    { name: 'Наши работы', href: '/portfolio' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Блог', href: '/blog' },
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Брусника ремонт СПб', href: 'https://remont-s-pb.ru/' }
  ];

  const servicesLinks = [
    { name: 'Студия дизайна интерьеров', href: '/services/design-studio' },
    { name: 'Дизайн-проект квартир', href: '/services/apartment-design' },
    { name: 'Дизайн интерьера', href: '/services/interior-design' },
    { name: 'Ремонт квартир', href: '/services/apartment-renovation' },
    { name: 'Ремонт в новостройке', href: '/services/new-building' },
    { name: 'Ремонт в студии', href: '/services/studio' },
    { name: 'Ремонт офисов', href: '/services/office' },
    { name: 'Ремонт ресторанов', href: '/services/restaurant' }
  ];

  const socialLinks = [
    { icon: faTelegram, href: 'https://t.me/fundukstudiospb' },
    { icon: faWhatsapp, href: 'https://api.whatsapp.com/send?phone=79312236014' },
    { icon: faVk, href: 'https://vk.com/brusnikaremontspb' }
  ];

  const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Лого и кнопка */}
          <div className={styles.logo}>
            <Image
              src="/logo-b-w.webp"
              alt="Фундук - Дизайн и ремонт квартир"
              width={174}
              height={45}
              className={styles.logoImage}
            />
            <PopupButton
                title="Заказать звонок"
                color="#ffffff"
                bgcolor="transparent"
            />
          </div>

          {/* Меню компании */}
          <div className={styles.nav}>
            <h3 className={styles.navTitle}>O компании</h3>
            <ul className={styles.navList}>
              {companyLinks.map((link, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={link.href} target={`${link.name == "Брусника ремонт СПб" ? "_blank" : "_self"}`} className={styles.navLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Меню услуг */}
          <div className={styles.services}>
            <h3 className={styles.servicesTitle}>Услуги</h3>
            <ul className={styles.servicesList}>
              {servicesLinks.map((link, index) => (
                <li key={index} className={styles.servicesItem}>
                  <Link href={link.href} className={styles.servicesLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.contacts}>
            <h3 className={styles.contactsTitle}>Контакты</h3>
            <p className={styles.contactsDescription}>
              Фундук - Дизайн и ремонт квартир<br />
              в Санкт-Петербурге
            </p>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Адрес:
              </p>
              {/* <p className={styles.contactText}>
                г. Санкт-Петербург, наб. реки Фонтанки, 129
              </p> */}
              <Link href="https://yandex.ru/maps/-/CHC7aCMI" className={styles.contactText}>
                  г. Санкт-Петербург, наб. реки Фонтанки, 129
              </Link>
              {/* https://yandex.ru/maps/-/CHC7aCMI */}
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
              </p>
              {/* <p className={styles.contactText}>fundukdesign@yandex.ru</p> */}
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className={styles.contactText}>
                  {process.env.NEXT_PUBLIC_EMAIL}
              </Link>
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>
                <FontAwesomeIcon icon={faPhoneAlt} /> Телефон:
              </p>
              <Link href={`tel:${cleanPhone(process.env.NEXT_PUBLIC_PHONE_NUMBER)}`} className={styles.contactText}>
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER}
              </Link>
            </div>

            <div className={styles.social}>
              <p className={styles.socialTitle}>Есть вопрос?</p>
              <p className={styles.socialSubtitle}>Задайте его напрямую</p>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        {currentYear} Все права защищены. ИП Соболев Игорь Денисович ИНН 380104582803
      </div>
    </footer>
  )
}