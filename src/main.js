import "./style.css";
import { mainPage } from "./pages/mainpage/mainpage.js";
import { registerpage } from "./pages/registerpage/registerpage.js";
import { sciencepage } from "./pages/sciencepage/sciencepage.js";
import { prescriptionspage } from "./pages/prescriptionspage/prescriptionspage.js";
import { discountpage } from "./pages/discountpage/discountpage.js";
import { loginpage } from "./pages/loginpage/loginpage.js";
import { chatpage } from "./pages/chatpage/chatpage.js";
import { messagepage } from "./pages/messagepage/messagepage.js";
import { rerecognitionpage } from "./pages/rerecognitionpage/rerecognitionpage.js";
import { reviewpage } from "./pages/reviewpage/reviewpage.js";
import { mobilemessagepage } from "./pages/mobilmessagepage/mobilemessagepage.js";

const routes = {
  "/": mainPage,
  "/register": registerpage,
  "/login": loginpage,
  "/science": sciencepage,
  "/prescriptions": prescriptionspage,
  "/discount": discountpage,
  "/chat": chatpage,
  "/message": messagepage,
  "/rerecognition": rerecognitionpage,
  "/review": reviewpage,
  "/mobilemessage": mobilemessagepage,
};

if (window.matchMedia("(max-width: 768px)").matches) {
  const backgrounds = {
    "/": "url('images/background2.svg')",
    "/register": "url('images/background2.svg')",
    "/login": "url('images/background2.svg')",
    "/science": "url('images/background2.svg')",
    "/prescriptions": "url('images/background2.svg')",
    "/discount": "url('images/background2.svg')",
    "/chat": "url('images/background2.svg')",
    "/message": "url('images/background2.svg')",
    "/rerecognition": "url('images/background2.svg')",
    "/review": "url('images/background2.svg')",
  };

  document.body.style.setProperty(
    "--bg-image",
    backgrounds[window.location.pathname] || "url('images/background2.svg')",
  );
  document.body.setAttribute(
    "style",
    `--bg-image: ${backgrounds[window.location.pathname] || "url('images/background2.svg')"};`,
  );
}

function navigate(path) {
  history.pushState({}, "", path);
  render();
}

function render() {
  const view = routes[window.location.pathname] || mainPage;
  document.querySelector("#app").innerHTML = `
    <div class="container">
      ${view()}
    </div>
  `;
}

window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", render);

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.href);
  }
});
