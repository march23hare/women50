import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';

import './w50-rosen';

class W50Search extends LitElement {
  static get properties() {
    return {
      db: {
        type: Array
      },
      slct2: {
        type: String
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
        ],
        'gangnam': [
          {
            'name': '서울과학기술새일센터(경력개발형)',
            'address': '서울특별시 강남구 테헤란로7길 7-0',
            'tel': '02-6258-5012',
            'web': 'https://www.wiset.or.kr/main.jsp',
            'desc': '여성과학기술인 법/제도 운영 지원, 여성과학기술인 일자리 지원, 여성과학기술인 교육/경력지원, 이공계 여성인재 육성, 연대 교류/협력 및 포상 사업, 정책연구 조사 및 포럼, 과학기술 젠더 혁신 등의 사업 진행.'
          },
          {
            'name': '강남구정신건강복지센터',
            'address': '서울특별시 강남구 일원9길 38',
            'tel': '02-2226-0344',
            'web': 'http://www.smilegn.kr/design/default/intro.htm',
            'desc': '정신건강 서비스 및 질환관리가 필요한 강남구 주민을 대상으로 초리상담 및 사례관리 서비스, 정신건강증진 사업 (산후우울증 예방 프로그램, 갱년기 우울증 예방 프로그램), 소아청소년 정신건강증진 사업, 지역사회 진단평가 등의 사업 진행.'
          },
          {
            'name': '강남구여성능력개발센터',
            'address': '서울시 강남구 봉은사로320',
            'tel': '02-544-8440',
            'web': 'http://www.herstory.or.kr/',
            'desc': '여성 취•창업 박람회, 경력단절 여성을 위한 재취업 프로그램, 진로코칭 프로그램 제공, 학점 은행제 프로그램 운영, 여성 창업을 위한 시설 지원 등의 사업 진행. (직업기초능력개발, 자격증교육, 취업창업, 전문가 양성, 미니강좌, 무료강좌, 정부지원프로그램, 학점은행제프로그램, 특별프로그램 등의 카테고리별 강좌를 지원함.)'
          }
        ]
      }
    };
  }

  onSearch(e) {
    const slct1 = this.shadowRoot.querySelector('#slct1');
    const slct2 = this.shadowRoot.querySelector('#slct2');
    this.shadowRoot.querySelector('.result').className = `result`;
    console.log('onSearch');
    console.log(slct1.value);
    console.log(slct2.value);

    if( slct1.value === 'seoul' && (slct2.value === 'seong-dong' || slct2.value === 'gangnam') ) {
      this.shadowRoot.querySelector('.result').className = `result show ${slct2.value}`;
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
      div.result .res{
        display: none;
      }
      div.result.show .res{
        display: block;
      }
      div.result.show.gangnam > .seong-dong {
        display: none;
      }
      div.result.show.seong-dong > .gangnam {
        display: none;
      }
      p.info span {
        font-size: 14px;
        color: #b3a090;
      }
      p.info a, p.info a:visited {
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
      
      @media screen and (max-width: 360px) {
        :host {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        #search-form {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        div.info {
          padding-bottom: 30px;
        }
        #slct1 {
          margin-bottom: 20px;
        }
        h3, h4, p {
          margin-left: 20px;
          margin-right: 20px;
        }
        legend {
          margin-left: 10px;
        }
        .button {
          margin-left: 20px;
          margin-right: 20px;
        }
        div.result .res {
          margin-left: 0;
          margin-right: 0;
        }
        p{
          word-break: break-word;
        }
      }
    </style>
    <div id="search-form">
      <h3>
        <span>중년 여성을 위한</span><br />
        <span>지역별 지원 기관 찾기</span>
      </h3>
      <P>원화는 지역을 검색하고<br />도움받을 수 있는 기관을 찾아보세요</P>
      <div class="select-group">
        <div class="select">
          <select name="slct" id="slct1" @change="${ e => this.onSearch(e) }">
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
            <option value="seong-dong">성동구</option>
          </select>
        </div>
      </div>
      <div class="result">
        ${this.db['seoul']['seong-dong'].map((v) => {
          return html`
          <style>
          </style>
          <div class="res seong-dong show">
            <h4>${v.name}</h4>
            <hr size="2px" />
            <p>${v.desc}</p>
            <p class="info">
              <span>${v.address}</span><br/>
              <span>${v.tel}</span><br/>
              <span><a href="${v.web}">${v.web}</a></span><br/>
            </p>
          </div>`;
        })}
        ${this.db['seoul']['gangnam'].map((v) => {
          return html`
          <style>
          </style>
          <div class="res gangnam show">
            <h4>${v.name}</h4>
            <hr size="2px" />
            <p>${v.desc}</p>
            <p class="info">
              <span>${v.address}</span><br/>
              <span>${v.tel}</span><br/>
              <span><a href="${v.web}">${v.web}</a></span><br/>
            </p>
          </div>`;
        })}
        
      </div>
    </div>
    `;
  }
}

customElements.define('w50-search', W50Search);
