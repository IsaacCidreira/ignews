import Image from 'next/image'
import styles from './style.module.scss'
import logoSvg from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
