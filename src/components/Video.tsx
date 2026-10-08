import { useState } from 'react'
import { contact } from '../data/content'
import { PlayIcon } from './Icons'
import { Reveal } from './Reveal'
import styles from './Video.module.css'

export function Video() {
  const [playing, setPlaying] = useState(false)
  const id = contact.youtubeVideoId

  return (
    <section id="canal" className={`section ${styles.section}`}>
      <div className={`wrap ${styles.grid}`}>
        <Reveal>
          <div className="label">No YouTube</div>
          <h2 className={styles.title}>Vem ver a Villelarte em cena.</h2>
          <p className={styles.text}>Ensaios, espetáculos, festivais e bastidores no nosso canal.</p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <a className="btn btn--outline" href={contact.youtube} target="_blank" rel="noopener">
              Acessar o canal
            </a>
          </div>
        </Reveal>
        <Reveal className={styles.frame}>
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title="Vídeo Villelarte Produções"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.poster}
              style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
              onClick={() => setPlaying(true)}
              aria-label="Reproduzir vídeo da Villelarte"
            >
              <span><PlayIcon /></span>
            </button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
