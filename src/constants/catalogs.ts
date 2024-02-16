import StalImage from '@/assets/images/stal.jpg'
import TrubaImage from '@/assets/images/truba.jpg'
import FaconImage from '@/assets/images/facon.jpg'
import { StaticImageData } from 'next/image'

export interface ICatalog {
  id: number
  title: string
  image: StaticImageData
  url: string
}

export const catalogs: ICatalog[] = [
  {
    id: 1,
    title: 'Трубный прокат',
    image: TrubaImage,
    url: '/catalog/pipe'
  },
  {
    id: 2,
    title: 'Фасонный прокат',
    image: FaconImage,
    url: '/catalog/shapes'
  },
  {
    id: 3,
    title: 'Специальные стали',
    image: StalImage,
    url: '/catalog/steel'
  },
  {
    id: 4,
    title: 'Трубный прокат',
    image: TrubaImage,
    url: '/catalog/pipe'
  },
  {
    id: 5,
    title: 'Фасонный прокат',
    image: FaconImage,
    url: '/catalog/shapes'
  },
  {
    id: 6,
    title: 'Специальные стали',
    image: StalImage,
    url: '/catalog/steel'
  },
]