import { useTranslation } from 'react-i18next'
import Newsletter from '../newsletter/Newsletter'
import SocialMedia from '../social-media/SocialMedia'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <Newsletter />

      <div className={styles.links}>
        <p>{t('createdBy')}</p>
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer
