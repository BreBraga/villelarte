import { aboutFacts } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import styles from './About.module.css'

export function About() {
  return (
    <section id="quem-somos" className="section">
      <div className="wrap">
        <SectionHead label="Quem somos" title="Arte como espaço de encontro.">
          Somos uma escola livre de artes que acredita na arte como algo que agrega à formação e à educação de cada aluno
          e que fica ainda melhor quando é compartilhada.
        </SectionHead>
        <div className={styles.grid}>
          <Reveal className={styles.panel}>
            <p className={styles.vision}>Ser referência de excelência no setor cultural e educacional da Baixada Fluminense.</p>
            <p>
              Estamos no mercado desde 2014 oferecendo cursos de canto, violão, teclado, fotografia, desenho e oficinas de
              teatro, além de treinamento individual de interpretação para TV e cinema, apresentações de espetáculos e
              produções culturais variadas.
            </p>
            <p>
              Nossas atividades abraçam públicos diversos, de crianças a partir de 5 anos até os mais experientes, sempre
              com apresentações que agradam a todos os gostos.
            </p>
          </Reveal>
          <Reveal className={styles.facts}>
            {aboutFacts.map((fact) => (
              <div key={fact.value} className={styles.fact}>
                <b>{fact.value}</b>
                <span>{fact.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
