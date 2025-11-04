import { initializeFirebase } from "./components/DBConnection/firebase.js";

export { initializeFirebase };

export function renderPage(containerId, content) {
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = content;
}


