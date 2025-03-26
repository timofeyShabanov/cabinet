import "./leftbar.css";

export const leftbar = (backlight) => {
  return `
  <div class="leftbar"></div>
  <div class="box left-column">
    <div class="logo left-column__icon">
      <img onclick="window.location.href='/'" class="icon " src="images/logo.png" alt="logo"/>
      <div class="leftbar-item leftbar-item__logo text20 bold" onclick="window.location.href='/'">Team Spirit Medical</div>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/science'" class="icon ${backlight === "science" ? "active" : ""}" src="images/icons/science.svg" alt="science"/>
      <div class="leftbar-item  text20 bold ${backlight === "science" ? "green" : ""}" onclick="window.location.href='/science'">Результати досліджень</div>
    </div> 
    <div class="left-column__icon">
      <img onclick="window.location.href='/rerecognition'" class="icon ${backlight === "rerecognition" ? "active" : ""}" src="images/icons/prescriptions.svg" alt="rerecognition"/>
      <div class="leftbar-item text20 bold ${backlight === "rerecognition" ? "green" : ""}" onclick="window.location.href='/rerecognition'">Призначення ліків</div>
    </div>
     <div class="left-column__icon">
      <img onclick="window.location.href='/prescriptions'" class="icon ${backlight === "prescriptions" ? "active" : ""}" src="images/icons/chat2.svg" alt="prescriptions"/>
      <div class="leftbar-item text20 bold ${backlight === "prescriptions" ? "green" : ""}" onclick="window.location.href='/prescriptions'">Чат</div>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/message'" class="icon ${backlight === "message" ? "active" : ""}" src="images/icons/mail.svg" alt="message"/>
      <div class="leftbar-item text20 bold ${backlight === "message" ? "green" : ""}" onclick="window.location.href='/message'">Ваша скринька</div>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/chat'" class="icon ${backlight === "chat" ? "active" : ""}" src="images/icons/chat.svg" alt="chat"/>
      <div class="leftbar-item text20 bold ${backlight === "chat" ? "green" : ""}" onclick="window.location.href='/chat'">Надіслати</div>
    </div>
   <div class="left-column__container">
      <div class="left-column__icon">
        <img onclick="console.log('logout')" class="icon" src="images/icons/logout.svg" alt="logout"/>
      </div>   
      <div class="left-column__icon arrow-container">
        <img class="left-column__icon__arrow" src="images/icons/arrow7.svg" alt="arrow"/>
      </div>
    </div>
  </div> 
`;
};

export const initLeftbar = () => {
  const arrowIcon = document.querySelector(".left-column__icon__arrow");
  const leftColumn = document.querySelector(".left-column"); // Исправленный селектор
  const leftbar = document.querySelector(".leftbar");
  const leftColumnIcons = document.querySelectorAll(".left-column__icon");
  const leftBarItems = document.querySelectorAll(".leftbar-item");

  if (arrowIcon && leftbar && leftColumn) {
    arrowIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      arrowIcon.classList.toggle("rotated");
      leftColumn.classList.toggle("rotated");
      leftbar.classList.toggle("active");
      leftColumnIcons.forEach((icon) => icon.classList.toggle("active"));
      leftBarItems.forEach((icon) => icon.classList.toggle("active"));
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".arrow-container")) {
        arrowIcon.classList.remove("rotated");
        leftColumn.classList.remove("rotated");
        leftbar.classList.remove("active");
        leftColumnIcons.forEach((icon) => icon.classList.remove("active"));
        leftBarItems.forEach((icon) => icon.classList.remove("active"));
      }
    });
  }
};
