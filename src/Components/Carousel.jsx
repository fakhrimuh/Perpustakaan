import { Carousel } from '@material-tailwind/react';
import PicOne from '../Asset/Carousel/PicOne.png';
import PicTwo from '../Asset/Carousel/PicTwo.png';
import PicThree from '../Asset/Carousel/PicThree.png';

export default function CarouselHome() {
  return (
    <Carousel className="rounded-xl z-20" transition={{ duration: 2 }}>
      <img src={PicOne} alt="#1" className="h-full w-full object-cover rounded-xl" />
      <img src={PicTwo} alt="#2" className="h-full w-full object-cover rounded-xl" />
      <img src={PicThree} alt="#2" className="h-full w-full object-cover rounded-xl" />
    </Carousel>
  );
}
