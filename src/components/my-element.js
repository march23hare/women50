import {LitElement, html} from '@polymer/lit-element';

class MyElement extends LitElement {

  // Public property API that triggers re-render (synced with attributes)

  static get properties() {
    return {
      foo: {
        type: String,
        value: 'foo'
      },
      whales: {
        type: Number,
        value: 5
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('click', async (e) => {
      this.whales++;
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    });
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  render() {
    return html`
    <a href="#"><slot name="title"></slot></a>
    <a href="#"><slot name="content"></slot></a>
    `;
  }

}
customElements.define('my-element', MyElement);