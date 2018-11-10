import { LitElement, html } from '@polymer/lit-element';

class W50Img extends LitElement {
  static get properties() {
    return {
      src: {
        type: String
      },
      figcaption: {
        type: String
      },
      alt: {
        type: String
      },
      desc: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  onPopup(e){
    const popup = this.shadowRoot.querySelector('.popup');
    popup.className = 'popup on';
  }

  offPopup(e) {
    const popup = this.shadowRoot.querySelector('.popup');
    popup.className = 'popup';
  }

  render () {
    return html`
    <style>
      :host {
        width: 100%;
      }
      figure {
        position: relative;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
      }
      figure::after {
        content: "";
        background-image: url("images/mag.png");
        background-size: contain;
        display: block;
        position: absolute;
        bottom: 0px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
      img {
        max-width: 100%;
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
      figure {
        cursor: zoom-in;
      }
      .popup {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: fixed;
        z-index: 9999;
        width: 0;
        height: 100vh;
        background-color: #57433f;
        top: 0;
        right: 0;
        transition: width 0.5s ease-in-out;
      }
      .popup > * {
        align-self: flex-end;
      }
      .popup.on {
        width: 100%;
      }
      .popup * {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .popup.on * {
        opacity: 1;
      }
      .on .btn-close {
        position: absolute;
        width: 22px;
        height: 22px;
        right: 17px;
        top: 17px;
        background-image: url("images/x.png");
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      .popup img {
        display: block;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
      }
      .desc {
        box-sizing: border-box;
        background-color: #33210c;
        position: relative;
        bottom: 0;
        max-width: 768px;
        padding-left: 25px;
        padding-right: 25px;
        margin-left: auto;
        margin-right: auto;
      }
      .desc > * {
        font-family: "NotoSansKR", sans-serif;
        color: white;
        font-size: 16px;
      }

      @media screen and (max-width: 360px) {
        .popup img {
          width: 100%;
        }
        .desc {
          padding-left: 16px;
          padding-right: 16px;
        }
        .desc > * {
          font-size: 11px;
        }
      }
      @media screen and (min-width: 361px) and (max-width: 768px) {
        .popup img {
          width: 100%;
        }
        .desc {
          padding-left: 16px;
          padding-right: 16px;
        }
      }

        
    </style>
    <div class="popup">
      <div class="btn-close" @click="${ e => this.offPopup(e) }"></div>
      <img src="${this.src}" alt="${this.alt}">
      <div class="desc">
        <h3>${this.figcaption}</h3>
        <p>${this.desc}</p>
      </div>
    </div>
    <div>
      <figure @click="${ e => this.onPopup(e) }">
        <picture>
          <img src="${this.src}" alt="${this.alt}">
        </picture>
        <figcaption>${this.figcaption}</figcaption>
      </figure>
    </div>
    `;
  }
};

customElements.define('w50-img', W50Img);
