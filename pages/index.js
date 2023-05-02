import { useState } from 'react'
import GlassCard from '@/Components/Page Components/Index Components/GlassCard'
import Divider from '@/Components/Global Components/Divider'
import SkillCard from '@/Components/Page Components/Index Components/SkillCard'
import GlassModalForm from '@/Components/Page Components/Index Components/GlassModalForm'
import { DiReact, DiCss3, DiJavascript, DiPython, DiJava } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsGit } from 'react-icons/bs'
import { SiPlanetscale, SiChakraui } from 'react-icons/si'
import styles from '@/styles/Page Styles/Index.module.css'
import buttonStyles from '@/styles/Global Component Styles/Button.module.css'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(prev => !prev)
  }
  
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.welcoming}>
        Hello and welcome to my site! My name is Lofton and I am passionate about
        pushing my boundaries in programming and trying new things whenever I get the chance
      </p>
      <Divider title='Active Sites' />
      <div className={styles.cards}>
        <GlassCard
          cardHeader={`Gentry's Auto Detailing`}
          languages='React, HTML, CSS'
          timeline='Mar. - Apr. 2023'
          cardContent='This was a website I designed for a relative for their auto
          detailing business. This site was made using React'
          cardLink='https://gentry-auto-detailing.vercel.app/'
          cardLinkTitle='View Site'
          buttonTo={true}
          gitHubLink='https://github.com/loftongentry/gentry-auto-detailing'
        />
        <GlassCard
          cardHeader={`Portfolio Website`}
          languages='React, HTML, CSS'
          timeline='Apr. 2023'
          cardContent='The current website that you are on. This website is mainly used for
          demonstrating my growing skills with front-end programming'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/loftongentry'
        />
      </div>
      <Divider title='Other Projects' />
      <div className={styles.cards}>
        <GlassCard
          cardHeader='Fruity Shooty'
          languages='GML'
          timeline='Oct. 2020'
          cardContent='This was a simple game I made to gain more experience with programming in general'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/Fruity-Shooty'
        />
        <GlassCard
          cardHeader='Word Bag Extraction'
          languages='Python'
          timeline='Summer 2019'
          cardContent='This is a simple program I developed for the US government that displays the number of words that appear in a PDF document on a webpage'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/Word-Bag-Extraction'
        />
      </div>
      <Divider title='My Skills' />
      <div className={styles.skillCards}>
        <SkillCard
          cardHeader='Proficent With'
          cardContent={['React', 'JavaScript', 'HTML', 'CSS', 'Google App Script', 'GitHub']}
          tag={[DiReact, DiJavascript, AiFillHtml5, DiCss3, FcGoogle, AiFillGithub]}
          tagStyle={['#61DAFB', '#F7DF1E', '#E34F26', '#1572B6', '', '#181717']}
        />
        <SkillCard
          cardHeader='Experience With'
          cardContent={['Chakra UI', 'Git', 'Python', 'Java']}
          tag={[SiChakraui, BsGit, DiPython, DiJava]}
          tagStyle={['#319795', '#F05032', '#3776AB', '']}
        />
        <SkillCard
          cardHeader='Exposure To'
          cardContent={['Planetscale']}
          tag={[SiPlanetscale]}
          tagStyle={['#000000']}
        />
      </div>
      <Divider />
      <button className={buttonStyles.button} onClick={handleClick}>Contact Me Here</button>
      {modalOpen && (<GlassModalForm closeModal={handleClick}/>)}
    </div>
  )
}
