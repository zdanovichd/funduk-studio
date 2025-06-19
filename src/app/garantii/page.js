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
    title: 'Гарантии на ремонт от компании "Фундук" | Пятилетняя гарантия на качество',
    description:
        "Мы предоставляем официальные гарантии на все виды ремонтов: пятилетняя гарантия, договор с юр лицом, фиксация скрытых работ и соблюдение Закона о Тишине. Подробности на нашем сайте.",
};

export default function Page() {
    const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');
    return (
        <main>
            <Hero
                title="Гарантии на ремонт от студии «Фундук»"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "Гарантии" },
                ]}
            />

            <section className={styles.vacancy}>
                <div className={styles.vacancy__wrapper}>
                    <p className={styles.vacancy__subtitle}>Когда речь идёт о ремонте квартиры, особенно элитного уровня, важно быть уверенным не только в профессионализме мастеров, но и в том, что результат будет соответствовать ожиданиям не только сразу после сдачи объекта, но и спустя годы. Именно поэтому мы в студии «Фундук» предоставляем официальные гарантии на все выполненные работы сроком до 5 лет.</p>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Что входит в гарантию на ремонт?</h2>
                    <p className={styles.vacancy__subtitle}>Мы стремимся обеспечить вам максимальное спокойствие и юридическую защиту. Все условия нашей гарантии прописаны в официальном договоре с юридическим лицом, который действует на протяжении пяти лет с момента подписания акта приёма работ.</p>
                    <p className={styles.vacancy__subtitle}>Наши гарантии включают:</p>
                    <ul className={styles.vacancy__subtitle}>
                      <li>Гарантия на все виды ремонтных работ &mdash; 5 лет. Это касается как черновых, так и чистовых этапов. Мы уверены в качестве своей работы и берём на себя полную ответственность за результат.<br /><br /></li>
                      <li>Официальный договор в соответствии с гражданским законодательством РФ. Все обязательства, сроки, объёмы и гарантии прописываются в договоре, заключённом с юридическим лицом. Вы получаете прозрачность, юридическую защиту и право на обращение в случае возникновения спорных ситуаций.<br /><br /></li>
                      <li>Фиксация скрытых работ. Мы тщательно документируем все скрытые этапы ремонта (инженерные коммуникации, гидроизоляцию, стяжку пола и т.д.). Это фото- и видеофиксация, акты скрытых работ с подписями обеих сторон. Благодаря этому вы всегда сможете доказать качество и объём выполненного.<br /><br /></li>
                      <li>Соблюдение Закона о Тишине. Работы проводятся строго в установленные законом часы. Мы заранее информируем вас и соседей, чтобы избежать конфликтов и создать комфортные условия для всех жителей дома.</li>
                    </ul>
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
                    <h2 className={styles.vacancy__title}>Почему клиенты выбирают нас?</h2>
                    <ul className={styles.vacancy__subtitle}>
                      <li>Надёжность и законность. Мы работаем официально, предоставляем договор, все документы и отчётность. В случае гарантийного случая вы можете рассчитывать на быструю и честную реакцию с нашей стороны.</li>
                      <li>Профессиональный подход. Мы придерживаемся стандартов качества, работаем с проверенными поставщиками и материалами, и строго соблюдаем технологические требования на всех этапах.</li>
                      <li>Прозрачность. Все работы и этапы ремонта фиксируются в отчётах. Вы всегда знаете, что происходит на объекте, даже если находитесь в другом городе.</li>
                      <li>Гарантия на элитный ремонт. Мы уверены в каждом решении и закрепляем его договором. Именно это отличает нас от &laquo;частных бригад&raquo;, не готовых нести юридическую и финансовую ответственность за результат.</li>
                    </ul>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Как воспользоваться гарантией?</h2>
                    <p className={styles.vacancy__subtitle}>Если в течение 5 лет после завершения ремонта вы обнаружите дефекты или недоработки, просто обратитесь к нам. Мы оперативно проведём диагностику и устраним проблему за наш счёт &mdash; в рамках гарантии.</p>
                    <p className={styles.vacancy__subtitle}>Для обращения по гарантии вам понадобятся:</p>
                    <ul className={styles.vacancy__subtitle}>
                      <li>договор с нашей компанией;<br /><br /></li>
                      <li>акт приёма работ;<br /><br /></li>
                      <li>фото/видеофиксация дефекта (при наличии).<br /><br /></li>
                    </ul>
                    <p className={styles.vacancy__subtitle}>Обращения принимаются через форму на сайте, по телефону или электронной почте.</p>
                    <br/>
                    <br/>
                    <h2 className={styles.vacancy__title}>Уверенность в качестве &mdash; по договору</h2>
                    <p className={styles.vacancy__subtitle}>Компания &laquo;Фундук&raquo; &mdash; это не просто ремонт квартир, а комплексный подход с официальными гарантиями, соблюдением норм законодательства и высоким уровнем сервиса. Мы не оставляем клиентов после сдачи объекта и готовы отвечать за результат не только словами, но и юридически оформленными обязательствами.</p>
                    <p className={styles.vacancy__subtitle}>Свяжитесь с нами, чтобы обсудить проект и получить гарантированно качественный ремонт с официальной пятилетней гарантией.</p>
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
