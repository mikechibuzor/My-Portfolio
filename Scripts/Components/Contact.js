import { Attribute } from "../Utilities/Attribute.js";
class Contact extends HTMLElement {
  constructor(attributeFn) {
    super();
    this._attrFn = attributeFn;
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
        </style>


         <div class="pcontainer">

          <nav>
            <p>Contact</p>
            <p class="home" id="1">Home</p>
          </nav>

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
