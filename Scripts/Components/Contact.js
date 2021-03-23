import { Attribute } from "../Utilities/Attribute.js";
class Contact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.attributeEnabler = true;
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
            height: 10vh;
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

          main{
            display: grid;
            grid-template-columns: repeat( 6, 1fr);
            height: 90vh;
          }

          main>*{
            border: 1px solid black;
          }

          main .first{
            grid-column: 1/5;
            padding: 5rem 10rem;
          }

          main .first form{          
            padding: 1rem 0rem;
            overflow: hidden;
          }

          main .first form .formElement{
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
            
          }

          main .first form .formElement input{
            padding: .5rem 1rem;
            border-radius: .25rem;
            margin-top: .3rem;
            outline: none;
            border: none;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
          }

          main .first form  textarea{
            width: 100%;
            padding: .5rem 1rem;
            border-radius: .25rem;
            outline: none;
            border: none;
            height: 30vh;
         
          }

          main .first form button{
            border-radius: .25rem;
            padding: .4rem 1rem;
            margin-top: 1.5rem;
            background-color: #0d0d0d;
            color: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            cursor: pointer;
            border: none;
            transition: all .5s ease-in;
          }

          main .first form button:hover{
            background-color: #eee;
            color: #0d0d0d;
          }

          main .second{
            grid-column: 5/7;
          }

          @media screen and (max-width: 768px){
            main .first{
              grid-column: 1/7;
              padding: 2rem 1.5rem;
            }

            main .second{
              display: none;
            }
          }

         
        </style>


         <div class="pcontainer">

          <nav>
            <p>Contact</p>
            <p class="home" id="1">Home</p>
          </nav>

          <main>
            <div class="first">
              <form action="#" method="POST">
                <div class="formElement">
                  <label for="name">
                    Your name
                  </label>
                  <input type="text" placeholder="Please enter your name..." id="name" />
                </div>
                <div class="formElement">
                  <label for="email">
                    Your name
                  </label>
                  <input type="email" placeholder="Please enter your email..." id="email" />
                </div>
                
                <textarea placeholder="Please enter your message...">

                </textarea>
             

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div class="second">
            </div>
          </main>      

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

export function initContact() {
  customElements.define("contact-me", Contact);
}
