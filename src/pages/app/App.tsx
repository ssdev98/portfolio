import styles from './App.module.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  MutableRefObject,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState
} from 'react'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies'
import Contact from './components/contact/Contact'
import ProjectDetails from './components/project-details/ProjectDetails'
import Services from './components/services/Services'
import lightMode from '../../assets/icons/light_mode.svg'
import darkMode from '../../assets/icons/dark_mode.svg'
import translate from '../../assets/icons/translate.svg'
import settingLight from '../../assets/icons/settings_light.svg'
import settingDark from '../../assets/icons/settings_dark.svg'

// Lazy loading the menu
// https://legacy.reactjs.org/docs/code-splitting.html#reactlazy
const Menu = lazy(() => import('./components/menu/Menu'))

//import openInNew from '../../assets/icons/open_in_new.svg'
import Footer from './components/footer/Footer'
import { detectColorTheme } from '../../utils/utils'
import { useTranslation, initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import enTranslations from '../../assets/locals/en.json'
import frTranslations from '../../assets/locals/fr.json'
import esTranslations from '../../assets/locals/es.json'
import arTranslations from '../../assets/locals/ar.json'
import ptTranslations from '../../assets/locals/pt.json'
import deTranslations from '../../assets/locals/de.json'
import itTranslations from '../../assets/locals/it.json'

//https://fonts.google.com/icons?icon.query=dark
//https://fonts.google.com/icons?selected=Material+Symbols+Outlined:open_in_new:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=new

//TODO: PUSH NOTIFICATIONS https://firebase.google.com/docs/cloud-messaging/js/client
//https://web.dev/explore/notifications

// TODO: CONTACT API: https://web3forms.com/pricing  https://web3forms.com/#start
// TODO: NEWSLETTER API: https://www.mailjet.com/pricing/
// TODO: https://github.com/i18next/i18next-browser-languageDetector
// TODO: Dev Container Setup
// TODO: https://developer.mozilla.org/en-US/docs/Web/Accessibility

// TODO: https://youtu.be/2woWjkED-vg?si=Kt6QkPMqp2JOY9H8&t=400
// https://analytics.google.com/analytics/web/provision/#/p409184554/reports/intelligenthome

// https://vite-pwa-org.netlify.app/
// TODO: https://blog.logrocket.com/optimizing-performance-react-app/

// To change language
i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
    fr: frTranslations,
    es: esTranslations,
    ar: arTranslations,
    pt: ptTranslations,
    de: deTranslations,
    it: itTranslations
  },

  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
})

// To disable context menu
document.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})

// To disable dragging
document.addEventListener('drag', (event) => {
  event.preventDefault()
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>
    entry.isIntersecting
      ? entry.target.classList.add('show')
      : entry.target.classList.remove('show')
  )
})

/*
export const ProjectDetailsContext = createContext({
  isProjectDetailsVisible: Boolean
})*/
//TODO:
i18n.changeLanguage('en')

const App = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden')

    hiddenElements.forEach((hiddenElement) => observer.observe(hiddenElement))
  }, [])

  //const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleOnUserScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleOnUserScroll)

    // Clean up when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleOnUserScroll)
    }
  }, [])

  const [currentSection, setCurrentSection] = useState('about')
  // Toggle theme

  const [theme, setTheme] = useState(detectColorTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    // Clean up when the component unmounts to prevent memory leaks
    return () => {
      /* TODO */
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    window.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  //

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const section = window.location.hash.replace('#', '')
      setCurrentSection(section)
    })
  }, [])

  //

  const [isProjectDetailsVisible, setIsProjectDetailsVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isSettingsVisible, setIsSettingsVisible] = useState(false)

  const scrollToSectionOnPageLoad = () => {
    const urlHash = window.location.hash /*= '#contact'*/

    switch (urlHash) {
      case '#contact':
        if (contactRef.current) {
          contactRef.current.scrollIntoView(/*{ behavior: 'smooth' }*/)
          setCurrentSection('Contact')
        }
        break

      case '#about':
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('about')
        }

        break

      case '#projects':
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('projects')
        }
        break

      case '#services':
        if (servicesRef.current) {
          servicesRef.current.scrollIntoView({ behavior: 'smooth' })
          setCurrentSection('services')
        }
        break

      case '#technologies':
        if (technologiesRef.current) {
          technologiesRef.current.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState({}, '', '#technologies')
          setCurrentSection('technologies')
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    scrollToSectionOnPageLoad()

    // Clean up when the component unmounts to prevent memory leaks
    return () => {
      /* TODO */
    }
  }, [])

  const appRef = useRef<HTMLDivElement>()

  const aboutRef = useRef<HTMLElement>()
  const projectsRef = useRef<HTMLElement>()
  const servicesRef = useRef<HTMLElement>()
  const technologiesRef = useRef<HTMLElement>()
  const contactRef = useRef<HTMLElement>()

  const [screenX, setScreenX] = useState(0)

  useEffect(() => {
    appRef.current?.addEventListener('touchstart', (e) => {
      setScreenX(e.changedTouches[0].screenX)
    })

    // Clean up when the component unmounts to prevent memory leaks
    return () => {
      /* TODO */
    }
  }, [])

  /*
  useEffect(() => {
    appRef.current?.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].screenX

      if (endX > screenX) {
        setIsMenuVisible(false)
      }
    })

    // Clean up when the component unmounts to prevent memory leaks
    return () => {
      // TODO 
    }
  }, [])*/

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView()
      window.history.pushState({}, '', '#contact')
    }
  }

  return (
    <>
      <HelmetProvider>
        {/**<div className={styles.app} data-theme={theme}> */}
        <div
          className={styles.app}
          data-theme={theme}
          style={
            isMenuVisible || isProjectDetailsVisible
              ? { overflow: 'hidden', position: 'fixed' }
              : {}
          }
          ref={appRef as MutableRefObject<HTMLDivElement>}
        >
          <Helmet>
            <title>Soufiane Portfolio : {currentSection}</title>
            <meta name='description' content='Learn react by using Vite' />
            <meta
              name='keywords'
              content='Portfolio, About, Projects, Services'
            />
            <meta name='author' content='Saadouni Soufiane' />
          </Helmet>

          <header>
            <div className={styles.navbar}>
              <div>
                <div
                  className={styles.hamburger}
                  onClick={() => {
                    setIsMenuVisible(true)
                  }}
                >
                  <div />
                  <div />
                  <div />
                </div>
                <div className={styles.logo}>
                  <a href='/portfolio/#about'>soufiane.dev</a>{' '}
                </div>
              </div>

              <nav>
                <ul>
                  <li>
                    <a href='#about'>{t('about')}</a>
                  </li>
                  <li>
                    <a href='#projects'>{t('projects')}</a>
                  </li>
                  <li>
                    <a href='#services'>{t('services')}</a>
                  </li>
                  <li>
                    <a href='#technologies'>{t('technologies')}</a>
                  </li>
                  <li>
                    <a href='https://medium.com/@soufiane_dev' target='_blank'>
                      {t('blog')} ↗
                    </a>
                  </li>
                </ul>
              </nav>

              <div className={styles.actions}>
                <button>
                  <div>
                    <img src={translate} alt='translate' loading='lazy' />

                    <p>English</p>
                  </div>
                </button>

                <button
                  id='toggleTheme'
                  aria-label='Toggle Theme'
                  role='button'
                  onClick={() => {
                    toggleTheme()
                  }}
                >
                  <img
                    src={theme === 'dark' ? lightMode : darkMode}
                    alt={theme === 'dark' ? 'lightIcon' : 'darkIcon'}
                    loading='lazy'
                  />
                </button>

                <button onClick={() => handleContactClick()}>
                  {t('contact_me')}
                </button>

                <div className={styles.temp1}>
                  <button
                    onClick={() => {
                      setIsSettingsVisible(!isSettingsVisible)
                    }}
                  >
                    <img
                      src={theme === 'dark' ? settingLight : settingDark}
                      alt={theme === 'dark' ? 'settingLight' : 'settingDark'}
                      loading='lazy'
                    />
                  </button>

                  <ul className={styles.dropdown}>
                    <li>Option1</li>
                    <li>Option2 </li>
                    <li>Option3 </li>
                    <li>Option4 </li>
                  </ul>
                </div>
              </div>

              {/**/}
            </div>
          </header>
          {/*<div className={styles.settings}>
            <div
              className={styles.options}
              style={
                isOptionsVisible ? { display: 'block' } : { display: 'none' }
              }
            ></div>
            <button
              onClick={() => setIsOptionsVisible(!isOptionsVisible)}
              className={styles.reveal}
            >

              img
            </button>
          </div> 
          */}

          <main>
            <About ref={aboutRef} />
            <Projects
              onClick={(index) => {
                // Logging project index number
                console.log(index.toString())

                setIsProjectDetailsVisible(true)
              }}
              ref={projectsRef}
            />
            <Services ref={servicesRef} />
            <Technologies ref={technologiesRef} />
            <Contact ref={contactRef} />
          </main>

          <Footer />
        </div>
      </HelmetProvider>

      {scrollY > 350 ? (
        <button
          className={styles.top}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          ↑
        </button>
      ) : null}

      {isProjectDetailsVisible ? (
        <ProjectDetails
          onCloseClick={() => setIsProjectDetailsVisible(false)}
        />
      ) : null}

      {isMenuVisible ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Menu onCloseClick={() => setIsMenuVisible(false)} />
        </Suspense>
      ) : null}
    </>
  )
}

export default App
