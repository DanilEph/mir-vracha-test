import { default as ImageNext, StaticImageData } from 'next/image';
import { FC } from 'react';

interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: { width?: string, height?: string};
  src: StaticImageData;
  alt: string;
};

const Image: FC<IImageProps> = ({ size, src, alt, ...other }) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...other}
    >
      <ImageNext style={{width: size?.width, height: size?.height}} src={src} alt={alt} />
    </div>
  )
};

export default Image;