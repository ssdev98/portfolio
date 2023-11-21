import styles from './Services.module.css'
import box from '../../../../assets/icons/box.svg'
import { CSSProperties, ForwardedRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

const Services = forwardRef((_, ref) => {
  const { t } = useTranslation()
  return (
    <section
      className={`${styles.services} hidden`}
      id='services'
      ref={ref as ForwardedRef<HTMLElement>}
    >
      <div className={styles.title}>
        <p>{t('services')}</p>
      </div>

      <div className={styles['services-grid']}>
        {Array(9)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                className={styles['service-card']}
                onClick={() => {}}
                style={{ '--service-item-order': index } as CSSProperties}
              >
                <img src={box} alt='' />
                <p className={styles['service-title']}>Service Name</p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam
                </p>
                <a>Read More</a>
              </div>
            )
          })}
      </div>
    </section>
  )
})

export default Services
