import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        Bitcoin Night
      </h1>
      <p>Estamos trabajando en este site, buscanos en las redes.</p>
      <div class={styles['button-group']}>
        <a href="https://www.instagram.com/bitcoin_night/" target="_blank" class="button button-dark">
          Instagram
        </a>
        <a href="https://twitter.com/bitcoin_night" target="_blank" class="button button-dark">
          Twitter
        </a>
      </div>
    </div>
  );
});
