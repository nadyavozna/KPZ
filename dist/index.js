// src/index.ts
import * as dotenv from "dotenv";
dotenv.config();
function add(a, b) {
  return a + b;
}
function capitalize(s) {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export {
  add,
  capitalize
};
