import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "@/utils";

const initialState = {
  frameworks: [
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
  ],
  duplicatedFrameworks: [],
  randomizedFrameworks: [],
  finalizedFrameworks: [],
  openedFrameworks: [],
};

const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    start: (state) => {
      let finalizedFrameworks = [];
      state.duplicatedFrameworks = state.frameworks.concat(state.frameworks);
      state.randomizedFrameworks = shuffle(state.duplicatedFrameworks);
      state.randomizedFrameworks.forEach((name) => {
        finalizedFrameworks.push({
          name,
          close: true,
          complete: false,
          fail: false,
        });
      });
      state.finalizedFrameworks = finalizedFrameworks;
    },
    handleClick: (state, action) => {
      const { name, index } = action.payload;

      if (state.openedFrameworks.length == 2) {
        setTimeout(() => {
          let finalizedFrameworks = state.finalizedFrameworks;
          if (
            state.openedFrameworks[0].name == state.openedFrameworks[1].name &&
            state.openedFrameworks[0].index != state.openedFrameworks[1].index
          ) {
            finalizedFrameworks[
              state.openedFrameworks[0].index
            ].complete = true;
            finalizedFrameworks[
              state.openedFrameworks[1].index
            ].complete = true;
          } else {
            finalizedFrameworks[state.openedFrameworks[0].index].close = true;
            finalizedFrameworks[state.openedFrameworks[1].index].close = true;
          }
          state.finalizedFrameworks = finalizedFrameworks;
          state.openedFrameworks = [];
        }, 750);
      } else {
        let framework = {
          name,
          index,
        };
        let finalizedFrameworks = state.finalizedFrameworks;
        let frameworks = state.openedFrameworks;
        finalizedFrameworks[index].close = false;
        frameworks.push(framework);
        state.openedFrameworks = frameworks;
        state.finalizedFrameworks = finalizedFrameworks;
        if (state.openedFrameworks.length == 2) {
          setTimeout(() => {
            let finalizedFrameworks = state.finalizedFrameworks;
            if (
              state.openedFrameworks[0].name ==
                state.openedFrameworks[1].name &&
              state.openedFrameworks[0].index != state.openedFrameworks[1].index
            ) {
              finalizedFrameworks[
                state.openedFrameworks[0].index
              ].complete = true;
              finalizedFrameworks[
                state.openedFrameworks[1].index
              ].complete = true;
            } else {
              finalizedFrameworks[state.openedFrameworks[0].index].close = true;
              finalizedFrameworks[state.openedFrameworks[1].index].close = true;
            }
            state.finalizedFrameworks = finalizedFrameworks;
            state.openedFrameworks = [];
          }, 750);
        }
      }
    },
  },
});

export const { start, handleClick } = playgroundSlice.actions;

export default playgroundSlice.reducer;
