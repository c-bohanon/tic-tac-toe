const App = {
  // All of our selected HTML elements
  $: {
    // Square brackets signify selecting an attribute
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init: () => {
    App.registerEventListeners();
  },

  registerEventListeners() {
    // Done
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // Todo
    App.$.resetBtn.addEventListener("click", () => {
      console.log("Reset the game");
    });

    // Todo
    App.$.newRoundBtn.addEventListener("click", () => {
      console.log("Add a new round");
    });

    // Todo
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with id ${event.target.id} was clicked`);
      });
    });
  },
};

window.addEventListener("load", () => App.init());
