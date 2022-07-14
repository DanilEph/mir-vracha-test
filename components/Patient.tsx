import { error } from 'console';
import { StaticImageData } from 'next/image';
import { createContext, FC, useContext } from 'react';
import styles from '../styles/Patient.module.scss';
import Image from './Image';
import Typography from './Typography';

interface IPatientProps {
  children: React.ReactNode;
};

interface IPatentComposition {
  Header: typeof Header;
  Image: typeof PatientImage;
  Paragraph: typeof Paragraph;
}

const PatientContext = createContext(null);

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('This component must be used between Patient'); 
  }
  return context;
};

interface IHeaderProps {
  children: string;
}

const Header: FC<IHeaderProps> = ({ children }) => {
  return(
    <Typography variant='h3'>{children}</Typography>
  )
};

interface IPatientImage extends React.HTMLAttributes<HTMLImageElement> {
  src: StaticImageData;
  alt: string;
};

const PatientImage: FC<IPatientImage> = ({ src, alt, className }) => {
  return (
    <Image src={src} alt={alt} className={`${styles.image} ${className}`} />
  )
};

interface IParagraph {
  children: React.ReactNode;
}

const Paragraph: FC<IParagraph> = ({ children }) => {
  return (
    <Typography className={styles.paragraph}>{children}</Typography>
  )
}

const Patient: FC<IPatientProps> & IPatentComposition = ({ children }) => {
  return (
    // <PatientContext.Provider value={}>
    <div className={styles.patient}>
      {children}
    </div>
    // </PatientContext.Provider>
  )
};

Patient.Header = Header;
Patient.Image = PatientImage;
Patient.Paragraph = Paragraph;

export default Patient;