export default function robots() {

    if (process.env.NODE_ENV === "production") {
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