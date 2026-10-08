import { whatsappLink } from '../data/content'
import { Curtain } from './Curtain'
import styles from './Hero.module.css'

/**
 * The page opens like a show: a wine-red curtain parts on load and settles
 * as side drapes framing the stage. Everything else on the page stays quiet.
 */
export function Hero() {
  return (
    <section className={styles.stage} aria-labelledby="hero-title">
      <Curtain />

      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <div className="label">Escola livre de artes · Nova Iguaçu/RJ</div>
          <h1 id="hero-title" className={styles.title}>
            Todo mundo merece um <em>palco.</em>
          </h1>
          <p className={styles.lead}>
            Teatro, canto, instrumentos, fotografia e desenho num lugar feito para criar, experimentar e pertencer. Desde
            2014 usando a arte como ponte entre as pessoas.
          </p>
          <div className={`btn-row ${styles.actions}`}>
            <a
              className="btn btn--primary"
              href={whatsappLink('Olá! Quero saber mais sobre os cursos da Villelarte.')}
              target="_blank"
              rel="noopener"
            >
              Quero fazer uma aula
            </a>
            <a className="btn btn--outline" href="#cursos">
              Conheça os cursos
            </a>
          </div>
          <ul className={styles.meta}>
            <li><i style={{ background: 'var(--vinho)' }} />A partir de 5 anos</li>
            <li><i style={{ background: 'var(--laranja)' }} />12 anos de história</li>
            <li><i style={{ background: 'var(--verde)' }} />Espaço cultural próprio</li>
          </ul>
        </div>

        <div className={styles.art}>
          <figure className={`${styles.photo} ${styles.photoMain}`}>
            <img src="/assets/img/curso-teatro.jpg" alt="Elenco da Villelarte em cena, com figurinos coloridos" />
          </figure>
          <figure className={`${styles.photo} ${styles.photoSmall}`}>
            <img src="/assets/img/turma-1.jpg" alt="Turma infantil da Villelarte em espetáculo de fim de ano" />
          </figure>
          <blockquote className={styles.card}>
            <span className="tag">Nossa missão</span>
            <p>“Usar a arte como ferramenta de socialização e interação entre as pessoas.”</p>
          </blockquote>
        </div>
      </div>

      <div className={styles.floor} aria-hidden="true" />
    </section>
  )
}
