import { FC } from 'react';
import styles from '../styles/Container.module.scss';

interface IContainerProps {
  children: React.ReactNode;
};

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};

export default Container;