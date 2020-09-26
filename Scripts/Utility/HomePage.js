class HomePage extends HTMLElement {
  constructor(checkAttrChange) {
    super();
    this._checkAttrChange = checkAttrChange;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <div class="home components">
          <p>${this._portfolioOwner}</p>
        </div>
    `;
  }

  connectedCallback() {
    this._portfolioOwner = this.getAttribute("name") || "name goes here";
    this._logo = this.getAttribute("logo") || "logo";
    this._jobs = this.getAttribute("jobs") || ["Job 1", "Job2", "Job3"];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  static get observedAttributes() {
    return ["visible"];
  }
}

export function initHomepage() {
  customElements.define("home-page", HomePage);
}
