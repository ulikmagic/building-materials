import { FC } from "react";
import Spinner from '@/assets/spinner.gif'
import Image from "next/image";

const Preloader: FC = () => (
  <div className="flex justify-center items-center">
    <Image src={Spinner} alt="loader" width={150} height={150} />
  </div>
);

export default Preloader;