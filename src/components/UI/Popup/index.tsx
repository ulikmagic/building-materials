import clsx from 'clsx'
import React, { FC } from 'react'

interface PopupProps {
  className?: string
  onClick: () => void
}

const Popup: FC<PopupProps> = ({ onClick, className }) => (
  <div onClick={onClick} className={clsx(className)}>
      
  </div>
)

export default Popup
