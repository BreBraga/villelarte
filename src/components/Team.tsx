import { founders, team, teamPhoto } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import styles from './Team.module.css'

export function Team() {
  return (
    <section id="equipe" className="section">
      <div className="wrap">
        <SectionHead label="Equipe Villelarte" title="Gente de verdade no centro.">
          Atores, diretores, músicos, figurinistas, iluminadores e educadores: artistas que vivem o palco e dividem essa
          experiência com cada aluno.
        </SectionHead>

        <div className={styles.founders}>
          {founders.map((f) => (
            <Reveal as="article" key={f.name} className={styles.founder}>
              <img src={teamPhoto(f.photo)} alt={f.name} loading="lazy" />
              <div>
                <span className="tag">{f.role}</span>
                <h3>{f.name}</h3>
                <p>{f.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className={styles.grid}>
          {team.map((m) => (
            <Reveal as="li" key={m.name} className={styles.member}>
              <img src={teamPhoto(m.photo)} alt={m.name} loading="lazy" />
              <strong>{m.name}</strong>
              <span>{m.role}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
