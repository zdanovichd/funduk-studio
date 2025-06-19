export default function robots() {

    if (process.env.CURRENT_DOMAIN === "https://funduk.studio") {
        return {
            rules: {
            userAgent: '*',
            allow: '/'
            },
            sitemap: process.env.CURRENT_DOMAIN + '/sitemap.xml',
        }
    } else {
        return {
            rules: {
            userAgent: '*',
            disallow: '/'
            },
            sitemap: process.env.CURRENT_DOMAIN + '/sitemap.xml',
        }
    }
}