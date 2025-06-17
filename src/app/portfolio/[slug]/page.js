import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import { use } from "react";
import Hero from "@/app/components/sections/Hero/Hero";
import PortfolioSection from "@/app/components/sections/PortfolioSection/PortfolioSection";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import posts_data from "@/app/json/posts.json";
import { notFound } from "next/navigation";
import Prices from "@/app/components/sections/Prices/Prices";
import MultistepForm from "@/app/components/sections/MultistepForm/MultistepForm";
import PriceTableSection from "@/app/components/sections/PriceTableSection/PriceTableSection";
import CustomerReviews from "@/app/components/sections/CustomerReviews/CustomerReviews";
import IndependentReviews from "@/app/components/sections/IndependentReviews/IndependentReviews";
import Partners from "@/app/components/sections/Partners/Partners";
import HowWeWork from "@/app/components/sections/HowWeWork/HowWeWork";
import FaqSection from "@/app/components/sections/FaqSection/FaqSection";
import WhyUsSection from "@/app/components/sections/WhyUsSection/WhyUsSection";

// export const metadata = {
//   title: 'Услуги - ФУНДУК - Дизайн и ремонт квартир в Санкт-Петербурге',
//   description: 'Все услуги студии Фундук - Дизайн и ремонт квартир в Санкт-Петербурге',
// }

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = posts_data;
    const slugs = posts.map((post) => post.slug);

    return slugs.map((slug) => ({
        slug: slug, // Ключ должен совпадать с именем папки [slug]
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const posts = posts_data;

    const post = posts.find((post) => post.slug === slug);

    return {
        title: post?.meta_title || "Default Title",
        description: post?.meta_description || "Default Description",
    };
}

export default async function Page({ params }) {
    // Получаем slug из params
    const { slug } = await params;

    // Находим соответствующую услугу
    const post = posts_data.find((item) => item.slug === slug);
    let parent = null;
    let breadcrumbs = [
      { title: "Главная", path: "/" },
      { title: "Блог", path: "/blog" },
      { title: post.h1, path: post.slug}
    ]
    // Если услуга не найдена, показываем 404
    if (!post) {
        notFound();
    }

    return (
        <main>
            <Hero
                title={post.h1}
                breadcrumbs={breadcrumbs}
                formEnabled={false}
                // content={usluga.subtitle}
            />
            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper} dangerouslySetInnerHTML={{__html: post.main_content.first_place}}>

                </div>
            </section>
            <BannerFeedback
                    bg_url="/form.webp"
                    title="Индивидуальный подход к&nbsp;каждому проекту"
                    description="Мы&nbsp;всегда готовы ответить на&nbsp;любые возникшие вопросы"
                    form_title="Запишитесь на&nbsp;расчет стоимости ремонта вашей квартиры"
                    form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда."
                    form_button="Оставить заявку"
            />
            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper} dangerouslySetInnerHTML={{__html: post.main_content.second_place}}>

                </div>
            </section>
        </main>
    );
}
