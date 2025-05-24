import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Hero from "./components/sections/Hero/Hero";
import ServicesSlider from "./components/sections/ServicesSlider/ServicesSlider";
import MultistepForm from "./components/sections/MultistepForm/MultistepForm";
import PortfolioSection from "./components/sections/PortfolioSection/PortfolioSection";
import TextWAccordion from "./components/sections/TextWAccordion/TextWAccordion";
import WhyUsSection from "./components/sections/WhyUsSection/WhyUsSection";
import PriceTableSection from "./components/sections/PriceTableSection/PriceTableSection";
import BannerFeedback from "./components/sections/BannerFeedback/BannerFeedback";
import HowWeWork from "./components/sections/HowWeWork/HowWeWork";
import CustomerReviews from "./components/sections/CustomerReviews/CustomerReviews";
import FaqSection from "./components/sections/FaqSection/FaqSection";
import PostsSection from "./components/sections/PostsSection/PostsSection";
import IndependentReviews from "./components/sections/IndependentReviews/IndependentReviews";
import Partners from "./components/sections/Partners/Partners";

export const metadata = {
  title: 'Ремонт квартир под ключ в СПБ  от Студии дизайна и ремонта  Фундук в Санкт-Петербурге',
  description: '⭐Качественный ремонт квартир под ключ с дизайном в Санкт-Петербурге! ⭐Получите профессиональное выполнение работ от Студия дизайна интерьеров и ремонта квартир Фундук!⭐ Закажите ремонт под ключ с полным спектром услуг без стресса уже сегодня!',
}

export default function Home() {

  return (
    <main>
      <Hero
        title="Ремонт квартир под ключ в Санкт-Петербурге"
        content={"<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"}
        formEnabled={true}
        // breadcrumbs={[
        //   { title: "Главная", path: "/" },
        //   { title: "Услуги", path: "/services" },
        //   { title: "Ремонт квартир" }
        // ]}
      />
      <ServicesSlider
        title={"Наши услуги"}
        description={"Мы реализуем работы по внутренней отделке любой сложности, предоставляя полный комплекс услуг от начала до конца. Мы также занимаемся созданием дизайн-проектов интерьеров, гарантируя высокое качество и эксклюзивность."}
        slides={[
          { title: "Евроремонт", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/evroremont" },
          { title: "Ремонт однокомнатной квартиры", subtitle: "от 3 500 р/м² за работу", image: "/SE02-1.webp", link: "/remont-kvartir/odnokomnatnaya" },
          { title: "Ремонт двухкомнатной квартиры", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/remont-kvartir/dvuhkomnatnaya" },
          { title: "Ремонт трехкомнатной квартиры", subtitle: "от 3 500 р/м² за работу", image: "/SE02-1.webp", link: "/remont-kvartir/trehkomnatnaya" },
          { title: "Дизайн квартир под ключ", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/dizajn-kvartir-pod-klyuch" },
          { title: "Дизайн-проект квартир", subtitle: "от 3 500 р/м² за работу", image: "/SE02-1.webp", link: "/dizayn-proekt-kvartir" },
          { title: "Ремонт домов и коттеджей", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/remont-domov-i-kottedzhey" },
          { title: "Ремонт офисов", subtitle: "от 3 500 р/м² за работу", image: "/SE02-1.webp", link: "/remont-ofisov" },
          { title: "Ремонт ресторанов", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/remont-restoranov" },
        ]}
      />
      <MultistepForm/>

      <PortfolioSection
        title={"Посмотрите наши последние работы"}
        slides={[
          { title: "Дизайн-проект квартиры 105,3 м²", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/evroremont" },
          { title: "Ремонт двухкомнатной квартиры Академгородок", subtitle: "от 3 500 р/м² за работу", image: "/SE02-1.webp", link: "/remont-kvartir/odnokomnatnaya" },
          { title: "Дизайн-проект трехкомнатной квартиры", subtitle: "от 3 500 р/м² за работу", image: "/SE01-1.webp", link: "/remont-kvartir/dvuhkomnatnaya" },
        ]}
      />
      <TextWAccordion/>
      <WhyUsSection/>

      <PriceTableSection
        title="Сроки выполнения работ"
        tableData={{
          "Черновой ремонт": {
            headers: ["Объект", "Площадь", "Цены на материалы", "Цены на работы", "Итого", "Сроки (дн.)"],
            rows: [
              ["Студия", "25-35 м²", "35 000 руб", "65 000 руб", "100 000 руб", "35-50 дней"],
              ["1-комнатные", "35-55 м²", "45 000 руб", "80 000 руб", "125 000 руб", "40-55 дней"],
              ["2-комнатные", "55-75 м²", "50 000 руб", "90 000 руб", "140 000 руб", "45-60 дней"]
            ]
          },
          "Косметический ремонт": {
            headers: ["Объект", "Площадь", "Цены на материалы", "Цены на работы", "Итого", "Сроки (дн.)"],
            rows: [
              ["Студия", "25-35 м²", "35 000 руб", "65 000 руб", "100 000 руб", "35-50 дней"],
              ["1-комнатные", "35-55 м²", "45 000 руб", "80 000 руб", "125 000 руб", "40-55 дней"],
              ["2-комнатные", "55-75 м²", "50 000 руб", "90 000 руб", "140 000 руб", "45-60 дней"]
            ]
          },
          "Капитальный ремонт": {
            headers: ["Объект", "Площадь", "Цены на материалы", "Цены на работы", "Итого", "Сроки (дн.)"],
            rows: [
              ["Студия", "25-35 м²", "35 000 руб", "65 000 руб", "100 000 руб", "35-50 дней"],
              ["1-комнатные", "35-55 м²", "45 000 руб", "80 000 руб", "125 000 руб", "40-55 дней"],
              ["2-комнатные", "55-75 м²", "50 000 руб", "90 000 руб", "140 000 руб", "45-60 дней"]
            ]
          }
        }}
      />

      <BannerFeedback
        bg_url="/zamer.webp"
        title="Первым делом необходимо выполнить замер квартиры"
        description="Чтобы мы&nbsp;смогли максимально точно оценить стоимость ремонта и&nbsp;правильно составить смету"
        form_title="Записаться на&nbsp;замер квартиры"
        form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда. Замер занимает не&nbsp;более 1&nbsp;часа."
        form_button="Оставить заявку"
      />

      <HowWeWork/>

      <PriceTableSection
        title="Цены на базовые работы"
        tableData={{
          "Черновая отделка стен": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["Демонтаж стен из ГКЛ, ГВЛ, ДСП и т.д", "от 750 руб", "м. кв."],
              ["Демонтаж бетонных перегородок", "от 750 руб", "м. кв."],
              ["Снятие штукатурки", "от 750 руб", "м. кв."]
            ]
          },
          "Чистовая отделка стен": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Потолок": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Натяжной потолок": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Электромонтажные работы": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Окна": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Двери": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Плиточные работы": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
          "Сантехника": {
            headers: ["Наименование", "Цена", "Ед. изм."],
            rows: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]
          },
        }}
      />

      <CustomerReviews/>
      <FaqSection/>
      <PostsSection/>

      <BannerFeedback
        bg_url="/form.webp"
        title="Индивидуальный подход к&nbsp;каждому проекту"
        description="Мы&nbsp;всегда готовы ответить на&nbsp;любые возникшие вопросы"
        form_title="Запишитесь на&nbsp;расчет стоимости ремонта вашей квартиры"
        form_subtitle="Специалист свяжется с&nbsp;Вами и&nbsp;подберет удобную дату и&nbsp;время для приезда."
        form_button="Оставить заявку"
      />

      <IndependentReviews/>

      <Partners/>
    </main>
  );
}
