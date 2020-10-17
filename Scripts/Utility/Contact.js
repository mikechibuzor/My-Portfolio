class Contact extends HTMLElement {
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
        <h1>Contact me here</h1>
      `;
  }
}

export function initContact() {
  customElements.define("contact-me", Contact);
}
