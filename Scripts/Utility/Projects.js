import { Perspective } from "./3d.js";
class Projects extends HTMLElement {
  constructor(attributeFn) {
    super();
    this._attrFn = attributeFn;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
            *{
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }

            :host{
                position: absolute;
            }

            .prjContainer{
              width: 100vw;
              height: 100vh;
            }

            .prjContainer >*{
               border: 1px solid black;
            }

            header{
              width: 100%;
              height: 10vh;
            }

            .body{
              height: 80vh;
              display: flex;
              allign-items: center;
              justify-content: center;
              border: 1px solid red;
              position: relative;
            }

            .container{
              position: absolute;
             
            }

            /*3d Styles*/
            .container {
              width: 100%;
              height: 100%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              transform-style: preserve-3d;
              transition: all 1s linear;
            }

            @keyframes transformPerspectiveNext {
              50% {
                transform: rotateX(-25deg) rotateY(25deg);
              }
              70% {
                transform: rotateX(-15deg) rotateY(45deg);
              }
              100% {
                transform: rotateX(-5deg) rotateY(90deg);
              }
            }
            @keyframes transformPerspectivePrevious {
              50% {
                transform: rotateX(-25deg) rotateY(-25deg);
              }
              70% {
                transform: rotateX(-15deg) rotateY(-45deg);
              }
              100% {
                transform: rotateX(-5deg) rotateY(-90deg);
              }
            }

            main {
              position: absolute;
              width: 100%;
              height: 100%;
              background: silver;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .top {
              transform: rotateX(90deg) translate3d(0, 0, 250px);
            }

            .left {
              transform: rotateY(-90deg) translate3d(0, 0, 250px);
              z-index: 2;
            }
            .right {
              transform: rotateY(90deg) translate3d(0, 0, 250px);
              z-index: 2;
            }

            .front {
              transform: translate3d(0, 0, 250px);
              z-index: 3;
            }
            .others {
              visibility: hidden;
            }
            /* Button Controls */
            .controls {
              position: absolute;
              bottom: 5rem;
              right: 5rem;
            }

            .controls button {
              cursor: pointer;
              padding: 0.5rem 1rem;
              border-radius: 0.2rem;
              outline: none;
              border: none;
              background: rgba(0, 0, 0, 0.7);
              color: #ccc;
              transition: all 0.3s ease-in-out;
              transition-property: transform;
            }

            .controls button.next {
              transform-origin: bottom left;
            }

            .controls button.previous {
              transform-origin: bottom right;
            }

            .controls button:hover {
              transform: scale(1.2);
            }

            /*end 3d Styles*/

            

            footer{
              height: 10%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 8rem;
            }

            footer button{
              border: 1px solid black;
              padding: .2rem .5rem;
              border-radius: .1rem .4rem;
              cursor: pointer;
              transition: all .2s ease-in-out;
            }

            footer button.next{
                transform-origin: bottom left;
            }

            footer button.previous{
                transform-origin: bottom right;
            }

            footer button.next:hover{
              transform: scale(1.3);
            }
            footer button.next:hover p.previous{
              margin-right: 1rem;
            }
            
            footer button.previous:hover{
              margin-right: .5rem;
              transform: scale(1.3);
            }
           

            footer .np{
              display: flex;
            }

            footer .np button{
              margin-right: .5rem;
            }
        </style>
        
        <div class="prjContainer">

            <header>1</header>
            
            <div class="body">
              <div class="container">

              <main class="top">
                <p>Top Element goes here</p>
                <p>I am a person</p>
              </main>

              <main class="left">
                <div class="prjDisp">1</div>
                <div class="prjText">2</div>
              </main>

              <main class="front">
                <div class="prjDisp">3</div>
                <div class="prjText">4</div>
              </main>

              <main class="right">
                <div class="prjDisp">5</div>
                <div class="prjText">6</div>
              </main>

              <main class="others">
                <div class="prjDisp">7</div>
                <div class="prjText">8</div>
              </main>

              <main class="others">
                <div class="prjDisp">9</div>
                <div class="prjText">10</div>
              </main>

              <main class="others">
                <div class="prjDisp">11</div>
                <div class="prjText">12</div>
              </main>

              <main class="others">
                <p>Bottom Element goes here</p>
              </main>
            </div>

            </div>
            <footer>
              <p> <span>2</span> of <span>5</span></p>
              <div class="np">
                  <button class="previous">Previous</button><button class="next">Next</button>
              </div>
              
            </footer>

        </div>
      `;

    this.container = this.shadowRoot.querySelector(".container");
    this.buttons = this.shadowRoot.querySelectorAll("button");

    new Perspective(this.container, this.buttons);
  }
}

export function initProjects() {
  customElements.define("my-projects", Projects);
}
