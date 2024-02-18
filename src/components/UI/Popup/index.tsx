import clsx from 'clsx'
import React, { FC } from 'react'

interface PopupProps {
  className?: string
  onClick: () => void
}

const Popup: FC<PopupProps> = ({ onClick, className }) => (
  <div onClick={onClick} className={clsx(className, 'top-0 left-0 fixed w-full h-full bg-opacity-70 cursor-pointer bg-black')} />
)

export default Popup
