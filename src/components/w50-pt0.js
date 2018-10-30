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
  onAfterEnter(context) {
    scrollTo(0, 0);
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
        font-size: 18;
        line-height: 30px;
      }
      section > h1 {
        max-width: 100%;
      }
      section:first-child {
        max-width: 100%;
        height: 550px;
        background-color: transparent, transparent;
        background-image: radial-gradient(closest-side, rgba(51,33,12,0.25), rgba(51,33,12,0)), url("images/pt0_intro_pic.png");
        background-repeat: no-repeat, no-repeat;
        background-position-x: center, center;
        background-size: 178px 178px, cover;
        background-position-y: 314px, 55%;
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
      blockquote {
        margin: 0;
        text-align: center;
      }
    </style>
    <div>
      <header class="header">
        <a href="#">아름다운 뉴스</a>
        <a href="#" class="sns-share"><span class="readable-hidden">공유</span></a>
      </header>
      <div class="main">
        <section>
          <h1>
            <span>인생 2막,</span>
            <span>여자 나이</span>
            <span> 50</span>
          </h1>
        </section>
        <section>
          <blockquote>가슴 속에서부터 화가 올라와요.</blockquote>
          <blockquote>갑자기 눈물이 왈칵 나네요.</blockquote>
          <blockquote>지금까지 무엇을 하고 살았는지 모르겠어요.</blockquote>
        </section>
        <section>
          <p>폐경을 전후로 신체적, 심리적, 사회적 변화를 겪고 있는</p>
          <p>50세 이상 중년 여성들의 속마음, 누구나 한번쯤 들어보았을 거다.</p>
          <p>엄마, 언니 어쩌면 나의 이야기일 수 밖에 없는 중년 여성의 현재를</p>
          <p>그녀들에게 직접 들어보았다. 혼란과 위기를 느끼고 있는</p>
          <p>중년 여성을 위한 지원 기관 정보도 정리했다.</p>
        </section>
      </div>
    </div>`;
  }
}

customElements.define('w50-pt0', W50Pt0);
