
import GlassCard from '@/Components/Page Components/GlassCard'
import styles from '../styles/Index.module.css'


export default function Home() {
  return (
    <div className={styles.content}>
      <h1>Welcome!</h1>
      <div className={styles.cards}>
        <GlassCard
          cardHeader='Card 1'
          cardContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          cardLink='Link Here'
          cardLinkTitle='Click Here'
        ></GlassCard>
      </div>
    </div>
  )
}
