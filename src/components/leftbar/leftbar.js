import "./leftbar.css";

export const leftbar = (backlight) => {
  return `
  <div class="box left-column">
    <div class="logo">
      <img onclick="window.location.href='/'" class="icon" src="images/logo.png" alt="logo"/>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/science'" class="icon ${backlight === "science" ? "active" : ""}" src="images/icons/science.svg" alt="science"/>
    </div> 
    <div class="left-column__icon">
      <img onclick="window.location.href='/rerecognition'" class="icon ${backlight === "rerecognition" ? "active" : ""}" src="images/icons/prescriptions.svg" alt="rerecognition"/>
    </div>
     <div class="left-column__icon">
      <img onclick="window.location.href='/prescriptions'" class="icon ${backlight === "prescriptions" ? "active" : ""}" src="images/icons/chat2.svg" alt="prescriptions"/>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/message'" class="icon ${backlight === "message" ? "active" : ""}" src="images/icons/mail.svg" alt="message"/>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/chat'" class="icon ${backlight === "chat" ? "active" : ""}" src="images/icons/chat.svg" alt="chat"/>
    </div>
   <div class="left-column__container">
      <div class="left-column__icon">
        <img onclick="console.log('logout')" class="icon" src="images/icons/logout.svg" alt="logout"/>
      </div>   
      <div class="left-column__icon arrow-container">
        <img class="left-column__icon__arrow" src="images/icons/arrow7.svg" alt="arrow"/>
      </div>
    </div>
     <div class="leftbar-dropdown">
    	 <div class="leftbar-dropdown__container"> 
          <div class="leftbar-item__logo text20 bold" onclick="window.location.href='/'">Team Spirit Medical</div>
          <div class="leftbar-item  text20 bold ${backlight === "science" ? "green" : ""}" onclick="window.location.href='/science'">Результати досліджень</div>
          <div class="leftbar-item text20 bold ${backlight === "rerecognition" ? "green" : ""}" onclick="window.location.href='/rerecognition'">Призначення ліків</div>
          <div class="leftbar-item text20 bold ${backlight === "prescriptions" ? "green" : ""}" onclick="window.location.href='/prescriptions'">Чат</div>
          <div class="leftbar-item text20 bold ${backlight === "message" ? "green" : ""}" onclick="window.location.href='/message'">Ваша скринька</div>
          <div class="leftbar-item text20 bold ${backlight === "chat" ? "green" : ""}" onclick="window.location.href='/chat'">Надіслати</div>
     	 </div>
     </div>
  </div> 
`;
};

export const initLeftbar = () => {
  const arrowIcon = document.querySelector(".left-column__icon__arrow");
  const leftbarDropdown = document.querySelector(".leftbar-dropdown");
  const leftColumn = document.querySelector(".left-column"); // Исправленный селектор

  if (arrowIcon && leftbarDropdown && leftColumn) {
    // Добавил проверку на leftColumn
    arrowIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      leftbarDropdown.classList.toggle("visible");
      arrowIcon.classList.toggle("rotated");
      leftColumn.classList.toggle("rotated"); // Теперь сработает
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".arrow-container")) {
        leftbarDropdown.classList.remove("visible");
        arrowIcon.classList.remove("rotated");
        leftColumn.classList.remove("rotated"); // Удаляем класс при закрытии
      }
    });
  }
};
