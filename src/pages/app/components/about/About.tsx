import { ForwardedRef, forwardRef } from 'react'
import styles from './About.module.css'
import { useTranslation } from 'react-i18next'

const About = forwardRef((_, ref) => {
  const { t } = useTranslation()

  return (
    <section
      className={styles.about}
      id='about'
      ref={ref as ForwardedRef<HTMLElement>}
    >
      <div className={styles.avatar}></div>

      <div className={styles.message}>
        <p>{t('about1')}</p>
        <p>{t('my_name')}.</p>
        <p>{t('about2')}</p>
        <p>{t('about3')}</p>
        <p>{t('about4')}</p>
      </div>
    </section>
  )
})
export default About
