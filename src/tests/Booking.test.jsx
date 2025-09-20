import { initializeTimes, updateTimes } from "./Main";
import * as api from "../api"; 

jest.mock("../api");

describe("initializeTimes", () => {
  test("возвращает непустой массив доступных времен бронирования", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    api.fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("вызывает fetchAPI с action.date и возвращает массив", () => {
    const mockTimes = ["20:00", "21:00"];
    api.fetchAPI.mockReturnValue(mockTimes);

    const action = { date: "2025-09-20" };
    const result = updateTimes([], action);

    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
    expect(api.fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(mockTimes);
  });
});