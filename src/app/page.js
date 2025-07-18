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
  title: 'Ремонт квартир под ключ в СПБ  от Студии дизайна и ремонта Фундук в Санкт-Петербурге',
  description: '⭐Качественный ремонт квартир под ключ с дизайном в Санкт-Петербурге! ⭐Получите профессиональное выполнение работ от Студия дизайна интерьеров и ремонта квартир Фундук!⭐ Закажите ремонт под ключ с полным спектром услуг без стресса уже сегодня!',
}

export default function Home() {

  return (
    <main>
      <Hero
        title="Ремонт квартир под ключ в Санкт-Петербурге"
        content="<p>Компания «Фундук» предоставляет полный спектр услуг по дизайн и ремонту квартир «под ключ» в Санкт-Петербурге. Бесплатный расчет стоимости в день обращения. Гарантия безупречного выполнения работ.</p>"
        formEnabled={true}
        // breadcrumbs={[
        //   { title: "Главная", path: "/" },
        //   { title: "Услуги", path: "/services/" },
        //   { title: "Ремонт квартир" }
        // ]}
      />
      <ServicesSlider
        title={"Наши услуги"}
        description={"Мы реализуем работы по внутренней отделке любой сложности, предоставляя полный комплекс услуг от начала до конца. Мы также занимаемся созданием дизайн-проектов интерьеров, гарантируя высокое качество и эксклюзивность."}
      />
      <ServicesSlider
        title={"Ремонт"}
        slides={[
          { title: "Элитный", subtitle: "от 2 500 р/м² за работу", image: "/services/4c9fb96d65b3a6ee3c7a13c56498276d583a78cd.png", link: "/uslugi/elitnyj-remont-kvartir" },
          { title: "Евроремонт", subtitle: "", image: "/services/fa8e70d1069555a6323027f35612dfb922240acc.jpg", link: "/uslugi/evroremont" },
          { title: "Студии", subtitle: "", image: "/services/c0c7932ab2e4ca2a3c71ed9165eb27e4e94cd6f4.jpg", link: "/uslugi/studiya" },
          { title: "Однокомнатной квартиры", subtitle: "", image: "/services/92f44461ff4af78c4aa3b2ac82ccc862ef59ed6a.jpg", link: "/uslugi/odnokomnatnaya" },
          { title: "Двухкомнатной квартиры", subtitle: "", image: "/services/e933733f6786d7401cbfddedfeaf498912b9618c.jpg", link: "/uslugi/dvuhkomnatnaya" },
          { title: "Трехкомнатной квартиры", subtitle: "", image: "/services/4c9fb96d65b3a6ee3c7a13c56498276d583a78cd.png", link: "/uslugi/trehkomnatnaya" },
          { title: "Четырехкомнатной квартиры", subtitle: "", image: "/services/08054085d93244f62534400bb0b233bebf37f7be.jpg", link: "/uslugi/chetyrehkomnatnaya" },
          { title: "Дизайнерский", subtitle: "", image: "/services/e933733f6786d7401cbfddedfeaf498912b9618c.jpg", link: "/uslugi/dizaynerskiy" },
          { title: "Офисов", subtitle: "", image: "/services/d85454678405301c29a60a69ffc2643a713f23fb.jpg", link: "/uslugi/remont-ofisov" },
          { title: "Кафе и ресторанов", subtitle: "", image: "/services/2ea10b082945aa36a3691c41804571b95cc5b504.jpg", link: "/uslugi/remont-restoranov" },
          { title: "Гостиниц, отелей, хостелов", subtitle: "", image: "/services/ca6169f03474bdb203cf4d48bf13558f05352d14.jpg", link: "/uslugi/remont-gostinits" },
          { title: "Фитнес-клубов", subtitle: "", image: "/services/90ab8251b4f4871a7a9430ca5b9f8ff50f67c86c.jpg", link: "/uslugi/remont-fitnes-klubov" },
          { title: "Магазинов", subtitle: "", image: "/services/ce809c059f814d799a86f71852ad81994c77ab0e.jpg", link: "/uslugi/remont-magazina" },
          { title: "Салонов красоты", subtitle: "", image: "/services/e08eb3e8300fd67035e64ec9e7620405e0cdd98d.jpg", link: "/uslugi/remont-v-salone-krasoty" },
          { title: "Стоматологий", subtitle: "", image: "/services/ed3ae17eb135364bdb84985173acdf26df36df5b.jpg", link: "/uslugi/remont-stomatologii" },
          { title: "Новостроек", subtitle: "", image: "/services/60267619eb2653254490a387e6b34e1fcf16aca3.jpg", link: "/uslugi/remont-kvartir-v-novostrojke" },
          { title: "Вторичного жилья", subtitle: "", image: "/services/719c6d6bba68f304dec073a96911acfabd24ae8f.jpg", link: "/uslugi/remont-kvartir-na-vtorichke" },
        ]}
      />
      <ServicesSlider
        title={"Дизайн"}
        slides={[
          { title: "Интерьера квартиры", subtitle: "от 2 500 р/м² за работу", image: "/services/9cfa8a961ab093f618d2ffd74bccbb47de6c5969.jpg", link: "/uslugi/dizajn-pod-klyuch" },
          { title: "Студии", subtitle: "", image: "/services/ce809c059f814d799a86f71852ad81994c77ab0e.jpg", link: "/uslugi/dizajnj-kvartiry-studii" },
          { title: "Однокомнатной квартиры", subtitle: "", image: "/services/0ec4e546d3719e968a5ed3aca15f4f45c6fa5e4a.jpg", link: "/uslugi/dizayn-odnokomnatnoi-kvartiri" },
          { title: "Двухкомнатной квартиры", subtitle: "", image: "/services/4bdf2159e20954efb29f9c66e38d27a28967ef91.jpg", link: "/uslugi/dizayn-dvuhkomnatnoi-kvartiri" },
          { title: "Трехкомнатной квартиры", subtitle: "", image: "/services/5515e5d2324f8f8a4c567e437e43c9855e01f3b6.jpg", link: "/uslugi/dizayn-trehkomnatnoii-kvartiri" },
          { title: "Четырехкомнатной квартиры", subtitle: "", image: "/services/c2f9ee61a2bef40ea4f8830b7b87ff1ab60fb83c.jpg", link: "/uslugi/dizayn-chetyrehkomnatnoj-kvartiri" },
          { title: "3D визуализация интерьера", subtitle: "", image: "/services/cbb9e3f9eaa16392fe2f429dfb5279edb0b68f80.jpg", link: "/uslugi/3d-vizualizacziya-interera" },
          { title: "Офиса", subtitle: "", image: "/services/c713e6c76e09e82ac54cb699fa64b3de79940ad1.jpg", link: "/uslugi/disayn-ofisa" },
          { title: "Технический дизайн проект", subtitle: "", image: "/services/58640f8be53145d976754ca9a348ef90b02931de.jpg", link: "/uslugi/tehnicheskiy-dizain-proekt" },
        ]}
      />
      <ServicesSlider
        title={"Дополнительные услуги"}
        slides={[
          { title: "Мебелировка", subtitle: "", image: "/services/1d6ca0e715f51d8cdcc015bce6844edb080db1e1.jpg", link: "" },
          { title: "Узаконивание", subtitle: "", image: "/services/8d680e651309936f50637e1dbd84383eaca5c524.png", link: "" },
          { title: "Приемка квартир", subtitle: "", image: "/services/c56358c8e952edb336fa0c77d0f9e103704f2184.jpg", link: "" },
          { title: "Перепланировка", subtitle: "", image: "/services/621f7d9a3803c47963854305fa42ed23986d69e2.jpg", link: "" },
          { title: "Поставка черновых материалов", subtitle: "", image: "/services/861a9c06c240a8b2aea72a5056b773f5d0b6b84b.jpg", link: "" },
          { title: "Покупка недвижимости", subtitle: "", image: "/services/141267b9e973226d17db841f33bb19874a29d5a0.png", link: "" },
          { title: "Шумоизоляция", subtitle: "", image: "/services/618bdbbfe3d94f714065ee996a585cd345ff61d9.jpg", link: "" },
        ]}
      />
      <MultistepForm/>
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

      <TextWAccordion
        bannerData={{
          title: "Почему выбирают нашу компанию?",
          image: "/seo.webp",
          description: "Наша цель - обеспечить максимальный комфорт и выгоду для каждого клиента. Мы предлагаем полноценное сопровождение проекта «под ключ», что подразумевает всестороннюю поддержку на каждом этапе.",
          name: "Игорь Соболев",
          position: "Основатель и директор компании Фундук",
        }}
        accordions={[
          {
            question: "Освобождаем Ваше время",
            answer: "<p>Мы дорожим вашим временем и стремимся избавить вас от лишних забот. Наша команда гарантирует, что все задачи будут выполнены, а ваше участие сведено к минимуму. Мы берем на себя управление проектом, начиная с разработки концепции и заканчивая финальными штрихами, чтобы вы могли сосредоточиться на самом важном.</p>",
            button: true,
          },
          {
            question: "Ремонт высочайшего качества",
            answer: "<p>Мы понимаем, что дом — это ваша зона комфорта, и наша цель — сделать его максимально приятным для вас. Мы берем на себя все этапы реновации, от планирования до окончательной отделки. Наша команда превратит ваше пространство в оазис уюта и стиля.</p>",
            button: false,
          },
          {
            question: "Следим за дизайнерскими тенденциями",
            answer: "<p>Мы гордимся нашим опытом и знанием последних модных течений в дизайне и архитектуре и стремимся внести их в ваше пространство. Наши эксперты непрерывно отслеживают современные стилистические направления, чтобы предложить вам решения, соответствующие последним веяниям моды. Мы владеем информацией о новшествах и готовы реализовать их в вашем интерьере, делая его на шаг опережающим время.</p>",
            button: false,
          },
        ]}
      />
      <WhyUsSection
        title = "Дизайн и&nbsp;ремонт квартир &quot;под ключ&quot; от&nbsp;компании &quot;Фундук&quot;"
        topData = "<p>Студия &laquo;Фундук&raquo; специализируется на дизайне и <b>отделке квартир</b> в Санкт-Петербурге, обеспечивая высокое качество работ за разумную цену. Наше предложение включает в себя все этапы работ: от разработки проекта до финишной отделки квартиры под ключ. Команда опытных профессионалов выполняет задачи оперативно, применяя материалы премиум-класса. Прозрачное формирование цен без дополнительных скрытых условий и платежей и персонализированный подход к каждому клиенту позволяют точно соответствовать финансовым ожиданиям заказчика.</p><p>В городе на Неве разнообразие жилых форматов велико: от современных высоток до уникальных сталинских домов и частных домовладений. Различные планы и состояние помещений зачастую требуют от владельцев внесения изменений, будь то легкий косметический ремонт или полноценное преображение интерьера.</p><p>Рассмотрим ключевые этапы ремонта квартир в СПб:</p><ul><li>Демонтажные работы. Подготовка поверхностей и структур к возможным изменениям планировки и замене устаревших элементов, особенно если речь идет о старых домах. Время на выполнение может занимать от пары дней до двух недель в зависимости от сложности.</li><li>Черновая отделка и монтаж инженерных сетей. На данном этапе производится выравнивание поверхностей, строительство перегородок, прокладка электрики и сантехнических коммуникаций, формирование дверных проемов. Также проводится облицовка стен штукатуркой или гипсокартоном и устройство стяжки пола. Эта фаза может занять до половины общего времени работ.</li><li>Промежуточная внутренняя отделка квартиры. На этом этапе начинается видимое обновление жилища: заливка полов, монтаж лаг, шпатлевка стен и потолков. В ванной комнате и санузле укладывается плитка. Этот процесс может занимать около 25% от общего времени проекта.</li><li>Чистовая отделка квартиры. Создание основы для комфортабельного проживания уже позади, остается лишь придать помещению завершенный вид. Установка дверей, сантехники, электрофурнитуры и светильников идут первыми. Некоторые работы могут выполняться одновременно, но, к примеру, укладка напольных покрытий рекомендуется после завершения всех малярных работ. В финале производится покраска стен или поклейка обоев и укладка пола.</li></ul><p>Мы уверены в своей работе и предоставляем гарантию. В каждый проект входит сопровождение менеджера, сметчика и замерщика. Соглашаетесь на старт &mdash; и мы запускаем процесс. Если планируете ремонт сейчас &mdash; просто позвоните. Мы подскажем, какая форма ремонта подходит именно вам, и поможем сэкономить.</p><p>Никаких скрытых доплат. Смета фиксируется. Есть рассрочка и сезонные акции. Мы ценим ваше время, слова и доверие.</p><p>Наши клиенты успешно живут в обновлённом жилье, а наши реализованных проектов в портфолио &mdash; всё больше. Закажите честный ремонт &mdash; и убедитесь в этом сами.</p>"
        afterBottom = "<h2>Виды ремонтных работ</h2><p>Мы внимательно прислушиваемся к требованиям и пожеланиям наших клиентов, поэтому в рамках услуг ремонта квартир под ключ от нашей компании вы найдете различные варианты на выбор:</p><ul><li><b>косметический ремонт</b> &ndash; исправление недочетов, обновление отделочных материалов, замена обоев и плинтусов. Является наиболее бюджетным вариантом;</li><li><b>капитальный</b> &ndash; масштабная замена инженерных систем, новое напольное и потолочное покрытие, монтаж плитки в санузлах и прочее;</li><li><b>дизайнерский ремонт</b> &ndash; разработка индивидуального проекта с учетом всех деталей: от расстановки мебели до выбора стиля интерьера.</li></ul><p>Сколько стоит ремонт квартиры &ndash; вопрос, на который мы готовы дать ответы, предоставив подробную смету после оценки объема и сложности работ. Чтобы клиент мог визуализировать будущий интерьер, наши дизайнеры предлагают 3D-проект, который демонстрирует все идеи отделки квартиры и обоснование цены. Есть возможность внести корректировки в план до начала работ. Реализация проекта начинается только после утверждения заказчиком.</p>"
        showMoreEnabled={false}
        bottomEnabled = {true}
      />

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
      <HowWeWork
        title={"Как мы работаем"}
        description="Наша команда специалистов с&nbsp;многолетним опытом и&nbsp;знанием тонкостей хорошего ремонта нацелена на&nbsp;создание уютного дома, который будет радовать вас долгие годы."
        slides={[
          { title: "Встречаемся лично", subtitle: "Договариваемся о встрече на объекте, чтобы наш специалист мог внимательно осмотреть и оценить предстоящие работы." },
          { title: "Делам расчеты", subtitle: "Рассчитываем стоимость работ, учитывая объем необходимых работ и материалов, а также предстоящие трудозатраты и любые дополнительные услуги." },
          { title: "Заключаем сделку", subtitle: "Обсуждаем и утверждаем все условия, стоимость работ и подписываем договор, в котором четко прописываем сроки выполнения." },
          { title: "Покупаем материалы", subtitle: "Мы берем на себя организацию закупки и доставки всех необходимых строительных и отделочных материалов прямо на место работ по оптовым ценам." },
          { title: "Работаем четко по графику", subtitle: "Приступаем к ремонту строго по утвержденному плану, обеспечивая постоянный контроль за качеством и соблюдением сроков на каждом этапе работ." },
        ]}
      />
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
      <FaqSection
        title={"Ответы на часто задаваемые вопросы"}
        faqs={[
          {
            question: "Могу ли я лично оценить качество ваших работ и следить за ходом ремонта?",
            answer: "<p>Мы открыто демонстрируем наши работы и приветствуем интерес клиентов к нашему рабочему процессу. Для того чтобы устроить визит на один из объектов, воспользуйтесь опцией бесплатного звонка на нашем сайте. Сотрудник компании «Фундук» свяжется с вами, чтобы обсудить все детали. Мы уделяем внимание прозрачности нашей работы, предоставляя возможность потенциальным клиентам ознакомиться с разнообразием и качеством наших услуг на разных этапах выполнения проектов в Санкт-Петербурге и области.</p>",
            button: false,
          },
          {
            question: "Сколько времени занимает ремонт в квартиры в Санкт-Петербурге?",
            answer: "<p>Скорость выполнения ремонтных работ зависит от ряда параметров: объема запланированных мероприятий, личных пожеланий клиента и площади помещения. В среднем, наши проекты осуществляются в срок от нескольких недель до нескольких месяцев. Мы придерживаемся строгих норм качества и предоставляем гарантии на все предоставленные услуги.</p>",
            button: false,
          },
          {
            question: "Кто будет делать ремонт в моей квартире и разрешается ли рабочим проживать на объекте во время работ?",
            answer: "<p>Команда «Фундук» — квалифицированные специалисты, официально трудоустроенные в РФ. Многие из них постоянно проживают в Санкт-Петербурге. Наши рабочие не остаются в помещениях, где проводятся работы. Они прибывают на место, как на обычную работу, в специальной одежде и с необходимым оборудованием. По завершении рабочего дня они занимаются уборкой, проверяют технику и обеспечивают безопасность помещения. Вы можете самостоятельно удостовериться в высокой квалификации наших мастеров, посетив объект, где ведутся работы.</p>",
            button: false,
          },
          {
            question: "Что лучше: обратиться в компанию или нанять частного специалиста/команду?",
            answer: "<p>Иногда кажется, что услуги частных исполнителей могут быть выгоднее, но важно учитывать ряд моментов, которые могут омрачить такой выбор.</p><p>Во-первых, частные бригады редко предлагают гарантии на свои работы, что означает, что вам придется самостоятельно контролировать качество, сроки и технологии, фактически выполняя обязанности руководителя проекта. Есть риск, что такие исполнители могут прекратить работы и исчезнуть.</p><p>Во-вторых, низкая цена может быть результатом пренебрежения критически важными этапами работ, что может привести к последующим проблемам.</p><p>В-третьих, в процессе ремонта могут возникнуть неожиданные требования к доплате за неучтенные работы, которые необходимы для завершения проекта.</p><p>Если для вас приоритетны надежность, точное соблюдение договоренностей, наличие гарантий и возможность получить дизайн-проект без дополнительных расходов, рекомендуется выбрать проверенную компанию с положительной репутацией и опытным персоналом, зарекомендовавшую себя на рынке.</p>",
            button: false,
          },
          {
            question: "В чем ценность проведения замера помещения?",
            answer: "<p>Процесс замера помещения критически важен для получения точных данных о размерах пространства и его элементов. Это ключевой этап для эффективного планирования обновления интерьера, точного расчета необходимого объема отделочных материалов (таких как обои, краска, плитка и прочее), а также для идеального размещения мебели и бытовой аппаратуры. Такие меры позволяют минимизировать вероятность ошибок при заказе и монтаже мебели, дверных и оконных проемов и других элементов, что в свою очередь приводит к экономии ресурсов и достижению задуманного дизайна без необходимости в доработках.</p>",
            button: false,
          },
          {
            question: "Что включается в предметную смету ремонтных работ?",
            answer: "<ul><li>Материалы: расчет стоимости всех строительных и отделочных материалов, необходимых для ремонта.</li><li>Труд: оплату работы всех задействованных специалистов, включая плиточников, электриков, маляров и других.</li><li>Инструменты и оборудование: стоимость аренды или приобретения инструментов и специализированного оборудования, необходимых для выполнения работ.</li><li>Дополнительные услуги: расходы на проектирование, дополнительные замеры и консультации.</li></ul>",
            button: false,
          },
          {
            question: "Делаете ли вы ремонт с перепланировкой?",
            answer: "<p>Да, мы предоставляем услуги по ремонту с внесением изменений в исходную планировку помещения.</p>",
            button: false,
          },
          {
            question: "Как заказать ремонт квартиры, включающий разработку дизайн-проекта?",
            answer: "<p>Для заказа ремонта с созданием дизайн-проекта необходимо связаться с нашими консультантами, которые помогут определить ваши потребности и предпочтения, а также обсудить все детали предстоящего проекта. Мы предложим вам варианты сотрудничества, включая подбор опытных дизайнеров, способных воплотить ваши идеи в реальность, согласно вашему бюджету и срокам.</p>",
            button: false,
          }
        ]}
      />
      <PostsSection
        title="Статьи"
        // slides={[
        //   {
        //     title: "Как утеплить балкон: рассказываем все про утепление",
        //     subtitle: "Чтобы использование балкона было безопасным и комфортабельным, важно уделить достаточное количество времени не только его оформлению, но…",
        //     image: "/blog/blog.webp",
        //     date: "14.02.24",
        //     link: "/blog/",
        //   },
        //   {
        //     title: "Как утеплить балкон: рассказываем все про утепление",
        //     subtitle: "Чтобы использование балкона было безопасным и комфортабельным, важно уделить достаточное количество времени не только его оформлению, но…",
        //     image: "/blog/blog.webp",
        //     date: "14.02.24",
        //     link: "/blog/",
        //   },
        //   {
        //     title: "Как утеплить балкон: рассказываем все про утепление",
        //     subtitle: "Чтобы использование балкона было безопасным и комфортабельным, важно уделить достаточное количество времени не только его оформлению, но…",
        //     image: "/blog/blog.webp",
        //     date: "14.02.24",
        //     link: "/blog/",
        //   },
        //   {
        //     title: "Как утеплить балкон: рассказываем все про утепление",
        //     subtitle: "Чтобы использование балкона было безопасным и комфортабельным, важно уделить достаточное количество времени не только его оформлению, но…",
        //     image: "/blog/blog.webp",
        //     date: "14.02.24",
        //     link: "/blog/",
        //   },
        //   {
        //     title: "Как утеплить балкон: рассказываем все про утепление",
        //     subtitle: "Чтобы использование балкона было безопасным и комфортабельным, важно уделить достаточное количество времени не только его оформлению, но…",
        //     image: "/blog/blog.webp",
        //     date: "14.02.24",
        //     link: "/blog/",
        //   },
        // ]}
      />
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
