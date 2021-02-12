import Link from 'next/link'
import styles from './nav.module.css'
const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link} >Home</a>
      </Link>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </nav>
  )
}

export default Navigation
