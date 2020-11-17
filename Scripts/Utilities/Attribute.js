export class Attribute {
  static attributeFn(nextComponentId, component) {
    const viewEvent = new CustomEvent("attributeChange", {
      bubbles: true,
      detail: {
        nextComponentId,
      },
    });
    component.dispatchEvent(viewEvent);
  }
}
