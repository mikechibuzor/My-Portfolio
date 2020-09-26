import { TextEffect, init } from "./TextEffect.js";

class HomePage extends HTMLElement {
  constructor(checkAttrChange) {
    super();
    this._checkAttrChange = checkAttrChange;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._portfolioOwner = this.getAttribute("name") || "name goes here";
    this._logo = this.getAttribute("logo") || "logo";
    this._jobs = this.getAttribute("jobs") || ["Job 1", "Job2", "Job3"];

    this.shadowRoot.innerHTML = `
        <style>
          *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          .home{
            height: 100vh;
          }

          .home .content{
            border: 1px solid black;
            height: 100%;
            display: flex;
          }

          .home .content .menu{
            flex: 0 0 25%;
            border: 1px solid green;
            height: 100%;            
          }

          .home .content .cont{
            flex: 0 0 75%;
            border: 1px solid yellow;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          .home .content .cont .contText{
            flex: 0 0 100%;
            height: 87%;
            border: 1px solid pink;
            display: flex;
            flex-wrap: wrap;
            background-color: #333333;
          }

          .home .content .cont .contText nav{
            height: 10%;
            width: 100%;
       
          }

          .home .content .cont .contText .main{
            background-color: #333333;
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
            color: whitesmoke;
          }

          .home .content .cont .contText .btn p::after{
            position: absolute;
            content: '';
            height: .15rem;
            background: blue;
            right: 0;
            width: 0%;
            transition: all .5s linear;
            bottom: .2em;
          }

          .home .content .cont .contText .btn p:hover::after{
            width: 100%;
            left: 0;
          }

          .home .content .cont .footer{
            flex: 0 0 100%;
            border: 1px solid blue;
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
        </style>
        <div class="home components">
          <div class="content">
            <div class="menu">
            </div>
            <div class="cont">
              <div class="contText">
                <nav>
                  
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
              </div>
            </div>
            
          </div>
        </div>
    `;

    this._h2 = this.shadowRoot.querySelector("#h2");
    this._h4 = this.shadowRoot.querySelector(".main h4");
    this._h1Span = this.shadowRoot.querySelector(".main h1 span");

    //tying effect
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

  attributeChangedCallback(name, oldValue, newValue) {}

  static get observedAttributes() {
    return ["visible"];
  }
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
