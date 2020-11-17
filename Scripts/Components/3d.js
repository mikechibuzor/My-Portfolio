export class Perspective {
  constructor(container, buttons) {
    this.container = container;
    this.buttons = buttons;

    this.buttonListener();
  }

  contentToAppear(old, current, future, direction, bugFix) {
    old.className = `${bugFix}`;
    current.className = "front";
    future.className = direction;
    this.container.children[0].className = "top";
  }

  clickHandler(event) {
    // this.resizeContainer();

    this.perspectiveFunction(event);
  }

  resizeContainer() {
    this.container.style.width = "500px";
    this.container.style.height = "500px";
    this.container.style.top = "1.5rem";
  }

  perspectiveFunction(event) {
    // a ternary operator that uses the event.target property to check what button was clicked by the user

    const show = event.target.classList.contains("next")
      ? "nextElementSibling"
      : "previousElementSibling";

    const old = this.container.querySelector(".front");
    const current = old[show];
    const future = current[show];

    if (current.classList.contains("top")) {
      console.log("got here2");
      return;
    }

    if (future !== null) {
      let direction;
      let bugFix;
      if (show === "nextElementSibling") {
        this.container.style.animation =
          "transformPerspectiveNext 1s ease forwards";

        direction = "left";
        bugFix = "right";
      } else if (show === "previousElementSibling") {
        this.container.style.animation =
          "transformPerspectivePrevious 1s ease forwards";

        direction = "right";
        bugFix = "left";
      }

      setTimeout(() => {
        this.container.style.animation = "none";
        this.contentToAppear(old, current, future, direction, bugFix);
      }, 950);
    } else {
      return;
    }
  }

  buttonListener() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.clickHandler(e);
        // this.resizeContainer();
      });
    });
  }
}

/*
                                    -------READ ME -----
                                    
  line 6 contentToAppear is a Function expression that fires when the click handler function is 
  invoked to help with the display of the main elements

  line 12  clickHandler is a function expression that abstracts the display work for the contentToAppear function
  makes it easier by determining the logic of what main content to appear and rendering others
  invisible in the DOM

  The idea, starting from line 27 to line 50 is that if there is no future element, that means we have run out of content to display
   and so return the function. do not do anything

  The setTimeout function removes the transform animation from the main's elements container. so that
    it appears with no perspective in the end of the transformation
*/
