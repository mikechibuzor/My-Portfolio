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
            flex: 0 0 30%;
            border: 1px solid green;
            height: 100%;            
          }

          .home .content .cont{
            flex: 0 0 70%;
            border: 1px solid yellow;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          .home .content .cont .contText{
            flex: 0 0 100%;
            height: 85%;
            border: 1px solid pink;
          }

          .home .content .cont .footer{
            flex: 0 0 100%;
            border: 1px solid blue;
            height: 15%;
          }
        </style>
        <div class="home components">
          <div class="content">
            <div class="menu">
            </div>
            <div class="cont">
              <div class="contText">
              </div>
              <div class="footer">
              </div>
            </div>
            
          </div>
        </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  static get observedAttributes() {
    return ["visible"];
  }
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
