class Skills extends HTMLElement {
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
        <h1>Skills goes here</h1>
      `;
  }
}

export function initSkills() {
  customElements.define("my-skills", Skills);
}
