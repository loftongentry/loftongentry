import GlassCard from '@/Components/Page Components/GlassCard'
import styles from '../styles/Page Styles/Index.module.css'


export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Welcome!</h1>
      <div className={styles.cards}>
        <GlassCard
          cardHeader={`Gentry's Auto Detailing`}
          cardContent='This was a website I designed for a relative for their auto
          detailing business. This site was made using React'
          cardLink='https://gentry-auto-detailing.vercel.app/'
          cardLinkTitle='View Site'
          buttonTo={true}
          gitHubLink='https://github.com/loftongentry/gentry-auto-detailing'
        ></GlassCard>
      </div>
    </div>
  )
}
