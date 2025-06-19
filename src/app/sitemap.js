import posts from "@/app/json/posts.json";
import data from "@/app/json/data.json";

export default function sitemap() {
    let sitemap = [
        {
            url: process.env.CURRENT_DOMAIN,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/nasha-komanda",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/vacancy",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/contacts",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/reviews",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/garantii",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/uslugi",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: process.env.CURRENT_DOMAIN + "/blog",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
    ];

    data.filter(usluga => usluga.is_page !== false).map((usluga, index) => (
        sitemap.push({
            url: process.env.CURRENT_DOMAIN + '/uslugi/' + usluga.slug,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        })
    ))

    posts.map((post, index) => (
        sitemap.push({
            url: process.env.CURRENT_DOMAIN + '/blog/' + post.slug,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        })
    ))
    return sitemap;
}
