import { FC } from 'react';
import styles from '../styles/Typography.module.scss';

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' |'text' | 'caption';
};

interface IRenderComponent extends React.HTMLAttributes<HTMLElement> {

}

const Typography: FC<ITypographyProps> = ({ children, variant = 'text', className, ...other }) => {
  // let renderNode: React.ReactNode;
  let RenderComponent: FC<IRenderComponent>;

  switch (variant) {
    case 'text':
      RenderComponent = (props) => <p className={`${className}`} {...props} />
      break;
    case 'h1':
      RenderComponent = (props) => <h1 className={`${className}`} {...props} />
      break;
    case 'h2':
      RenderComponent = (props) => <h2 className={`${className}`} {...props} />
      break;
    case 'caption':
      RenderComponent = (props) => <span className={`${className} ${styles.caption}`} {...props} />
      break;
    case 'h3':
      RenderComponent = (props) => <h3 className={`${className}`} {...props} />
  }

  return (
    <RenderComponent {...other}>{children}</RenderComponent>
  )
};

export default Typography;