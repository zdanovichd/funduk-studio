import Link from 'next/link'

export const metadata = {
  title: '404 странца не найдена',
  description: '',
}

export default function NotFound() {
  return (
    <main className='not_found'>
      <h2><span>404</span> Страница не найдена</h2>
      <p>Не удалось найти запрошенную страницу</p>
      <Link href="/">На Главную</Link>
    </main>
  )
}