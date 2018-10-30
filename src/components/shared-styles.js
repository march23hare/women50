import { html } from '@polymer/lit-element';

export const SharedStyles = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
    font-family: "NotoSansKR", sans-serif;
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
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    padding-left: 34px;
    padding-right: 34px;
  }
  section > figure {
    padding-left: 0;
    padding-right: 0;
  }
  section:nth-child(2) {
    background-color: #f7f6f4;
  }
  section:nth-child(3) {
    background-color: #f1efed;
  }
  section:last-child, section:first-child {
    background-color: transparent;
  }
  blockquote {
    margin: 0;
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
    margin-bottom: 60px;
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
  figure {
    max-width: 768px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  figcaption {
    color: #a4a09d;
    text-align: center;
    font-size: 14px;
  }
  figcaption::before {
    content: "<";
  }
  figcaption::after {
    content: ">";
  }
  img {
    width: 100%;
  }
  blockquote {
    font-family: "SPMyungJo", serif;
    max-width: 768px;
    margin: 80px auto;
    text-align: left;
  }
  @media screen and (max-width: 360px) {
    section > *, blockquote {
      margin-left: 20px;
      margin-right: 20px;
      padding: 0;
    }
    figure {
      padding: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
`;