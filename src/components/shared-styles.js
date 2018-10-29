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
    font-size: 16px;
    width: 100%;
    padding-top: 57px;
    padding-bottom: 57px;
  }
  section > * {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  section:nth-child(2) {
    background-color: #f7f6f4;
  }
  section:nth-child(3) {
    background-color: #f1efed;
  }
  section:last-child, section:first-child {
    background-color: #ffffff;
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
  h1 {
    margin-top: 23px;
    margin-bottom: 62px;
    font-family: "nJoyStories", serif;
    font-weight: bold;
  }
  h1 .num {
    display: inline-block;
    height: 56px;
    font-size: 50px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }
  h1 .title {
    display: block;
    margin-top: 5px;
    line-height: 60px;
    height: 60px;
    font-size: 60px;
  }
  h2 {
    font-family: "SPMyungJo", serif;
    font-size: 26px;
    margin-top: 11px;
    margin-bottom: 57px;
  }
  p {
    margin-top: 20px;
  }
</style>
`;