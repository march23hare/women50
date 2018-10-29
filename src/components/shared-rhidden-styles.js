import { html } from '@polymer/lit-element';

export const SharedRHiddenStyles = html`
<style>
  .readable-hidden {
    display: block;
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; /* added line */
    width: 1px;
  }
</style>
`;

