import { useState } from 'react'
import { nav } from '../data/content'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className="wrap">
        <nav className={styles.nav} aria-label="Principal">
          <a href="#topo" aria-label="Villelarte Produções, voltar ao início" onClick={close}>
            <img src="/assets/img/logo-villelarte.png" className={styles.logo} alt="Villelarte Produções" width={81} height={54} />
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
          <div id="menu" className={`${styles.links} ${open ? styles.open : ''}`}>
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={styles.link} onClick={close}>
                {item.label}
              </a>
            ))}
            <a className="btn btn--primary btn--sm" href="#contato" onClick={close}>
              Fale com a gente
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
