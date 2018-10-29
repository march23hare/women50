import { LitElement, html } from '@polymer/lit-element';

class W50Pt3 extends LitElement {
  static get properties() {
    return {
      isCurrent: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
  }
  render() {
    return html`
    <div>
      pt3
    </div>`;
  }
}

customElements.define('w50-pt3', W50Pt3);
