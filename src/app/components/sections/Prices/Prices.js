import React from "react"
import styles from "./prices.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const Prices = ({
  title,
  subtitle,
  price,
  priceUnit,
  features,
  buttonText,
  isDark = false
}) => {
  return (
    <div className={`${styles.card} ${isDark ? styles.darkCard : ""}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardSubtitle}>{subtitle}</p>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceUnit}>{priceUnit}</span>
      </div>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <FontAwesomeIcon icon={faCircle} className={styles.featureIcon} />
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={styles.downloadButton}>{buttonText}</button>
    </div>
  )
}

const PricingSection = () => {
  const technicalFeatures = [
    "обмерный план с указанием размеров",
    "план демонтажа и монтажа",
    "план расстановки мебели",
    "план размещения сантехнического оборудования",
    "план теплых полов",
    "план отделки пола",
    "план отделки стен",
    "план потолков, разрезы сложных элементов",
    "план размещения осветительных приборов с привязкой по выключателям",
    "план размещения розеток и электрических выводов",
    "развертки стен по помещениям, разрезы сложных элементов",
    "раскладка керамической плитки с/у",
    "ведомость по отделочным материалам (пол, стены, потолок)",
    "спецификация по отделочным материалам, осветительному оборудованию, розеткам, выключателям, дверным комплектам, сантехническому оборудованию."
  ]

  const fullDesignFeatures = [
    ...technicalFeatures.slice(0, -1), // Все те же пункты, кроме последнего
    // "3D визуализация всех помещений",
    "спецификация по отделочным материалам, осветительному оборудованию, розеткам, выключателям, дверным комплектам, сантехническому оборудованию."
  ]

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.sectionTitle}>Цены на дизайн-проект</h2>
      <div className={styles.cardsContainer}>
        <Prices
          title="Технический проект"
          subtitle="(чертежный)"
          price="2100"
          priceUnit="₽/м²"
          features={technicalFeatures}
          buttonText="Скачать пример технического проекта"
        />
        <Prices
          title="Полный дизайн-проект"
          subtitle="(3D визуализация)"
          price="3200"
          priceUnit="₽/м²"
          features={fullDesignFeatures}
          buttonText="Скачать пример полного дизайн-проекта"
          isDark
        />
      </div>
    </section>
  )
}

export default PricingSection
