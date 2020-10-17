// imports of all Web Components and their classes
import { initHomepage } from "./Utility/HomePage.js";
import { initProjects } from "./Utility/Projects.js";
import { initAbout } from "./Utility/About.js";
import { initContact } from "./Utility/Contact.js";
import { initSkills } from "./Utility/Skills.js";

// function below helps call the customDefine method that initializes the components in this file
initHomepage();
initProjects();
initAbout();
initContact();
initSkills();

/*The function of the lines of code below is to get the attribute event that is being dispatched by any of
Web Components, then fires it to run a function that will get the id of the particular Web Component that
dispatched the event.

With that id, it determins what component to be rendered visible and the others hidden
*/
let componentsContainer = document.querySelector(".container");

componentsContainer.addEventListener("attributeChange", (e) => {
  const viewElementId = e.detail.nextComponentId;
  componentsContainer = Array.from(componentsContainer.children);

  componentsContainer.forEach((component) => {
    if (component.id === viewElementId) {
      component.setAttribute("class", "visible");
    }
  });
});
