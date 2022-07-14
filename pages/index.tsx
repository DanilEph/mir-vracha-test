import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Patient from '../components/Patient'
import Typography from '../components/Typography'
import styles from '../styles/Home.module.scss';
import adultImg from '../assets/img/adult.png';
import childImg from '../assets/img/child.png';
import adultFullImg from '../assets/img/adult-full.png';
import Carousel from '../components/Carousel';

import dysphagia from '../assets/icons/dysphagia.svg';
import fatigue from '../assets/icons/fatigue.svg';
import hipDislocation from '../assets/icons/hip-dislocation.svg';
import inabilityToRun from '../assets/icons/inability-to-run.svg';
import jointContracture from '../assets/icons/joint-contracture.svg';
import plus from '../assets/icons/plus.svg';
import raiseHandsInability from '../assets/icons/raise-hands-inability.svg';
import scoliosis from  '../assets/icons/scoliosis.svg';
import respiratoryDysfunction from '../assets/icons/respiratory-dysfunction.svg';

const carouselElems = [
  {
    icon: dysphagia,
    caption: 'Нарушения жевания и глотания'
  },
  {
    icon: respiratoryDysfunction,
    caption: 'Дыхательная недостаточность/ респираторная дисфункция'
  },
  {
    icon: inabilityToRun,
    caption: 'Неспособность бегать, изменение походки'
  },
  {
    icon: jointContracture,
    caption: 'Контрактура суставов'
  },
  {
    icon: hipDislocation,
    caption: 'Вывих бедра'
  },
  {
    icon: fatigue,
    caption: 'Утомляемость'
  },
  {
    icon: scoliosis,
    caption: 'Сколиоз'
  },
  {
    icon: raiseHandsInability,
    caption: 'Ограниченная способность поднимать руки и переносить предметы'
  },

]


const Home: NextPage = () => {
  return (
   <Container>
    <header className='header'>
      <Typography variant='h1'>А вдруг СМА?</Typography>
    </header>
    <main>
      <Typography variant='h2'>Выберите, кто Ваш пациент:</Typography>
      <div className={styles.patientsBox}>
        <Patient>
          <Patient.Header>Взрослый</Patient.Header>
          <Patient.Image src={adultImg} alt='' />
          <Patient.Paragraph>Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</Patient.Paragraph>
          <Patient.Paragraph>По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.</Patient.Paragraph>
          <Patient.Paragraph>По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</Patient.Paragraph>
        </Patient>
        <Patient>
          <Patient.Header>Ребенок</Patient.Header>
          <Patient.Image src={childImg} alt='' />
          <Patient.Paragraph>Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА. </Patient.Paragraph>        
          <Patient.Paragraph>Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания</Patient.Paragraph>
        </Patient>
      </div>
      <Typography style={{
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#2A477D',
      }}>Сообщает ли один из ваших пациентов о следующих симптомах? <Typography variant='caption'>(нажмите на любую иконку и узнайте больше)</Typography></Typography>
      <Carousel center={{imgSrc: adultFullImg.src, text: 'Взрослый'}}>
        {carouselElems.map((carouselElem, i) => (
          <Carousel.Element key={i} className={`carousel-elem-${i}`} number={i} circlesLength={carouselElems.length}>
            <Carousel.Element.Image src={carouselElem.icon} />
            <Carousel.Element.Caption >{carouselElem.caption}</Carousel.Element.Caption>
          </Carousel.Element>
        ))}
      </Carousel>
    </main>
   </Container>
  )
}

export default Home
