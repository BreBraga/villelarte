import { rooms } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import styles from './Space.module.css'

export function Space() {
  return (
    <section id="espaco" className="section">
      <div className="wrap">
        <SectionHead label="Espaço Cultural Villelarte" title="Um lugar onde algo está sempre prestes a acontecer.">
          No Centro de Nova Iguaçu, nossa sede reúne salas de aula, ateliê e um teatro de verdade para ensaiar, criar e
          estrear sem sair de casa.
        </SectionHead>

        <div className={styles.grid}>
          <Reveal className={styles.photos}>
            <figure className={styles.wide}>
              <img src="/assets/img/espaco-fachada.jpg" alt="Fachada do Espaço Cultural Villelarte" loading="lazy" />
              <figcaption>Nossa sede</figcaption>
            </figure>
            <figure>
              <img src="/assets/img/espaco-palco.jpg" alt="Palco da Sala de Espetáculos Fábio Mateus" loading="lazy" />
              <figcaption>Sala Fábio Mateus</figcaption>
            </figure>
            <figure>
              <img src="/assets/img/espaco-foyer.jpg" alt="Foyer do espaço cultural" loading="lazy" />
              <figcaption>Foyer</figcaption>
            </figure>
          </Reveal>

          <Reveal className={styles.poster}>
            <span className="tag">Estrutura</span>
            <h3>Feito para criar, ensaiar e estrear.</h3>
            <ul className={styles.rooms}>
              {rooms.map((room) => (
                <li key={room}>{room}</li>
              ))}
            </ul>
            <div className={styles.hall}>
              <h4>Sala de Espetáculos Fábio Mateus</h4>
              <p>
                Homenagem ao palhaço, ator, produtor e empreendedor social que cocriou o EncontrArte e ajudou a
                democratizar a cultura na Baixada Fluminense.
              </p>
              <dl className={styles.hallNums}>
                <div><dt>sessões em 2025</dt><dd>84</dd></div>
                <div><dt>espectadores em 2025</dt><dd>6.500</dd></div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
