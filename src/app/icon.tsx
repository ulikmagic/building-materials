import { ImageResponse } from 'next/og'
import LogoIcon from '@/assets/icons/logo-favicon.svg'
 
export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg'
 
const Icon = () => new ImageResponse(<LogoIcon />, size)

export default Icon