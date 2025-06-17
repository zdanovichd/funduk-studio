"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./faqsection.module.css";
import React, { useState, useEffect, useRef } from "react";
import Accordion from "../../ui/Accordion/Accordion";

export default function FaqSection({
    title = [],
    faqs = [],
}) {
    const swiperRef = useRef();
    const { innerWidth, innerHeight } = useWindowSize();
    const headerHeight = useHeaderHeight();
    const [isSticky, setIsSticky] = useState(false);
    const stickyRef = useRef(null);
    const sectionRef = useRef(null);

    let leftPadding = 0;
    if (innerWidth > 1024) {
        leftPadding = (innerWidth - 1140) / 2;
    }

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current && sectionRef.current) {
                const stickyTop = stickyRef.current.getBoundingClientRect().top;
                const sectionTop = sectionRef.current.getBoundingClientRect().top;

                // Когда секция начинает уходить за верхний край, делаем заголовок sticky
                setIsSticky(sectionTop <= 0 && stickyTop <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            // Удаляем HTML-теги из ответа для микроразметки
            "text": faq.answer.replace(/<[^>]*>/g, "")
          }
        }))
      };

    return (
        <section className={styles.faqsection}>
            <div
                className={styles.faqsection__wrapper}
            >
                <div className={`${styles.faqsection__inner}`}>
                    <div
                        className={`${styles.faqsection__content}`}
                        style={{ top: headerHeight + 10 + "px" }}
                    >
                        <h2 className={styles.faqsection__title}>{title}</h2>
                        <Link className={styles.faqsection__link} href="/">Задать свой вопрос →</Link>
                    </div>
                </div>
                <div className={styles.faqsection__inner}>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} index={index} data={faq} />
                    ))}
                </div>
            </div>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </section>
    );
}

function useWindowSize() {
    // Initialize state with undefined values that will be set on client side
    const [windowSize, setWindowSize] = useState({
        innerWidth: undefined,
        innerHeight: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowSize({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        }

        // Only set up event listeners and initial size on client side
        if (typeof window !== "undefined") {
            // Set size immediately
            handleResize();

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures effect is only run on mount and unmount

    return windowSize;
}

function useHeaderHeight() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
      const header = document.querySelector('header');
      if (header) {
        const style = window.getComputedStyle(header);
        setHeight(header.offsetHeight); // или parseFloat(style.height)
      }
    }, []);

    return height;
  }