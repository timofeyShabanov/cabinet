import "./leftbar.css";

export const leftbar = (backlight) => `
  <div class="box left-column">
    <div class="logo">
      <img onclick="window.location.href='/'" class="icon" src="images/logo.png" alt="logo"/>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/science'" class="icon ${backlight === "science" ? "active" : ""}" src="images/icons/science.svg" alt="science"/>
    </div> 
    <div class="left-column__icon">
      <img onclick="window.location.href='/prescriptions'" class="icon ${backlight === "prescriptions" ? "active" : ""}" src="images/icons/prescriptions.svg" alt="prescriptions"/>
    </div>
    <div class="left-column__icon">
      <img onclick="window.location.href='/chat'" class="icon ${backlight === "chat" ? "active" : ""}" src="images/icons/chat.svg" alt="chat"/>
    </div>
    <div class="left-column__icon logout-icon">
      <img onclick="console.log('logout')" class="icon" src="images/icons/logout.svg" alt="logout"/>
    </div>   
  </div> 
`;
