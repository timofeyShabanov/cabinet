import "./header.css";
import { burgermenu } from "../burgermenu/burgermenu.js";
export const header = () => `<div id="header-container"></div>`;

export const renderHeader = () => {
  const headerContainer = document.querySelector("#header-container");
  if (!headerContainer) return;

  if (window.innerWidth <= 500) {
    headerContainer.innerHTML = `
      <div class="header-mobile">
        <div class="header-mobile__logout">
          <img class="icon" src="images/icons/logout.svg" alt="logout" />
        </div>
        <div class="header-mobile__container">
          <div class="header-mobile__container__notification">
            <img class="icon" src="images/icons/bell.svg" alt="bell" />
          </div>
          <div class="header-mobile__container__burger-menu">
            ${burgermenu()}
          </div>
        </div>    
      </div>
    `;
  } else {
    headerContainer.innerHTML = `
      <div class="header">
        <div class="box search-container">
          <input id="search-input" type="text" placeholder="Пошук" />
          <button onclick="console.log(document.getElementById('search-input').value); document.getElementById('search-input').value = '';">
            <img class="icon" src="images/icons/search.svg" alt="search" />
          </button>
        </div>
        <div class="box bell-container">
          <img class='icon' src="images/icons/bell.svg" alt="bell"/>
        </div>
        <div class="profile-card box">
          <img class="check-mark-icon" src="images/icons/checkMark.svg" alt="checkMark" />
          <span class="user-info">Іван Іванович</span>
          <img src="#" class="avatar" alt="avatar"/>
        </div>
      </div>`;
  }
};

window.addEventListener("resize", renderHeader);
document.addEventListener("DOMContentLoaded", renderHeader);
