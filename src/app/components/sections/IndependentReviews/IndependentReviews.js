"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from "./independentreviews.module.css";


export default function IndependentReviews() {

    const services = [
        {
            name: "2gis",
            rating: "5",
            reviews: "158",
            logo: "/logos/2gis.svg",
            color: "#7DD63D",
            link: "https://go.2gis.com/DpfgD"
        },
        {
            name: "yandex",
            rating: "4.8",
            reviews: "33",
            logo: "/logos/yandex.svg",
            color: "#FF1B00",
            link: "https://yandex.ru/maps/-/CHC7aCMI"
        },
        {
            name: "flamp",
            rating: "4.8",
            reviews: "22",
            logo: "/logos/flamp.svg",
            color: "#066BEF",
            link: "https://spb.flamp.ru/firm/funduk_studiya_dizajjna-70000001092057314"
        },
        {
            name: "zoon",
            rating: "4.8",
            reviews: "14",
            logo: "/logos/zoon.svg",
            color: "#633BF4",
            link: "https://zoon.ru/spb/business/studiya_dizajna_funduk/reviews/"
        },
        {
            name: "google",
            rating: "4.8",
            reviews: "14",
            logo: "/logos/google.svg",
            color: "#FBBC05",
            link: "#"
        }
    ]
    return (
        <section className={styles.independentreviews}>
            <div className={styles.independentreviews__wrapper}>
                <h2 className={styles.independentreviews__title}>Отзывы на&nbsp;независимых ресурсах</h2>
                <p className={styles.independentreviews__subtitle}>Посмотрите, что пишут о&nbsp;нас клиенты, которым мы&nbsp;провели приемку квартиры и&nbsp;помогли взыскать средства с&nbsp;застройщиков</p>
                <div className={styles.independentreviews__inner}>
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className={styles.service__card} rel="nofollow">
                            <div className={styles.service__inner}>
                                <Image
                                    src={service.logo}
                                    width={80}
                                    height={20}
                                    className={styles.service__image}
                                    alt={service.name}
                                />
                                <p className={styles.service__text}>{service.reviews}+ отзывов</p>
                            </div>
                            <div className={styles.service__inner}>
                                <div className={styles.service__rating} style={{backgroundColor: `${service.color}`}}>{service.rating}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
                    <div
                        style={{
                            minWidth: '100px',
                            height: '800px',
                            overflow: 'hidden',
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                        }}
                    >
                        <iframe
                            style={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #e6e6e6',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                            }}
                            src="https://yandex.ru/maps-reviews-widget/121145021604?comments"
                            title="Yandex Maps Reviews Widget"
                        />
                        <a
                            href="https://yandex.ru/maps/org/funduk/121145021604/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                            boxSizing: 'border-box',
                            textDecoration: 'none',
                            color: '#b3b3b3',
                            fontSize: '10px',
                            fontFamily: 'YS Text, sans-serif',
                            padding: '0 20px',
                            position: 'absolute',
                            bottom: '8px',
                            width: '100%',
                            textAlign: 'center',
                            left: '0',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                            maxHeight: '14px',
                            whiteSpace: 'nowrap',
                            padding: '0 16px',
                            boxSizing: 'border-box'
                            }}
                        >
                            Фундук на карте Санкт‑Петербурга — Яндекс Карты
                        </a>
                    </div>
                </div>
                <Swiper
                        slidesPerView="auto"
                        // spaceBetween={-130}
                        modules={[Autoplay]}
                        className="independentreviews__slider"
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                        }}
                    >
                            <SwiperSlide className={styles.slide}>
                                    <div className={styles.slide__container}>
                                        <Image
                                            src="/reviews/T01.png"
                                            alt="T01"
                                            fill
                                            className={styles.slide__image}
                                        />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                    <div className={styles.slide__container}>
                                        <Image
                                            src="/reviews/T02.png"
                                            alt="T02"
                                            fill
                                            className={styles.slide__image}
                                        />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                    <div className={styles.slide__container}>
                                        <Image
                                            src="/reviews/T03.png"
                                            alt="T03"
                                            fill
                                            className={styles.slide__image}
                                        />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                    <div className={styles.slide__container}>
                                        <Image
                                            src="/reviews/T04.png"
                                            alt="T04"
                                            fill
                                            className={styles.slide__image}
                                        />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                    <div className={styles.slide__container}>
                                        <Image
                                            src="/reviews/T05.png"
                                            alt="T05"
                                            fill
                                            className={styles.slide__image}
                                        />
                                    </div>
                            </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    );
}
