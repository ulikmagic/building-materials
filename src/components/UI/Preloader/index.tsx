import { FC } from "react";

const Preloader: FC = () => {
  const loaderStyle = {
    borderTopColor: '#102a83',
    borderBottomColor: '#102a83',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    animation: 'spin 1.5s linear infinite',
  };

  return (
    <div className="flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-[6px] h-14 w-14" style={loaderStyle}></div>
    </div>
  );
}

export default Preloader;