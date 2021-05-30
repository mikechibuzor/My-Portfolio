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

          main .first{
            grid-column: 1/4;
            padding: 0rem 4rem;
          }

          main .first form{          
            overflow: hidden;
          }

          main .first form .formElement{
            display: flex;
            flex-direction: column;
            margin: 1.5rem 0;
            
          }

          main .first form .formElement input{
            padding: .8rem 1rem;
            border-radius: .25rem;
            margin-top: .3rem;
            outline: none;
            border: none;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
          }

           main .first form .formElement label{
             color: gray;
             margin-bottom: .3rem;
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
            padding: .7rem 1rem;
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
            grid-column: 4/7;
            display: flex;
            align-items: center;
            justify-content: center;
           
          }

      
           main .second .social-media-icons{
            display: flex;
            align-items: center;
            justify-content: center;
             padding: 1rem 3rem;
             border-radius: .5rem;
             box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
            background-color: #0d0d0d;
        
          }
           .social-media-icons p{
            color: #ccc;
            cursor: pointer;
            margin-right: 2rem;
            transition: all .3s ease-in-out;
          }
          main .second .social-media-icons p:hover{
            transform: translateY(.2rem); 
          }

          main .second .social-media-icons a svg{
            height: 2rem;
            width: 1.5rem;
            fill: #ccc;
          }


          @media screen and (max-width: 768px){
            main .first{
              grid-column: 1/7;
              padding: 0rem 1.5rem;
              
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
              <h1>Contact Me</h1>
              <form action="#" method="POST">
                <div class="formElement">
                  <label for="name">
                    Your name
                  </label>
                  <input type="text" placeholder="Please enter your name..." id="name" />
                </div>
                <div class="formElement">
                  <label for="email">
                    Your email
                  </label>
                  <input type="email" placeholder="Please enter your email..." id="email" />
                </div>
                <div class="formElement">
                   <label for="message">
                    Your message
                   </label>
                   <textarea placeholder="Please enter your message...">

                   </textarea>
                </div>
             

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div class="second">
              <div class="social-media-icons">
                 <p>
                  <a href="https://twitter.com/faceOfALion1" target="_blank">
                  <svg enable-background="new 0 0 56.693 56.693"  viewBox="0 0 56.693 56.693"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path  d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z"/>
                  </svg>
                  </a>
                </p>
                <p>
                  <a href=" https://wa.me/+2348094939264 " target="_blank">
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                   </svg>
                  </a>
                </p>
                <p>
                  <a href="https://github.com/mikechibuzor" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                  </a>
                </p>
              </div>
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
