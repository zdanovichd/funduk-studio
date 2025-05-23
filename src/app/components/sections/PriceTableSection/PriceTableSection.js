"use client";
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";
import styles from "./pricetablesection.module.css";

export default function PriceTableSection({ title = "Сроки выполнения работ", tableData }) {
    if (!tableData || typeof tableData !== 'object') {
        return <div className={styles.priceTable}>Данные не загружены</div>;
    }

    const tabs = Object.keys(tableData);
    const [activeTab, setActiveTab] = useState(tabs[0] || '');

    // Если нет данных для активного таба
    if (!tableData[activeTab]) {
        return <div className={styles.priceTable}>Нет данных для отображения</div>;
    }
    // const tabs = Object.keys(tableData);
    // const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className={styles.priceTable}>
            <div className={styles.priceTable__wrapper}>
                <h2 className={styles.priceTable__title}>{title}</h2>

                <div className={styles.priceTable__tabs}>
                    {tabs.map((tab) => (
                    <p
                        key={tab}
                        className={`${styles.priceTable__tab} ${activeTab === tab ? styles.priceTable__tabActive : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </p>
                    ))}

                </div>
                <p className={styles.priceTable__activeTab}>{activeTab}</p>
                <div className={styles.priceTable__content}>

                    <table className={styles.priceTable__table}>
                    <thead className={styles.priceTable__header}>
                        <tr className={styles.priceTable__row}>
                        {tableData[activeTab].headers.map((header, index) => (
                            <th key={index} className={styles.priceTable__head}>
                            {header}
                            </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody className={styles.priceTable__body}>
                        {tableData[activeTab].rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={styles.priceTable__row}>
                            {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={styles.priceTable__cell}>
                                {cell}
                            </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div className={styles.controls__inner}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M10.2399 5.5747C10.0392 5.5747 9.85449 5.63726 9.69941 5.74152C9.56713 5.35692 9.20452 5.08121 8.78033 5.08121C8.57963 5.08121 8.3949 5.14376 8.23982 5.24802C8.10755 4.86342 7.74493 4.58771 7.32074 4.58771C7.14285 4.58771 6.97637 4.63637 6.83497 4.71977V3.10259C6.83497 2.55812 6.39938 2.11328 5.86116 2.11328C5.32293 2.11328 4.88734 2.55581 4.88734 3.10259V7.3031L4.04124 6.659C3.5395 6.27672 2.82796 6.32769 2.38324 6.77948C2.09816 7.06909 2.09816 7.53942 2.38324 7.82671L5.84747 11.3461C6.26026 11.7654 6.81217 11.9971 7.396 11.9971H8.5363C10.0118 11.9971 11.2114 10.7784 11.2114 9.2794V6.5617C11.2137 6.01723 10.7759 5.5747 10.2399 5.5747ZM10.7257 9.28171C10.7257 10.5073 9.74274 11.5059 8.5363 11.5059H7.396C6.93988 11.5059 6.51341 11.3252 6.19184 10.9985L2.72761 7.47918C2.63183 7.38187 2.63183 7.22664 2.72761 7.12933C2.87813 6.97642 3.07882 6.89764 3.2818 6.89764C3.446 6.89764 3.61248 6.94861 3.74932 7.05519L4.98312 7.99585C5.0561 8.05145 5.15645 8.06072 5.23855 8.01901C5.32065 7.97731 5.37311 7.89159 5.37311 7.79891V3.10259C5.37311 2.8292 5.59205 2.60909 5.85888 2.60909C6.12571 2.60909 6.34464 2.83151 6.34464 3.10259V6.8096C6.34464 6.9463 6.45411 7.05751 6.58867 7.05751C6.72322 7.05751 6.83269 6.9463 6.83269 6.8096V5.5747C6.83269 5.30131 7.05163 5.08121 7.31846 5.08121C7.58529 5.08121 7.80423 5.30363 7.80423 5.5747V6.8096C7.80423 6.9463 7.9137 7.05751 8.04825 7.05751C8.18281 7.05751 8.29228 6.9463 8.29228 6.8096V6.0682C8.29228 5.79481 8.51121 5.5747 8.77804 5.5747C9.04488 5.5747 9.26381 5.79712 9.26381 6.0682V6.8096C9.26381 6.9463 9.37328 7.05751 9.50784 7.05751C9.64239 7.05751 9.75186 6.9463 9.75186 6.8096V6.5617C9.75186 6.2883 9.9708 6.0682 10.2376 6.0682C10.5045 6.0682 10.7234 6.29062 10.7234 6.5617L10.7257 9.28171Z"
                                fill="#343332"
                            ></path>
                            <path
                                d="M9.84765 2.77239L9.88366 2.80969L9.91963 2.77235L10.7566 1.90352L10.79 1.86883L10.7566 1.83414L9.91963 0.965311L9.88366 0.927971L9.84765 0.965272L9.73134 1.08575L9.69784 1.12045L9.73131 1.15517L10.2883 1.73311H7.32251H7.27251V1.78311V1.95456V2.00456H7.32251H10.2883L9.73131 2.58249L9.69784 2.61722L9.73134 2.65191L9.84765 2.77239Z"
                                fill="#23429C"
                                stroke="#579E6E"
                                strokeWidth="0.1"
                            ></path>
                            <path
                                d="M1.87295 0.965272L1.83694 0.927971L1.80097 0.965311L0.963991 1.83414L0.930573 1.86883L0.963991 1.90352L1.80097 2.77235L1.83694 2.80969L1.87295 2.77239L1.98926 2.65191L2.02276 2.61722L1.98929 2.58249L1.43235 2.00456H4.39809H4.44809V1.95456V1.78311V1.73311H4.39809H1.43235L1.98929 1.15517L2.02276 1.12045L1.98926 1.08575L1.87295 0.965272Z"
                                fill="#23429C"
                                stroke="#579E6E"
                                strokeWidth="0.1"
                            ></path>
                        </svg>
                        <p>Листайте влево-вправо</p>
                    </div>
                </div>
        </section>
    );
}
