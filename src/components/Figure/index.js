import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * A screenshot (or a row of screenshots) with a caption, for the user guides.
 * Put ordinary Markdown images inside it, separated by blank lines:
 *
 *   <Figure caption="Side menu">
 *
 *   ![Side menu](./img/vht-008.webp)
 *
 *   </Figure>
 *
 * Phone screenshots are capped in height so they sit beside the text rather
 * than filling the page. Use `wide` for browser screenshots.
 */
export default function Figure({children, caption, wide = false}) {
  return (
    <figure className={clsx(styles.figure, wide && styles.wide)}>
      <div className={styles.images}>{children}</div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
