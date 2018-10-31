import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';

import './w50-rosen';
import './w50-search';

class W50Pt3 extends LitElement {
  static get properties() {
    return {
      isCurrent: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
  }

  onAfterEnter(context) {
    if (context.params.elmid === 'rosenberg') {
      scrollTo(0, 300);
    } else if(context.params.elemid === 'search') {

    } else {
      scrollTo(0, 0);
    }
  }

  render() {
    return html`
    ${SharedStyles}
    <style>
    h1, blockquote {
      color: #e5ae0e;
    }
    footer section:first-child {
      padding: 22px 20px 30px;
      background-color: #F7F6F4;
    }

    footer section:first-child ul {
      list-style: disc inside ;
    }
    .credit {
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }
    .credit p {
      margin: 0;
      padding: 0;
      font-size: 15px;
      float: right;
    }
    .credit li span {
      font-family: "NotoSansKR", sans-serif;
      display: inline-block;
      font-size: 15px;
      vertical-align: text-top;
    }
    .credit li:nth-child(3) span {
      height: 45px;
    }
    .credit li:nth-child(3) span:first-child {
      width: 120px;
    }
    .credit li:nth-child(3) span:nth-child(2) {
      width: 158px;
    }
    .credit .content {
      margin-left: 8px;
      color: #B3A090;
    }
    </style>
    <main class="main">
      <section>
        <h1>
          <span class="num">03</span>
          <span class="title">중년 여성을 위하여</span>
        </h1>
        <p>중년 여성의 신체적, 심리적 상태와 가족과의 관계, 경제상황은 개인별로 차이가 있지만 지난 시간에 대한 정리와 다가올 미래에 대한 준비는 그 또래 여성이라면 누구에게나 필요하다. 문제를 해결하는 시작은 현재의 나를 제대로 파악하고, 인정하는 것이다. 그런 후에야 지난 시간을 오롯이 바라보고 정리해 다가올 시간에 대해 긍정적으로 계획할 수 있다. </p>
        <p>이 장에는 이 과정에 도움이 될 두 가지 데이터 서비스를 실었다. 현재의 나를 점검할 수 있는 테스트와 미래의 나를 위한 지지와 지원을 받을 수 사회 기관 리스트. 각자에게 필요한 것이 무엇인지 파악하고 행동으로 옮기는데 필요한 정보다.</p>
      </section>
      <section id="rosenberg">
        <h2><span>로젠버그의 자아존중감</span><br /><span>테스트로 나를 들여다 보세요</span></h2>
        <p>자아존중감은 자신의 쓸모와 가치에 대한 평가와 자신을 인정하고 만족하는 감정을 통합한 개념이다. 자신이 유능하고 가치가 있다고 생각할수록 자아존중감을 높아진다. 건강하고 긍정적인 자아존중감을 갖고 있다면 자신의 힘든 상황을 이겨낼 수 있다.</p>
        <p>아래는 서울사이버대학교 상담센터에서 제공하는 자아존중감검사이다. 로젠버그의 자기존중감검사를 활용한 테스트로 스스로를 얼마나 신뢰하고 존중하는지, 자신의 모습을 얼마나 안정되게 바라보며 확신을 갖고 있는지를 체크할 수 있다. 이를 통해 현재의 나는 어떤 상태인지 들여다보자. 혹 나에 대해 좋은 평가를 하지 못했다면 다시 한번 나를 다독이며 일으켜줄 때라고 생각하면 된다.</p>
        <w50-rosen></w50-rosen>
      </section>
      <section>
        <h2>
          중년의 어려움 함께 해결해요<br>
          중년 여성을 위한 전국 시군구별<br>
          사회적 지원, 의료 서비스
        </h2>
        <p>갱년기 여성을 위한 건강 교육을 해주는 보건소 프로그램부터 가정 내 관계 개선을 위한 프로그램을 운영하는 건강가정지원센터, 취업에 관한 지원이 가능한 여성개발원 등 찾아보면 중년 여성의 고민을 함께 나눌 다양한 기관이 있다는 걸 알고 있는가. 같은 상황을 겪고 있는 여성들을 만나 커뮤니티를 꾸릴 수도 있다. 당신에게 지금 필요한 지원과 지지는 무엇인지 생각해 본 후, 지역별 관련 서비스 기관을 찾아보자.</p>
        <w50-search></w50-search>
        <footer class="footer">
          <div class="credit">
            <p clss="issue-date">발행일: 2018.11.01.</p>
            <ul>
              <li><span class="title">기획</span><span class="content">김현주</span></li>
              <li><span class="title">취재</span><span class="content">류진</span></li>
              <li><span class="title">데이터 수집·분석</span><span class="content">권성은, 김진아, 이보경, 이승진, 최유빈</span></li>
              <li><span class="title">디자인</span><span class="content">구도연</span></li>
              <li><span class="title">개발</span><span class="content">임기완</span></li>
              <li><span class="title">영상·일러스트</span><span class="content">VCRWORKS</span></li>
            </ul>
          </div>
        </footer>
      </section>
      <section style="padding: 0;"></section>
    </main>
    `;
  }
}

customElements.define('w50-pt3', W50Pt3);
