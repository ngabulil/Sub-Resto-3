import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  header: document.querySelector('header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

class footerElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
      <div class="footer-content">
          <p>Copyright © 2022 - Yoga Ulil Al Baab</p>`;
  }
}

customElements.define('footer-element', footerElement);
