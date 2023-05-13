import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

import styles from './Title.module.css'

const Intro = () => {
  return (
    <section className={`${styles.bigContainer} flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12`}>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <div className={styles.typing}>
          mehr sharma
        </div>
      </h1>
      <h2 className="text-2xl md:text-4xl text-center md:text-left text-lg mt-5 md:pl-8">
        <div className={styles.linkContainer}>
          <Link href="#about" className="hover:underline" scroll={false}>
            about
          </Link>
          <Link href="#projects" className="hover:underline" scroll={false}>
            projects
          </Link>
          <Link href="#contact" className="hover:underline" scroll={false}>
            contact
          </Link>
        </div>
      </h2>
    </section>
  )
}

export default Intro
