import styles from './Projects.module.css'
import box from '../../../../assets/icons/box.svg'
import { CSSProperties, ForwardedRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  onClick: (index: number) => void
}

const Projects = forwardRef(({ onClick }: Props, ref) => {
  const { t } = useTranslation()

  return (
    <section
      className={`${styles.projects} hidden`}
      id='projects'
      ref={ref as ForwardedRef<HTMLElement>}
    >
      <div className={styles.title}>
        <p>{t('projects')}</p>
      </div>

      <div className={styles['projects-grid']}>
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                className={styles['project-card']}
                onClick={() => onClick(index)}
                style={{ '--project-item-order': index } as CSSProperties}
              >
                <img src={box} alt='' />
                <p className={styles['project-title']}>Coming soon</p>
              </div>
            )
          })}
      </div>

      <button>Show more →</button>
    </section>
  )
})

export default Projects
