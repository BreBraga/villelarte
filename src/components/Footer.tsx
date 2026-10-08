import { contact, whatsappLink } from '../data/content'
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YouTubeIcon } from './Icons'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

const socials = [
  { label: 'Instagram', href: contact.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: contact.facebook, Icon: FacebookIcon },
  { label: 'YouTube', href: contact.youtube, Icon: YouTubeIcon },
]

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="wrap">
          <div className={styles.top}>
            <div className={styles.logo}>
              <img src="/assets/img/logo-villelarte.png" alt="Villelarte Produções" width={90} height={60} />
            </div>
            <div>
              <strong className={styles.motto}>Todo mundo merece um palco.</strong>
              <span className={styles.small}>Escola livre de artes · Espaço Cultural · Cia Villelarte</span>
            </div>
            <div className={styles.socials}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <span className={styles.small}>© {year} Villelarte Produções · {contact.address}</span>
            <span className={styles.small}>{contact.phoneLabel}</span>
          </div>
        </div>
      </footer>

      <a
        className={styles.whatsFloat}
        href={whatsappLink('Olá! Vim pelo site da Villelarte.')}
        target="_blank"
        rel="noopener"
        aria-label="Conversar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  )
}
