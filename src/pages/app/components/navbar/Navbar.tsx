import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p>soufiane.dev</p>
        </div>

        <nav>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#technologies'>Technologies</a>
            </li>
            <li>
              <a>More</a>
            </li>{' '}
            {/*
                  <li>
                    <div className={styles.div1}>More</div>

                    <div className={styles.div2}>
                     <ul className={styles.dropdown}>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>Download Resume/CV</li>
                        <li>Certifications</li>
                        </ul>
                    </div>
                  </li>*/}
          </ul>
        </nav>
      </div>

      <div>
        <button onClick={() => {}}>Contact Me</button>
      </div>
    </div>
  )
}
