import styles from './SocialMedia.module.css'
import githubMark from '../../../../assets/social/github/github-mark.svg'
import linkedin from '../../../../assets/social/linkedin/In-Blue-48.png'
import whatsApp from '../../../../assets/social/whatsapp/Digital_Glyph_Green.svg'
import x from '../../../../assets/social/x/logo-black.png'
import call from '../../../../assets/icons/call.svg'
import mail from '../../../../assets/icons/mail.svg'
//import medium from '../../../../assets/medium/Artboard 1.svg'
//import stackOverflow from '../../../../assets/stackoverflow/stackoverflow.svg'

const SocialMedia = () => {
  return (
    <div className={styles['social-media']}>
      <div>
        <a href='https://github.com/SoufianeSaadouni' target='_blank'>
          <img src={githubMark} alt='' />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/soufiane-saadouni/'
          target='_blank'
        >
          <img src={linkedin} alt='' />
        </a>
      </div>
      <div>
        <a href='https://wa.me/212770582648' target='_blank'>
          <img src={whatsApp} alt='' />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/soufiane_dev' target='_blank'>
          <img src={x} alt='' />
        </a>
      </div>

      {/*<div>
        <a
          href='https://stackoverflow.com/users/12953218/soufiane-saadouni'
          target='_blank'
        >
          <img src={stackOverflow} alt='' />
        </a>
      </div>
      
      <div>
        <a href='https://medium.com/@soufiane_dev' target='_blank'>
          <img src={medium} alt='' />
        </a>
      </div>
      */}

      <div>
        <a href='tel:+212 770-582648'>
          <img src={call} alt='' />
        </a>
      </div>

      <div>
        <a href='mailto:soufiane_dev@outlook.com' target='_blank'>
          <img src={mail} alt='' />
        </a>
      </div>
    </div>
  )
}
export default SocialMedia
