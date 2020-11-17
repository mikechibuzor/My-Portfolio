import { TextEffect, init } from "../Utilities/TextEffect.js";
import { Attribute } from "../Utilities/Attribute.js";

class HomePage extends HTMLElement {
  constructor() {
    super();
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
            font-family: cursive;
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
            font-family: "Bell MT", sans-serif;            
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
            font-size: 6.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
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
                <p class="menuBtn">X</p>
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
                  <svg color="#ccc" xmlns= enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#ccc" width="18px" height="18px">
                    <rect fill="none" height="24" width="24"/>
                    <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/>
                    </svg>
                </p>
                <p>
                  <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" fill="#ccc" width="18px" height="18px color="#ccc">
                  <path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/>
                  </svg>
                </p>
                <p>
                  l
                </p>
              </div>
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

    this.getNxtElId_ChnClass(this._navLis);

    this.slide();
    this.typingEffectFn();
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
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
