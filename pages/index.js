import GlassCard from '@/Components/Page Components/Index Components/GlassCard'
import Divider from '@/Components/Page Components/Divider'
import SkillCard from '@/Components/Page Components/Index Components/SkillCard'
import styles from '../styles/Page Styles/Index.module.css'
import { DiReact, DiCss3, DiJavascript, DiPython, DiJava } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsGit } from 'react-icons/bs'
import { SiPlanetscale, SiChakraui } from 'react-icons/si'

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Welcome!</h1>
      <Divider title='Active Sites' />
      <div className={styles.cards}>
        <GlassCard
          cardHeader={`Gentry's Auto Detailing`}
          cardContent='This was a website I designed for a relative for their auto
          detailing business. This site was made using React'
          cardLink='https://gentry-auto-detailing.vercel.app/'
          cardLinkTitle='View Site'
          buttonTo={true}
          gitHubLink='https://github.com/loftongentry/gentry-auto-detailing'
        />
      </div>
      <Divider title='Other Projects' />
      <div className={styles.cards}>
        <GlassCard
          cardHeader='Fruity Shooty'
          cardContent='This was a simple game I made to gain more experience with programming in general'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/Fruity-Shooty'
        />
        <GlassCard
          cardHeader='Word Bag Extraction'
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
          cardContent={['Chakra UI', 'Planetscale', 'Git', 'Python', 'Java']}
          tag={[SiChakraui, SiPlanetscale, BsGit, DiPython, DiJava]}
          tagStyle={['#319795', '#000000', '#F05032', '#3776AB', '']}
        />
      </div>
      <Divider />
    </div>
  )
}
