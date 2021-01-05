import { Attribute } from "../Utilities/Attribute.js";
class Skills extends HTMLElement {
  constructor() {
    super();
    this.attributeEnabler = true;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>

           :host{
            position: absolute;
            width: 100%;
            transition: all 1s ease-in-out;
          }
          
          .pcontainer{
            position: absolute;
            width: 100%;
            height: 100vh;
            display: grid;
            background: #ccc;
          }

          nav{
            height: 7vh;
            flex: 0 0 100%;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 1.5rem;
          }

          nav p{
            cursor: pointer;
            opacity: .7;
            font-weight: normal;
            transition: all .3s linear;
          }

          nav p:hover{
            opacity: 1;
          }

          nav p:nth-of-type(1){
            margin-right: .5rem;
            border-right: 1px solid black;
            padding-right: 0.5rem;
          }

          .content{
            display: grid;
            grid-template-columns: 70% 30%;
            height: 93vh;
            background: white;
          }

          .content>*{
            //  border: 1px solid red;
            padding: 0rem 1rem;
            height: 100%;
          }

          .content .first .techSkills{
            grid-gap: .5rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: 85%;
          }
          .content .first .techSkills .stack{
            border: 1px solid black;
            //  height: 20vh;
            cursor: pointer;
          }

          .content .first .techSkills .stack p{
            text-align: center;
          }

          .content .second{
            padding-top: 1.1rem;
          }

          .content .second ul{
            margin: 0;
            padding: 0rem .2rem;
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: .5rem;
            grid-row-gap: 1.5rem;
          }

          .content .second ul li{
           box-shadow: 2px 2px 2px rgba(0, 0, 0, .3),
                        -2px -2px 2px rgb(225, 225, 225);
            padding: .5rem;
            display: flex;
            align-items: center;
            border-radius: .15rem .25rem;
            cursor: pointer;
          }

          .content .second ul li:nth-child(5), 
          .content .second ul li:nth-child(6){
            grid-column: 1/3;
            justify-content: center
          }

          @media screen and (max-width: 1024px){
            .content .first .techSkills{
              grid-auto-rows: 20vh;
            }
            .content .first .techSkills{
              grid-gap: 1.5rem;
            }

          @media screen and (max-width: 768px){
            .content{
              grid-template-columns: 1fr;
            }

            .content .first .techSkills{
              grid-gap: .3rem;
            }

            .content>*{
              padding: 0.2rem 0.5rem;
            }

            .content .first .techSkills{
              grid-auto-rows: 70%;
            }

            .content .first{
              height: 60vh;
               
            }
            .content .second{
              height: 33vh;
              margin-top: -7rem;     
            }

            .content .second ul{
              grid-row-gap: 1.3rem;
            }

            .content .first .techSkills .stack{
              margin-top: .5rem;
            }
          }

           @media screen and (max-width: 414px){
            .content .first .techSkills{
              grid-auto-rows: 50%;
            }
             .content .second{
              margin-top: -5rem;     
            }
             .content .second ul{
              grid-row-gap: .7rem;
            }
          }

           @media screen and (height: 667px) {
            .content .first .techSkills {
              margin-top: -1rem;
              grid-row-gap: .2rem;
           }
           .content .first h1{
             font-size: 1.7rem;
           }
             .content .second{
              margin-top: -6.5rem;     
            }
             .content .second ul{
              grid-row-gap: .5rem;
            }
          }

           @media screen and (height: 640px) {
            .content .first .techSkills{
               margin-top: -1rem;
              grid-auto-rows: 45%;
              grid-row-gap: .2rem;
            }

            .content .first h1{
             font-size: 1.5rem;
           }
           .content .first h3{
             font-size: 1rem;
         
           }
           .content .second ul{
             grid-row-gap: .35rem;
           }
           .content .second ul{
              margin-top: -.8rem;
           }
           .content .second h3{
             margin-top: -.5rem;
             margin-bottom: 1.8rem;
             font-size: 1.2rem;
           }
          }
                     
        </style>


         <div class="pcontainer">

          <nav>
            <p>Skills</p>
            <p class="home" id="1">Home</p>
          </nav>

          <div class="content">
            <div class="first">
              <h1>Technical Skills</h1>
              <div class="techSkills">
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>HTML5</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>CSS3</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>JavaScript</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>VueJs</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>Tailwindcss</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>Sass</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>Figma</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>Version Control/Git</p>
                </div>
                <div class="stack">
                  <div class="img">
                  </div>
                  <p>Responsive Design</p>
                </div>
              </div>
            </div>
            <div class="second">
              <h3>Personal Skills</h3>
              <ul>
                <li>Attention to Detail</li>
                <li>Thirst for Knowlege</li>
                <li>Fast Learner</li>
                <li>Active Listener</li>
                <li>Active Questioner</li>
                <li>Flexibilty and Adaptability</li>
                <li>Critical Thinking</li>
                <li>Self Motivation</li>
              </ul>
            </div>
          </div>

        </div>
      `;

    this.elId = this.shadowRoot.querySelector(".home");

    this.getNxtElId_ChnClass(this.elId);
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

  getNxtElId_ChnClass(el) {
    el.addEventListener("click", () => {
      this._nextElementId = el.id;
      this.className = "hidden";
    });
  }

  static get observedAttributes() {
    return ["class"];
  }
}

export function initSkills() {
  customElements.define("my-skills", Skills);
}
