import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Компания ДН-Групп",
    short_name: "ДН-Групп",
    description: 'Компания «ДН-Групп»  – один из флагманов рынка металлопроката в Бишкеке и в целом по рынку КР, осуществляющий поставку широкого ассортимента металлических изделий более 15 лет. За это время был накоплен колоссальный опыт работы и выполнено множество нестандартных решений. ',
    start_url: '/',
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      { "src": "/images/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
      { "src": "/images/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" },
      { "src": "/images/favicon-16x16.png", "sizes": "16x16", "type": "image/png" },
      { "src": "/images/favicon-32x32.png", "sizes": "32x32", "type": "image/png" },
      { "src": "/images/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
    ]
  }
}