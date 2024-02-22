import { ImageResponse } from 'next/og'
import LogoIcon from '@/assets/icons/logo.svg'

export const runtime = 'edge'
 
export const size = {
  width: 300,
  height: 300,
}
 
export const contentType = 'image/svg'
 
const Image = () => new ImageResponse(<LogoIcon />, size)

export default Image