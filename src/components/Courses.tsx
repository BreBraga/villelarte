import { courses, whatsappLink } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import styles from './Courses.module.css'

export function Courses() {
  return (
    <section id="cursos" className={`section ${styles.section}`}>
      <div className="wrap">
        <SectionHead label="Cursos regulares" title="Descubra o seu lugar no palco.">
          Nossos cursos usam a arte como ferramenta pedagógica e social para todas as idades: um jeito de expressar
          sentimentos, desenvolver criatividade e imaginação e enxergar o mundo de outra forma.
        </SectionHead>

        <div className={styles.grid}>
          {courses.map((course) => (
            <Reveal as="article" key={course.name} className={styles.card}>
              <figure className={styles.figure}>
                <img src={course.image} alt={course.alt} loading="lazy" />
                <span className={`tag ${styles.tag}`}>{course.tag}</span>
              </figure>
              <div className={styles.body}>
                <h3>{course.name}</h3>
                <p>{course.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.note}>
          <p>
            <strong>Todo ciclo termina em cena.</strong>
            Os cursos regulares contam com espetáculos, mostras e festivais que concluem o ano das turmas. Também
            oferecemos treinamento individual de interpretação para TV e cinema.
          </p>
          <a
            className="btn btn--primary"
            href={whatsappLink('Olá! Quero saber sobre turmas e horários.')}
            target="_blank"
            rel="noopener"
          >
            Ver turmas e horários
          </a>
        </Reveal>
      </div>
    </section>
  )
}
