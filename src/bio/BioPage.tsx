import { useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import {
  channels,
  contact,
  courses,
  mapsSearchLink,
  rooms,
  shows,
  ticketsUrl,
  whatsappLink,
  type ChannelIcon,
} from '../data/content'
import { Curtain } from '../components/Curtain'
import {
  BuildingIcon,
  CardIcon,
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  HandshakeIcon,
  InstagramIcon,
  MailIcon,
  MasksIcon,
  PaletteIcon,
  PhoneIcon,
  TicketIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from '../components/Icons'
import styles from './BioPage.module.css'

/** Staggers each item's entrance so it arrives just after the curtain opens. */
const delay = (i: number) => ({ '--i': i }) as CSSProperties

const channelIcons: Record<ChannelIcon, typeof MailIcon> = {
  handshake: HandshakeIcon,
  masks: MasksIcon,
  card: CardIcon,
  mail: MailIcon,
}

const socials = [
  { label: 'Instagram', href: contact.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: contact.facebook, Icon: FacebookIcon },
  { label: 'YouTube', href: contact.youtube, Icon: YouTubeIcon },
]

type TabId = 'atendimento' | 'cursos' | 'espetaculos' | 'espaco'

const tabs: { id: TabId; label: string; Icon: typeof MailIcon }[] = [
  { id: 'atendimento', label: 'Atendimento', Icon: PhoneIcon },
  { id: 'cursos', label: 'Cursos', Icon: PaletteIcon },
  { id: 'espetaculos', label: 'Espetáculos', Icon: MasksIcon },
  { id: 'espaco', label: 'O Espaço', Icon: BuildingIcon },
]

export function BioPage() {
  // /bio/#cursos opens straight on that tab
  const [tab, setTab] = useState<TabId>(() => {
    const fromHash = window.location.hash.slice(1)
    return tabs.some((t) => t.id === fromHash) ? (fromHash as TabId) : 'atendimento'
  })
  // after the first switch, panels swap in instantly instead of waiting for the curtain
  const [switched, setSwitched] = useState(false)
  const selectTab = (id: TabId) => {
    setTab(id)
    setSwitched(true)
    history.replaceState(null, '', `#${id}`)
  }
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow keys move between tabs, as in any tablist
  const onTabKey = (e: KeyboardEvent, index: number) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (index + step + tabs.length) % tabs.length
    selectTab(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className={styles.page}>
      <header className={styles.stage}>
        <Curtain />
        <div className={styles.identity}>
          <div className={styles.logo}>
            <img src="/assets/img/logo-villelarte.png" alt="" width={120} height={80} />
          </div>
          <h1>Villelarte Produções</h1>
          <p className="label">Escola livre de artes · Nova Iguaçu/RJ</p>
          <p className={styles.motto}>
            Todo mundo merece um <em>palco.</em>
          </p>
        </div>
        <div className={styles.floor} aria-hidden="true" />
      </header>

      <main className={styles.content}>
        <a className={styles.tickets} style={delay(0)} href={ticketsUrl} target="_blank" rel="noopener">
          <span className={styles.ticketIcon}><TicketIcon /></span>
          <span className={styles.ticketText}>
            <strong>Garantir ingressos</strong>
            <span>Peças em cartaz, horários e assentos no Lets.events</span>
          </span>
          <span className={styles.ticketArrow} aria-hidden="true">→</span>
        </a>

        <div className={styles.tablist} role="tablist" aria-label="Seções" style={delay(1)}>
          {tabs.map(({ id, label, Icon }, i) => (
            <button
              key={id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              tabIndex={tab === id ? 0 : -1}
              className={styles.tab}
              onClick={() => selectTab(id)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        <div
          key={tab}
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          className={`${styles.panel} ${switched ? styles.swap : ''}`}
          style={delay(2)}
        >
          {tab === 'atendimento' && <Atendimento />}
          {tab === 'cursos' && <Cursos />}
          {tab === 'espetaculos' && <Espetaculos />}
          {tab === 'espaco' && <Espaco />}
        </div>

        <nav className={styles.socials} style={delay(3)} aria-label="Redes sociais">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
              <Icon />
            </a>
          ))}
        </nav>

        <footer className={styles.footer}>
          <p>{contact.address}</p>
        </footer>
      </main>
    </div>
  )
}

/* ---------- Panels ---------- */

function PanelHead({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className={styles.panelHead}>
      <h2 className="label">{title}</h2>
      {hint && <span>{hint}</span>}
    </div>
  )
}

function Atendimento() {
  return (
    <>
      <PanelHead title="Canais de atendimento direto" hint="Toque para abrir" />
      <ul className={styles.list}>
        {channels.map((c) => {
          const Icon = channelIcons[c.icon]
          return (
            <li key={c.title} className={styles.channel}>
              <a className={styles.channelLink} href={c.href} target="_blank" rel="noopener">
                <span className={`${styles.badge} ${styles[`badge_${c.icon}`]}`}><Icon /></span>
                <span className={styles.linkText}>
                  <strong>{c.title}</strong>
                  <span>{c.detail}</span>
                </span>
              </a>
              <CopyButton value={c.copyValue} label={c.title} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the link still works.
    }
  }

  return (
    <button
      type="button"
      className={`${styles.copy} ${copied ? styles.copied : ''}`}
      onClick={copy}
      aria-label={`Copiar contato: ${label}`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className={styles.copyFeedback} aria-live="polite">
        {copied ? 'Copiado' : ''}
      </span>
    </button>
  )
}

function LinkCard({ href, image, title, subtitle }: { href: string; image: string; title: string; subtitle: string }) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener">
      <img src={image} alt="" loading="lazy" />
      <span className={styles.linkText}>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">→</span>
    </a>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className={styles.chips}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Box({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.box}>
      <h3 className="label">{title}</h3>
      {children}
    </section>
  )
}

function Cursos() {
  return (
    <>
      <a
        className={styles.featured}
        href={whatsappLink('Olá! Vim pelo Instagram e quero fazer uma aula na Villelarte.')}
        target="_blank"
        rel="noopener"
      >
        <img src="/assets/img/curso-teatro.jpg" alt="" />
        <span className={styles.featuredText}>
          <span className="tag">A partir de 5 anos</span>
          <strong>Quero fazer uma aula</strong>
          <span className={styles.featuredCta}>
            <WhatsAppIcon />
            Chamar no WhatsApp
          </span>
        </span>
      </a>
      <ul className={styles.list}>
        <li>
          <LinkCard
            href={whatsappLink('Olá! Vim pelo Instagram e quero saber sobre turmas e horários.')}
            image="/assets/img/curso-canto.jpg"
            title="Turmas e horários"
            subtitle="Teatro, canto, instrumentos, fotografia e desenho"
          />
        </li>
        <li>
          <LinkCard
            href={whatsappLink('Olá! Quero saber sobre o treinamento de interpretação para TV e cinema.')}
            image="/assets/img/curso-fotografia.jpg"
            title="Interpretação para TV e cinema"
            subtitle="Treinamento individual"
          />
        </li>
      </ul>
      <Box title="Cursos regulares">
        <Chips items={courses.map((c) => c.name)} />
      </Box>
    </>
  )
}

function Espetaculos() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <LinkCard href={ticketsUrl} image="/assets/img/cia-contando-recontando.jpg" title="Peças em cartaz" subtitle="Ingressos, horários e assentos no Lets.events" />
        </li>
        <li>
          <LinkCard href={contact.youtube} image="/assets/img/cia-nictofobia.jpg" title="Assista no YouTube" subtitle="Espetáculos, festivais e bastidores" />
        </li>
      </ul>
      <Box title="Repertório da Cia Villelarte">
        <ul className={styles.shows}>
          {shows.map((s) => (
            <li key={s.title}>
              <span>
                <strong>{s.title}</strong>
                <small>{s.year}</small>
              </span>
              <em>{s.awards} prêmios</em>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}

function Espaco() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <LinkCard href={mapsSearchLink} image="/assets/img/espaco-fachada.jpg" title="Como chegar" subtitle="Av. Doutor Luiz Guimarães, 1019, Centro, Nova Iguaçu" />
        </li>
      </ul>
      <Box title="Estrutura">
        <Chips items={rooms} />
      </Box>
      <section className={styles.hall}>
        <img src="/assets/img/espaco-palco.jpg" alt="Palco da Sala de Espetáculos Fábio Mateus" loading="lazy" />
        <div>
          <h3>Sala de Espetáculos Fábio Mateus</h3>
          <dl>
            <div><dt>sessões em 2025</dt><dd>84</dd></div>
            <div><dt>espectadores em 2025</dt><dd>6.500</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}
