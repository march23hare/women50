import { LitElement, html } from '@polymer/lit-element';

class W50Pt1 extends LitElement {
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
      pt1
    </div>`;
  }
}

customElements.define('w50-pt1', W50Pt1);
