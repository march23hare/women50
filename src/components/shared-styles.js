import { html } from '@polymer/lit-element';

export const SharedStyles = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }
  section, p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
  section {
    padding-top: 57px;
    padding-bottom: 57px;
  }
  blockquote {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  blockquote::before {
    content:"“";
  }
  blockquote::after {
    content:"”";
  }
</style>
`;