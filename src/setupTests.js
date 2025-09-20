// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
global.fetchAPI = (date) => ["17:00", "18:00", "19:00", "20:00"];
global.submitAPI = (formData) => true;