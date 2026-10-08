import { useRef } from 'react'
import { shows } from '../data/content'
import { SectionHead } from './SectionHead'
import styles from './Cia.module.css'

const totalNominations = shows.reduce((sum, s) => sum + s.nominations, 0)
const totalAwards = shows.reduce((sum, s) => sum + s.awards, 0)

export function Cia() {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    el.scrollBy({ left: (card.offsetWidth + 18) * dir, behavior: 'smooth' })
  }

  return (
    <section id="cia" className={`section ${styles.section}`}>
      <div className="wrap">
        <SectionHead label="Cia Villelarte" title="Da sala de aula para os festivais." tone="dark">
          <p>
            Formada por professores e alunos formados na Villelarte, a Cia já está em seu nono espetáculo profissional e
            coleciona prêmios em festivais do Rio de Janeiro.
          </p>
          <div className={styles.summary}>
            <div><b>{totalNominations}</b> indicações</div>
            <div><b>{totalAwards}</b> prêmios</div>
          </div>
        </SectionHead>

        <div className={styles.track} ref={track} tabIndex={0} aria-label="Espetáculos da Cia Villelarte">
          {shows.map((show) => (
            <article key={show.title} className={styles.card}>
              <figure className={`${styles.figure} ${show.image ? '' : styles.noPhoto}`}>
                {show.image ? (
                  <img src={show.image} alt={show.alt ?? show.title} loading="lazy" />
                ) : (
                  <em aria-hidden="true">{show.title}</em>
                )}
                <span className={styles.year}>{show.year}</span>
              </figure>
              <div className={styles.body}>
                <h3>{show.title}</h3>
                <p>{show.synopsis}</p>
                <div className={styles.awards}>
                  <span>{show.nominations} indicações</span>
                  <span className={styles.win}>{show.awards} prêmios</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.controls}>
          <span>Arraste para ver os espetáculos</span>
          <div className={styles.buttons}>
            <button type="button" onClick={() => scroll(-1)} aria-label="Espetáculo anterior">←</button>
            <button type="button" onClick={() => scroll(1)} aria-label="Próximo espetáculo">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
