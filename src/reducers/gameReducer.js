import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "@/utils";

const frameworks = [
  "angular2",
  "vue",
  "react",
  "grunt",
  "phantomjs",
  "ember",
  "babel",
  "ionic",
  "gulp",
  "meteor",
  "yeoman",
  "yarn",
  "nodejs",
  "bower",
  "browserify",
];

const initialState = {
  cards: [],
  openedCards: [],
  point: 0,
  status: "ready",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    start: (state) => {
      const cards = [];
      const duplicatedCards = frameworks.concat(frameworks);
      const shuffledCards = shuffle(duplicatedCards);
      shuffledCards.forEach((name) => {
        cards.push({
          name,
          close: true,
          complete: false,
        });
      });
      state.cards = cards;
      state.point = 200;
      state.status = "playing";
    },
    click: (state, action) => {
      const { name, index } = action.payload;
      const openedCard = {
        name,
        index,
      };
      const cards = state.cards;
      const openedCards = state.openedCards;
      cards[index].close = false;
      openedCards.push(openedCard);
      state.openedCards = openedCards;
      state.cards = cards;
    },
    check: (state) => {
      const openedCards = state.openedCards;

      if (openedCards.length === 2) {
        const cards = state.cards;
        if (
          openedCards[0].name == openedCards[1].name &&
          openedCards[0].index != openedCards[1].index
        ) {
          cards[openedCards[0].index].complete = true;
          cards[openedCards[1].index].complete = true;
          state.point += 50;
        } else {
          cards[openedCards[0].index].close = true;
          cards[openedCards[1].index].close = true;
          state.point -= 10;
        }
        state.cards = cards;
        state.openedCards = [];
      }
    },
    finish: (state) => {
      state.status = "finish";
    },
  },
});

export const { start, click, check, finish } = gameSlice.actions;

export default gameSlice.reducer;
