// import { Perspective } from "./3d.js";
import { Attribute } from "../Utilities/Attribute.js";
class Projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.attributeEnabler = true;
    this._nextElementId;
    this.counter;
    this.numberOfProjects;
    this.enableButton = true;
    this.projects = this.getAttribute("projects");
    console.log(JSON.parse(this.projects));
    // this.attributeEnabler = true;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `

    <style>

      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :host{
            position: absolute;
            width: 100%;
            transition: all 1s ease-in-out;
          }

      .pcontainer{
      
        width: 100%;
        height: 100vh;
        display: grid;
        
        background: #ccc;
      }

      .pcontainer >*{
        border: 1px solid red;
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
        position: relative;
         height: 80vh;
        flex: 0 0 100%;
        width: 100%;
      }

      main .cont{
        height: 80vh;
        flex: 0 0 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        padding: 2rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #ccc;
        transition: all .3s linear;
      }

      main .cont.animateCont{
        animation: contAnimate .5s linear;
      }

      main .cont >*{
        border: 1px solid black;
      }

      main .cont.visible{
        pointer-events: all;
        opacity: 1;
       
      }

      main .cont.hidden{
        pointer-events: none;
        opacity: 0;
        
      }

      /*
      .projectImage{
        animation: animateProjectImage .5s linear forwards;
      }
      .projectText{
        animation: animateProjectText .5s linear forwards;
      }*/

      

      /* Animation */
      @keyframes animateProjectImage{
        0%{
          transform: translateX(-10%);
        }
        50%{
          transform: translateX(-20%);
          opacity: .5;
        }
        100%{
          transform: translateX(-25%);
          opacity: 0;
        }
      }

       @keyframes animateProjectText{
        0%{
          transform: translateX(10%);
        }
        50%{
          transform: translateX(20%);
          opacity: .5;
        }
        100%{
          transform: translateX(25%);
          opacity: 0;
        }
      }

      footer{
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;      
      }

      footer .buttons{
        display: flex;
        justify-content: space-evenly;
      }

      footer p{
        margin: 0 .3rem;
        border: 1px solid black;
        padding: .2rem .5rem;
        border-radius: .2rem;
        transition: transform .2s ease-in-out;
        cursor: pointer;
      }

      footer p:nth-of-type(1){
        transform-origin: bottom right;
      }
    
      footer p:nth-of-type(2){
        transform-origin: bottom left;
      }

      footer p:hover{
        transform: scale(1.2);
      }

    


      @media screen and (max-width: 768px){

      main .cont >*{
        grid-column: 1/3;
      }
        
      nav{
        height: 7vh;
        padding-left: 1rem;
        font-size: 90%;
      }
      main{
        height: 86vh;
      }
      main >*{
        grid-column: 1/3;
      }

      footer{
         height: 7vh;
       }
      }


    </style>

      <div class="pcontainer">

        <nav>
          <p>Projects</p>
          <p class="home" id="1">Home</p>
        </nav>

        <main class="pmain">

         <div class="cont visible">

            <div class="projectImage" style="background-color: white">2
            </div>

            <div class="projectText" style="background-color: pink">3
            </div>

         </div>

         <div class="cont hidden">
         
            <div class="projectImage" style="background-color: blue">22
            </div>

            <div class="projectText" style="background-color: black">33
            </div>

         </div>

        <div class="cont hidden">
         
            <div class="projectImage" style="background-color: green">42
            </div>

            <div class="projectText" style="background-color: chocolate">43
            </div>

         </div> 
        <div class="cont hidden">
         
            <div class="projectImage" style="background-color: red">52
            </div>

            <div class="projectText" style="background-color: yellow">53
            </div>

         </div> 

        </main>

        <footer class="pfooter">
          <div class="pagination">
            <h4 id="counter"><span id="currentCount">1</span> of <span id="endCount">4</span></h4>
          </div>

          <div class="buttons">
            <p id="previous" class="btn">Previous</p>
            <p id="next" class="btn">Next</p>
          </div>
        </footer>
      </div>
    `;

    this.container = this.shadowRoot.querySelector(".container");
    this.buttons = this.shadowRoot.querySelectorAll(".btn");

    this.elId = this.shadowRoot.querySelector(".home");
    this.currentCount = this.shadowRoot.querySelector("#currentCount");

    this.getNxtElId_ChnClass(this.elId);

    this.buttonClickHandler(this.buttons);

    // new Perspective(this.container, this.buttons);
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

  static get observedAttributes() {
    return ["class"];
  }

  getNxtElId_ChnClass(el) {
    el.addEventListener("click", () => {
      this._nextElementId = el.id;
      this.className = "hidden";
    });
  }

  buttonClickHandler(buttons) {
    buttons.forEach((button) => {
      button.addEventListener("click", this.buttonClickedFunction.bind(this));
    });
  }

  buttonClickedFunction(event) {
    // The code directly below this comment solves a bug.
    if (this.counter === 1 || this.counter === this.numberOfProjects) {
      this.enableButton = true;
    }
    if (!this.enableButton) {
      return;
    }

    this.hide = this.shadowRoot.querySelector(".visible");
    const elementChooser =
      event.target.id === "next"
        ? "nextElementSibling"
        : "previousElementSibling";
    this.show = this.hide[elementChooser];

    this.pageCounter(elementChooser, this.currentCount);

    this.enableButton = false;

    //So 'this' works in the setInterval function
    const tthis = this;

    //if there is a previous or next element sibling
    if (tthis.show) {
      setTimeout(() => {
        tthis.hide.classList.remove("visible");
        tthis.hide.classList.add("hidden");
        tthis.show.classList.remove("hidden");
        tthis.show.classList.add("visible");

        this.enableButton = true;
      }, 550);

      setTimeout(() => {
        tthis.shadowRoot.querySelector(
          ".visible .projectImage"
        ).style.animation = "none";

        tthis.shadowRoot.querySelector(
          ".visible .projectText"
        ).style.animation = "none";
      }, 550);
      tthis.shadowRoot.querySelector(".visible .projectImage").style.animation =
        "animateProjectImage .5s linear forwards";

      tthis.shadowRoot.querySelector(".visible .projectText").style.animation =
        "animateProjectText .5s linear forwards";
    }
  }

  pageCounter(buttonClicked, currentCount) {
    if (this.enableButton) {
      const pmain = this.shadowRoot.querySelector(".pmain");
      this.numberOfProjects = pmain.children.length;
      const regEx = /next/g;
      this.counter = Number(currentCount.textContent);

      if (regEx.test(buttonClicked)) {
        if (this.counter < this.numberOfProjects) {
          this.counter++;
          currentCount.textContent = this.counter;
        }
      } else {
        if (this.counter > 1) {
          this.counter--;
          currentCount.textContent = this.counter;
        }
      }
    }
  }
}

export function initProjects() {
  customElements.define("my-projects", Projects);
}
