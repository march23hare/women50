import { html } from '@polymer/lit-element';

export const SharedRevealStyles = html`
<style>
  h1, blockquote, h2 {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s ease-in;
  }

  h1.reveal, blockquote.reveal, h2.reveal {
    opacity: 1;
    transform: translateY(0);
  }
</style>
`;