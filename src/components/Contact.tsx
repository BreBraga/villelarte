import { contact, mapsEmbedLink, mapsSearchLink, whatsappLink } from '../data/content'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'
import { Reveal } from './Reveal'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contato" className={`section ${styles.section}`}>
      <div className={`wrap ${styles.grid}`}>
        <Reveal className={styles.cta}>
          <div className={`label ${styles.label}`}>Vem viver a arte</div>
          <h2>Sua história pode começar no próximo ensaio.</h2>
          <p>
            Fale com a gente pelo WhatsApp para conhecer turmas, horários e valores, ou venha conhecer o nosso espaço no
            Centro de Nova Iguaçu.
          </p>
          <div className={`btn-row ${styles.actions}`}>
            <a
              className="btn btn--light"
              href={whatsappLink('Olá! Quero saber mais sobre a Villelarte.')}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fill="#25D366" />
              Chamar no WhatsApp
            </a>
            <a className={`btn btn--outline ${styles.ghost}`} href={contact.instagram} target="_blank" rel="noopener">
              Seguir no Instagram
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.info}>
          <a className={styles.item} href={whatsappLink('Olá!')} target="_blank" rel="noopener">
            <span className={styles.icon}><PhoneIcon /></span>
            <span><small>WhatsApp</small><b>{contact.phoneLabel}</b></span>
          </a>
          <a className={styles.item} href={mapsSearchLink} target="_blank" rel="noopener">
            <span className={styles.icon}><PinIcon /></span>
            <span><small>Onde nos encontrar</small><b>{contact.address}</b></span>
          </a>
          <div className={styles.map}>
            <iframe title="Mapa do Espaço Cultural Villelarte" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapsEmbedLink} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
