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

export const metadata = {
    title: "Контакты студии элитного ремонта «Фундук»",
    description:
        "Адрес, телефон и email студии «Фундук» в Москве. Закажите элитный ремонт квартиры или проконсультируйтесь с дизайнером. Удобные способы связи.",
};

export default function Page() {
    const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '').replace(/^(\+?7|8)/, '+7');
    return (
        <main>
            <Hero
                title="Контакты студии элитного ремонта «Фундук» в Москве"
                // content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
                formEnabled={false}
                breadcrumbs={[
                    { title: "Главная", path: "/" },
                    { title: "Контакты" },
                ]}
            />

            <section className={styles.contacts}>
                <div className={styles.contacts__wrapper}>
                    <h2 className={styles.contacts__title}>
                        Как связаться
                    </h2>
                    <div className={styles.contacts__inner}>
                        <div className={styles.contacts__block}>
                            <div className={styles.contacts__item}>
                                <div className={styles.contacts__item_icon}>
                                    <FontAwesomeIcon icon={faLocationDot} size="xl" style={{color: "#579E6E",}} />
                                </div>
                                <div className={styles.contacts__item_text}>
                                    <p>Наш адрес:</p>
                                    <Link href="https://yandex.ru/maps/-/CHC7aCMI" className={styles.contactText}>
                                        г. Санкт-Петербург, наб. реки Фонтанки, 129
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.contacts__item}>
                                <div className={styles.contacts__item_icon}>
                                    <FontAwesomeIcon icon={faClock} size="xl" style={{color: "#579E6E",}} />
                                </div>
                                <div className={styles.contacts__item_text}>
                                    <p>Время работы замерщиков: с 9.00 до 20.00</p>
                                    <p>Время работы офиса: с 9.00 до 18.00</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.contacts__block}>
                            <div className={styles.contacts__item}>
                                <div className={styles.contacts__item_icon}>
                                    <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#579E6E",}} />
                                </div>
                                <div className={styles.contacts__item_text}>
                                    <p>Наш телефон:</p>
                                    <Link href={`tel:${cleanPhone(process.env.NEXT_PUBLIC_PHONE_NUMBER)}`} className={styles.phone}>
                                        {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.contacts__item}>
                                <div className={styles.contacts__item_icon}>
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#579E6E",}} />
                                </div>
                                <div className={styles.contacts__item_text}>
                                    <p>Наш электронный адрес:</p>
                                    <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className={styles.contactText}>
                                        {process.env.NEXT_PUBLIC_EMAIL}
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.contacts__item}>
                                <div className={styles.contacts__item_icon}>
                                    <FontAwesomeIcon icon={faGlobe} size="xl" style={{color: "#579E6E",}} />
                                </div>
                                <div className={styles.contacts__item_text}>
                                    <p>Наши соцсети:</p>
                                    <ul className={styles.socials}>
                  <li className={styles.socials__item}>
                    <Link
                      href="https://t.me/fundukstudiospb"
                      target="_blank"
                      className={styles.socials__link}
                      aria-label="Telegram"
                    >
                      <FontAwesomeIcon
                        icon={faTelegram}
                        size="lg"
                        className={styles.socials__icon}
                      />
                    </Link>
                  </li>
                  <li className={styles.socials__item}>
                    <Link
                      href="https://api.whatsapp.com/send?phone=79312236014"
                      target="_blank"
                      className={styles.socials__link}
                      aria-label="WhatsApp"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="lg"
                        className={styles.socials__icon}
                      />
                    </Link>
                  </li>
                  <li className={styles.socials__item}>
                    <Link
                      href="https://vk.com/brusnikaremontspb"
                      target="_blank"
                      className={styles.socials__link}
                      aria-label="ВКонтакте"
                    >
                      <FontAwesomeIcon
                        icon={faVk}
                        size="lg"
                        className={styles.socials__icon}
                      />
                    </Link>
                  </li>
                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.route}>
                <div className={styles.route__wrapper}>
                  <h2 className={styles.route__title}>
                    Как добраться
                  </h2>


                    <iframe className={styles.route__maps} src="https://yandex.ru/map-widget/v1/?z=17&ol=biz&oid=121145021604" width="auto" height="500" frameBorder="0"></iframe>
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
            <FaqSection
                title={"Часто задаваемые вопросы"}
                faqs={[
                    {
                        question: "Как записаться на консультацию?",
                        answer: "<p>Позвоните нам или заполните форму на сайте — мы предложим удобное время для встречи в офисе или онлайн.</p>",
                        button: false,
                    },
                    {
                        question: "Можно ли обсудить проект дистанционно?",
                        answer: "<p>Да, у нас доступна полноценная удалённая работа: видеосвязь, визуализации, сметы и согласования — всё онлайн.</p>",
                        button: false,
                    },
                    {
                        question: "Вы работаете только по Москве?",
                        answer: "<p>Основной регион — Санкт-Петербург , но в отдельных случаях мы берём проекты по другим городам. Свяжитесь с нами для обсуждения.</p>",
                        button: false,
                    },
                    {
                        question: "Вы принимаете клиентов в офисе?",
                        answer: "<p>Да, встречи в студии возможны по предварительной записи. Так мы гарантируем, что дизайнер будет готов именно к вашему проекту.</p>",
                        button: false,
                    },
                ]}
            />
            <TextWAccordion
                bannerData={{
                    title: "Почему выбирают «Фундук»",
                    image: "/seo.webp",
                    description:
                        "Наша цель - обеспечить максимальный комфорт и выгоду для каждого клиента. Мы предлагаем полноценное сопровождение проекта «под ключ», что подразумевает всестороннюю поддержку на каждом этапе.",
                    name: "Игорь Соболев",
                    position: "Основатель и директор компании Фундук",
                }}
                accordions={[
                    {
                        question: "Индивидуальный подход к каждому интерьеру",
                        answer: "<p>Мы дорожим вашим временем и стремимся избавить вас от лишних забот. Наша команда гарантирует, что все задачи будут выполнены, а ваше участие сведено к минимуму. Мы берем на себя управление проектом, начиная с разработки концепции и заканчивая финальными штрихами, чтобы вы могли сосредоточиться на самом важном.</p>",
                        button: true,
                    },
                    {
                        question:
                            "Работаем в сегменте элитного ремонта более 10 лет",
                        answer: "<p>Мы понимаем, что дом — это ваша зона комфорта, и наша цель — сделать его максимально приятным для вас. Мы берем на себя все этапы реновации, от планирования до окончательной отделки. Наша команда превратит ваше пространство в оазис уюта и стиля.</p>",
                        button: false,
                    },
                    {
                        question:
                            "Профессиональная команда дизайнеров и проектировщиков",
                        answer: "<p>Мы гордимся нашим опытом и знанием последних модных течений в дизайне и архитектуре и стремимся внести их в ваше пространство. Наши эксперты непрерывно отслеживают современные стилистические направления, чтобы предложить вам решения, соответствующие последним веяниям моды. Мы владеем информацией о новшествах и готовы реализовать их в вашем интерьере, делая его на шаг опережающим время.</p>",
                        button: false,
                    },
                    {
                        question: "Прозрачные сметы и соблюдение сроков",
                        answer: "<p>Мы ценим ваше доверие и гарантируем полную прозрачность на всех этапах сотрудничества. Каждая смета составляется детально и обоснованно — без скрытых платежей и неожиданных расходов. Вы всегда будете в курсе, на что идут средства, а наши финансовые отчёты помогут вам сохранять контроль над бюджетом.</p>",
                        button: false,
                    },
                ]}
            />
            <Partners />
        </main>
    );
}
