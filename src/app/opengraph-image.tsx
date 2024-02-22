import { ImageResponse } from 'next/og'
import LogoIcon from '@/assets/icons/logo-favicon.svg'
 
export const runtime = 'edge'
export const alt = 'logo'
export const contentType = 'image/png'
export const size = {
  width: 350,
  height: 350,
}
 
const Image = () => new ImageResponse(<LogoIcon />, size)

export default Image