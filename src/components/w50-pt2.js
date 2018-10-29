import { LitElement, html } from '@polymer/lit-element';

class W50Pt2 extends LitElement {
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
      pt2
    </div>`;
  }
}

customElements.define('w50-pt2', W50Pt2);
