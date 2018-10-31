import { LitElement, html } from '@polymer/lit-element';

class W50Jump extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      description: {
        type: String
      },
      caption: {
        type: String
      },
      color: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  render () {
    return html`
    <style>
      a, a:visited {
        color: ${this.color};
        text-decoration: none;
      }
      a {
        display: block;
        max-width: 724px;
        min-height: 100px;
        margin: 80px auto;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        font-family: "SPMyungJo", serif;
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 14px;
        padding-right: 40px;
        padding-left: 40px;
      }
      span {
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
      .caption {
        color: white;
        width: 240px;
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
        border-radius: 20px;
        background-color: ${this.color};
      }
    </style>
    <a href="${this.href}">
      <span class="description">${this.description}</span>
      <span class="caption">${this.caption}</span>
    </a>
    `;
  }
};

customElements.define('w50-jump', W50Jump);
