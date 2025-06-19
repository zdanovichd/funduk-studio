import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import { use } from "react";
import Hero from "@/app/components/sections/Hero/Hero";
import PortfolioSection from "@/app/components/sections/PortfolioSection/PortfolioSection";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import data from "../../json/data.json";
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
    const uslugi = data;
    const slugs = uslugi.map((usluga) => usluga.slug);

    return slugs.map((slug) => ({
        slug: slug, // Ключ должен совпадать с именем папки [slug]
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const uslugi = data;

    const usluga = uslugi.find((usluga) => usluga.slug === slug);

    return {
        title: usluga?.meta_title || "Default Title",
        description: usluga?.meta_description || "Default Description",
    };
}

export default async function Page({ params }) {
    // Получаем slug из params
    const { slug } = await params;

    // Находим соответствующую услугу
    const usluga = data.find((item) => item.slug === slug);
    let parent = null;
    let breadcrumbs = [
      { title: "Главная", path: "/" },
      { title: "Услуги", path: "/uslugi" },
    ]
    if (usluga.parent != null) {
        parent = data.find((item) => item.slug === usluga.parent);

        // Добавляем родителя только если это страница (is_page === true)
        if (parent.is_page) {
            breadcrumbs.push({
            title: parent.h1,
            path: "/uslugi/"+parent.slug
            });
        } else {
            // Если родитель не страница, добавляем только его название без пути
            breadcrumbs.push({
            title: parent.h1,
            path: null // или просто не указываем path
            });
        }

        // Добавляем текущую услугу
        breadcrumbs.push({
            title: usluga.h1,
            path: "/uslugi/"+usluga.slug
        });
    } else {
        // Если нет родителя, добавляем только текущую услугу
        breadcrumbs.push({
            title: usluga.h1,
            path: "/uslugi/"+usluga.slug
        });
    }
    // Если услуга не найдена, показываем 404
    if (!usluga) {
        notFound();
    }
    if (!usluga.is_page) {
        notFound();
    }

    return (
        <main>
            <Hero
                title={usluga.h1}
                breadcrumbs={breadcrumbs}
                formEnabled={true}
                content={usluga.subtitle}
            />

            <PortfolioSection
                title={"Посмотрите наши последние работы"}
                slides={[
                    {
                        title: "Дизайн-проект квартиры 105,3 м²",
                        characteristics: {
                            type: "Новостройка",
                            rooms: "3 комнаты",
                            area: "105,3 м²",
                            price: "352 500 руб",
                        },
                        image: "/portfolio/01image.webp",
                        link: "#",
                    },
                    {
                        title: "Ремонт двухкомнатной квартиры Академгородок",
                        characteristics: {
                            type: "Новостройка",
                            rooms: "2 комнаты",
                            area: "47 м²",
                            price: "754 000 руб",
                        },
                        image: "/portfolio/02image.webp",
                        link: "#",
                    },
                    {
                        title: "Дизайн-проект трехкомнатной квартиры",
                        characteristics: {
                            type: "Новостройка",
                            rooms: "3 комнаты",
                            area: "98 м²",
                            price: "205 800 руб",
                        },
                        image: "/portfolio/03image.webp",
                        link: "#",
                    },
                ]}
            />
            <Prices />
            <WhyUsSection
              title = {usluga.main_content.title}
              topData = {usluga.main_content.topData}
              bottomData = {usluga.main_content.bottomData}
              beforeTitle = {usluga.main_content.beforeTitle}
              bottomEnabled = {usluga.main_content.bottomEnabled}
              showMoreEnabled = {usluga.main_content.showMoreEnabled}
              afterBottom = {usluga.main_content.afterBottom}
            />
            <MultistepForm />
            <PriceTableSection
                title="Сроки выполнения работ"
                tableData={{
                    "Черновой ремонт": {
                        headers: [
                            "Объект",
                            "Площадь",
                            "Цены на материалы",
                            "Цены на работы",
                            "Итого",
                            "Сроки (дн.)",
                        ],
                        rows: [
                            [
                                "Студия",
                                "25-35 м²",
                                "35 000 руб",
                                "65 000 руб",
                                "100 000 руб",
                                "35-50 дней",
                            ],
                            [
                                "1-комнатные",
                                "35-55 м²",
                                "45 000 руб",
                                "80 000 руб",
                                "125 000 руб",
                                "40-55 дней",
                            ],
                            [
                                "2-комнатные",
                                "55-75 м²",
                                "50 000 руб",
                                "90 000 руб",
                                "140 000 руб",
                                "45-60 дней",
                            ],
                        ],
                    },
                    "Косметический ремонт": {
                        headers: [
                            "Объект",
                            "Площадь",
                            "Цены на материалы",
                            "Цены на работы",
                            "Итого",
                            "Сроки (дн.)",
                        ],
                        rows: [
                            [
                                "Студия",
                                "25-35 м²",
                                "35 000 руб",
                                "65 000 руб",
                                "100 000 руб",
                                "35-50 дней",
                            ],
                            [
                                "1-комнатные",
                                "35-55 м²",
                                "45 000 руб",
                                "80 000 руб",
                                "125 000 руб",
                                "40-55 дней",
                            ],
                            [
                                "2-комнатные",
                                "55-75 м²",
                                "50 000 руб",
                                "90 000 руб",
                                "140 000 руб",
                                "45-60 дней",
                            ],
                        ],
                    },
                    "Капитальный ремонт": {
                        headers: [
                            "Объект",
                            "Площадь",
                            "Цены на материалы",
                            "Цены на работы",
                            "Итого",
                            "Сроки (дн.)",
                        ],
                        rows: [
                            [
                                "Студия",
                                "25-35 м²",
                                "35 000 руб",
                                "65 000 руб",
                                "100 000 руб",
                                "35-50 дней",
                            ],
                            [
                                "1-комнатные",
                                "35-55 м²",
                                "45 000 руб",
                                "80 000 руб",
                                "125 000 руб",
                                "40-55 дней",
                            ],
                            [
                                "2-комнатные",
                                "55-75 м²",
                                "50 000 руб",
                                "90 000 руб",
                                "140 000 руб",
                                "45-60 дней",
                            ],
                        ],
                    },
                }}
            />
            <PriceTableSection
                title="Цены на базовые работы"
                tableData={{
                    "Черновая отделка стен": {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            [
                                "Демонтаж стен из ГКЛ, ГВЛ, ДСП и т.д",
                                "от 750 руб",
                                "м. кв.",
                            ],
                            [
                                "Демонтаж бетонных перегородок",
                                "от 750 руб",
                                "м. кв.",
                            ],
                            ["Снятие штукатурки", "от 750 руб", "м. кв."],
                        ],
                    },
                    "Чистовая отделка стен": {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    Потолок: {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    "Натяжной потолок": {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    "Электромонтажные работы": {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    Окна: {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    Двери: {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    "Плиточные работы": {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                    Сантехника: {
                        headers: ["Наименование", "Цена", "Ед. изм."],
                        rows: [
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                        ],
                    },
                }}
            />
            <CustomerReviews
                title="Отзывы заказчиков ремонта"
                slides={[
                    {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга Григорьевна",
                        category: "Ремонт квартиры",
                        review: "Все работы были выполнены в срок по договору, задержек не было. Самое главное, нас избавили от головной боли, связанной с выбором, расчетом, доставкой и подъемом на этаж материалов для ремонта. Все материалы покупали в данной организации. Все эти работы компания взяла на себя. Нам нужно только было выбрать ламинат, обои, плитку и сообщить бригадиру номера артикулов.",
                        video: "#",
                        video_overlay: "/reviews/customer/video01.webp",
                    },
                    {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга Григорьевна",
                        category: "Ремонт квартиры",
                        review: "Все работы были выполнены в срок по договору, задержек не было. Самое главное, нас избавили от головной боли, связанной с выбором, расчетом, доставкой и подъемом на этаж материалов для ремонта. Все материалы покупали в данной организации. Все эти работы компания взяла на себя. Нам нужно только было выбрать ламинат, обои, плитку и сообщить бригадиру номера артикулов.",
                        video: "#",
                        video_overlay: "/reviews/customer/video01.webp",
                    },
                    {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга Григорьевна",
                        category: "Ремонт квартиры",
                        review: "Все работы были выполнены в срок по договору, задержек не было. Самое главное, нас избавили от головной боли, связанной с выбором, расчетом, доставкой и подъемом на этаж материалов для ремонта. Все материалы покупали в данной организации. Все эти работы компания взяла на себя. Нам нужно только было выбрать ламинат, обои, плитку и сообщить бригадиру номера артикулов.",
                        video: "#",
                        video_overlay: "/reviews/customer/video01.webp",
                    },
                    {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга Григорьевна",
                        category: "Ремонт квартиры",
                        review: "Все работы были выполнены в срок по договору, задержек не было. Самое главное, нас избавили от головной боли, связанной с выбором, расчетом, доставкой и подъемом на этаж материалов для ремонта. Все материалы покупали в данной организации. Все эти работы компания взяла на себя. Нам нужно только было выбрать ламинат, обои, плитку и сообщить бригадиру номера артикулов.",
                        video: "#",
                        video_overlay: "/reviews/customer/video01.webp",
                    },
                    {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга Григорьевна",
                        category: "Ремонт квартиры",
                        review: "Все работы были выполнены в срок по договору, задержек не было. Самое главное, нас избавили от головной боли, связанной с выбором, расчетом, доставкой и подъемом на этаж материалов для ремонта. Все материалы покупали в данной организации. Все эти работы компания взяла на себя. Нам нужно только было выбрать ламинат, обои, плитку и сообщить бригадиру номера артикулов.",
                        video: "#",
                        video_overlay: "/reviews/customer/video01.webp",
                    },
                ]}
            />
            <IndependentReviews />
            <Partners />
            <BannerFeedback
                bg_url="/zamer.webp"
                title={usluga.banners[0].banner_title}
                description="Чтобы мы&nbsp;смогли максимально точно оценить стоимость ремонта и&nbsp;правильно составить смету"
                form_title={usluga.banners[0].form_title}
                form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда. Замер занимает не&nbsp;более 1&nbsp;часа."
                form_button="Оставить заявку"
            />
            <HowWeWork
                title={usluga.other_data.howwework}
                description="Наша команда специалистов с&nbsp;многолетним опытом и&nbsp;знанием тонкостей хорошего ремонта нацелена на&nbsp;создание уютного дома, который будет радовать вас долгие годы."
                slides={[
                    {
                        title: "Встречаемся лично",
                        subtitle:
                            "Договариваемся о встрече на объекте, чтобы наш специалист мог внимательно осмотреть и оценить предстоящие работы.",
                    },
                    {
                        title: "Делам расчеты",
                        subtitle:
                            "Рассчитываем стоимость работ, учитывая объем необходимых работ и материалов, а также предстоящие трудозатраты и любые дополнительные услуги.",
                    },
                    {
                        title: "Заключаем сделку",
                        subtitle:
                            "Обсуждаем и утверждаем все условия, стоимость работ и подписываем договор, в котором четко прописываем сроки выполнения.",
                    },
                    {
                        title: "Покупаем материалы",
                        subtitle:
                            "Мы берем на себя организацию закупки и доставки всех необходимых строительных и отделочных материалов прямо на место работ по оптовым ценам.",
                    },
                    {
                        title: "Работаем четко по графику",
                        subtitle:
                            "Приступаем к ремонту строго по утвержденному плану, обеспечивая постоянный контроль за качеством и соблюдением сроков на каждом этапе работ.",
                    },
                ]}
            />
            <FaqSection
                title={"Ответы на часто задаваемые вопросы"}
                faqs={usluga.faq}
            />
            <BannerFeedback
                bg_url="/form.webp"
                title={usluga.banners[1].banner_title}
                description="Мы&nbsp;всегда готовы ответить на&nbsp;любые возникшие вопросы"
                form_title={usluga.banners[1].form_title}
                form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда."
                form_button="Оставить заявку"
            />
        </main>
    );
}
