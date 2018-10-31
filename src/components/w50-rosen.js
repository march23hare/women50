import { LitElement, html } from '@polymer/lit-element';
// import { SharedStyles } from './shared-styles';

class W50Rosen extends LitElement {
  constructor() {
    super();
  }

  validRosen(e) {
    const result = this.shadowRoot.querySelector('.result');
    const res = this.shadowRoot.querySelectorAll('.res');
    const numOfFields = this.shadowRoot.querySelectorAll('.rosenberg-field').length;
    let answers = 0;
    const unchecked = [];

    result.className = 'result';
    for(let i = 0; i < res.length; i++) {
      res[i].className = 'res';
    }

    for(let i = 1; i <= numOfFields; i++) {
      let current = this.shadowRoot.querySelectorAll(`[name=q${i}]`);
      let currentVal = 0;
      for(let j = 0; j < current.length; j++) {
        if (current[j].checked) {
          currentVal = parseInt(current[j].value, 10)
          answers += currentVal;
          j = current.length;
        }
      }
      if(!currentVal) {
        unchecked.push(current);
      }
    }
    console.log(answers);
    console.log(unchecked);
    console.log(unchecked.length);

    if(!unchecked.length) {
      result.className = 'result show';
      if( answers <= 29 ) {
        res[0].className = 'res show';
      } else if ( answers > 29 && answers <= 36 ) {
        res[1].className = 'res show';
      } else if ( answers > 36 && answers <= 44 ) {
        res[2].className = 'res show';
      } else if ( answers > 44 ) {
        res[3].className = 'res show';
      }
    }
  }

  render () {
    return html`
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
        margin-left: 38px;
        margin-right: 38px;
      }
      h3 {
        font-size: 26px;
      }
      h4 {
        font-size: 18px;
        text-align: center;
        background-image: linear-gradient(to bottom, white, white 12px, #e5ae0e 12px, #e5ae0e 15px, white 15px, white);
        margin-bottom: 10px;
      }
      h4 > span {
        display: inline-block;
        width: 60px;
        background: white;
      }
      p {
        font-size: 18px;
      }
      p.eleven{
        margin-bottom: 56px;
      }
      legend {
        display: block;
        font-family: "NotoSansKR", sans-serif;
        font-size: 17px;
        margin-left: 38px;
        margin-bottom: 6px;
      }
      fieldset {
        border: 0;
        padding: 0 0 0 0;
        margin: 0;
        min-width: 0;
      }
      .radio-group {
        display: flex;
        justify-content: space-around;
        background-color: #f7f6f4;
        padding-left: 70px;
        padding-right: 70px;
        margin-bottom: 20px;
      }
      label {
        display: block;
        height: 72px;
        width: 70px;
        font-size: 11px;
        text-align: center;
      }
      .container {
        display: block;
        position: relative;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 11px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-top: 38px;
        box-sizing: border-box;
      }

      /* Hide the browser's default radio button */
      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      /* Create a custom radio button */
      .checkmark {
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translateX(-50%);
        height: 20px;
        width: 20px;
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid gray;
      }

      /* On mouse-over, add a grey background color */
      .container:hover input ~ .checkmark {
        background-color: #ccc;
      }

      /* When the radio button is checked, add a blue background */
      .container input:checked ~ .checkmark {
        background-color: #e5ae0e;
      }

      /* Create the indicator (the dot/circle - hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the indicator (dot/circle) when checked */
      .container input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the indicator (dot/circle) */
      .container .checkmark:after {
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #181818;
      }

      .button {
        max-width: 640px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 75px;
        margin-bottom: 60px;
      }
      button {
        display: block;
        background: rgba(249,212,103,0.30);
        border: 1px solid #F9D467;
        border-radius: 10px;
        font-size: 17px;
        color: #000000;
        letter-spacing: 0.5px;
        text-align: center;
        width: 100%;
        height: 54px;
      }
      div.info p {
        color: #b3a090;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
      }
      div.result {
        margin-bottom: 60px;
      }
      div.result p {
        color: black;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
        padding: 20px;
        background-color: #f7f6f4;
        border-radius: 10px;
      }
      div.result h3 {
        font-size: 24px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 40px;
      }
      div.result, div.res {
        display: none;
      }
      div.result.show, div.res.show {
        display: block;
      }
      </style>
    <div id="rosenberg-form" class="survey-form">
      <h3><span>로젠버그(Rosenberg)의</span><br /><span>자기존중감검사</span></h3>
      <p>자기존중감(self-esteem)이란 자기개념의 하나로서 자기 자신에 대한 긍정적인 평가, 자기수용 및 자기존중의 정도를 보여주는 개념입니다.</p>
      <p class="eleven">[11문항] 아래 문항을 잘 읽고 자신의 모습에 해당되는 답안을 하나 선택하여 체크하시기 바랍니다.</p>
      <fieldset class="rosenberg-field">
        <legend>1. 대체로 나 자신에 만족하고 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q1-1"><input type="radio" id="q1-1" value="1" name="q1" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q1-2"><input type="radio" id="q1-2" value="2" name="q1" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q1-3"><input type="radio" id="q1-3" value="3" name="q1" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q1-4"><input type="radio" id="q1-4" value="4" name="q1" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q1-5"><input type="radio" id="q1-5" value="5" name="q1" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>2. 떄떄로 내가 무능하다는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q2-1"><input type="radio" id="q2-1" value="5" name="q2" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q2-2"><input type="radio" id="q2-2" value="4" name="q2" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q2-3"><input type="radio" id="q2-3" value="3" name="q2" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q2-4"><input type="radio" id="q2-4" value="2" name="q2" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q2-5"><input type="radio" id="q2-5" value="1" name="q2" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>3. 가끔 내가 아닌 다른 사람이었으면 하는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q3-1"><input type="radio" id="q3-1" value="5" name="q3" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q3-2"><input type="radio" id="q3-2" value="4" name="q3" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q3-3"><input type="radio" id="q3-3" value="3" name="q3" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q3-4"><input type="radio" id="q3-4" value="2" name="q3" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q3-5"><input type="radio" id="q3-5" value="1" name="q3" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>4. 나를 제대로 이해해주는 사람이 별로 없는것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q4-1"><input type="radio" id="q4-1" value="5" name="q4" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q4-2"><input type="radio" id="q4-2" value="4" name="q4" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q4-3"><input type="radio" id="q4-3" value="3" name="q4" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q4-4"><input type="radio" id="q4-4" value="2" name="q4" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q4-5"><input type="radio" id="q4-5" value="1" name="q4" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>5. 나에게도 몇가지 좋은 점이 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q5-1"><input type="radio" id="q5-1" value="1" name="q5" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q5-2"><input type="radio" id="q5-2" value="2" name="q5" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q5-3"><input type="radio" id="q5-3" value="3" name="q5" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q5-4"><input type="radio" id="q5-4" value="4" name="q5" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q5-5"><input type="radio" id="q5-5" value="5" name="q5" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>6. 내게는 자랑할 만한 점이 별로 없다.</legend>
        <div class="radio-group">
          <label class="container" for="q6-1"><input type="radio" id="q6-1" value="5" name="q6" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q6-2"><input type="radio" id="q6-2" value="4" name="q6" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q6-3"><input type="radio" id="q6-3" value="3" name="q6" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q6-4"><input type="radio" id="q6-4" value="2" name="q6" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q6-5"><input type="radio" id="q6-5" value="1" name="q6" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>7. 때때로 내가 아주 쓸모없는 사람이라는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q7-1"><input type="radio" id="q7-1" value="5" name="q7" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q7-2"><input type="radio" id="q7-2" value="4" name="q7" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q7-3"><input type="radio" id="q7-3" value="3" name="q7" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q7-4"><input type="radio" id="q7-4" value="2" name="q7" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q7-5"><input type="radio" id="q7-5" value="1" name="q7" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>8. 내 자신에 대해 긍정적인 생각을 갖고 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q8-1"><input type="radio" id="q8-1" value="1" name="q8" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q8-2"><input type="radio" id="q8-2" value="2" name="q8" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q8-3"><input type="radio" id="q8-3" value="3" name="q8" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q8-4"><input type="radio" id="q8-4" value="4" name="q8" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q8-5"><input type="radio" id="q8-5" value="5" name="q8" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>9. 내 인생을 전반적으로 보면 실패한 것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q9-1"><input type="radio" id="q9-1" value="5" name="q9" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q9-2"><input type="radio" id="q9-2" value="4" name="q9" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q9-3"><input type="radio" id="q9-3" value="3" name="q9" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q9-4"><input type="radio" id="q9-4" value="2" name="q9" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q9-5"><input type="radio" id="q9-5" value="1" name="q9" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>10. 가끔 내가 불안하다는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q10-1"><input type="radio" id="q10-1" value="5" name="q10" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q10-2"><input type="radio" id="q10-2" value="4" name="q10" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q10-3"><input type="radio" id="q10-3" value="3" name="q10" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q10-4"><input type="radio" id="q10-4" value="2" name="q10" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q10-5"><input type="radio" id="q10-5" value="1" name="q10" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>11. 나보다 능력있는 사람이 많은 것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q11-1"><input type="radio" id="q11-1" value="5" name="q11" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q11-2"><input type="radio" id="q11-2" value="4" name="q11" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q11-3"><input type="radio" id="q11-3" value="3" name="q11" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q11-4"><input type="radio" id="q11-4" value="2" name="q11" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q11-5"><input type="radio" id="q11-5" value="1" name="q11" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
    </div>
    <div class="button"><button @click="${ e => this.validRosen(e) }">결과 확인하기</button></div>
    <div class="result">
      <h4>
        <span>결과</span>
      </h4>
      <div id="res-1" class="res">
        <h3>자기 존중감이 다소 낮은 편</h3>
        <p>당신은 부정적인 자기개념을 갖고 있으며 자기존중감이 다소 낮은 편입니다.<br />전문가와의 상담을 통해 정확한 평가를 받아보는 것이 좋습니다.</p>
      </div>
      <div id="res-2" class="res">
        <h3>보통 수준의 자기존중감</h3>
        <p>보통 수준의 자기존중감을 갖고 있습니다.<br />좀 더 자신을 자랑스럽게 여겨보세요.</p>
      </div>
      <div id="res-3" class="res">
        <h3>높은 자기존중감</h3>
        <p>당신은 긍정적인 자기개념을 갖고 있으며, 자기존중감이 높은 편입니다.<br />항상 긍정적인 마음을 가지세요.</p>
      </div>
      <div id="res-4" class="res">
        <h3>매우 높은 자기존중감</h3>
        <p>당신은 매우 긍정적인 자기개념을 갖고 있으며,<br />매우 높은 수준의 자기존중감을 갖고 있습니다.</p>
      </div>
    </div>
    <div class="info">
      <p>※서울사이버대학교 심리상담센터에서 제공한 자아존중감검사입니다. 더 자세한 정보는 http://cec.iscu.ac.kr 을 통해 알아보세요.</p>
    </div>
    `;
  }
}

customElements.define('w50-rosen', W50Rosen);
