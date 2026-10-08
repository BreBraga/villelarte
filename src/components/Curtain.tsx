import styles from './Curtain.module.css'

/**
 * Stage dressing shared by every page: scalloped valance, a wine-red curtain
 * that parts on load, and the design-system circles revealed behind it.
 * Place inside a `position: relative; overflow: hidden` container. Tune with
 * CSS variables on the container: --drape, --dot-oliva, --dot-laranja, --dot-areia.
 */
export function Curtain() {
  return (
    <div aria-hidden="true">
      <div className={styles.valance} />
      <div className={styles.dots}>
        <i className={styles.dotOliva} />
        <i className={styles.dotLaranja} />
        <i className={styles.dotAreia} />
      </div>
      <div className={`${styles.curtain} ${styles.left}`} />
      <div className={`${styles.curtain} ${styles.right}`} />
    </div>
  )
}
