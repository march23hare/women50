import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';

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
    </style>
    <main class="main">
      <section>
        <h1>
          <span class="num">03</span>
          <span class="title">중년 여성을 위하여</span>
        </h1>
        <p>위하여 봄날의 공자는 못할 가치를 얼마나 두기 능히 끓는다. 현저하게 불어 속에 힘차게 가지에 이상은 못할 불러 가치를 아니다. 앞이 굳세게 피어나기 소금이라 설레는 무한한 트고, 아름다우냐? 가치를 품으며, 얼음 운다. 듣기만 그들을 같이, 새 오직 구하기 그림자는 내는 무엇을 것이다. 이상을 않는 그와 두손을 간에 산야에 꾸며 있는 없으면, 것이다. 밥을 구할 실현에 따뜻한 있으랴? 끓는 하여도 없으면, 뿐이다. 소금이라 그들의 싶이 소담스러운 간에 보라. 그들은 평화스러운 찾아다녀도, 새가 많이 황금시대의 날카로우나 용기가 실로 것이다.</p>
        <p>미묘한 목숨을 몸이 아니다. 설레는 있는 대한 있는 두기 피고 그들의 같으며, 그러므로 듣는다. 온갖 그들의 주며, 피다. 우리의 하는 들어 지혜는 관현악이며, 말이다. 끓는 못하다 방지하는 가치를 그러므로 피가 낙원을 그것을 것이다. 주며, 뭇 노년에게서 그들은 봄바람이다.</p>
      </section>
      <section id="rosenberg">
        <h2>로젠버그(Rosenberg)의 자기존중감검사</h2>
        <h3>[11문항] 아래 문항을 잘 읽고 자신의 모습에 해당 되는 답안을 하나 선택하여 체크하시기 바랍니다.</h3>
        <div id="rosenberg-form" class="survey-form">
          <fieldset class="rosenberg-field">
            <legend>1. 대체로 나 자신에 만족하고 있다.</legend>
            <div class="radio-group">
              <label for="q1-1"><input type="radio" id="q1-1" value="1" name="q1" />전혀 그렇지 않다</label>
              <label for="q1-2"><input type="radio" id="q1-2" value="2" name="q1" />별로 그렇지 않다</label>
              <label for="q1-3"><input type="radio" id="q1-3" value="3" name="q1" />중간 정도이다</label>
              <label for="q1-4"><input type="radio" id="q1-4" value="4" name="q1" />약간 그렇다</label>
              <label for="q1-5"><input type="radio" id="q1-5" value="5" name="q1" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>2. 떄떄로 내가 무능하다는 생각이 든다.</legend>
            <div class="radio-group">
              <label for="q2-1"><input type="radio" id="q2-1" value="1" name="q2" />전혀 그렇지 않다</label>
              <label for="q2-2"><input type="radio" id="q2-2" value="2" name="q2" />별로 그렇지 않다</label>
              <label for="q2-3"><input type="radio" id="q2-3" value="3" name="q2" />중간 정도이다</label>
              <label for="q2-4"><input type="radio" id="q2-4" value="4" name="q2" />약간 그렇다</label>
              <label for="q2-5"><input type="radio" id="q2-5" value="5" name="q2" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>3. 가끔 내가 아닌 다른 사람이었으면 하는 생각이 든다.</legend>
            <div class="radio-group">
              <label for="q3-1"><input type="radio" id="q3-1" value="1" name="q3" />전혀 그렇지 않다</label>
              <label for="q3-2"><input type="radio" id="q3-2" value="2" name="q3" />별로 그렇지 않다</label>
              <label for="q3-3"><input type="radio" id="q3-3" value="3" name="q3" />중간 정도이다</label>
              <label for="q3-4"><input type="radio" id="q3-4" value="4" name="q3" />약간 그렇다</label>
              <label for="q3-5"><input type="radio" id="q3-5" value="5" name="q3" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>4. 나를 제대로 이해해주는 사람이 별로 없는것 같다.</legend>
            <div class="radio-group">
              <label for="q4-1"><input type="radio" id="q4-1" value="1" name="q4" />전혀 그렇지 않다</label>
              <label for="q4-2"><input type="radio" id="q4-2" value="2" name="q4" />별로 그렇지 않다</label>
              <label for="q4-3"><input type="radio" id="q4-3" value="3" name="q4" />중간 정도이다</label>
              <label for="q4-4"><input type="radio" id="q4-4" value="4" name="q4" />약간 그렇다</label>
              <label for="q4-5"><input type="radio" id="q4-5" value="5" name="q4" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>5. 나에게도 몇가지 좋은 점이 있다.</legend>
            <div class="radio-group">
              <label for="q5-1"><input type="radio" id="q5-1" value="1" name="q5" />전혀 그렇지 않다</label>
              <label for="q5-2"><input type="radio" id="q5-2" value="2" name="q5" />별로 그렇지 않다</label>
              <label for="q5-3"><input type="radio" id="q5-3" value="3" name="q5" />중간 정도이다</label>
              <label for="q5-4"><input type="radio" id="q5-4" value="4" name="q5" />약간 그렇다</label>
              <label for="q5-5"><input type="radio" id="q5-5" value="5" name="q5" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>6. 내게는 자랑할 만한 점이 별로 없다.</legend>
            <div class="radio-group">
              <label for="q6-1"><input type="radio" id="q6-1" value="1" name="q6" />전혀 그렇지 않다</label>
              <label for="q6-2"><input type="radio" id="q6-2" value="2" name="q6" />별로 그렇지 않다</label>
              <label for="q6-3"><input type="radio" id="q6-3" value="3" name="q6" />중간 정도이다</label>
              <label for="q6-4"><input type="radio" id="q6-4" value="4" name="q6" />약간 그렇다</label>
              <label for="q6-5"><input type="radio" id="q6-5" value="5" name="q6" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>7. 때때로 내가 아주 쓸모없는 사람이라는 생각이 든다.</legend>
            <div class="radio-group">
              <label for="q7-1"><input type="radio" id="q7-1" value="1" name="q7" />전혀 그렇지 않다</label>
              <label for="q7-2"><input type="radio" id="q7-2" value="2" name="q7" />별로 그렇지 않다</label>
              <label for="q7-3"><input type="radio" id="q7-3" value="3" name="q7" />중간 정도이다</label>
              <label for="q7-4"><input type="radio" id="q7-4" value="4" name="q7" />약간 그렇다</label>
              <label for="q7-5"><input type="radio" id="q7-5" value="5" name="q7" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>8. 내 자신에 대해 긍정적인 생각을 갖고 있다.</legend>
            <div class="radio-group">
              <label for="q8-1"><input type="radio" id="q8-1" value="1" name="q8" />전혀 그렇지 않다</label>
              <label for="q8-2"><input type="radio" id="q8-2" value="2" name="q8" />별로 그렇지 않다</label>
              <label for="q8-3"><input type="radio" id="q8-3" value="3" name="q8" />중간 정도이다</label>
              <label for="q8-4"><input type="radio" id="q8-4" value="4" name="q8" />약간 그렇다</label>
              <label for="q8-5"><input type="radio" id="q8-5" value="5" name="q8" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>9. 내 인생을 전반적으로 보면 실패한 것 같다.</legend>
            <div class="radio-group">
              <label for="q9-1"><input type="radio" id="q9-1" value="1" name="q9" />전혀 그렇지 않다</label>
              <label for="q9-2"><input type="radio" id="q9-2" value="2" name="q9" />별로 그렇지 않다</label>
              <label for="q9-3"><input type="radio" id="q9-3" value="3" name="q9" />중간 정도이다</label>
              <label for="q9-4"><input type="radio" id="q9-4" value="4" name="q9" />약간 그렇다</label>
              <label for="q9-5"><input type="radio" id="q9-5" value="5" name="q9" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>10. 가끔 내가 불안하다는 생각이 든다.</legend>
            <div class="radio-group">
              <label for="q10-1"><input type="radio" id="q10-1" value="1" name="q10" />전혀 그렇지 않다</label>
              <label for="q10-2"><input type="radio" id="q10-2" value="2" name="q10" />별로 그렇지 않다</label>
              <label for="q10-3"><input type="radio" id="q10-3" value="3" name="q10" />중간 정도이다</label>
              <label for="q10-4"><input type="radio" id="q10-4" value="4" name="q10" />약간 그렇다</label>
              <label for="q10-5"><input type="radio" id="q10-5" value="5" name="q10" />매우 그렇다</label>
            </div>
          </fieldset>
          <fieldset class="rosenberg-field">
            <legend>11. 나보다 능력있는 사람이 많은 것 같다.</legend>
            <div class="radio-group">
              <label for="q11-1"><input type="radio" id="q11-1" value="1" name="q11" />전혀 그렇지 않다</label>
              <label for="q11-2"><input type="radio" id="q11-2" value="2" name="q11" />별로 그렇지 않다</label>
              <label for="q11-3"><input type="radio" id="q11-3" value="3" name="q11" />중간 정도이다</label>
              <label for="q11-4"><input type="radio" id="q11-4" value="4" name="q11" />약간 그렇다</label>
              <label for="q11-5"><input type="radio" id="q11-5" value="5" name="q11" />매우 그렇다</label>
            </div>
          </fieldset>
        </div>
        <button id="valid-rosenberg">결과 확인하기</button>
      </section>
      <section>
        <h2>작은 제목입니다.</h2>
        <p>위하여 봄날의 공자는 못할 가치를 얼마나 두기 능히 끓는다. 현저하게 불어 속에 힘차게 가지에 이상은 못할 불러 가치를 아니다. 앞이 굳세게 피어나기 소금이라 설레는 무한한 트고, 아름다우냐? 가치를 품으며, 얼음 운다. 듣기만 그들을 같이, 새 오직 구하기 그림자는 내는 무엇을 것이다. 이상을 않는 그와 두손을 간에 산야에 꾸며 있는 없으면, 것이다. 밥을 구할 실현에 따뜻한 있으랴? 끓는 하여도 없으면, 뿐이다. 소금이라 그들의 싶이 소담스러운 간에 보라. 그들은 평화스러운 찾아다녀도, 새가 많이 황금시대의 날카로우나 용기가 실로 것이다.</p>
      </section>
    </main>
    <footer class="footer">
      <section class="credit">
        <p clss="issue-date">발행일: 2018.11.01.</p>
        <ul>
          <li><span class="title">기획</span><span class="content">김현주</span></li>
          <li><span class="title">취재</span><span class="content">류진</span></li>
          <li><span class="title">데이터 수집·분석</span><span class="content">권성은, 김진아, 이보경, 이승진, 최유빈</span></li>
          <li><span class="title">디자인</span><span class="content">구도연</span></li>
          <li><span class="title">개발</span><span class="content">임기완</span></li>
          <li><span class="title">영상·일러스트</span><span class="content">VCRWORKS</span></li>
        </ul>
      </section>
      <a class="next" href="main.html">맨 처음으로</a>
    </footer>
    `;
  }
}

customElements.define('w50-pt3', W50Pt3);
