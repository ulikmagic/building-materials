import ProductsAndAlloys from '@/assets/images/цветной прокат.png'
import HeatingRadiators from '@/assets/images/радиаторы отопления.jpg'
import MetalMesh from '@/assets/images/металлические сетки.jpg'
import TechnicalGases from '@/assets/images/технические газы.jpg'
import Fasteners from '@/assets/images/крепеж.jpeg'
import Powders from '@/assets/images/порошок.jpg'
import AsbestosCement from '@/assets/images/асбастоцементная.jpg'
import StainlessSteel from '@/assets/images/нержавеющий прокат.jpg'
import LongProducts from '@/assets/images/sortovoi01.jpg'
import SpecialSteels from '@/assets/images/специальные стали.jpg'
import MetallurgicalRawMaterials from '@/assets/images/металлургическая сырье.jpg'
import WeldingMaterials from '@/assets/images/сварочные материалы.jpg'
import Hardware from '@/assets/images/метизы.jpg'
import CableProduction from '@/assets/images/кабельная продукция.png'

export interface ICatalog {
  id: number
  title: string
  image: any
}

export const catalogs: ICatalog[] = [
  {
    "id": 1,
    "title": "Цветной прокат и сплавы",
    "image": ProductsAndAlloys,
  },
  {
    "id": 2,
    "title": "Фасонный прокат",
    "image": "https://emk.kg/wp-content/uploads/2021/01/fason-2.jpg",
  },
  {
    "id": 3,
    "title": "Чугунный прокат",
    "image": "https://emk.kg/wp-content/uploads/2021/01/chugunnyi.jpg",
  },
  {
    "id": 4,
    "title": "Металлические сетки",
    "image": MetalMesh,
  },
  {
    "id": 5,
    "title": "Радиаторы отопления",
    "image": HeatingRadiators,
  },
  {
    "id": 6,
    "title": "Технические газы и оборудование",
    "image": TechnicalGases,
  },
  {
    "id": 7,
    "title": "Крепежные элементы",
    "image": Fasteners,
  },
  {
    "id": 8,
    "title": "Порошки Металлов",
    "image": Powders,
  },
  {
    "id": 9,
    "title": "Асбестоцемент",
    "image": AsbestosCement,
  },
  {
    "id": 10,
    "title": "Нержавеющий прокат",
    "image": StainlessSteel,
  },
  {
    "id": 11,
    "title": "Сортовой прокат",
    "image": LongProducts,
  },
  {
    "id": 12,
    "title": "Специальные стали",
    "image": SpecialSteels,
  },
  {
    "id": 13,
    "title": "Провода и Кабельная продукция",
    "image": CableProduction,
  },
  {
    "id": 14,
    "title": "Металлургическое сырье",
    "image": MetallurgicalRawMaterials,
  },
  {
    "id": 15,
    "title": "Изоляция труб",
    "image": "https://emk.kg/wp-content/uploads/2021/01/izolyacia.jpg",
  },
  {
    "id": 16,
    "title": "Сварочные материалы",
    "image": WeldingMaterials,
  },
  {
    "id": 17,
    "title": "Сплавы металлов",
    "image": "https://emk.kg/wp-content/uploads/2021/01/chuwka.jpg",
  },
  {
    "id": 18,
    "title": "Услуги",
    "image": "https://emk.kg/wp-content/uploads/2021/01/uslugi.jpg",
  },
  {
    "id": 19,
    "title": "Трубный прокат",
    "image": "https://emk.kg/wp-content/uploads/2020/12/трубный.jpg",
  },
  {
    "id": 20,
    "title": "Листовой прокат",
    "image": "https://emk.kg/wp-content/uploads/2021/01/list.jpg",
  },
  {
    "id": 21,
    "title": "Трубопроводная арматура",
    "image": "https://emk.kg/wp-content/uploads/2021/01/truba.jpg",
  },
  {
    "id": 22,
    "title": "Насосы и насосное оборудование",
    "image": "https://emk.kg/wp-content/uploads/2021/01/nasos.jpg",
  },
  {
    "id": 23,
    "title": "Хризотилцемент",
    "image": "https://emk.kg/wp-content/uploads/2021/01/hrizontilment.jpg",
  },
  {
    "id": 24,
    "title": "Метизы",
    "image": Hardware,
  },
  {
    "id": 25,
    "title": "Композитные материалы",
    "image": "https://emk.kg/wp-content/uploads/2021/01/kompozitnyejpg.jpg",
  },
  {
    "id": 26,
    "title": "Генераторы и электростанции",
    "image": "https://emk.kg/wp-content/uploads/2021/01/generator.jpg",
  },
]