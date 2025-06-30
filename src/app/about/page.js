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
    title: "О студии «Фундук» — элитный ремонт квартир в Москве под ключ",
    description:
        "Узнайте больше о студии «Фундук». Наша команда профессионалов более X лет создает премиальные интерьеры с гарантией качества.",
};

export default function Page() {
    const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');
    return (
        <main>
            <Hero
                title="О студии «Фундук» — элитный ремонт квартир в Санкт-Петербурге под ключ"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "О компании" },
                ]}
            />

            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <p className={styles.vacancy__subtitle}>Студия «Фундук» — команда профессионалов, специализирующаяся на элитном ремонте квартир в Москве и области. Мы создаём уникальные интерьеры под ключ, обеспечивая высочайший уровень сервиса, прозрачность процессов и безупречный результат. Работаем с премиальным сегментом, где особенно важно внимание к деталям, эстетике и срокам.</p>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>История компании</h2>
                    <p className={styles.vacancy__subtitle}>Студия «Фундук» была основана с одной простой целью — изменить представление о ремонте в премиум-сегменте. С самого начала мы стремились объединить архитектуру, дизайн и точное исполнение в единый, отлаженный процесс.</p>
                    <p className={styles.vacancy__subtitle}>Благодаря собственному дизайнерскому отделу, высококвалифицированным инженерам и слаженной команде мастеров мы реализуем самые амбициозные проекты. За годы работы мы накопили богатое портфолио объектов — от стильных апартаментов в новостройках до реновации квартир в сталинках с сохранением исторических элементов.</p>
                    <p className={styles.vacancy__subtitle}>Сегодня студия «Фундук» — это синоним дизайнерского ремонта квартир премиум-класса, где каждый этап работы продуман до мелочей.</p>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Миссия и ценности</h2>
                    <p className={styles.vacancy__subtitle}>Мы верим, что дом должен вдохновлять. Поэтому наша миссия — создавать функциональные, эстетичные и по-настоящему комфортные пространства, в которых хочется жить.</p>
                    <p className={styles.vacancy__subtitle}>Наши ценности:</p>
                    <ul className={styles.vacancy__subtitle}>
                        <li><b>Индивидуальный подход</b> &mdash; каждое решение адаптируется под клиента, а не наоборот.</li>
                        <li><b>Прозрачность</b> &mdash; фиксированные сметы, понятные условия, никаких скрытых расходов.</li>
                        <li><b>Ответственность</b> &mdash; мы отвечаем за каждый этап: от проекта до уборки перед сдачей.</li>
                        <li><b>Качество</b> &mdash; используем только премиальные материалы и проверенные технологии.</li>
                        <li><b>Контроль</b> &mdash; ведём фото- и видеоотчёты, предоставляем доступ к каждому этапу.</li>
                    </ul>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Почему выбирают студию «Фундук»</h2>
                    <p className={styles.vacancy__subtitle}>Наши ценности:</p>
                    <p className={styles.vacancy__subtitle}><b>Опыт более 7 лет</b> в ремонте квартир и домов премиум-класса</p>
                    <p className={styles.vacancy__subtitle}><b>Ограниченное количество проектов</b> &mdash; максимум внимания каждому клиенту</p>
                    <p className={styles.vacancy__subtitle}><b>Собственный отдел дизайна</b> &mdash; проектируем и реализуем интерьеры без посредников</p>
                    <p className={styles.vacancy__subtitle}><b>Полный контроль процесса</b> &mdash; от выезда на объект до финальной приёмки</p>
                    <p className={styles.vacancy__subtitle}><b>Фиксированная стоимость</b> &mdash; никаких доплат по ходу работ</p>
                    <p className={styles.vacancy__subtitle}><b>Гарантия до 5 лет</b> на все виды работ</p>
                    <p className={styles.vacancy__subtitle}><b>Работаем строго по договору</b> и соблюдаем сроки</p>
                    <p className={styles.vacancy__subtitle}><b>Персональный менеджер проекта</b> &mdash; всегда на связи</p>
                </div>
            </section>
                <BannerFeedback
                        bg_url="/zamer.webp"
                        title="Первым делом необходимо выполнить замер квартиры"
                        description="Чтобы мы&nbsp;смогли максимально точно оценить стоимость ремонта и&nbsp;правильно составить смету"
                        form_title="Записаться на&nbsp;замер квартиры"
                        form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда. Замер занимает не&nbsp;более 1&nbsp;часа."
                        form_button="Оставить заявку"
                      />
                <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <h2 className={styles.vacancy__title}>Как мы работаем</h2>
                    <p className={styles.vacancy__subtitle}>Наша схема работы позволяет клиенту максимально комфортно пройти все этапы ремонта:</p>
                    <ol className={styles.vacancy__subtitle}>
                        <li>Первичная консультация &mdash; обсуждаем задачи, бюджет и пожелания.<br /><br /></li>
                        <li>Выезд на объект &mdash; делаем замеры, оцениваем техническое состояние.<br /><br /></li>
                        <li>Разработка дизайн-проекта &mdash; от планировочных решений до визуализаций.<br /><br /></li>
                        <li>Составление сметы и заключение договора &mdash; фиксируем сроки и стоимость.<br /><br /></li>
                        <li>Реализация проекта &mdash; все работы выполняются нашими специалистами.<br /><br /></li>
                        <li>Контроль качества &mdash; ведём фотоотчёты, согласуем промежуточные этапы.<br /><br /></li>
                        <li>Сдача объекта и гарантия &mdash; финальная приёмка и поддержка после завершения работ.<br /><br /></li>
                    </ol>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Что мы делаем</h2>
                    <p className={styles.vacancy__subtitle}>Мы специализируемся на ремонте квартир премиум-класса под ключ. Среди наших услуг:</p>
                    <ul className={styles.vacancy__subtitle}>
                        <li>Дизайн интерьера и архитектурное проектирование<br /><br /></li>
                        <li>Черновой и чистовой ремонт<br /><br /></li>
                        <li>Авторский и технический надзор<br /><br /></li>
                        <li>Подбор мебели, освещения и декора<br /><br /></li>
                        <li>Инженерные и электромонтажные работы<br /><br /></li>
                        <li>Установка систем &laquo;умный дом&raquo; и климат-контроля<br /><br /></li>
                    </ul>
                    <p className={styles.vacancy__subtitle}>Работаем с квартирами в новостройках, апартаментами, пентхаусами и частными домами. Знаем особенности элитных жилых комплексов Москвы и соблюдаем все технические регламенты.</p>
                </div>
            </section>

            <CustomerReviews
                    title="Отзывы клиентов"
                    slides={[
                      {
                        image: "/reviews/customer/image.webp",
                        name: "Ольга",
                        category: "ЖК “Дом на Смоленской”, 124 м²",
                        review: "«Спасибо студии “Фундук” за нашу идеальную квартиру! Всё на высшем уровне: дизайн, реализация, отношение. Особая благодарность за то, что уложились точно в сроки!»",
                        video: "#",
                        video_overlay: "",
                      },
                      {
                        image: "/reviews/customer/image.webp",
                        name: "Антон и Ирина",
                        category: "Садовые кварталы",
                        review: "«Прошли путь от голых стен до полной меблировки. Не пришлось ни о чём волноваться — всё взяли на себя. Очень довольны результатом!»",
                        video: "#",
                        video_overlay: "",
                      }
                    ]}
                  />

            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <h2 className={styles.vacancy__title}>Мы создаём интерьеры, в которых хочется жить</h2>
                    <p className={styles.vacancy__subtitle}>Работа с нами — это не просто ремонт, это инвестиция в качество жизни. Мы не гонимся за объёмами — для нас важен результат, которым гордимся.</p>
                    <p className={styles.vacancy__subtitle}>Откройте для себя студию «Фундук» — загляните в портфолио или оставьте заявку, и мы обсудим ваш проект лично.</p>
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
            {/* <BannerFeedback
                bg_url="/form.webp"
                title="Станьте частью нашей команды"
                description="Здесь работают живые люди — без офисной показухи, зато с реальной поддержкой и интересными задачами."
                form_title="Хотите создавать элитные интерьеры?<br>Напишите нам"
                form_subtitle="Наш HR свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для собеседования."
                form_button="Присоединяйтесь к нам"
            /> */}
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


        </main>
    );
}
