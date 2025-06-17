import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import Hero from "@/app/components/sections/Hero/Hero";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import IndependentReviews from "@/app/components/sections/IndependentReviews/IndependentReviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCalendar } from "@fortawesome/free-solid-svg-icons"

export const metadata = {
    title: 'Отзывы - ФУНДУК - Дизайн и ремонт квартир в Санкт-Петербурге',
    description:
        "Все оригинальные отзывы студии Фундук - Дизайн и ремонт квартир в Санкт-Петербурге",
};

export default function Page() {
    return (
        <main>
            <Hero
                title="Отзывы наших клиентов"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "Отзывы" },
                ]}
            />

            <section className={styles.reviews}>
                <div className={styles.reviews__wrapper}>
                  <div className={styles.review_top}>
                    <div className={styles.review_data}>
                      <div className={styles.review_geo_logo}>
                        <Image
                                    src="/logos/2gis.svg"
                                    width={100}
                                    height={40}
                                    className={styles.service__image}
                                    alt="2gis"
                                />
                      </div>
                      <div className={styles.review_info}>
                        <div className={styles.review_rating}>
                          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        </div>
                        <div className={styles.review_name}>
                          <p>Светлана Савельева</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.review_date}>
                      <FontAwesomeIcon size="xl" icon={faCalendar} />
                      <p>27.03.2024</p>
                    </div>
                  </div>
                  <div className={styles.review_bottom}>
                    <p className={styles.review_content}>Мы с мужем изначально знали, что сами принимать квартиру не рискнём, потому как ничего особо не понимаем в таких вещах. А если не заметить косяки и подписать акт приёма, то после уже претензий не предъявить и в итоге все это сулит не очень хорошими последствиями… Специалист Дмитрий сделал процедуру быстро, грамотно и чётко. Видно, что фирма серьёзная и специалисты в ней соответствующие. За ремонтом обратились тоже к ним, все идёт хорошо, нареканий нет!</p>
                  </div>
                </div>
            </section>

            <IndependentReviews/>

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
