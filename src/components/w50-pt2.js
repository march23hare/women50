import { LitElement, html } from '@polymer/lit-element';

class W50Pt2 extends LitElement {
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
  render() {
    return html`
    <main class="main">
      <section>
        <h1>
          <span class="num">02</span>
          <span class="title">내 자리가 없다</span>
        </h1>
        <p>실업 급여를 받으며 구직 활동을 하고 있는 유선화(60세, 주부)씨는 최근 지역고용센터로부터 여성일자리 구인구직 박람회 안내 문자 한 통을 받았다. 참여 업체의 채용 직종을 살펴보니 택배 준비원, 온라인 판매원, 가사 도우미 등이 목록의 대부분을 차지하고 있었다.</p>
        <p>"퇴직 전 자율학습교사로 10년 가까이 일했었어요. 아직 일할 나이라고 생각해 구직 활동을 하고 있지만, 중년 여성을 위한 직업의 선택폭이 좁고 한정적인 점이 아쉽습니다."</p>
        <p>통계청 인구센서스 발표 자료에 따르면 50세~64세 중년 여성 인구는 2000년 약 316만 명에서 2015년 약 542만 명으로 큰 증가를 보이고 있다. 여성의 고용 성장율은 인구 성장율보다 더 높다. 55세~64세 여성 중 취업 상태에 있는 인구 수는 2000년 약 159만 명에서 2015년 315만 명으로 꾸준히 증가했다. 고용율의 호전과 달리 고용의 질은 낙관적이지 않다. 50~59세 여성들의 직종별 고용 분포를 살펴보면 여성의 노동 인구의 절반이 단순 노무직(23.8%)과 서비스직(22.7%)에 집중되어 있는 것이 현실. 사무직 종사자의 경우 13.8%로 23.9%로 집계된 남성의 절반 수준에 불과하다. 관리자의 경우는 더 현저한 차이를 보인다. 남성의 고용 분포율이 5.2%를 기록한 반면 여성은 고작 0.8%에 그치고 있다.</p>
        <figure>
          <picture>
            <img src="images/graph1.png" alt="graph1">
          </picture>
          <figcaption>표 1. 50세~64세 중년 여성 인구 및 고용현황(2000년~2015년)</figcaption>
        </figure>
        <figure>
          <picture>
            <img src="images/graph2.png" alt="graph2">
          </picture>
          <figcaption>표 2. 50세~59세 중년기 여성과 남성의 직종별 고용상황 비교(2017년 기준)</figcaption>
        </figure>
      </section>
      <section>
        <h2>유리천장은 현실</h2>
        <p>중년의 시기에 사회적, 직업적인 하강과 은퇴를 감지하는 것은 자연스러운 수순이지만 여성이 맞닥뜨리는 현실은 남성보다 좀 더 어둡다. 컨설팅 그룹에서 일하다가 이직을 준비 중인 권성은(52세, 데이터 마이닝 & 컨설팅 전문가) 씨는 여성이 남성보다 직업적 하강을 좀 더 빨리 느낄 수 밖에 없다고 말한다.</p>
        <p>"40대 후반에서 50대 초반, 직장 안에서 관리자, 임원, 경영진의 역할을 하게 되죠. 그 전엔 실무를 담당하기 때문에 경험, 노련함으로 입지를 다질 수 있어요. 그런데 여성이 그 단계를 넘어 회사의 운영, 경영에 참여하는 자리에 올라가면 동료, 상사가 대부분 남성인 상황이에요. 이 직무에선 실무적 역할 보다는 상사와의 '케미스트리'를 맞춰 의사 결정을 하고 일을 추진하는 것이 요구되는 직무 능력이죠. 충성심도 중요하고요. 그런데 여성 임원들은 우선 남성 상사와의 교감, 교류 등에서부터 어려움을 겪어요. 남성이 선호하는 커뮤니케이션 방식, 예를 들어 골프나 등산 같은 레저, 스포츠 활동에 참여가 어렵다 보니 남성보다 상대적으로 퍼포먼스가 자꾸 떨어지게 돼요. '내 능력이 부족한가?'하는 회의감까지 들기도 하고요. 그 밖에 여성 임원을 주요 분야보다는 신규 사업을 전개하는 데 필요한 '스페어 임원'으로 뽑는다든가, 리스크가 높은 일에 배정하는 경우도 왕왕 있어요."</p>
        <figure>
          <img src="images/video_placeholder.png" title="Your browser does not support the video tag">
          <!-- <video>
            <source src="/resources/video/product-hero.mp4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            <source src="/resources/video/product-hero.webmhd.webm" type='video/webm; codecs="vp8, vorbis"' />
          </video> -->
        </figure>
        <blockquote>여성은 적극적으로 자신의 의사를 표현하지 않으면 '그냥 저 정도 선에서 은퇴하겠지'라고 바라보는 시각이 있어요.</blockquote>
        <p>외국계 기업의 경우 남성 중심의 업무 문화, 경력 설계, 보상 체계에서 국내 기업보다는 비교적 유연하지만 중년 여성 임원에 대한 고정 관념은 여전히 존재하는 것이 사실. 정은영 (49, 금융계기업 커뮤니케이션 이사) 씨는 여성을 향한 직장 편견 등이 아쉽다고 말한다.</p>
        <p>"같은 직위라도 남성은 '당연히' 경영진으로 승진하는 등의 '야망'을 가진 존재로 대우받지만 여성은 적극적으로 자신의 의사를 표현하지 않으면 '그냥 저 정도 선에서 은퇴하겠지'라고 바라보는 시각이 있어요. 또는 '여자는 자기 일만 하다가 퇴근시간 되면 그냥 집으로 가버리는 직장인'으로 바라보는 편견도 엄연히 존재하고요. 여성이 자신의 능력으로 이사회의 구성원으로 승진해도, 재무나 영업 등 기업의 주요 분야보다는 홍보, 마케팅, 법무 등 지원 분야에 한정되는 경우가 많은 것도 사실이에요."</p>
        <blockquote>국가가 5백만 명이 넘는 중년기 여성들을 '인력'으로 활용하지 않는 건 매우 큰 손실이라고 생각해요.</blockquote>
        <p>은퇴, 경력 단절 등으로 사회 생활을 멈췄다가 다시 직업 활동을 시작하려는 중년 여성들에겐 문이 더 좁다. 유선화 씨는 '엄마는 그냥 집에서 살림하고, 손주나 봐주면 되는 존재'로 보는 가족, 사회의 시선부터 바뀌어야 한다고 말한다.</p>
        <p>"국가가 5백만 명이 넘는 중년기 여성들을 '인력'으로 활용하지 않는 건 매우 큰 손실이라고 생각해요. 물론 일을 처리하는 속도나 능률이 젊은 사람들보다 낮겠지만, 경험과 연륜에서 비롯된 지혜, 노하우 등은 아주 유용한 자원 아닐까요? 그리고 50대 이상 여성들을 위한 재교육, 취업 지원 센터 같은 기관, 정책이 지금보다 훨씬 더 많아졌으면 좋겠어요. 특히 중년 여성들 중엔 인터넷 활용 능력이 떨어지는 이들도 많기 때문에 그러한 정책, 제도에 접근하는 루트를 더 쉽게 만들 필요도 있어요. 서울시의 '다산 콜센터'처럼 전화 한 통으로 물어볼 수 있거나 구청, 동사무소와 같은 소규모 단위 기관에서 지역의 50대 이상 세대들을 밀착 관리 하는 식으로요."</p>
      </section>
      <section>
        <h2>중년기를 위한 지원이 필요</h2>
        <p>중년 세대가 몸과 마음, 가정과 사회 내 지위 등에 있어 겪는 큰 폭의 변화와 그에 따른 문제의 심각성에 반해 이 세대를 향한 사회적 관심은 미미하다. 생애 주기에서 청소년, 30, 40대의 위기, 노년에 관해서는 많은 책과 연구, 정책 등이 나와있지만 50-65세 중년기에 대한 연구와 콘텐츠, 정책은 그에 비해 현저히 부족한 것이 현실. 인터뷰를 위해 만난 대부분의 취재원들은 중년 세대를 위한 커뮤니티 센터, 유아, 노인 등 교육과 케어가 필요한 세대와 중년 세대의 인력을 연결하는 소단위 '생활 공동체' 등이 필요하다고 입을 모은다.</p>
        <p>정은영 씨는 중년 여성들이 연금 수령이 시작되는 65세가 되기 전, 서서히 은퇴할 수 있는 시스템이 필요하다는 의견을 제안한다. 이를 실현하기 위해 동종 업계의 비슷한 연령, 직위, 상황 등을 가진 동료들과 네트워킹을 활발히 할 필요가 있다고. 박종석 정신의학 전문의는 이러한 네트워킹을 통해 중년 여성들이 은퇴 후에도 업계의 재직자를 위한 멘토링을 해주는 것이 사회적 자존감을 회복할 수 있는 좋은 방법이라고 귀띔한다.</p>
        <blockquote>스스로 행복해지려는 엄마를 돕자, 는 것이 우리의 모토예요.</blockquote>
        <p>서울시 50플러스 재단은 중년 이후의 세대가 이러한 '네트워킹'을 비롯해 재취업, 교육, 일자리 연결, 상담, 커뮤니티 활동 등을 지원받을 수 있는 복합 공간. &lt;엄마 난중 일기&gt;의 저자 김정은 씨는 50플러스 재단의 도움을 통해 '엄마학교협동조합'을 만들었다.</p>
        <p>"스스로 행복해지려는 엄마를 돕자, 는 것이 우리의 모토예요. 전업 주부든, 일하는 여성이든, '엄마'가 가진 재능을 꺼내 여성들의 사회적인 역량과 관계를 강화하고 함께 자기 성찰을 고민하고 싶어 시작했습니다. 이를 위해 엄마인생학교, 오지랖 통신 펜클럽, 아티스트 웨이 등 다양한 프로그램과 커뮤니티를 운영하고 있습니다. 최근엔 50대 이상 엄마와 아들을 위한 '소통 여행' 프로그램도 기획 중이에요. '엄마학교협동조합'을 엄마들끼리의 연대, '엄마 허브'로 성장시키는 것이 목표입니다."</p>
        <p>50세 이후 세대를 위한 연구와 정책 계발은 세계적으로도 큰 관심사다. 미국의 '플러스 50 이니셔티브(Plus 50 Initiative)'는 지역 곳곳에 있는 2년제 교육기관인 커뮤니티 컬리지를 통해 중년 이후 세대의 재교육 취업을 지원하는 사업이다. 특히 교육, 건강, 사회사업 등 중년 세대에게 적합한 분야를 선별해 프로그램 운영하고 있다.</p>
        <p>1970년 대부터 고령화 현상에 대비한 일본에선 은퇴 세대의 사회 참여로 건강, 복지까지 해결 '삶의 보람 취업사업'이 주목 받고 있다. 은퇴자가 농업, 먹거리, 육아, 생활지원, 복지 등의 분야에서 취업 할 수 있는 기회를 연결하는 시스템이다. 중년과 노년 세대가 개인적으로는 삶의 보람을 느끼고, 사회적으로는 지역의 문제 해결에 기여할 수 있다는 점에서 효율적인 정책으로 평가 받고 있다.</p>
        <p>영국은 이 세대를 위한 정책이 가장 적극적으로 시행되는 나라 중 하나다. 지난 2011년 65세로 정해져 있던 법정 퇴직 연령을 폐지 한 것부터 시작된다. 2014년엔 50세 이상 노동자들이 더 길게, 더 오래 일하도록 지원하는 정책 풀러 워킹 라이브스(Fuller Working Lives)를 발표하고, 고령 구직자의 재취업을 적극 지원하는 50플러스 워크스(50 Plus Works) 등의 시스템을 가동하는 등 세밀하고 촘촘한 정책을 펼치고 있다. 민간 차원에서 진행하는 중년 여성을 위한 프로그램도 탄탄하다. 우먼 리터너즈(Women Returners)는 2~15년 이상 경력 단절을 겪고 있는 여성의 노동 시장 복귀를 돕는 민간 단체. 또 많은 기업들이 경력 단절 여성을 위한 리턴십(Returnship) 프로그램 운영하고 있다.</p>
        <a class="jump" href="ch3.html">
          <span>중년의 어려움 함께 해결해요</span>
          <span>전국 시군구별 사회, 의료 서비스</span>
          <span class="description">서비스 보러가기</span>
        </a>
      </section>
      <section>
        <p>이러한 흐름들은 중년 여성들 자신이 '나이'와 생애 주기, 세대에 관한 고정 관념을 스스로 깰 필요가 있다는 사실을 일깨운다. 여성 자신이 50대를 인생의 하향 곡선이 시작되는 나이가 아니라 상승 곡선을 그릴 수 있는 역량이 충분한 나이라고 생각해야 한다. 트렌드 분석가이자 미래연구자 송은주 박사는 인식의 전환을 위해 '중년'이라는 부정적 이미지의 단어 대신 '후기 청년'이라는 새로운 명칭을 만들어 제시한다. 그녀는 저서 &lt;4050 후기 청년&gt;에서 새로운 인생을 찾는 중년을 위해 리더십 전문가 스튜어트 프리드만 박사의 메시지를 다음과 같이 전했다.</p>
        <p>'할 수 있는 것 중에 찾아라. 상황에 대한 자신의 반응에 주목하라. 컨트롤 할 수 없는 상황에 대해 불평하느라 인생을 낭비하지 말라'</p>
      </section>
    </main>
    <footer class="footer">
      <a class="next" href="ch3.html">
        <span class="num">03</span>
        <span class="title">중년 여성을 위하여</span>
        <span class="description">다음 글 읽기</span>
      </a>
    </footer>`;
  }
}

customElements.define('w50-pt2', W50Pt2);
