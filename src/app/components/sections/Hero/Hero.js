'use server'
import styles from "./hero.module.css";
import Image from "next/image";
import React from 'react';
import PhoneForm from "../../ui/PhoneForm/PhoneForm";
import Link from "next/link";

export default async function Hero({ title = "", content = [], formEnabled = false, breadcrumbs = [] }) {

    return (
        <section className={styles.hero}>
                <Image
                    src="/bg.webp"
                    alt="Фон"
                    className={styles.bgImage}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRsQEAABXRUJQVlA4WAoAAAAgAAAA1AIA4QAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg1gIAABA0AJ0BKtUC4gA+7XaxVqmnJCOgCGkwHYlpbt+nofRrrefUWAIw9wAnzonvSQIECBaBCxmxkgQsfhYyQIECDdan9d7vwX+k0oOkTJz32+w0sTE5MmTJoG32+2r1mXqcRCGsM+AXHbSt1qdT6Ux51M09M+xa09z5fF1bOt3MvhkMhPMgR8ZJIghCQA0Gg0GfTtngzIBT9yTklEWi1jUSrYL72tAZCeZDEW6NuaZeu+9Svk78AYI3Q2r47J3QH7QKBQKBQCM6u5j6BapgLiC/Smlcq0+rSAamg0Ggy+gamf/hvEXel9Cj3sCDnC5DgLOmWqVSmxSqVSqVSBi54KqZ1jQ4HuTLU5uDIgDJGjDIaKhAZDHd2rngqi54dfGO0H+dOnU9LIbrWVGLgaDRW34TOyhQAIqi54KrwXHgd/XHRPekmH35gaLrVKu+9xaqABFVmiqLt7ZpHvXHS6xPekgQIGwvfgtUqlUu2y7rWt7Zoqu1UUJBMtHgLUgvvXHRP6qlUqlUu2dDk40CBAgQIECBAgQIECBBujy8rVlqp1P0gvvXt3HRPekgQICQAP7mufWhTwHdFwmOCTmWEyW6Rvn16jMtnuTt6E07Wqqsd03Ve+pcoPWLnneog5fGRhN4nVBcrEzIybBQzlwZxnVjMukagC0YkcqPq4N7tlpTGzVQ1kPj059cKKqJZvBKElwDXlxJGGvLcc0ob+Qn1JNlQGKsg2OVv/n8xcwHYZBhrRIlJviL/FZVgWUxSE4tqBNGdV3/TxksLtsckfUafM4MeTwuk2ylY+PRyDZN1W6L25LVqnGXNmMiCXsX+wTgAWHapTslSwawbRiGgkFZ7vAOIJj41su1ldybJBAJiuVsIBYA6n6Efw/K99TFPzHAIkxxfrg2KYTuibACSh1MBG2IgAl2QN0myvhs/dAPyZdqhgAgCOvtLI42IOFxMFjEOUAD6+TuJDDgAAAAAA=="
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1920px"
                />
            <div className={styles.overlay}></div>
            <div className={styles.content}>

                <div className={styles.content__inner}>
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <div className={styles.breadcrumbs}>
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <span className={styles.breadcrumbSeparator}> / </span>}
                                    {crumb.path ? (
                                        <Link href={crumb.path} className={styles.breadcrumbLink}>
                                            {crumb.title}
                                        </Link>
                                    ) : (
                                        <span className={styles.breadcrumbCurrent}>{crumb.title}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                    <h1 className={styles.content__title}>{title}</h1>
                    {content && content.length > 0 && !Array.isArray(content)&&
                    <div
                        className={styles.content__subtitle}
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                    }
                </div>
                {formEnabled &&
                <div className={styles.content__inner}>
                    <PhoneForm
                        title="Оставьте заявку</br>на расчет стоимости ремонта"
                        subtitle="Мы перезвоним Вам в течение 10 минут"
                        button="Получить расчет стоимости"
                    />
                </div>
                }
            </div>
        </section>
    )
}

