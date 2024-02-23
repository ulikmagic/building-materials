import { StaticImageData } from "next/image"

export interface IForm {
  gmail: string
  text: string
  name: string
  number: string
}

export interface IProduct {
  id: number
  title: string
  image: string | StaticImageData
  description: string
  catalog_type: number
}
