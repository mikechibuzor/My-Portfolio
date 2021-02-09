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
    this.projects = JSON.parse(this.getAttribute("projects"));
    this.numberOfProjects = this.projects.length;

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

      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      :host{
          position: absolute;
          width: 100%;
          transition: all 1s ease-in-out;
          background: #0d0d0d;
          color: #ccc;
          }

      .pcontainer{
      
        width: 100%;
        height: 100vh;
        display: grid;
       
      }

      nav{
        height: 10vh;
        flex: 0 0 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
        box-shadow: 2px 2px 2px rgba(233, 233, 233, .3);
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
        border-right: 1px solid #ccc;
        padding-right: 0.5rem;
      }

      main{
        position: relative;
        height: 80vh;
        flex: 0 0 100%;
        width: 100%;
         background: #ccc;
      }

      main .cont{
        height: 80vh;
        flex: 0 0 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 100%;
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
            
      }
      main .cont .projectImage{
          cursor: pointer;
          overflow: hidden;
      }

      main .cont .projectImage img{
        transition: all .3s linear;
      }
      main .cont .projectImage:hover img{
          transform: scale(1.03);
      }

      main .cont .projectText h2{
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }

      main .cont .projectText ul{
        list-style: none;
      }

      main .cont .projectText ul li{
           padding-left: .5rem;
           padding-top: .2rem;
         }

      main .cont .projectText p{
         line-height: 1.8rem;
         font-size: 1.4rem;

       }
      
      main .cont .projectText h4{
        margin: 1rem;
        margin-left: 0rem;
        font-size: 1.5rem;
      }


      main .cont.visible{
        pointer-events: all;
        opacity: 1;       
      }

      main .cont.hidden{
        pointer-events: none;
        opacity: 0;
        
      }      

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
      footer #counter{
        opacity: .6;
      }
      footer p{
        margin: 0 .3rem;
        border: 1px solid black;
        padding: .2rem .5rem;
        border-radius: .2rem;
        border: 1px solid #ccc;
        transition: transform .2s ease-in-out;
        cursor: pointer;
        height: 1.5rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      footer svg{
        width: 100%;
        height: 100%;
      }

      footer p:nth-of-type(1){
        transform-origin: bottom right;
      }
    
      footer p:nth-of-type(2){
        transform-origin: bottom left;
      }

      footer p:hover{
        transform: scale(1.2);
        background: #ccc;
      }
      footer p:hover svg path{
        stroke: black;
      }

      @media screen and (max-width: 768px){

      main .cont{
          grid-auto-rows: 50%;
      }

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

      main .cont .projectText h2{
        font-size: 1.4rem;
      }
      main .cont .projectText h4{
        font-size: 1rem;
      }
      main .cont .projectText p{
         font-size: 1.1rem;
         line-height: 1.15rem;
         text-align: justify;
         margin-top: -.5rem;
       }

       #techList{
         margin-top: -1rem;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
       }

       #techList .links{
         grid-column: 1/4;
         margin-top: 1.3rem;
         display: flex;
         justify-content: center;
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

         
        </main>

        <footer class="pfooter">
          <div class="pagination">
            <h4 id="counter"><span id="currentCount">1</span> of <span id="endCount">${this.numberOfProjects}</span></h4>
          </div>

          <div class="buttons">
            <p id="previous" class="btn">
              <svg class="previous" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path class="previous" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </p>
            <p id="next" class="btn">
              <svg class="next" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path class="next" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </footer>
      </div>
    `;

    this.dyanmicProject();

    // sets the first project to be visible
    this.shadowRoot.querySelectorAll(".cont")[0].classList = "cont visible";

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
      event.currentTarget.id === "next"
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

  dyanmicProject() {
    this.projects.forEach((project) => {
      this.projectStructure(project.projectImage, project.projectText);
    });
  }

  projectStructure(projectImage, projectText) {
    const prjStructure = document.createElement("div");
    prjStructure.innerHTML = `
        <div class="projectImage" style="background-color: inherit">
          <img src="${projectImage}" alt="" />
        </div>

        <div class="projectText" style="color: #000">
          <h2>About the Project: <em>${projectText[0]}</em></h2>
          <p>${projectText[1]}.</p>
          <h4>Tech Used to build this project:</h4>
          <ul id="techList">
          </ul>
        </div>
    `;
    this.listTechStack(
      prjStructure.querySelector("#techList"),
      projectText[2],
      projectText[3]
    );
    prjStructure.classList = "cont hidden";
    this.shadowRoot.querySelector(".pmain").appendChild(prjStructure);
  }

  listTechStack(ul, techStack, link) {
    const tStack = techStack.split(",");
    tStack.forEach((tS) => {
      const li = document.createElement("li");
      li.innerHTML = `<li>${tS}</li>`;
      ul.appendChild(li);
    });
    const links = document.createElement("p");
    links.innerHTML = `<p class="links">
                          <a href="${link}">View Live</a>
                          <a href="${link}">View Code</a>                          
                      </p>`;
    ul.appendChild(links);
  }
}

export function initProjects() {
  customElements.define("my-projects", Projects);
}
