// imports of all Web Components and their classes
import { initHomepage } from "./Components/HomePage.js";
import { initProjects } from "./Components/Projects.js";
import { initAbout } from "./Components/About.js";
import { initContact } from "./Components/Contact.js";
import { initSkills } from "./Components/Skills.js";

// function below helps call the customDefine method that initializes the components in this file
initHomepage();
initProjects();
initAbout();
initContact();
initSkills();

/*The function of the lines of code below is to get the attribute event that is being dispatched by any of the
Web Components, then fires it to run a function that will get the id of the particular Web Component that
dispatched the event.

With that id, it determins what component to be rendered visible and the others hidden
*/
let componentsContainer = document.querySelector(".container");

const attributeChangeFunction = (event) => {
  const viewElementId = event.detail.nextComponentId;
  const compContChildren = Array.from(componentsContainer.children);

  compContChildren.forEach((component) => {
    console.log(viewElementId);
    if (component.id === viewElementId) {
      console.log(viewElementId);
      component.setAttribute("class", "visible");
    }
  });
};
componentsContainer.addEventListener("attributeChange", (e) => {
  attributeChangeFunction(e);
});
