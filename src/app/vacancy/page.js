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
import Accordion from "../components/ui/Accordion/Accordion";

export const metadata = {
    title: "Работа в студии ремонта и дизайна «Фундук» — Вакансии в Москве | Элитный ремонт",
    description:
        "Актуальные вакансии в студии «Фундук»: элитный ремонт и дизайн интерьеров в Москве. Присоединяйтесь к команде профессионалов. Работа с премиум-клиентами, интересные проекты.",
};

export default function Page() {
    const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');
    return (
        <main>
            <Hero
                title="Вакансии в студии «Фундук» — Работа в ремонте и дизайне интерьеров"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "Вакансии" },
                ]}
            />

            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <p className={styles.vacancy__subtitle}>Студия «Фундук» — это команда, которая создаёт не просто интерьеры, а атмосферу, отражающую стиль жизни клиентов. Мы специализируемся на элитном ремонте квартир и частных домов в Москве, работаем в премиум-сегменте и тщательно подходим к каждому проекту. Если вы профессионал, цените качество, детали и мечтаете работать в среде, где уважают талант и стремление к совершенству — добро пожаловать.</p>
                    <p className={styles.vacancy__subtitle}>Мы постоянно растём, и сейчас открыты новые вакансии в студии дизайна интерьеров. Ниже — актуальные предложения для тех, кто хочет работать в лучшей команде города.</p>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Актуальные вакансии</h2>
                    <Accordion
                        data={
                            {
                                question: "Прораб (Москва)",
                                answer: "<span style='color: black'><p><b>Что предстоит делать:</b></p><ul><li>Контроль всех этапов ремонта на объекте</li><li>Координация подрядчиков и поставщиков</li><li>Соблюдение сроков и стандартов качества</li></ul><p><b>Наши ожидания:</b></p><ul><li>Опыт в сфере ремонта от 3 лет</li><li>Знание технологий отделки премиум-класса</li><li>Ответственность, аккуратность, лидерские качества</li></ul><p><b>Мы предлагаем:</b></p><ul><li>Работа на уникальных объектах в Москве</li><li>Высокая оплата труда</li><li>Поддержка проектной команды</li></ul></span>",
                                button: false,
                            }
                        }
                    />
                    <Accordion
                        data={
                            {
                                question: "Дизайнер интерьеров",
                                answer: "<span style='color: black'><p><b>Что входит в обязанности:</b></p><ul><li>Разработка дизайн-концепций</li><li>Подбор материалов, мебели, света</li><li>Подготовка чертежей и визуализаций</li></ul><p><b>Требования:</b></p><ul><li>Портфолио реализованных проектов</li><li>Владение AutoCAD, SketchUp, 3ds Max, Photoshop</li><li>Чувство стиля, внимание к деталям</li></ul><p><b>Условия:</b></p><ul><li>Участие в проектах с премиальными клиентами</li><li>Творческая свобода в рамках ТЗ</li><li>Гибкий график и комфортный офис</li></ul></span>",
                                button: false,
                            }
                        }
                    />
                    <Accordion
                        data={
                            {
                                question: "Стажёр / Джуниор-дизайнер",
                                answer: "<span style='color: black'><p><b>Подходит, если вы:</b></p><ul><li>Только окончили профильный ВУЗ или учитесь на последнем курсе</li><li>Готовы учиться у опытных дизайнеров и участвовать в реальных проектах</li><li>Умеете работать в ArchiCAD, Revit или аналогах</li></ul><p><b>Мы даём:</b></p><ul><li>Наставничество</li><li>Участие в премиальных объектах с первых недель</li><li>Шанс получить оффер на полную ставку</li></ul></span>",
                                button: false,
                            }
                        }
                    />
                    <Accordion
                        data={
                            {
                                question: "Визуализатор интерьеров (удалённо/гибрид)",
                                answer: "<span style='color: black'><p><b>Обязанности:</b></p><ul><li>Фотореалистичная 3D-визуализация проектов</li><li>Подбор правильного освещения и ракурсов</li></ul><p><b>Требования:</b></p><ul><li>Знание 3ds Max + Corona Render / V-Ray</li><li>Опыт визуализации интерьеров от 2 лет</li></ul><p><b>Условия:</b></p><ul><li>Оплата сдельная, поэтапная</li><li>Возможность постоянного сотрудничества</li></ul></span>",
                                button: false,
                            }
                        }
                    />
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Почему стоит работать с нами</h2>
                    <ul className={styles.vacancy__subtitle}>
                        <li><b>Премиум-проекты:</b> вы не просто &laquo;закрываете&raquo; объекты, а реализуете полноценные дизайнерские решения, создающие вау-эффект.</li>
                        <br/>
                        <li><b>Уважение к сотрудникам:</b> у нас нет текучки &mdash; команда стабильна, а руководство слышит каждого.</li>
                        <br/>
                        <li><b>Возможность роста:</b> внутренние повышения, участие в конкурсах и выставках, профессиональное развитие.</li>
                        <br/>
                        <li><b>Честные условия:</b> прозрачные бюджеты, соблюдение сроков выплат, понятные зоны ответственности.</li>
                        <br/>
                        <li><b>Комфортная атмосфера:</b> стильный офис в Москве, вкусный кофе и атмосфера творчества без бюрократии.</li>
                    </ul>
                </div>
            </section>

            <CustomerReviews
                    title="Отзывы нашей команды"
                    slides={[
                      {
                        image: "/komanda/ekaterina.webp",
                        name: "Екатерина",
                        category: "Ведущий дизайнер",
                        review: "«Работа здесь перевернула моё представление о дизайн-студиях: после нескольких лет в других компаниях я наконец почувствовала, что мои идеи не просто одобряют, а действительно ценят. Каждый проект — это вызов, но с командой, которая поддерживает и вдохновляет, даже сложные задачи решаются с огоньком. Здесь сочетают профессиональный рост с человеческим отношением, и после каждого успеха понимаешь — это именно то место, где хочется творить.»",
                        video: "#",
                        video_overlay: "",
                      },
                      {
                        image: "/komanda/sergej.webp",
                        name: "Сергей",
                        category: "Прораб",
                        review: "«Работать с «Фундуком» — это как строить не просто здания, а эталоны. Здесь ценят не только результат, но и процесс: никакой халтуры, только продуманные решения и безупречное качество. Каждый объект — гордость, потому что делается с душой и с умом. В такой команде и сам растешь как профессионал.»",
                        video: "#",
                        video_overlay: "",
                      }
                    ]}
                  />

            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <h2 className={styles.vacancy__title}>Как откликнуться</h2>
                    <p className={styles.vacancy__subtitle}>Откликнуться можно:</p>
                    <ul className={styles.vacancy__subtitle}>
                    <li>через форму ниже<br /><br /></li>
                    <li>на почту: <Link style={{'color': 'black'}} href='mailto:hr@funduk-studio.ru'>hr@funduk-studio.ru</Link><br /><br /></li>
                    <li>или написать нам в Telegram/WhatsApp<br /><br /></li>
                    </ul>
                    <p className={styles.vacancy__subtitle}><b>Присоединяйтесь к студии &laquo;Фундук&raquo; &mdash; создавайте стильные пространства, которыми можно гордиться.</b></p>
                </div>
            </section>
            <BannerFeedback
                bg_url="/form.webp"
                title="Станьте частью нашей команды"
                description="Здесь работают живые люди — без офисной показухи, зато с реальной поддержкой и интересными задачами."
                form_title="Хотите создавать элитные интерьеры?<br>Напишите нам"
                form_subtitle="Наш HR свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для собеседования."
                form_button="Присоединяйтесь к нам"
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
