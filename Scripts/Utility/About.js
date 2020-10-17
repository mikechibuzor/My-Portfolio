class About extends HTMLElement {
  constructor(attributeFn) {
    super();
    this._attrFn = attributeFn;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
            :host{
                position: absolute;
            }
        </style>
        <h1>About me</h1>
      `;
  }
}

export function initAbout() {
  customElements.define("about-me", About);
}
