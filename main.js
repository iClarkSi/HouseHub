import { initializeFirebase, renderPage } from "./js/utils.js";
import { Pages } from "./js/pages/pages.js";
import { initLogin } from "./js/pages/Login/index.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeFirebase();
  renderPage("app", Pages.login);
  initLogin("app");
});