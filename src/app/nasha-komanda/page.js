import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import Hero from "@/app/components/sections/Hero/Hero";
import ServicesSlider from "@/app/components/sections/ServicesSlider/ServicesSlider";
import MultistepForm from "@/app/components/sections/MultistepForm/MultistepForm";
import PortfolioSection from "@/app/components/sections/PortfolioSection/PortfolioSection";
import TextWAccordion from "@/app/components/sections/TextWAccordion/TextWAccordion";
import WhyUsSection from "@/app/components/sections/WhyUsSection/WhyUsSection";
import PriceTableSection from "@/app/components/sections/PriceTableSection/PriceTableSection";
import BannerFeedback from "@/app/components/sections/BannerFeedback/BannerFeedback";
import HowWeWork from "@/app/components/sections/HowWeWork/HowWeWork";
import CustomerReviews from "@/app/components/sections/CustomerReviews/CustomerReviews";
import FaqSection from "@/app/components/sections/FaqSection/FaqSection";
import PostsSection from "@/app/components/sections/PostsSection/PostsSection";
import IndependentReviews from "@/app/components/sections/IndependentReviews/IndependentReviews";
import Partners from "@/app/components/sections/Partners/Partners";
import PhoneForm from "../components/ui/PhoneForm/PhoneForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faClock, faPhone, faEnvelope, faFile, faGlobe } from "@fortawesome/free-solid-svg-icons"
import {
  faTelegram,
  faWhatsapp,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import Komanda from "../components/sections/Komanda/Komanda";

export const metadata = {
    title: "Команда студии “Фундук” — архитекторы и дизайнеры интерьера в Москве",
    description:
        "Познакомьтесь с командой архитекторов, дизайнеров и мастеров студии “Фундук”, создающих элитные интерьеры и ремонт под ключ в Москве.",
};

export default function Page() {
    const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');
    return (
        <main>
            <Hero
                title="Наша команда — архитекторы, дизайнеры и мастера студии “Фундук”"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "Наша команда" },
                ]}
            />

            <section className={styles.komanda}>
                <div className={styles.komanda__wrapper}>
                    <div className={styles.komanda__column}>
                        <Image
                            src='/komanda/obshhaya.webp'
                            fill
                            alt=""
                            className={styles.komanda__image}
                        />
                    </div>
                    <div className={styles.komanda__column}>
                        <div className={styles.komanda__column_top}>
                            <p>Команда студии “Фундук” — это сплочённый коллектив архитекторов, дизайнеров интерьера и мастеров, работающих в Москве и Московской области. Мы создаём авторские пространства с нуля: от концепции до реализации элитного ремонта под ключ. Каждый специалист в нашей команде — это профессионал с многолетним опытом, глубокими знаниями и вниманием к деталям. Мы уверены: качественный дизайн невозможен без сильной команды. Познакомьтесь с людьми, которые превращают идеи в реальные интерьеры.</p>
                        </div>
                        <div className={styles.komanda__column_bottom}>
                            <div className={styles.komanda__column_item}>
                                <div className={styles.komanda__column_icon}>
                                    <Image
                                        src='/komanda/spec.svg'
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.komanda__column_descr}>
                                    <p>Опытных, квалифицированных специалистов</p>
                                </div>
                            </div>
                            <div className={styles.komanda__column_item}>
                                <div className={styles.komanda__column_icon}>
                                    <Image
                                        src='/komanda/garranty.svg'
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.komanda__column_descr}>
                                    <p>Гарантию на все виды работ 3 года</p>
                                </div>
                            </div>
                            <div className={styles.komanda__column_item}>
                                <div className={styles.komanda__column_icon}>
                                    <Image
                                        src='/komanda/kachestvo.svg'
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.komanda__column_descr}>
                                    <p>Качество выполненных работ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Komanda
                title="Архитекторы и дизайнеры интерьера"
                workers={[
                    {
                        name: "Наталия",
                        post: "Дизайнер",
                        photo: "/komanda/natasha.webp",
                        alt: "Портрет дизайнера студии “Фундук” — Наталия",
                        experience: "",
                        strengths: "",
                        quote: ""
                    },
                    {
                        name: "Екатерина",
                        post: "Дизайнер",
                        photo: "/komanda/ekaterina.webp",
                        alt: "Портрет дизайнера студии “Фундук” — Екатерина",
                        experience: "",
                        strengths: "",
                        quote: ""
                    }
                ]}
                description="<p>Наши архитекторы и дизайнеры — это специалисты с художественным вкусом, технической точностью и пониманием потребностей клиента. Каждый из них обладает опытом реализации элитных проектов и владеет широким спектром стилей — от современной классики до минимализма и японского дзена.</p><p>Мы не просто разрабатываем визуально красивые пространства — мы проектируем функциональные, эргономичные и долговечные решения. В команде “Фундук” работают дизайнеры с опытом от 5 до 15 лет, прошедшие профессиональную переподготовку и обладающие портфолио реализованных объектов.</p><p>В основе нашей работы — глубокое погружение в потребности клиента и стремление создавать гармоничные интерьеры, в которых хочется жить.</p>"
            />
            <Komanda
                title="Профессиональные мастера и инженеры нашей студии"
                workers={[
                    {
                        name: "Сергей",
                        post: "Прораб",
                        photo: "/komanda/sergej.webp",
                        alt: "Портрет прораба студии “Фундук” — Сергей",
                        experience: "",
                        strengths: "",
                        quote: ""
                    },
                    {
                        name: "Вячеслав",
                        post: "Прораб",
                        photo: "/komanda/vyacheslav.webp",
                        alt: "Портрет прораба студии “Фундук” — Вячеслав",
                        experience: "",
                        strengths: "",
                        quote: ""
                    }
                ]}
                description="<p>За каждым дизайнерским проектом стоит команда инженеров, прорабов и мастеров, которые точно и аккуратно воплощают идеи в реальность. Мы гордимся тем, что сотрудничаем с опытными специалистами в области сантехнических работ, электрики, отделки и монтажа, работающими по европейским стандартам качества.</p><p>Все наши мастера прошли строгий отбор и работают в штате, а не &ldquo;по вызову&rdquo;. Мы тщательно выстраиваем все строительные процессы: соблюдение сроков, чистота, технический контроль, фотофиксация этапов.</p><p>Благодаря слаженной работе архитекторов и инженеров, каждый проект реализуется без срывов и переработок, точно по смете.</p>"
            />
            <Komanda
                title="Руководство студии “Фундук”"
                workers={[
                    // {
                    //     name: "Игорь",
                    //     post: "Основатель",
                    //     photo: "/komanda/igor.webp",
                    //     alt: "Портрет основателя студии “Фундук” — Игорь",
                    //     experience: "",
                    //     strengths: "",
                    //     quote: ""
                    // },
                    {
                        name: "Максим",
                        post: "Исполнительный директор",
                        photo: "/komanda/maksim.webp",
                        alt: "Портрет исполнительного директора студии “Фундук” — Максим",
                        experience: "",
                        strengths: "",
                        quote: ""
                    },
                    {
                        name: "Анастасия",
                        post: "Менеджер",
                        photo: "/komanda/nastya.webp",
                        alt: "Портрет менеджера студии “Фундук” — Анастасия",
                        experience: "",
                        strengths: "",
                        quote: ""
                    },
                    {
                        name: "Элина",
                        post: "Менеджер",
                        photo: "/komanda/elina.webp",
                        alt: "Портрет менеджера студии “Фундук” — Элина",
                        experience: "",
                        strengths: "",
                        quote: ""
                    }
                ]}
                description="<p>Студия &ldquo;Фундук&rdquo; основана людьми, для которых создание интерьеров &mdash; это не просто работа, а личная философия. Мы уверены, что качественный результат невозможен без авторского контроля и стратегического взгляда на весь процесс.</p><p>Основатели студии лично участвуют в отборе специалистов, утверждении ключевых решений и финальной приемке проектов.</p><p>Мы не делегируем ответственность &mdash; мы ведём клиента от первой встречи до передачи ключей и контролируем каждый этап работ. Наша цель &mdash; не просто реализовать проект, а превзойти ожидания клиента.</p>"
            />

            <section className={styles.text}>
                <div className={styles.text__wrapper}>
                    <h2 className={styles.text__title}>Как мы работаем как команда</h2>
                    <p className={styles.text__description}>Основной принцип нашей работы &mdash; слаженность. В команде &ldquo;Фундук&rdquo; каждый знает свою зону ответственности, и при этом мы постоянно взаимодействуем между отделами: дизайнеры советуются с инженерами, мастера уточняют детали у архитекторов, менеджеры контролируют коммуникацию с клиентом.</p>
                    <p className={styles.text__description}>Такой командный подход к ремонту квартир позволяет нам достигать главного &mdash; минимизировать ошибки, избегать конфликтов на стройке и обеспечивать полный контроль качества.</p>
                    <p className={styles.text__description}>Мы верим в силу горизонтальных связей, живого диалога и уважения к каждому этапу процесса. Именно это делает наши проекты цельными, продуманными и долговечными.</p>
                </div>
            </section>

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
                        link: "#"
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
