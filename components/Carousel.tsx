import { Children, FC, HTMLAttributes, useEffect } from 'react';
import Image from './Image';
import styles from '../styles/Carousel.module.scss';
import { StaticImageData } from 'next/image';
import Typography from './Typography';
import plus from '../assets/icons/plus.svg';

const toRadian = (degrees: number) => {
  return degrees * Math.PI / 180;
}

interface ICarouselSize {
  w: number;
  h: number;
  radius: number;
  circle: number;
}

function setPosition(
  circles: NodeListOf<HTMLDivElement>, 
  carouselSize: ICarouselSize, 
  startIter: number = 0, 
  circlesLength?: number, 
  offsetAngle: number = 0
  ) {

  const _circlesLength = circlesLength != null ? circlesLength : circles.length;

  for (let i = 0; i < circles.length; i++) {
    const angle = (360 / _circlesLength) * (startIter + i) + offsetAngle;
    const circleSize = circles[i].getBoundingClientRect().width;
    const transformY = Math.sin(toRadian(angle)) * carouselSize.radius - circleSize / 2 + "px";
    const transformX = Math.cos(toRadian(angle)) * carouselSize.radius - circleSize / 2 + "px";
    circles[i].style.transform = "translate3d(" + transformX + ", " + transformY + ", 0)";
    circles[i].style.opacity = '1';
  };
}

interface ICarouselComposition {
  Element : typeof CarouselElement;
}

interface ICarouselProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  center: {imgSrc: string, text: string}

};

const Carousel: FC<ICarouselProps> & ICarouselComposition = ({ children, className, center }) => {

  useEffect(() => {
    const carousel = document.querySelector<HTMLDivElement>('#carousel')!,
      container = carousel.querySelector<HTMLDivElement>('.container')!,
      circles = container.querySelectorAll<HTMLDivElement>('.circle')!,
      carouselBoundingRect = carousel.getBoundingClientRect();

    const carouselSize = {
      w: carouselBoundingRect.width,
      h: carouselBoundingRect.height,
      radius: carouselBoundingRect.width / 2,
      circle: circles[0].getBoundingClientRect().width
    }

  setPosition(circles, carouselSize);

    return () => {
      
    }
  }, [])
  

  return (
      <div id='carousel'>
        <div className='container'>
        <div className='center' style={{
          backgroundImage: `url(${center.imgSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'lighten',
        }}>
          <Typography className="center-text">{center.text}</Typography>
        </div>
          {children}
        </div>
      </div>
  )
};

interface ICarouselElementComposition {
  Caption: typeof CarouselElementCaption;
  Image: typeof CarouselElementImage;
}

interface ICarouselElementProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  number: number;
  circlesLength: number;
}

const CarouselElement: FC<ICarouselElementProps> & ICarouselElementComposition = ({ children, className, number, circlesLength }) => {
  useEffect(() => {
    const 
      container = document.querySelector<HTMLDivElement>(`.${className}`)!,
      circles = container.querySelectorAll<HTMLDivElement>(`.caption`)!,
      carouselBoundingRect = container.getBoundingClientRect();

    const carouselSize = {
      w: carouselBoundingRect.width,
      h: carouselBoundingRect.height,
      radius: (carouselBoundingRect.width + 30) / 2,
      circle: circles[0].getBoundingClientRect().width
    }

    setPosition(circles, carouselSize, number, circlesLength);
  
  }, [])
  

  return (
    <div className={`circle ${className}`} >{children}</div>
  )
};

interface ICarouselElementCaptionProps {
  children: React.ReactNode;
}

const CarouselElementCaption: FC<ICarouselElementCaptionProps> = ({ children }) => {
  return (
    <div className="caption">{children}</div>
  )
};

interface ICarouselElementImageProps {
  src: StaticImageData;
}

const CarouselElementImage: FC<ICarouselElementImageProps> = ({ src }) => {
  return (
    <div>
      <Image src={plus} alt='' className='plus'/>
      <Image src={src} alt='' className={styles.image} />
    </div>
  )
}

CarouselElement.Image = CarouselElementImage;
CarouselElement.Caption = CarouselElementCaption;
Carousel.Element = CarouselElement;

export default Carousel;