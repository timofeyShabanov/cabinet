import { leftbar, initLeftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "./mainpage.css";
const initActiveRecords = () => {
  const header = document.querySelector(".active-record__header");
  const dropdown = document.querySelector(".active-records-dropdown");

  if (header && dropdown) {
    header.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("visible");
      header.classList.toggle("active");

      document
        .querySelectorAll(".notifications-dropdown, .profile-dropdown")
        .forEach((d) => d.classList.remove("visible"));
    });

    document.addEventListener("click", (e) => {
      if (!header.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("visible");
        header.classList.remove("active");
      }
    });
  }
};

export const mainPage = () => {
  setTimeout(initLeftbar, 0);
  setTimeout(renderHeader, 0);
  setTimeout(initActiveRecords, 0);
  return `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
                <div class="main-container__column1">
                    <div class="box content main-container__column1__content1" onclick="window.location.href='/'">
                        <div class="main-container__column1__content1__text text32 bold">Назва статті</div>
                        <div class="main-container__column1__content1__text text16">Часто клієнтами косметологів стають люди, що страждають проблемами чи захворюваннями зі шкірою, з якими боротися самостійно неможливо</div>
                        <div class="text20 bold">Іван Іванович</div>
                        <div class="main-container__column1__content1__text text18">Посада</div>
                        <div class="main-container__column1__content1__arrow">
                            <img class="icon" src="images/icons/arrow3.svg" alt="arrow3">
                        </div>
                    </div>
                    <div class="box content main-container__column1__content2" onclick="window.location.href='/discount'">
                        <div class="main-container__column1__content2__header">
                            <div class="text32 bold">Дисконтна картка</div>
                            <img onclick="window.location.href='/discount'" class="main-container__column1__content2__header__arrow icon" src="images/icons/arrow5.svg" alt="arrow5">
                        </div>
                        <p class="text16 green">В нас наявна система знижок</p>
                    </div>
                    <div class="box content main-container__column1__content3">
                    	<div class="text32 bold main-container__column1__content3__header">Онлайн консультація</div>
                      <div class="text16 main-container__column1__content3__description">Якщо ви хочите зекономити час то маетє можливість записатись на онлайн прийом у лікаря в форматі Zoom або Google meet</div>
                      <div class="main-container__column1__content3__button-container">
                      	<button class="button">Записатись</button>
                      </div>
                    </div>
                </div>

                <div class="main-container__column2">
                    <div class="box content main-container__column2__content1">
                        <div class="main-container__column2__content1__header">
														<div class="active-record__header text32 bold">
																Активні записи
																<img class="check-mark-icon" src="images/icons/checkMark.svg" alt="checkMark" />
																<div class="active-records-dropdown text16 bold">
																	<div class="dropdown-item">Активні записи</div>
																	<div class="dropdown-item">Минулі записи</div>
																</div>
														</div>
														<div class="main-container__column2__content1__header__button-container">
																<button class="button text24 bold">Записатись</button>
														</div>
												</div>
                        <div class="active-record content">
                            <div class="active-record__details">
                                <div class="active-record__info">
                                    <div class="active-record__info__main">
                                        <div class="active-record__name">Іван Іванович</div>
                                        <img class="active-record__icon icon" src="images/icons/arrow6.svg" alt="arrow6" />
                                    </div>
                                    <div class="active-record__position">Посада</div>
                                </div>
                                <div class="active-record__time-container">
                                    <div class="active-record__progress">
                                        <span class="active-record__time">15:00</span>
                                    </div>
                                    <span class="active-record__date">01.12.2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box content main-container__column2__content2">
                        <div class="text32 bold main-container__column2__content2__header">Лікарські призначення</div>
                        <div class="main-container__column2__content2__container">
                          <div class="main-container__column2__content2__block content">
                              <div class="text24 bold main-container__column2__content2__block__name">Іван Іванович</div>
                              <div class="text16 main-container__column2__content2__block__text">Пройти курс лікування під моїм контролем</div>
                              <div class="text24 bold main-container__column2__content2__block__date">01.11.2024</div>
                          </div>
                          <div class="main-container__column2__content2__block content">
                              <div class="text24 bold main-container__column2__content2__block__name">Іван Іванович</div>
                              <div class="text16 main-container__column2__content2__block__text">Пройти курс лікування під моїм контролем</div>
                              <div class="text24 bold main-container__column2__content2__block__date">01.11.2024</div>
                          </div>
                          <div class="main-container__column2__content2__block content">
                              <div class="text24 bold main-container__column2__content2__block__name">Іван Іванович</div>
                              <div class="text16 main-container__column2__content2__block__text">Пройти курс лікування під моїм контролем</div>
                              <div class="text24 bold main-container__column2__content2__block__date">01.11.2024</div>
                          </div>
                          <div class="main-container__column2__content2__block content">
                              <div class="text24 bold main-container__column2__content2__block__name">Іван Іванович</div>
                              <div class="text16 main-container__column2__content2__block__text">Пройти курс лікування під моїм контролем</div>
                              <div class="text24 bold main-container__column2__content2__block__date">01.11.2024</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
`;
};
