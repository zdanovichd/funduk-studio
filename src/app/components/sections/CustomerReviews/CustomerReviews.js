"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from "./customerreviews.module.css";

export default function CustomerReviews({
    title = [],
    slides = [],
}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className={styles.customerreviews}>
            <div className={styles.customerreviews__wrapper}>
                <h2 className={styles.customerreviews__title}>{title}</h2>
                <div className={styles.customerreviews__slides}>
                    <Swiper
                        // style={{
                        // '--swiper-navigation-color': '#fff',
                        // '--swiper-pagination-color': '#fff',
                        // }}
                        autoHeight={true}
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="customerreviews__slider"
                    >
                        {slides.map((slide, index) => (

                            <SwiperSlide key={index} className={styles.customerreviews__slider_slide}>

                                <div className={styles.slide__inner} style={slide.video_overlay != '' ? {"width": "50%"} : {"width": "100%"}}>
                                    <div className={styles.slide__top}>
                                        <div className={styles.slide__info}>
                                            <div className={styles.slide__image}>
                                                <Image
                                                    src={slide.image}
                                                    width={70}
                                                    height={70}
                                                    alt={slide.name}
                                                />
                                            </div>
                                            <div className={styles.slide__data}>
                                                <p className={styles.slide__name}>{slide.name}</p>
                                                <p className={styles.slide__category}>{slide.category}</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M32.1665 10.4998C33.8332 12.3332 34.8332 14.3332 34.8332 17.6665C34.8332 23.4998 30.6665 28.6665 24.8332 31.3332L23.3332 29.1665C28.8332 26.1665 29.9998 22.3332 30.3332 19.8332C29.4998 20.3332 28.3332 20.4998 27.1665 20.3332C24.1665 19.9998 21.8332 17.6665 21.8332 14.4998C21.8332 12.9998 22.4998 11.4998 23.4998 10.3332C24.6665 9.1665 25.9998 8.6665 27.6665 8.6665C29.4998 8.6665 31.1665 9.49984 32.1665 10.4998ZM15.4998 10.4998C17.1665 12.3332 18.1665 14.3332 18.1665 17.6665C18.1665 23.4998 13.9998 28.6665 8.1665 31.3332L6.6665 29.1665C12.1665 26.1665 13.3332 22.3332 13.6665 19.8332C12.8332 20.3332 11.6665 20.4998 10.4998 20.3332C7.49984 19.9998 5.1665 17.4998 5.1665 14.4998C5.1665 12.9998 5.83317 11.4998 6.83317 10.3332C7.99984 9.1665 9.33317 8.6665 10.9998 8.6665C12.8332 8.6665 14.4998 9.49984 15.4998 10.4998Z" fill="#579E6E"></path></svg>
                                    </div>
                                    <p className={styles.slide__content}>{slide.review}</p>
                                </div>
                                {slide.video_overlay != '' &&

                                    <div className={styles.slide__inner}>
                                        <Image
                                            src={slide.video_overlay}
                                            fill
                                            alt={slide.name}
                                            className={styles.slide__video_overlay}
                                        />
                                    </div>
                                }
                                <div className={styles.slide__inner}>
                                    <p className={styles.slide__content}>{slide.review}</p>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="customerreviews__thumbs"
                    >

                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className={styles.customerreviews__thumbs_slide}>
                                <Image
                                    src={slide.image}
                                    fill
                                    alt={slide.name}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
