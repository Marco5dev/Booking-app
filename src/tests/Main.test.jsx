import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test("updateTimes returns the same state if no logic applied", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-09-16" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});