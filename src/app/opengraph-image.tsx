import { ImageResponse } from 'next/og'
import LogoIcon from '@/assets/icons/logo.svg'

export const runtime = 'edge'
 
export const size = {
  width: 100,
  height: 100,
}
 
export const contentType = 'image/png'
 
const Image = () => new ImageResponse(<div className='text-blue-dark'><LogoIcon /></div>, size)

export default Image