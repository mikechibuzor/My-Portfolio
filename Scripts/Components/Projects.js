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

      main .cont .projectText{
        position: relative;
      } 

      main .cont .projectText h2{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: gray;
      }

      main .cont .projectText h2 span{
        font-size: 2.5rem;
        color: black;
      }

      main .cont .projectText ul{
        list-style: none;
      }

      main .cont .projectText ul li{
           padding-left: .5rem;
           padding-top: .2rem;
         }

      main .cont .projectText p{
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

      #techList .links{
         position: absolute;
         left: 0;
         width: 100%;
         bottom: 0rem;
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

      main .cont .projectText {
        margin-top: -2.5rem;
      }

      main .cont .projectText h2{
        font-size: 1rem;
      }
       main .cont .projectText h2 span{
         font-size: 2.6rem;
         margin-top: .5rem;
       }
      main .cont .projectText h4{
        font-size: 1rem;
      }
      main .cont .projectText p{
         font-size: 1rem;
         line-height: 1.65rem;
         text-align: justify;
         margin-top: -.5rem;
       }

       #techList{
         margin-top: -1rem;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         font-size: .8rem;
       }

       #techList .links{
        //  grid-column: 1/4;
        //  margin-top: 1.3rem;
        //  display: flex;
        
         bottom: -1.5rem;
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
          <h2>About the Project: <br /><span>${projectText[0]}</span></h2>
          <p>${projectText[1]}.</p>
          <h4>Tech Used to build this project:</h4>
          <ul id="techList">
          </ul>
        </div>
    `;
    this.listTechStack(
      prjStructure.querySelector("#techList"),
      projectText[2],
      projectText[3],
      projectText[4]
    );
    prjStructure.classList = "cont hidden";
    this.shadowRoot.querySelector(".pmain").appendChild(prjStructure);
  }

  listTechStack(ul, techStack, live, source) {
    const tStack = techStack.split(",");
    tStack.forEach((tS) => {
      const li = document.createElement("li");
      li.innerHTML = `<li>${tS}</li>`;
      ul.appendChild(li);
    });
    const links = document.createElement("p");
    links.innerHTML = `<p class="links">
                          <a href="${live}" target="_blank" style="margin-right: 1rem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 20 20" >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fill-rule="evenodd" fill="#0d0d0d" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                            </svg>
                          </a>
                          <a href="${source}" target="_blank">                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0)">
                              <path d="M12 0.279999C9.14324 0.279151 6.37985 1.29752 4.20677 3.15199C2.0337 5.00645 0.593508 7.57535 0.145169 10.3968C-0.30317 13.2182 0.269759 16.1069 1.76093 18.5437C3.25211 20.9804 5.5637 22.8052 8.28004 23.69H8.57004C8.71152 23.6988 8.85326 23.6774 8.98584 23.6272C9.11842 23.577 9.23883 23.4993 9.33906 23.399C9.4393 23.2988 9.51708 23.1784 9.56725 23.0458C9.61741 22.9132 9.63882 22.7715 9.63004 22.63V22.42C9.63004 22.25 9.63004 22.02 9.63004 21.33C9.62022 21.2645 9.59749 21.2016 9.56316 21.1449C9.52882 21.0883 9.48357 21.039 9.43004 21C9.37195 20.953 9.30407 20.9196 9.23139 20.9023C9.15871 20.885 9.08307 20.8842 9.01004 20.9C6.33004 21.48 5.76004 19.8 5.72004 19.69C5.38445 18.8011 4.78407 18.0367 4.00004 17.5C3.95306 17.4594 3.9029 17.4226 3.85004 17.39C3.96624 17.3274 4.09917 17.303 4.23004 17.32C4.48138 17.3549 4.71939 17.4544 4.92091 17.6086C5.12243 17.7628 5.28061 17.9665 5.38004 18.2C5.76689 18.8736 6.39992 19.3709 7.14595 19.5872C7.89198 19.8036 8.69284 19.7221 9.38004 19.36C9.45378 19.3278 9.51865 19.2782 9.56914 19.2155C9.61963 19.1529 9.65424 19.0789 9.67004 19C9.70833 18.5374 9.9063 18.1026 10.23 17.77C10.3019 17.7062 10.3539 17.623 10.3797 17.5304C10.4055 17.4378 10.4041 17.3397 10.3756 17.2479C10.3471 17.1561 10.2927 17.0745 10.219 17.0128C10.1453 16.9511 10.0554 16.9119 9.96004 16.9C7.59004 16.63 5.17004 15.8 5.17004 11.71C5.15006 10.6829 5.52603 9.68745 6.22004 8.93C6.28396 8.8594 6.32638 8.77201 6.34233 8.67812C6.35827 8.58423 6.34707 8.48774 6.31004 8.4C6.03212 7.62353 6.03566 6.77413 6.32004 6C7.24387 6.16376 8.11097 6.55946 8.84004 7.15C8.90027 7.19251 8.96932 7.22088 9.04204 7.233C9.11476 7.24512 9.18927 7.24068 9.26004 7.22C10.1533 6.97768 11.0745 6.85329 12 6.85C12.9291 6.85078 13.8538 6.97521 14.75 7.22C14.8193 7.23912 14.892 7.24276 14.9628 7.23066C15.0337 7.21856 15.101 7.19103 15.16 7.15C15.8903 6.56132 16.7569 6.16584 17.68 6C17.9523 6.76998 17.9523 7.61002 17.68 8.38C17.643 8.46774 17.6318 8.56423 17.6477 8.65812C17.6637 8.75202 17.7061 8.8394 17.77 8.91C18.4569 9.65988 18.8323 10.6432 18.82 11.66C18.82 15.75 16.39 16.57 14.01 16.84C13.9124 16.8502 13.82 16.8888 13.7442 16.9512C13.6684 17.0135 13.6126 17.0968 13.5838 17.1906C13.555 17.2845 13.5545 17.3847 13.5823 17.4788C13.6101 17.573 13.6649 17.6568 13.74 17.72C13.9615 17.9486 14.1308 18.2226 14.2361 18.523C14.3414 18.8234 14.3803 19.1431 14.35 19.46V22.64C14.3451 22.7963 14.3748 22.9518 14.437 23.0953C14.4993 23.2388 14.5925 23.3668 14.71 23.47C14.8597 23.5821 15.0335 23.6576 15.2175 23.6906C15.4016 23.7236 15.5908 23.7131 15.77 23.66C18.4681 22.7574 20.7578 20.9254 22.2304 18.4911C23.703 16.0568 24.2628 13.1784 23.8099 10.3696C23.357 7.56082 21.9208 5.00431 19.7577 3.15625C17.5945 1.30818 14.8451 0.288804 12 0.279999Z" fill="#0d0d0d"/>
                              </g>
                              <defs>
                              <clipPath id="clip0">
                              <rect width="24" height="24" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </a>                          
                      </p>`;
    ul.appendChild(links);
  }
}

export function initProjects() {
  customElements.define("my-projects", Projects);
}
