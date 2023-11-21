import { useTranslation } from 'react-i18next'
import styles from './Menu.module.css'

interface Props {
  onCloseClick: () => void
}

export default function Menu({ onCloseClick }: Props) {
  const { t } = useTranslation()
  return (
    <div className={styles.menu}>
      <button
        onClick={() => {
          onCloseClick()
        }}
      >
        ×
      </button>
      <nav>
        <ul>
          <li>
            <a
              href='#about'
              onClick={() => {
                onCloseClick()
              }}
            >
              {t('about')}
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={() => {
                onCloseClick()
              }}
            >
              {t('projects')}
            </a>
          </li>
          <li>
            <a
              href='#services'
              onClick={() => {
                onCloseClick()
              }}
            >
              {t('services')}
            </a>
          </li>
          <li>
            <a
              href='#technologies'
              onClick={() => {
                onCloseClick()
              }}
            >
              {t('technologies')}
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/@soufiane_dev'
              target='_blank'
              onClick={() => {
                onCloseClick()
              }}
            >
              {t('blog')}↗
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
