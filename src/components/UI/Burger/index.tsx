import clsx from "clsx";
import { FC } from "react";

interface BurgerProps {
  className?: string
  onClick: () => void
  isActive: boolean
}

const items = [
  {
    id: 1,
    class: 'top-1/3',
    class_active: 'opacity-0',
  },
  {
    id: 2,
    class: 'top-2/3',
    class_active: 'rotate-45 top-[40%]',
  },
  {
    id: 3,
    class: 'top-3/3',
    class_active: 'rotate-[-45deg] top-[40%]',
  },
]

const Burger: FC<BurgerProps> = ({ className, onClick, isActive }) => (
  <div className={clsx(className, 'w-9 h-8 relative cursor-pointer')} onClick={onClick}>
    {items.map(item => 
      <div
        key={item.id}
        className={clsx('w-full h-1 absolute bg-blue-dark', isActive ? item.class_active : item.class)}
      />  
    )}
  </div>
)

export default Burger