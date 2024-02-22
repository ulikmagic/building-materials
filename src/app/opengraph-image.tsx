import { ImageResponse } from 'next/og'
import LogoIcon from '@/assets/icons/logo.svg'

export const runtime = 'edge'
 
export const size = {
  width: 200,
  height: 200,
}
 
export const contentType = 'image/svg'
 
const Image = () => new ImageResponse(<LogoIcon className="text-blue-dark" />, size)

export default Image