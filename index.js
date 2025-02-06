// Search in header
function inputSearch() {
  const input = document.getElementById('search-input'); // Найти поле ввода
  console.log(input.value);
  input.value = '';
}

// Переключение между страницами
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo img");
  const scienceIcon = document.querySelector(".left-column__icon img[alt='science']");
  const prescriptionsIcon = document.querySelector(".left-column__icon img[alt='prescriptions']");
  const chatIcon = document.querySelector(".left-column__icon img[alt='chat']");
  const logoutIcon = document.querySelector(".left-column__icon img[alt='logout']");
  const mainContainer = document.querySelector(".main-container");

  logo.addEventListener("click", function () {
    mainContainer.innerHTML = `
      <div class="main-container__column1">
        <div class="box content main-container__column1__content1">
          <div class="main-container__column1__content1__text text32">Назва статті</div>
          <div class="main-container__column1__content1__text text16">
            Часто клієнтами косметологів стають люди, що страждають проблемами чи захворюваннями зі шкірою, з якими боротися самостійно неможливо
          </div>
          <div class="text20">Іван Іванович</div>
          <div class="main-container__column1__content1__text text18">Посада</div>
          <div class="main-container__column1__content1__arrow">
            <img src="images/icons/arrow3.svg" alt="arrow">
          </div>
        </div>
        <div class="box content">
          <div class="main-container__column1__content2__header">
            <div class="text32">Дисконтна картка</div>
            <img class="main-container__column1__content2__header__arrow" src="images/icons/arrow5.svg" alt="arrow">
          </div>
          <p class="text16 green">В нас наявна система знижок</p>
        </div>
        <div class="box content">
          <div class="main-container__column1__content3">
            <div class="text32">Онлайн консультація</div>
            <div class="text16 main-container__column1__content3__description">
              Якщо ви хочите зекономити час, то маєте можливість записатись на онлайн прийом у лікаря в форматі Zoom або Google Meet
            </div>
            <div class="main-container__column1__content3__button-container">
              <button>Записатись</button>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container__column2">
        <div class="box content">
          <div class="main-container__column2__content1__header">
            <div class="text32">
              Активні записи
              <img class="check-mark-icon" src="images/icons/checkMark.svg" alt="checkMark" />
            </div>
            <div class="main-container__column2__content1__header__button-container">
              <button class="text24">Записатись</button>
            </div>
          </div>
          <div class="active-record">
            <div class="active-record__details">
              <div class="active-record__info">
                <div class="active-record__info__main">
                  <div class="active-record__name">Іван Іванович</div>
                  <img class="active-record__icon" src="images/icons/arrow6.svg" alt="arrow" />
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
        <div class="box content">
          <div class="text32 main-container__column2__content2">Лікарські призначення</div>
          <div class="main-container__column2__content2__block">
            <div class="text24">Іван Іванович</div>
            <div class="text16">Пройти курс лікування під моїм контролем</div>
            <div class="text24">01.11.2024</div>
          </div>
          <div class="main-container__column2__content2__block">
            <div class="text24">Іван Іванович</div>
            <div class="text16">Пройти курс лікування під моїм контролем</div>
            <div class="text24">01.11.2024</div>
          </div>
          <div class="main-container__column2__content2__block">
            <div class="text24">Іван Іванович</div>
            <div class="text16">Пройти курс лікування під моїм контролем</div>
            <div class="text24">01.11.2024</div>
          </div>
        </div>
      </div>
    `;
  });

  scienceIcon.addEventListener("click", function () {
    mainContainer.innerHTML = `
      <div class="main-container__content2">
        <div class="main-container__content2__header text32">
            Результати досліджень
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
      </div>`;
  });

  prescriptionsIcon.addEventListener("click", function () {
    mainContainer.innerHTML = '<div class="main-container__content3">3</div>';
  });

  chatIcon.addEventListener("click", function () {
    mainContainer.innerHTML = '<div class="main-container__content4">4</div>';
  });

  logoutIcon.addEventListener("click", function () {
    console.log("Logout button clicked");
  });
});