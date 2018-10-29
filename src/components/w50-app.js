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
      {path: '/', component: 'w50-pt0'},
      {path: '(.*)', component: 'w50-404'},
    ]);
    this.routes = routes;

    this.currentPart = this.getCurrentPart();
  }

  getPathname() {
    return location.pathname;
  }

  getCurrentPart() {
    const path = this.getPathname();
    const part = path[path.length - 1];
    return part;
  } 

  setRoutes(r) {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes(r);
  }

  firstUpdated() {
    this.setRoutes(this.routes);
    window.addEventListener('vaadin-router-location-changed', (event) => {
      this.currentPart = this.getCurrentPart();
    });
  }

  render() {
    return html`
    <style>
      :host {
        --not-current: #d7cabe;
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
        position: relative;
        order: 2;
      }
      #outlet {
        order: 3;
      }
      #outlet.main {
        order: 1;
      }
    </style>
    <nav><w50-nav .currentPart="${this.currentPart - 1}" .routes="${this.partRoutes}" class="${this.currentPart === '/' ? 'homepage' : ''}"></w50-nav></nav>
    <div id="outlet" class="${this.currentPart === '/' ? 'main' : ''}"></div>
    `;
  }
};

customElements.define('w50-app', W50App);
