import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from 'react';
import Hero from "@/app/components/sections/Hero/Hero";
import PortfolioSection from "@/app/components/sections/PortfolioSection/PortfolioSection";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import posts from "@/app/json/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export const metadata = {
  title: 'Блог - ФУНДУК - Дизайн и ремонт квартир в Санкт-Петербурге',
  description: '',
}

export default function Home() {

  return (
    <main>
      <Hero
        title="Блог от компании «Фундук»"
        breadcrumbs={[
          { title: "Главная", path: "/" },
          { title: "Блог", path: "/blog" },
        ]}
      />
        <section className={styles.uslugi}>
            <div className={styles.uslugi__wrapper}>
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className={`${styles.postssection__item}`}
                    >
                                <div className={styles.slide__content}>
                                    <div
                                        className={styles.slide__content_inner}
                                    >
                                        <Image
                                            src={post.main_content.image}
                                            fill
                                            className={styles.slide__content_image}
                                            alt={post.h1}
                                        />
                                    </div>
                                    <div
                                        className={styles.slide__content_inner}
                                    >
                                        <p className={styles.slide__title}>
                                            {post.h1}
                                        </p>
                                        <p className={styles.slide__subtitle}>
                                            {post.main_content.short_description}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.slide__content_inner}
                                    >
                                        <div className={styles.date}>
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <p>{post.date}</p>
                                        </div>
                                        <div className={styles.link}>
                                            <Link href={`/blog/${post.slug}`}>Подробнее →</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                ))}
            </div>
        </section>
    </main>
  );
}
