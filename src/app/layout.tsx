import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { keywords } from '@/constants/keywords'
import Head from 'next/head'

export const metadata: Metadata = {
	title: 'Компания ДН-Групп',
	description:
		'Компания «ДН-Групп»  – один из флагманов рынка металлопроката в Бишкеке и в целом по рынку КР, осуществляющий поставку широкого ассортимента металлических изделий более 15 лет. За это время был накоплен колоссальный опыт работы и выполнено множество нестандартных решений. ',
	keywords,
	openGraph: {
		title: 'Компания ДН-Групп',
		description:
			'Компания «ДН-Групп»  – один из флагманов рынка металлопроката в Бишкеке и в целом по рынку КР, осуществляющий поставку широкого ассортимента металлических изделий более 15 лет. За это время был накоплен колоссальный опыт работы и выполнено множество нестандартных решений. ',
		url: 'https://building-materials.vercel.app/',
		siteName: 'ДН-Групп',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				<meta property='og:image' content='/images/favicon-32x32.png' />
			</Head>
			<body className='font-manrope flex flex-col'>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	)
}
