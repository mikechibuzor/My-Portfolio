import { Attribute } from "../Utilities/Attribute.js";
class About extends HTMLElement {
  constructor(attributeFn) {
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

           .main{
            height: 93vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
            padding: 1rem; 
          }

          
          .main >*{
            // border: 1px solid black;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, .2),
                        -2px -2px 2px rgba(0, 0, 0, .2);
            height: 100%;   
          }

          .main .left{
            transition: all 5s linear;
            animation: svgAnimate 5s linear alternate-reverse infinite;
          }
          
          .main .left svg{
              
          }

          .main .right {
            padding: .5rem 1rem;
            
          }

          .main .right p{

            font-size: 1.7rem;
            text-align: justify;
            line-height: 150%;
          }

          .main .right p .highlight{
            background: #000;
            color: #ccc;
            padding: .2rem;
            border-radius: .15rem;
          }

          .main .right p .underline{
            border-bottom: 2px solid #000;
         
          }

          @keyframes svgAnimate{
            from{
              transform: translateY(-.5rem);
            }
            to{
              transform: translateY(.5rem);
            }
          }

      

          svg{
            height: 100%;
            width: 100%;
          }


          @media screen and (max-width: 760px){
            .main{
              grid-template-columns: 1fr;
              grid-gap: .5rem;
              grid-auto-rows: 40%  60%;
            }

            .main .right p{
              font-size: 1rem;
              line-height: 120%;
            }

          }
        </style>


         <div class="pcontainer">

          <nav>
            <p>About</p>
            <p class="home" id="1">Home</p>
          </nav>

          <div class="main">
            <div class="left">
              <svg   viewBox="0 0 1076.06371 755.2279">
              <title>Frontend web_developer</title>
              <path d="M926.11393,774.80937c-6.98452,26.59789-31.459,43.21966-31.459,43.21966s-13.15033-26.50193-6.16581-53.09982,31.459-43.21966,31.459-43.21966S933.09845,748.21148,926.11393,774.80937Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><path d="M915.52,769.18266c-19.56251,19.32716-21.75117,48.83128-21.75117,48.83128s29.52845-1.83141,49.091-21.15858,21.75116-48.83129,21.75116-48.83129S935.08248,749.85549,915.52,769.18266Z" transform="translate(-61.96814 -72.38605)" fill="#000000"/><path d="M206.70221,674.19438h36.8414l90.78774-35.52564s64.47245-26.31528,59.20939,23.68376-14.47341,117.103-14.47341,117.103-28.94681-13.15764-44.736-9.21035-5.26306-80.26162-5.26306-80.26162-128.9449,61.84092-140.78678,53.94634-14.4734-63.15669-14.4734-63.15669Z" transform="translate(-61.96814 -72.38605)" fill="#2f2e41"/><path d="M206.70221,674.19438h36.8414l90.78774-35.52564s64.47245-26.31528,59.20939,23.68376-14.47341,117.103-14.47341,117.103-28.94681-13.15764-44.736-9.21035-5.26306-80.26162-5.26306-80.26162-128.9449,61.84092-140.78678,53.94634-14.4734-63.15669-14.4734-63.15669Z" transform="translate(-61.96814 -72.38605)" opacity="0.1"/><path d="M264.74607,558.82036l44.58576,64.05921L413.2772,709.72s96.0508,22.368,82.89315,38.15717S402.75109,732.088,402.75109,732.088s-119.73455-86.84044-123.68184-93.41927S231.70174,570.249,231.70174,570.249Z" transform="translate(-61.96814 -72.38605)" fill="#a0616a"/><path d="M264.74607,558.82036l44.58576,64.05921L413.2772,709.72s96.0508,22.368,82.89315,38.15717S402.75109,732.088,402.75109,732.088s-119.73455-86.84044-123.68184-93.41927S231.70174,570.249,231.70174,570.249Z" transform="translate(-61.96814 -72.38605)" opacity="0.1"/><path d="M238.28056,507.09232l28.94681,56.57786s-6.57882,27.63105-17.10494,30.26258-55.26209-34.20987-55.26209-34.20987Z" transform="translate(-61.96814 -72.38605)" fill="#d0cde1"/><path d="M238.28056,507.09232l28.94681,56.57786s-6.57882,27.63105-17.10494,30.26258-55.26209-34.20987-55.26209-34.20987Z" transform="translate(-61.96814 -72.38605)" opacity="0.1"/><path d="M591.4193,644.90044,599.97,680.172a2.20311,2.20311,0,0,1-.04279,1.19048L561.13956,802.57374a2.20306,2.20306,0,0,1-4.28722-.42269l-5.36581-47.21916a2.203,2.203,0,0,1,.09431-.93128L587.1836,644.737A2.20306,2.20306,0,0,1,591.4193,644.90044Z" transform="translate(-61.96814 -72.38605)" fill="#2f2e41"/><polygon points="526.306 575.493 534.2 605.756 499.99 716.28 492.096 682.07 526.306 575.493" fill="#f2f2f2"/><path d="M415.90873,812.34963c1.31577,3.94729,136.83949-1.31577,138.15525-2.63153a28.56086,28.56086,0,0,0,2.89462-5.26306c1.2369-2.63153,2.36844-5.26306,2.36844-5.26306L554.064,756.58753l-134.208-4.76306s-3.35527,36.10458-4.03949,52.63057C415.64564,808.626,415.64564,811.56012,415.90873,812.34963Z" transform="translate(-61.96814 -72.38605)" fill="#2f2e41"/><polygon points="474.991 689.965 477.622 726.806 418.413 726.806 418.413 689.965 474.991 689.965" opacity="0.1"/><polygon points="398.677 701.806 399.03 701.736 397.361 717.596 364.467 717.596 364.467 701.806 398.677 701.806" opacity="0.1"/><path d="M415.90873,812.34963c1.31577,3.94729,136.83949-1.31577,138.15525-2.63153a28.56086,28.56086,0,0,0,2.89462-5.26306H415.81654C415.64564,808.626,415.64564,811.56012,415.90873,812.34963Z" transform="translate(-61.96814 -72.38605)" opacity="0.1"/><circle cx="196.04888" cy="357.07618" r="59.20939" fill="#a0616a"/><path d="M254.06973,482.0928s-19.73647,34.20987-23.68376,52.63057-59.20939-36.8414-59.20939-36.8414l-7.2367-19.07858s51.97268-24.34164,48.02539-44.07811S254.06973,482.0928,254.06973,482.0928Z" transform="translate(-61.96814 -72.38605)" fill="#a0616a"/><path d="M264.59584,584.72241l53.94634,71.05127,128.9449,96.05079s93.41926,19.73647,72.367,34.20987-81.57738-13.15764-81.57738-13.15764S308.01606,703.14119,280.385,674.19438s-78.94585-77.63009-78.94585-77.63009Z" transform="translate(-61.96814 -72.38605)" fill="#a0616a"/><path d="M192.22881,695.24661,208.018,720.24613l94.2313-29.64581c20.67581-6.50474,43.34783-4.11124,61.68676,7.44229,16.44706,10.36164,26.97317,26.80869,3.28941,51.15033-47.36751,48.68328-78.94585,22.368-78.94585,22.368S129.07212,846.5595,102.75684,809.7181s-27.631-55.2621-27.631-55.2621S176.43964,691.29931,192.22881,695.24661Z" transform="translate(-61.96814 -72.38605)" fill="#2f2e41"/><path d="M389.59345,782.08705s42.10445,27.63105-7.89459,40.78869-86.84044-5.26306-86.84044-5.26306-43.42022,0-43.42022-22.368,14.47341-24.99952,14.47341-24.99952l44.736,6.57882S364.59393,762.35059,389.59345,782.08705Z" transform="translate(-61.96814 -72.38605)" fill="#d0cde1"/><path d="M306.58925,414.56777c4.03,1.79653,8.02621,3.92291,12.40755,4.4444s9.37055-1.00819,11.44376-4.903c1.11982-2.10373,1.24778-4.57826,1.3-6.96089.15849-7.22517-.36406-15.03591-4.94264-20.6274-2.9139-3.55854-7.16747-5.80183-10.18374-9.274-2.161-2.48761-3.59924-5.50284-5.14786-8.41141-5.866-11.01725-14.55128-21.60559-26.62195-24.78175-5.04041-1.32629-10.328-1.26157-15.53945-1.188l-30.39725.42884c-4.91906.0694-9.914.15005-14.623,1.57383-9.784,2.95823-16.90779,11.18591-23.43216,19.05427-4.88119,5.88668-9.7753,11.83425-13.43862,18.54685a65.07888,65.07888,0,0,0-7.71423,31.88675,29.83261,29.83261,0,0,0,1.09276,8.43732,46.82177,46.82177,0,0,0,3.31627,7.28423c5.70049,11.19673,9.08523,25.18219,2.66543,35.98258,11.15187-4.55542,22.18591-10.52835,29.54232-20.0677,3.29093-4.26748,5.87181-9.26316,10.25758-12.39472s11.532-3.40321,14.34592,1.1928a12.85719,12.85719,0,0,1,1.4508,6.02242c.20551,3.44983.1999,7.03258,1.66258,10.16374s4.94686,5.65758,8.27337,4.72061c5.72869-1.61358,5.18009-10.406,9.59251-14.4,3.35094-3.03318,8.52074-2.45334,12.82574-3.83026,5.01582-1.60428,8.77937-5.94959,10.92379-10.75939,1.63-3.65594,1.60645-13.223,4.69084-15.20283C294.20755,409.02219,303.00386,412.96943,306.58925,414.56777Z" transform="translate(-61.96814 -72.38605)" fill="#2f2e41"/><path d="M159.2397,472.56207a15.61579,15.61579,0,0,1,8.128.02069c8.44618,2.26753,27.38021,8.27035,31.43989,17.40462,5.26306,11.84188,23.68376,30.26258,23.68376,30.26258s24.99952,24.99952,19.73646,42.10446-24.99952,36.8414-24.99952,36.8414,5.26306,81.57738-21.05223,102.62961-36.8414,6.57882-36.8414,26.31528S77.75732,809.7181,61.96814,771.56094c0,0,7.89459-71.05128,5.26306-96.0508C64.63762,650.87116,68.43448,497.14537,159.2397,472.56207Z" transform="translate(-61.96814 -72.38605)" fill="#d0cde1"/><path d="M201.43916,505.77655s80.26162,59.2094,65.78821,84.20892c0,0-48.68328,23.68375-59.20939,22.368s-51.31481-47.36751-61.84092-51.31481S130.38789,486.04009,201.43916,505.77655Z" transform="translate(-61.96814 -72.38605)" fill="#d0cde1"/><circle cx="498.06371" cy="237.45791" r="65" fill="#f2f2f2"/><path d="M1096.8978,225.42666H732.64912V149.20722H1096.8978ZM734.25374,223.822h361.03944v-73.0102H734.25374Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="645.80936" y="92.06506" width="362.64407" height="74.61482" fill="#000000"/><circle cx="416.56486" cy="15.24386" r="5.61624" fill="#000000"/><circle cx="435.8203" cy="15.24386" r="5.61624" fill="#000000"/><circle cx="455.07573" cy="15.24386" r="5.61624" fill="#000000"/><path d="M1138.03186,512.05187H462.48693V72.38605h675.54493Zm-673.94031-1.60462h672.33569V73.99067H464.09155Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="401.3211" y="24.33804" width="673.9403" height="1.60462" fill="#3f3d56"/><path d="M480.13775,91.64149a6.41848,6.41848,0,1,1,6.41848-6.41848A6.42592,6.42592,0,0,1,480.13775,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81386,4.81386A4.81945,4.81945,0,0,0,480.13775,80.40915Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><path d="M499.39319,91.64149a6.41848,6.41848,0,1,1,6.41848-6.41848A6.42592,6.42592,0,0,1,499.39319,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81386,4.81386A4.81945,4.81945,0,0,0,499.39319,80.40915Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><path d="M518.64863,91.64149A6.41848,6.41848,0,1,1,525.0671,85.223,6.42593,6.42593,0,0,1,518.64863,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81385,4.81386A4.81946,4.81946,0,0,0,518.64863,80.40915Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="612.10922" y="25.14035" width="1.60462" height="414.34565" fill="#3f3d56"/><rect x="688.73293" y="228.85889" width="117.93955" height="16.0462" fill="#f2f2f2"/><rect x="874.06652" y="228.85889" width="117.93955" height="16.0462" fill="#f2f2f2"/><path d="M875.86143,310.07035H756.31726V292.41953H875.86143Zm-117.93955-1.60462H874.25681V294.02415H757.92188Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="688.73293" y="353.21693" width="117.93955" height="16.0462" fill="#f2f2f2"/><path d="M875.86143,434.42838H756.31726V416.77757H875.86143Zm-117.93955-1.60462H874.25681V418.38219H757.92188Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="689.13409" y="289.43329" width="303.27314" height="16.0462" fill="#f2f2f2"/><path d="M1061.59617,372.24937H756.71841V354.59855h304.87776ZM758.323,370.64475h301.66852V356.20317H758.323Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><path d="M1061.195,310.07035H941.65084V292.41953H1061.195Zm-117.93955-1.60462h116.33493V294.02415H943.25546Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><path d="M571.03186,357.844a66,66,0,1,1,66-66A66.07468,66.07468,0,0,1,571.03186,357.844Zm0-130a64,64,0,1,0,64,64A64.0727,64.0727,0,0,0,571.03186,227.844Z" transform="translate(-61.96814 -72.38605)" fill="#3f3d56"/><rect x="748.06371" y="744.45791" width="283" height="2" fill="#3f3d56"/>
              </svg>
            </div>
            <div class="right">
            
              <p>
                <span class="highlight">Iwuagwu Chibuzor</span> is a Creative, Design-Focused, Self-taught, Frontend Web Developer studying Computer Science at the University of Ibadan.
              </p>
              <p>
                 His one year-plus experience in the web space has given him vast and grounded knowledge in the technologies needed to create that <span class="highlight">rich web experience</span>(Aesthetic, Fast, Interactive and Responsive Websites/Web Applications.)
              </p>
              <p>
                 When Chibuzor is not trying to make the world a better place with coding the web, he is doing so by genuinely making people feel good about themselves.
              </p>
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

export function initAbout() {
  customElements.define("about-me", About);
}
