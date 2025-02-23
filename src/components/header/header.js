import "./header.css";
import "../../style.css";
import { burgermenu } from "../burgermenu/burgermenu.js";

export const header = () => `<div id="header-container"></div>`;

export const renderHeader = () => {
  const headerContainer = document.querySelector("#header-container");
  if (!headerContainer) return;

  if (window.innerWidth <= 800) {
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
          <button id="search-btn">
            <img class="icon" src="images/icons/search.svg" alt="search" />
          </button>
        </div>
        <div class="box bell-container">
          <img class='icon' src="images/icons/bell.svg" alt="bell"/>
        </div>
        <div class="profile-card box">
          <img class="check-mark-icon" src="images/icons/checkMark.svg" alt="checkMark" />
          <span class="user-info text24">Іван Іванович</span>
          <img src="#" class="avatar" alt="avatar"/>
          <div class="profile-dropdown text24">
            <div onclick="console.log('Змінити фото')" class="profile-card__change-photo">Змінити фото профілю</div>
            <div onclick="console.log('Змінити пароль')" class="profile-card__change-password">Змінити пароль</div>
            <div onclick="console.log('Вийти з запису')" class="profile-card__logout">
              <img src="images/icons/logout2.svg" class="icon" alt="logout"/>
            	Вийти з запису
            </div>
          </div>
        </div>
      </div>`;
  }

  const profileCard = document.querySelector(".profile-card");
  const dropdown = document.querySelector(".profile-dropdown");
  if (profileCard && dropdown) {
    profileCard.addEventListener("click", (event) => {
      event.stopPropagation(); // Остановка всплытия, чтобы не сработал глобальный обработчик
      dropdown.classList.toggle("visible");
      const checkMarkVisible = document.querySelector(".check-mark-icon");
      if (checkMarkVisible) checkMarkVisible.classList.toggle("invisible");

      const profileCardRadius = document.querySelector(".profile-card");
      if (profileCardRadius) profileCardRadius.classList.toggle("invisible");
    });

    document.addEventListener("click", (event) => {
      if (
        !profileCard.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.classList.remove("visible");
        const checkMarkVisible = document.querySelector(".check-mark-icon");
        if (checkMarkVisible) checkMarkVisible.classList.remove("invisible");

        const profileCardRadius = document.querySelector(".profile-card");
        if (profileCardRadius) profileCardRadius.classList.remove("invisible");
      }
    });
  }

  const searchBtn = document.querySelector("#search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const searchInput = document.getElementById("search-input");
      console.log(searchInput.value);
      searchInput.value = "";
    });
  }
};

document.addEventListener("DOMContentLoaded", renderHeader);
window.addEventListener("resize", renderHeader);
