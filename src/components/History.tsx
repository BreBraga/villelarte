import { productions, showAverages } from '../data/content'
import { Reveal } from './Reveal'
import styles from './History.module.css'

export function History() {
  return (
    <section id="trajetoria" className="section" aria-labelledby="history-title">
      <div className="wrap">
        <Reveal className={styles.box}>
          <div className={`label ${styles.label}`}>O que fizemos em 12 anos</div>
          <h2 id="history-title" className={styles.title}>Cultura em movimento, temporada após temporada.</h2>
          <p className={styles.intro}>
            Mostras, festivais e maratonas que reúnem alunos, artistas e famílias inteiras e fazem do Centro de Nova
            Iguaçu um dos palcos mais vivos da Baixada.
          </p>
          <dl className={styles.stats}>
            {productions.map((item) => (
              <div key={item.label} className={styles.stat}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <dl className={`${styles.stats} ${styles.averages}`}>
            {showAverages.map((item) => (
              <div key={item.label} className={styles.stat}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
