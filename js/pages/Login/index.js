import { initializeFirebase } from "../../components/DBConnection/firebase.js";
import { renderPage } from "../../utils.js";
import { Home } from "../Home/index.js";

const { auth, provider } = initializeFirebase();

export const Login = `
  <div class="background">
    <h1>House Hub</h1>
    <button id="loginBtn">Entrar</button>
  </div>
`;

export function initLogin(containerId) {
  renderPage(containerId, Login);

  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  loginBtn.addEventListener("click", async () => {
    try {
      await auth.signInWithPopup(provider);
      renderPage(containerId, Home);
      // se existir initHome, chame aqui
      // initHome(containerId);
    } catch (err) {
      console.error(err);
      alert("Erro ao logar: " + err.message);
    }
  });
}
