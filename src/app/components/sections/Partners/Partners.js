"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from "./partners.module.css";

export default function Partners() {
    const swiperRef = useRef(null);
    const sliderContainerRef = useRef(null);
    const animationFrameRef = useRef(null);

    const partners = [
        { id: 1, src: "/brands/1-2.jpg", alt: "1-2.jpg", url: "#" },
        { id: 2, src: "/brands/2-2.jpg", alt: "2-2.jpg", url: "#" },
        { id: 3, src: "/brands/3-2.jpg", alt: "3-2.jpg", url: "#" },
        { id: 4, src: "/brands/4-2.jpg", alt: "4-2.jpg", url: "#" },
        { id: 5, src: "/brands/5-2.jpg", alt: "5-2.jpg", url: "#" },
        { id: 6, src: "/brands/6-2.jpg", alt: "6-2.jpg", url: "#" },
        { id: 7, src: "/brands/7-2.jpg", alt: "7-2.jpg", url: "#" },
        { id: 8, src: "/brands/8.jpg", alt: "8.jpg", url: "#" },
        { id: 9, src: "/brands/9.jpg", alt: "9.jpg", url: "#" },
        { id: 10, src: "/brands/10.jpg", alt: "10.jpg", url: "#" },
        { id: 11, src: "/brands/11.jpg", alt: "11.jpg", url: "#" },
        { id: 12, src: "/brands/12.jpg", alt: "12.jpg", url: "#" },
    ];

    // Ручное управление анимацией для плавности
    useEffect(() => {
        const container = sliderContainerRef.current;
        if (!container) return;

        let isHovered = false;
        let animationSpeed = 1; // 1 = нормальная скорость, 0 = остановлено

        const moveSlider = () => {
            if (!swiperRef.current || !swiperRef.current.swiper) return;

            const swiper = swiperRef.current.swiper;
            if (swiper.destroyed) return;

            if (!isHovered) {
                swiper.setTranslate(swiper.translate - animationSpeed);

                // Если достигли конца - плавно переходим в начало
                if (swiper.translate < -swiper.width * 2) {
                    swiper.setTranslate(swiper.translate + swiper.width);
                }
            }

            animationFrameRef.current = requestAnimationFrame(moveSlider);
        };

        const handleMouseEnter = () => {
            isHovered = true;
            animationSpeed = 0;
        };

        const handleMouseLeave = () => {
            isHovered = false;
            animationSpeed = 1;
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        animationFrameRef.current = requestAnimationFrame(moveSlider);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className={styles.partners}>
            <div className={styles.partners__inner}>
                <h2 className={styles.partners__title}>Наши поставщики и партнеры</h2>
                <div className={styles.sliderTrack} ref={sliderContainerRef}>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView="auto"
                        spaceBetween={40}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="partners__slider"
                        speed={0} // Отключаем встроенную анимацию
                        loop={true}
                        // loopedSlides={partners.length * 2}
                        allowTouchMove={false}
                        simulateTouch={false}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <SwiperSlide key={`${partner.id}-${index}`} className={styles.slide}>
                                <Link href={partner.url} className={styles.partnerLink}>
                                    <div className={styles.logoContainer}>
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={160}
                                            height={80}
                                            className={styles.partner__logo}
                                            priority
                                        />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}