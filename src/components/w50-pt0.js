import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';
import { SharedAStyles } from './shared-a-styles';
import { SharedRHiddenStyles } from './shared-rhidden-styles';

class W50Pt0 extends LitElement {
  static get properties() {
    return {
    };
  }
  constructor() {
    super();
  }

  firstUpdated(){
    const slideIn = this.shadowRoot.querySelectorAll('.slide-in > blockquote');
    const slideIn2 = this.shadowRoot.querySelectorAll('.slide-in-2 > p');
    setTimeout(function () {
      slideIn[0].className = 'on';
    }, 300 + 700);
    setTimeout(function () {
      slideIn[1].className = 'on';
    }, 500 + 700);
    setTimeout(function () {
      slideIn[2].className = 'on';
    }, 700 + 700);
    setTimeout(function () {
      slideIn2[0].className = 'on';
    }, 900 + 700);
    setTimeout(function () {
      slideIn2[1].className = 'on';
    }, 1100 + 700);
    setTimeout(function () {
      slideIn2[2].className = 'on';
    }, 1300 + 700);
    setTimeout(function () {
      slideIn2[3].className = 'on';
    }, 1500 + 700);
    setTimeout(function () {
      slideIn2[4].className = 'on';
    }, 1700 + 700);
  }

  render() {
    return html`
    ${SharedStyles}
    ${SharedAStyles}
    ${SharedRHiddenStyles}
    <style>
      :host {
        --section-bg: #b08980;
        font-family: "SPMyungJo", serif;
        font-weight: bold;
      }
      .header {
        font-family: "NotoSansKR", sans-serif;
        font-weight: 500;
        padding: 0 34px;
        background-color: var(--section-bg);
        color: #ffffff;
        height: 34px;
        display: flex;
        justify-content: space-between;
      }
      .main {
        width: 100%;
        background-color: var(--section-bg);
      }
      section {
        box-sizing: border-box;
        max-width: 700px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 30px;
      }
      section > h1 {
        max-width: 100%;
      }
      section:first-child {
        width: 100%;
        height: 550px;
        padding-top: 200px;
      }
      section:nth-child(2){
        background-color: var(--section-bg);
        padding-bottom: 0;
      }
      section:nth-child(3){
        padding-top: 0;
      }
      a, a:visited {
        font-size: 14px;
        line-height: 33px;
      }
      .sns-share::before {
        content: "";
        display: block;
        margin-top: 7px;
        width: 18px;
        height: 18px;
        background-image: url("images/sns_share.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      h1 span {
        text-align: center;
        display: block;
        font-family: "nJoyStories", serif;
        font-size: 60px;
        font-weight: bold;
        line-height: 0.9;
      }
      h1 span:nth-child(2) {
        font-size: 100px;
      }
      h1 span:nth-child(3) {
        font-size: 170px;
      }
      section:nth-child(n+2){
        color: #ffffff;
      }
      p {
        margin-top: 0;
        text-align: center;
      }
      p:first-child {
        margin-top: 34px;
      }
      .slide-in > blockquote {
        margin: 0;
        text-align: center;
      }
      blockquote, p {
        transform: translateY(20px);
        opacity: 0;
        transition: all 1s ease-in;
      }
      .on {
        transform: translateY(0px);
        opacity: 1;
      }
      section.video {
        position: relative;
        margin: 0;
        padding: 0;
        max-width: 100%;
        height: 550px;
      }
      section > div.video-container {
        width: 100%;
        max-width: 100%;
        height: 550px;
        overflow: hidden;
        position: relative;
        padding: 0;
        margin: 0;
      }
      video {
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 977px) {
        video {
          min-height: 550px;
          min-width: 978px;
        }
      }
      .video-content {
        position: absolute;
        top: 250px;
        left: 50%;
        transform: translate(-50%, 0);
        margin: 0;
        padding: 0;
        width: 100%;

        background-image: radial-gradient(closest-side, rgba(51,33,12,0.25), rgba(51,33,12,0));
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: 178px 178px;
        background-position-y: 100px;
      }
    </style>
    <div>
      <header class="header">
        <a href="#">아름다운 뉴스</a>
        <a href="#" class="sns-share"><span class="readable-hidden">공유</span></a>
      </header>
      <div class="main">
        <section class="video">
          <div class="video-container">
            <video autoplay muted id="myVideo">
              <source src="images/intro.mp4" type="video/mp4">
            </video>
          </div>
          <div class="video-content">
            <h1>
              <span>인생 2막,</span>
              <span>여자 나이</span>
              <span> 50</span>
            </h1>
          </div>
        </section>
        <section class="slide-in">
          <blockquote>가슴 속에서부터 화가 올라와요.</blockquote>
          <blockquote>갑자기 눈물이 왈칵 나네요.</blockquote>
          <blockquote>지금까지 무엇을 하고 살았는지 모르겠어요.</blockquote>
        </section>
        <section class="slide-in-2">
          <p>폐경을 전후로 신체적, 심리적, 사회적 변화를 겪고 있는</p>
          <p>50세 이상 중년 여성들의 속마음이다.</p>
          <p>엄마, 언니 어쩌면 나의 이야기일 수 밖에 없는 중년 여성의 현재를</p>
          <p>그녀들에게 직접 들어보았다. 혼란과 위기를 느끼고 있는</p>
          <p>중년 여성을 위한 지원 기관 정보도 정리했다.</p>
        </section>
      </div>
    </div>`;
  }
}

customElements.define('w50-pt0', W50Pt0);
