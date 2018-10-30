import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';

import './w50-rosen';

class W50Search extends LitElement {
  static get properties() {
    return {
      db: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.db = {
      'seoul': {
        'seong-dong': [
          {
            'name': '성동여성인력개발센터',
            'address': '서울특별시 성동구 무학로2길 54',
            'tel': '02-3395-1500',
            'web': 'http://sd.seoulwomanup.or.kr/',
            'desc': '국/시비 지원프로그램 (내일배움카드제, 재직자 훈련, 서울시 지원사업, 여성가족부 지원사업, 기타 지원 직업훈련), 직업교육, 생활문화 등의 사업 진행.'
          },
          {
            'name': '성동구정신건강복지센터',
            'address': '서울특별시 성동구 금호로 114',
            'tel': '02-2298-1080',
            'web': 'http://www.mindcare.or.kr/',
            'desc': '만성정신장애인관리사업, 아동/청소년 정신건강 사업, 정신건강증진사업, 정신보건 환경조성사업 진행.'
          }
        ]
      }
    };
  }

  onSearch(e) {
    const slct2 = this.shadowRoot.querySelector('#slct2');
    if( slct2.value ) {
      this.shadowRoot.querySelector('.result').className = 'result show';
    }
  }

  render() {
    return html`
    ${SharedStyles}
    <style>
      :host {
        box-sizing: border-box;
        display: block;
        max-width: 726px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 60px;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      h3, h4, p {
        color: #e5ae0e;
        font-family: "SPMyungJo", serif;
      }
      h3, h4, p {
        margin-left: 38px;
        margin-right: 38px;
      }
      h3 {
        font-size: 26px;
      }
      h4 {
        font-size: 18px;
      }
      div.select-group {
        margin-left: 40px;
        margin-top: 60px;
        margin-bottom: 60px;
      }
      div.select {
        display: inline-block;
        max-width: 300px;
        min-width: 250px;
      }
      select {
        margin-right: 10px;
        font-family: "NotoSansKR", sans-serif;
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 2px solid #e5ae0e;
        border-radius: 10px;
      }
      div.result p {
        color: black;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
      }
      div.result .res {
        padding: 20px;
        background-color: #f7f6f4;
        margin-left: 38px;
        margin-right: 38px;
      }
      div.result, div.res {
        display: none;
      }
      div.result.show, div.res.show {
        display: block;
      }
      p.info span {
        font-size: 14px;
        color: #b3a090;
      }
      div.res {
        margin-bottom: 40px;
      }
      hr {
        display: block;
        height: 2px;
        border: 0;
        border-top: 2px solid #ded5cd;
        margin: 1em 0;
        padding: 0;
      }
    </style>
    <div>
      <h3>
        <span>중년 여성을 위한</span><br />
        <span>지역별 지원 기관 찾기</span>
      </h3>
      <P>원화는 지역을 검색하고<br />도움받을 수 있는 기관을 찾아보세요</P>
      <div class="select-group">
        <div class="select">
          <select name="slct" id="slct1">
            <option>시·도 선택</option>
            <option value="seoul">서울특별시</option>
            <option value="gangwon">강원도</option>
            <option value="gyeongi">경기도</option>
          </select>
        </div>
        <div class="select">
          <select name="slct" id="slct2" @change="${ e => this.onSearch(e) }">
            <option>시·군·구 선택</option>
            <option value="gangnam">강남구</option>
            <option value="gangdong">강동구</option>
            <option value="seongdong">성동구</option>
          </select>
        </div>
      </div>
      <div class="result">
        ${this.db['seoul']['seong-dong'].map((v) => {
          return html`
          <style>
          </style>
          <div class="res show">
            <h4>${v.name}</h4>
            <hr size="2px" />
            <p>${v.desc}</p>
            <p class="info">
              <span>${v.address}</span><br/>
              <span>${v.tel}</span><br/>
              <span>${v.web}</span><br/>
            </p>
          </div>
          `;
        })}
      </div>
    </div>
    `;
  }
}

customElements.define('w50-search', W50Search);
