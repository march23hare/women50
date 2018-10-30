import { LitElement, html } from '@polymer/lit-element';

import { SharedStyles } from './shared-styles';
import { SharedLiStyles } from './shared-li-styles';

import './w50-nav-item';

class W50Nav extends LitElement {
  static get properties() {
    return {
      currentPart: {
        type: Number
      },
      routes: {
        type: Array
      }
    };
  }

  constructor() {
    super();
  }
  
  firstUpdated() {
    this.addEventListener('changePart', e => {
      this.currentPart = e.detail.part;
    });
  }
  
  render() {
    return html`
    ${SharedStyles}
    ${SharedLiStyles}
    <style>
      :host {        
        width: 100%;
        z-index: 999;
        position: fixed;
        background-color: #ffffff;
        width: 100%;
        box-shadow: 0 0 7px 0 rgba(0,0,0,0.4);
      }
      :host(.homepage) {
        position: relative;
      }
      ul {
        display: flex;
        justify-content: center;
        max-width: 768px;
        margin: 0 auto;
        padding: 0;
      }
      li {
        flex-grow: 1;
      }
    </style>
    
    <ul>
    ${this.routes.map((v, i) => {
      return html`
        <li>
          <w50-nav-item class="${this.currentPart === i ? 'current' : ''}" @click="${(e) => {this.currentPart = i}}" .num="${i + 1}" .caption="${v.caption}" .path="${v.path}" .isCurrent="${this.currentPart === i}"></w50-nav-item>
        </li>`;
    })}
    </ul>`;  
  }
};

customElements.define('w50-nav', W50Nav);
