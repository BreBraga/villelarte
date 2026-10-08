import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import styles from './SectionHead.module.css'

type Props = {
  label: string
  title: ReactNode
  children?: ReactNode
  tone?: 'light' | 'dark'
}

export function SectionHead({ label, title, children, tone = 'light' }: Props) {
  return (
    <Reveal className={`${styles.head} ${tone === 'dark' ? styles.dark : ''}`}>
      <div>
        <div className="label">{label}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children && <div className={styles.aside}>{children}</div>}
    </Reveal>
  )
}
