import { LitElement, html } from '@polymer/lit-element';
import { Router } from '@vaadin/router';
import './w50-nav';
import './w50-pt0';
import './w50-pt1';
import './w50-pt2';
import './w50-pt3';
import './w50-404';

class W50App extends LitElement {
  static get properties() {
    return {
      currentPart: {
        type: Number
      }
    };
  }

  constructor() {
    super();

    const partRoutes = [
      {path: '/pt1', component: 'w50-pt1', caption: '엄마는 아프다'},
      {path: '/pt2', component: 'w50-pt2', caption: '내 자리가 없다'},
      {path: '/pt3', component: 'w50-pt3', caption: '중년 여성을 위하여'}
    ];
    this.partRoutes = partRoutes;

    const routes = partRoutes.concat([
      {path: '/', component: 'w50-pt1'},
      {path: '/pt3/:elmid', component: 'w50-pt3'},
      {path: '(.*)', component: 'w50-404'}
    ]);
    this.routes = routes;

    this.currentPart = this.getCurrentPart();
  }

  getPathname() {
    return location.pathname;
  }

  getCurrentPart() {
    const path = this.getPathname();
    let part = path[3];
    part = part ? part : '/';
    return part;
  } 

  setRoutes(r) {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes(r);
  }

  onAfterEnter(context) {
    console.log(context);
  }

  firstUpdated() {
    const h = this.shadowRoot.querySelector('nav');
    const d = this.shadowRoot.querySelector('w50-pt0');
    const o = this.shadowRoot.querySelector('#outlet');
    let stuck = false;
    
    window.addEventListener('scroll', function(e) {
      let distance = h.offsetTop - window.pageYOffset;
      let offset = window.pageYOffset;
      let stickPoint = d.clientHeight;
      if ( (distance <= 0) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0';
        stuck = true;
      } else if (stuck && (offset <= stickPoint)){
        h.style.position = 'static';
        stuck = false;
      }
    });

    this.setRoutes(this.routes);
    window.addEventListener('vaadin-router-location-changed', (e) => {
      this.currentPart = this.getCurrentPart();
      if (this.currentPart > 0 && this.currentPart < 4 && !e.detail.location.params.elmid) {
        const intervalCheckD = setInterval(() => {
          if(d.clientHeight > 0) {
            clearInterval(intervalCheckD);
            window.scrollTo(0, d.clientHeight);
          }
        }, 100);
      }
    });
  }

  render() {
    return html`
    <style>
      :host {
        --not-current: #b3a090;
        --point-pt1: #669aa7;
        --point-pt2: #d4644a;
        --point-pt3: #e5ae0e;
        
        font-family: "NotoSansKR";
        font-weight: 500;
        font-style: normal;
        
        display: flex;
        flex-direction: column;
      }
      nav {
        width: 100%;
        height: 102px;
        display: block;
        order: 2;
        z-index: 999;
      }
      .nav-wrapper {        
        width: 100%;
        height: 102px;
        display: block;
      }
      #outlet {
        order: 3;
      }
    </style>
    <w50-pt0></w50-pt0>
    <div class="nav-wrapper">
      <nav><w50-nav .currentPart="${this.currentPart === '/' ? 0 : this.currentPart - 1}" .routes="${this.partRoutes}" ></w50-nav></nav>
    </div>
    <div id="outlet"></div>
    `;
  }
};

customElements.define('w50-app', W50App);
