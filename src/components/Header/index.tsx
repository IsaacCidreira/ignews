import Image from 'next/image'
import styles from './style.module.scss'
import logoSvg from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts'>
            <a>Posts</a>
          </ActiveLink>

        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
