import Image from "next/image";
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

export const metadata = {
    title: "Контакты студии элитного ремонта «Фундук»",
    description:
        "Адрес, телефон и email студии «Фундук» в Москве. Закажите элитный ремонт квартиры или проконсультируйтесь с дизайнером. Удобные способы связи.",
};

export default function Page() {
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
                </div>
            </section>

            <section className={styles.route}>
                <div className={styles.route__wrapper}>
                  <h2 className={styles.route__title}>
                    Как добраться
                  </h2>
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
