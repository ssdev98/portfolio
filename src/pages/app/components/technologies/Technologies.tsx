import styles from './Technologies.module.css'
import tsLogo from '../../../../assets/icons/logo/ts-logo.svg'
import dartLogo from '../../../../assets/icons/logo/logo_dart.svg'
import flutterLogo from '../../../../assets/icons/logo/logo_flutter.svg'
import asLogo from '../../../../assets/icons/logo/as.svg'
import firefoxLogo from '../../../../assets/icons/logo/firefox-dev.svg'
import gitLogo from '../../../../assets/icons/logo/git_logo.svg'
import githubLogo from '../../../../assets/icons/logo/github-mark.svg'
import githubWLogo from '../../../../assets/icons/logo/github-mark-white.svg'
import inkscapeLogo from '../../../../assets/icons/logo/Inkscape_logo.svg'
import ktLogo from '../../../../assets/icons/logo/kt-logo.svg'
import jiraLogo from '../../../../assets/icons/logo/mark-gradient-blue-jira.svg'
import pythonLogo from '../../../../assets/icons/logo/python-logo.svg'
import figmaLogo from '../../../../assets/icons/logo/figma.svg'
import dockerLogo from '../../../../assets/icons/logo/docker.svg'
import reactLogo from '../../../../assets/icons/logo/react.svg'
import jsLogo from '../../../../assets/icons/logo/js-logo.svg'
import htmlLogo from '../../../../assets/icons/logo/html-logo.svg'
import cLogo from '../../../../assets/icons/logo/c-lang.svg'
import codeLogo from '../../../../assets/icons/logo/code-logo.png'
import cssLogo from '../../../../assets/icons/logo/CSS3_logo.svg'
// TODO Attribution /credit of assets
import { ForwardedRef, forwardRef } from 'react'
import { detectColorTheme } from '../../../../utils/utils'
import { useTranslation } from 'react-i18next'

const Technologies = forwardRef((_, ref) => {
  const { t } = useTranslation()

  return (
    <section
      className={`${styles.technologies} hidden`}
      id='technologies'
      ref={ref as ForwardedRef<HTMLElement>}
    >
      <div className={styles.title}>
        <p>{t('tech_i_use')}</p>
      </div>
      <div className={styles.tech}>
        <div>
          <img src={cLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={codeLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={tsLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={jsLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={htmlLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={reactLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={dartLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={flutterLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={asLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={ktLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={pythonLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={firefoxLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={gitLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img
            src={detectColorTheme() === 'light' ? githubLogo : githubWLogo}
            alt=''
            loading='lazy'
          />
        </div>
        <div>
          <img src={inkscapeLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={figmaLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={dockerLogo} alt='' loading='lazy' />
        </div>
        <div>
          <img src={jiraLogo} alt='' loading='lazy' />
        </div>
      </div>
    </section>
  )
})

export default Technologies
