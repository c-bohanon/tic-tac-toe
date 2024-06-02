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

  state: {
    moves: [],
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
        console.log(`Current player is ${App.state.currentPlayer}`);

        // Check if square is already used, if so, return early
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId,
          );
          return existingMove !== undefined;
        };
        if (hasMove(+square.id)) {
          return;
        }

        // Determine which player icon to add to the square
        const lastMove = App.state.moves.at(-1); // Grabs the last element of the array
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        const currentPlayer =
          App.state.moves.length === 0
            ? 1 // Player 1 always starts
            : getOppositePlayer(lastMove.playerId); // Alternate player

        // Update DOM with to show the player move
        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        // Update state
        App.state.moves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });

        App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

        console.log(App.state);

        square.replaceChildren(icon);

        // Check if there is a winner or tie game
        const winningPatterns = [
          [1, 2, 3],
          [1, 5, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 5, 7],
          [3, 6, 9],
          [4, 5, 6],
          [7, 8, 9],
        ];
      });
    });
  },
};

window.addEventListener("load", () => App.init());
