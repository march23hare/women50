import { LitElement, html } from '@polymer/lit-element';

class W50Next extends LitElement {
  static get properties() {
    return {
      href: {
        type: String
      },
      num: {
        type: Number
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
        color: black;
        text-decoration: none;
      }
      a {
        box-sizing: border-box;
        display: block;
        max-width: 768px;
        height: 100px;
        margin: 0 auto;
        padding-top: 9px;
        padding-left: 34px;
        background-color: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        font-family: "SPMyungJo", serif;
        font-size: 18px;
        border-bottom-width: 11px;
        border-bottom-style: solid;
        border-bottom-color: ${this.color};
      }
      span {
        display: block;
        font-size: 10px;
      }
      .num, .caption {
        font-size: 18px;
      }
      .num {
        height: 23px;
        display: inline-block;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: black;
      }
    </style>
    <a href="${this.href}">
      <span class="num">0${this.num}</span>
      <span class="caption">${this.caption}</span>
      <span>다음 글 읽기</span>
    </a>
    `;
  }
};

customElements.define('w50-next', W50Next);
