import { TextEffect, init } from "../Utilities/TextEffect.js";
import { Attribute } from "../Utilities/Attribute.js";

class HomePage extends HTMLElement {
  constructor() {
    super();
    // The line of code that below attaches this custom element to the DOM so that
    // The structure and styling will remain within this context
    this.attachShadow({ mode: "open" });
    this.attributeEnabler = false;
  }

  connectedCallback() {
    this._portfolioOwner = this.getAttribute("name") || "name goes here";
    this._logo = this.getAttribute("logo") || "logo";
    this._jobs = this.getAttribute("jobs") || ["Job 1", "Job2", "Job3"];
    this._id = this.getAttribute("id");

    this.shadowRoot.innerHTML = `
        <style>
          *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          :host{
            position: absolute;
            width: 100%;
            transition: all 1s ease-in-out;
            cursor: none;
          }
          
          .home{
            height: 100vh;
          }

          .home .content{
            height: 100%;
            display: flex;
          }

          .home .content .menu{
            flex: 0 0 0%;
            height: 100%;    
            width: 0%;   
            transition: all .5s linear; 
            flex;
            flex-direction: column;    
          }
          .home .content .menu .menu-header{
            height: 20vh;
            display: flex;
            justify-content: flex-end;
            padding: 1.7rem 1rem 0 0;
          }
          .home .content .menu .menu-header p{
            font-bold: bolder;
            cursor: pointer;
          }
          
          .home .content .menu .menu-body{
            height: 80vh;
          }
          .home .content .menu .menu-body ul li{
            padding: 1.5rem;
            font-size: 150%;
            
            cursor: pointer;
            border-bottom: 1px solid #eee;
            box-shadow: 0 4px 2px rgba(0, 0, 0, .3);
            transition: all .2s ease-in;
          }
          .home .content .menu .menu-body ul li:hover{
            transform: translateY(.2rem);
            background-color: #0d0d0d;
            color: #ccc;
            box-shadow: none;
          }
         

          .home .content .cont{
            flex: 0 0 100%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            transition: all .5s linear;  
          }

          .home .content .menu.slide{
            flex: 0 0 25%;
            width: 25%;
          }

          .home .content .cont.slide{
            flex: 0 0 75%;
            width: 75%;
          }

          .home .content .cont .contText{
            flex: 0 0 100%;
            height: 87%;
            background-color: #0d0d0d;
            display: flex;
            flex-wrap: wrap;
          }

          .home .content .cont .contText nav{
            flex: 0 0 100%;
            height: 10%;
            width: 100%;
            padding: 1rem;
            padding-left: 1.5rem;
          }

          .home .content .cont .contText nav p{
            color: white;
            cursor: pointer;
          }

          .home .content .cont .contText .main{
            
            color: #ccc;
            height: 80%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 5rem 0;
            flex-direction: column;
                      
          }

          .cont .contText .main .div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            margin-top: -3%;
          }

          .content .cont .contText .main h1{
            opacity: 0;
            font-size: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            text-align: center;
            transition: all 4s linear;
          }

          .content .cont .contText .main h2{
            font-size: 4rem;
          }
          .home .content .cont .contText .main h4{
            font-size: 1.5rem;
            opacity: 0;
          }

          .home .content .cont .contText .btn{
            height: 10%;
            display: flex;
            alig-items: flex-end;
            justify-content: flex-end;
            padding: 1rem 5.5rem;
            width: 100%;
          }

          .home .content .cont .contText .btn p{
            color: #777;
            position: relative;
            transition: all .5s linear;
            cursor: pointer;
          }

          .home .content .cont .contText .btn p:hover{
            color: #ccc;
          }

          .home .content .cont .contText .btn p::after{
            position: absolute;
            content: '';
            height: .15rem;
            background: #ccc;
            right: 0;
            width: 0%;
            transition: all .5s linear;
            bottom: -1px;
          }

          .home .content .cont .contText .btn p:hover::after{
            width: 100%;
            left: 0;
          }

          .home .content .cont .footer{
            flex: 0 0 100%;
            height: 13%;
          }

          .txt-type {
            border-right: 0.2rem solid #777;
          }

          h2 span, h4 span{
            opacity: 0;
            transition: all .4s ease;
            display: inline-block;
            transform: translateY(1rem);
          }

          span.space{
            margin: 0 .25rem;
          }

          span.fade{
            opacity: 1;
            transform: translateY(0);
          }

          #menuBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .2rem 1rem;
            width: 3.5rem;
          }

          .footer{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0d0d0d;
        
          }
          .footer p{
            color: #ccc;
            cursor: pointer;
            margin-right: 2rem;
            transition: all .3s ease-in-out;
          }
          .footer p:hover{
            transform: translateY(.2rem); 
          }

          .footer a svg{
            height: 2rem;
            width: 1.5rem;
            fill: #ccc;
          }

          .mouse, .mouseDot {
            border: 1px solid #ccc;
            border-radius: 50%;
            position: absolute;
            
            pointer-events: none;
            transform: translate(-50%, -50%);
            // transition-property: background, transform;
            transform-origin: center;
            z-index: 1;
           
          }

          .mouse{
              height: 2rem;
              width: 2rem;
              transition: all 0.1s linear;
          }

          .mouseDot{
            height: .2rem;
            width: .1rem;
            background: #ccc;
            transition: all 0.2s linear;
          }
          .mouse.grow {
            background: #000;
            padding: 1rem;
            transform: scale(3);
          }

          /*Responsive */
          @media screen and (max-width: 768px){
          
            .contText nav p{
              margin-left: -1rem;
            }
            .content .cont .contText .main h1{
              font-size: 4rem;
            }

            .content .cont .contText .main h2{
              font-size: 3.5rem;
            }

            .cont .contText .main .div{
              margin-top: -15%;  
            }

            .home .content .cont .contText .btn{
              padding: 0 1rem 0 0;
              align-items: center;
            }
            .home .content .cont .contText .btn p::after{
              bottom: -5px;
            }
             .home .content .menu.slide{
              flex: 0 0 100%;
              width: 100%;
            }

            .home .content .cont.slide{
              flex: 0 0 0%;
              width: 0%;
            }
            .footer a svg{
            height: 1.5rem;
            width: 1rem;
            fill: #ccc;
          }
          }
          @media screen and (max-width: 320px){
            .cont .contText .main .div{
              margin-top: -20%;  
            }
              .content .cont .contText .main h1{
              font-size: 3.5rem;
            }

            .content .cont .contText .main h2{
              font-size: 3rem;
            }

            .home .content .menu.slide{
              flex: 0 0 100%;
              width: 100%;
            }

            .home .content .cont.slide{
              flex: 0 0 0%;
              width: 0%;
            }
          }
          }
        </style>
        <div class="home components">
          <div class="content">
            <div class="menu">
              <div class="menu-header">
                <p class="menuBtn">
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#0d0d0d" fill-rule="evenodd" opacity=".601"></path>
                  </svg>
                </p>
              </div>

              <div class="menu-body">
                <ul>
                  <li id="2">Projects</li>
                  <li id="3">About Me</li>
                  <li id="4">My Skills</li>
                  <li id="5">Contact</li>
                </ul>
              </div>

            </div>
            <div class="cont">
              <div class="contText">
                <nav class="nav">
                  <p id="menuBtn" class="menuBtn">
                    <svg height="30" width="100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </p>
                </nav>
                <div class="main">
                  <div class="div">
                      <h2 id="h2">Hi there!</h2>
                      <h4>I am ${this._portfolioOwner}</h4>
                  </div>
                  <h1><span
                    class="text-type"
                    ></span>
                  </h1>
                </div>
                <div class="btn"><p>My works</p></div>
              </div>
              <div class="footer">
                <p>
                  <a href="https://twitter.com/faceOfALion1">
                  <svg enable-background="new 0 0 56.693 56.693"  viewBox="0 0 56.693 56.693"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path  d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z"/>
                  </svg>
                  </a>
                </p>
                <p>
                  <a href=" https://wa.me/+2348094939264">
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                   </svg>
                  </a>
                </p>
                <p>
                  <a href="https://github.com/mikechibuzor">
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                  </a>
                </p>
              </div>
              <div class="mouse"></div>
              <div class="mouseDot"></div>
            </div>
        </div>
    `;

    this._h2 = this.shadowRoot.querySelector("#h2");
    this._h4 = this.shadowRoot.querySelector(".main h4");
    this._h1Span = this.shadowRoot.querySelector(".main h1 span");
    this._menuContainer = this.shadowRoot.querySelector(".menu");
    this._mainContent = this.shadowRoot.querySelector(".cont");
    this._burgerBtn = this.shadowRoot.querySelectorAll(".menuBtn");
    this._navLis = this.shadowRoot.querySelectorAll("ul li");
    this.mouseDiv = this.shadowRoot.querySelector(".mouse");
    this.mouseDot = this.mouseDiv.nextElementSibling;

    this.getNxtElId_ChnClass(this._navLis);

    this.slide();
    this.typingEffectFn();
    this.mouseEffect(this.mouseDiv, this.mouseDot);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue) {
      if (oldValue !== newValue) {
        this.attributeEnabler = !this.attributeEnabler;
        if (this.attributeEnabler) {
          Attribute.attributeFn(this._nextElementId, this);
        }
      }
    }
  }

  slide() {
    this._burgerBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._mainContent.classList.toggle("slide");
        this._menuContainer.classList.toggle("slide");
      });
    });
  }

  typingEffectFn() {
    setTimeout(() => {
      this.shadowRoot.querySelector("h1").style.opacity = 1;
      init(this._h1Span, this._jobs);
    }, 4000);

    TextEffect.textEffect1(this._h2);
    setTimeout(() => {
      this._h4.style.opacity = 1;
      TextEffect.textEffect1(this._h4);
    }, 2000);
  }

  getNxtElId_ChnClass(navLis) {
    navLis.forEach((li) => {
      li.addEventListener("click", () => {
        this._nextElementId = li.id;
        this.className = "hidden";
      });
    });
  }

  static get observedAttributes() {
    return ["class"];
  }

  mouseEffect(mouse, mouseDot) {
    window.addEventListener("mousemove", (e) => {
      mouse.style.top = `${e.pageY}px`;
      mouse.style.left = `${e.pageX}px`;
      mouseDot.style.top = `${e.pageY}px`;
      mouseDot.style.left = `${e.pageX}px`;
    });
  }
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
