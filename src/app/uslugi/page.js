import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from 'react';
import Hero from "@/app/components/sections/Hero/Hero";
import PortfolioSection from "@/app/components/sections/PortfolioSection/PortfolioSection";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import data from "../json/data.json";

export const metadata = {
  title: 'Услуги - ФУНДУК - Дизайн и ремонт квартир в Санкт-Петербурге',
  description: 'Все услуги студии Фундук - Дизайн и ремонт квартир в Санкт-Петербурге',
}

export default function Home() {

  return (
    <main>
      <Hero
        title="Услуги"
        breadcrumbs={[
          { title: "Главная", path: "/" },
          { title: "Услуги", path: "/uslugi" },
        ]}
      />
        <section className={styles.uslugi}>
            <div className={styles.uslugi__wrapper}>
                {data.filter(usluga => usluga.is_page !== false).map((usluga, index) => (
                    <Link
                        key={index}
                        className={`${styles.uslugi__item}`}
                        href={`/uslugi/${usluga.slug}`}
                    >
                        <div className={`${styles.slide__content} ${styles.uslugi__item_odd}`}>
                            <div
                                className={styles.slide__content_inner}
                            >
                                <p className={styles.slide__number}>
                                    {index < 9 ? '0'+(index+1) : index+1}
                                </p>
                            </div>
                            <div
                                className={styles.slide__content_inner}
                            >
                                <h3 className={styles.slide__title}>
                                    {usluga.h1}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      <PortfolioSection
        title={"Посмотрите наши последние работы"}
        slides={[
          {
            title: "Дизайн-проект квартиры 105,3 м²",
            characteristics: {
              type: "Новостройка",
              rooms: "3 комнаты",
              area: "105,3 м²",
              price: "352 500 руб"
            },
            image: "/portfolio/01image.webp",
            link: "/dizajn-proekt-kvartiry-1053-m2"
          },
          {
            title: "Ремонт двухкомнатной квартиры Академгородок",
            characteristics: {
              type: "Новостройка",
              rooms: "2 комнаты",
              area: "47 м²",
              price: "754 000 руб"
            },
            image: "/portfolio/02image.webp",
            link: "#"
          },
          {
            title: "Дизайн-проект трехкомнатной квартиры",
            characteristics: {
              type: "Новостройка",
              rooms: "3 комнаты",
              area: "98 м²",
              price: "205 800 руб"
            },
            image: "/portfolio/03image.webp",
            link: "#"
          },
        ]}
      />
      <BannerFeedback
        bg_url="/form.webp"
        title="Индивидуальный подход к&nbsp;каждому проекту"
        description="Мы&nbsp;всегда готовы ответить на&nbsp;любые возникшие вопросы"
        form_title="Запишитесь на&nbsp;расчет стоимости ремонта вашей квартиры"
        form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда."
        form_button="Оставить заявку"
      />
    </main>
  );
}
