import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';
import { SharedAStyles } from './shared-a-styles';

class W50NavItem extends LitElement {
  static get properties() {
    return {
      path: {
        type: Number
      },
      caption: {
        type: String
      },
      isCurrent: {
        type: Boolean
      },
      num: {
        type: Number
      }
    };
  }

  constructor() {
    super();
  }

  onChangePart(pt) {
    this.dispatchEvent(new CustomEvent('changePart', {
      bubbles: true,
      composed: true,
      detail: {
        part: pt
      }
    }));
  }

  render() {
    return html`
    ${SharedStyles}
    ${SharedAStyles}
    
    <style>
      :host {
        --a-size: 102px;
        --a-bb: 10px;

        color: var(--not-current);
        font-family: "SPMyungJo", serif;
        font-weight: bold;
      }
      :host(.current) {
        color: var(--point-pt${this.num});
      }
      a:hover {
        background-color: #f1efed;
      }
      .num {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #d7cabe;
        border-bottom-color: var(--not-current);
      }
      
      :host(.current) .li1 {
        color: #669aa7;
      }
      :host(.current) .li2 {
        color: #d4644a;
      }
      :host(.current) .li3 {
        color: #e5ae0e;
      }
      :host(.current) .li1 a, :host(.current) .li1 .num {
        border-bottom-color: #669aa7;
      }
      :host(.current) .li2 a, :host(.current) .li2 .num {
        border-bottom-color: #d4644a;
      }
      :host(.current) .li3 a, :host(.current) .li3 .num {
        border-bottom-color: #e5ae0e;
      }
      :host(.current) .num {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: var(--point-pt${this.num});
      }

      a {
        box-sizing: border-box;
        display: block;
        height: var(--a-size);
        text-align: center;
        border-bottom: var(--a-bb) solid var(--not-current);
        padding-top: 23px;
      }
      :host(.current) a {
        border-bottom-width: var(--a-bb);
        border-bottom-style: solid;
        border-bottom-color: var(--point-pt${this.num});
      }
      span {
        display: block;
        font-size: 12px;
      }
      .num {
        display: inline-block;
        font-size: 20px;
        line-height: 1.4;
      }
      .caption {
        margin-top: 5px;
      }
    </style>
    <li class="li${this.num}">
      <a href="${this.path}">
        <span class="num">0${this.num}</span>
        <span class="caption">${this.caption}</span>
      </a>
    </li>
    `;
  }
};

customElements.define('w50-nav-item', W50NavItem);
