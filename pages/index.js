import GlassCard from '@/Components/Page Components/GlassCard'
import styles from '../styles/Page Styles/Index.module.css'
import Divider from '@/Components/Page Components/Divider'
import GlassSkillCard from '@/Components/Page Components/GlassSkillCard'


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
          cardContent='This was a game a simple game I designed to gain more experience programming in general'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/Fruity-Shooty'
        />
        <GlassCard
          cardHeader='Word Bag Extraction'
          cardContent='This was a program I developed for the government that displays the number of words that appear in a PDF document'
          buttonTo={false}
          gitHubLink='https://github.com/loftongentry/Word-Bag-Extraction'
        />
      </div>
      <Divider title='My Skills' />
      <div className={styles.skillCards}>
        <GlassSkillCard
          cardHeader='Proficent With'
          cardContent='This is the card body'
        />
        <GlassSkillCard
          cardHeader='Experience With'
          cardContent='This is the card body'
        />
        <GlassSkillCard
          cardHeader='Exposure To'
          cardContent='This is the card body'
        />
      </div>
      {/* This button is just for testing purposes */}
      <div className={styles.buttonWrapper}>
        <p className={styles.button}>This is going to be a stylish button</p>
      </div>
      <Divider />
    </div>
  )
}
