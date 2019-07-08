import { LitElement, html } from "lit-element";
import "fa-icons";

class MyCard extends LitElement {
  static get properties() {
    return {
      category: { type: String },
      title: { type: String },
      subtitle: { type: String },
      link: { type: String },
      icon: { type: String },
      message: { type: String }
    };
  }

  render() {
    return html`
      <link rel="stylesheet" href="elements/my-element/styles.css" />

      <article class="directory__wrapper--card">
        <a class="main__directory--link" target="blank" href=${this.link}>
          <div class="card__wrapper">
            <div class="card__icon">
              <fa-icon
                class=${this.icon}
                style="fill:#ff7900;height: 5rem;width: 5rem;"
              ></fa-icon>
            </div>
            <h3 class="card__title">
              ${this.title}
            </h3>
            <p class="card__description">
              ${this.subtitle}
            </p>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define("my-card", MyCard);
