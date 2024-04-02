import { createSlice } from "@reduxjs/toolkit";
type StateType = {
  ScreenData: string;
  isValid: boolean;
};
const initialState: StateType = {
  ScreenData: "",
  isValid: true,
};

function Evaluate(data: string): string {
  if (data.length > 0) {
    if (operators.includes(data[data.length - 1])) {
      data = data.substring(0, data.length - 1);
    }
    data = data.replace(/×/g, "*").replace(/÷/g, "/").replace(/%/g, "%");
    try {
      return eval(data);
    } catch (error) {
      return "Invalid expression";
    }
  }
  return "";
}
const operators = ["+", "-", "%", "×", "÷"];
const ScreenSlice = createSlice({
  name: "screen",
  initialState: initialState,
  reducers: {
    SetValue(state, action) {
      const currentScreenData = state.ScreenData + "";
      const lastInsertedData =
        currentScreenData.length > 0
          ? currentScreenData[currentScreenData.length - 1]
          : "";
      const currentFeedData = action.payload;
      if (currentFeedData === "AC") {
        state.ScreenData = "";
      } else if (currentFeedData === "C") {
        const data = state.ScreenData;
        state.ScreenData = data.substring(0, data.length - 1);
      } else if (operators.includes(currentFeedData)) {
        if (lastInsertedData === "") {
          state.ScreenData = "0" + currentFeedData;
        } else if (operators.includes(lastInsertedData)) {
          state.ScreenData =
            currentScreenData.substring(0, currentScreenData.length - 1) +
            currentFeedData;
        } else {
          state.ScreenData = currentScreenData + currentFeedData;
        }
      } else if (currentFeedData === "=") {
        state.ScreenData = Evaluate(currentScreenData);
      } else {
        state.ScreenData = currentScreenData + currentFeedData;
      }
    },
  },
});

export default ScreenSlice;
export const ScreenSliceActions = ScreenSlice.actions;
