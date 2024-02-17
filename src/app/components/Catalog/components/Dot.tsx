import clsx from 'clsx'
import React, { FC } from 'react'

interface DotProps {
  isActive: boolean
}

const Dot: FC<DotProps> = ({ isActive }) => (
  <div className={clsx('w-2 h-2 rounded-md mt-5', isActive ? 'bg-yellow' : 'bg-dot')}>
  </div>
)

export default Dot
