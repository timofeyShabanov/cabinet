import "./burgermenu.css";

export const burgermenu = () => `
<div class="burger-menu-container">
    <div class="burger-menu" onclick="this.parentElement.querySelector('.off-screen-menu').classList.add('active')">
        <img class="icon" src="images/icons/burger-menu.svg" alt="burger-menu" />
    </div>
    <div class="off-screen-menu" onclick="event.target === this && this.classList.remove('active')">
        <div class="off-screen-menu__container bold">
            <div class="off-screen-menu__container__header text24">
            	<span onclick="window.location.href='/'">Team Spirit Medical</span>
            	<img 
            		onclick="this.closest('.off-screen-menu').classList.remove('active')" 
     						src="images/icons/cross.svg" 
     						class="icon" 
     						alt="cross"/>
            </div>
            <div onclick="window.location.href='/science'" class="off-screen-menu__container__science">
            	Результати досліджень
            	<img src="images/icons/science.svg" class="icon" alt="science"/>
            </div>
            <div onclick="window.location.href='/rerecognition'" class="off-screen-menu__container__prescriptions">
            	Призначення ліків
            	<img src="images/icons/prescriptions.svg" class="icon" alt="prescription"/>
            </div>
            <div onclick="window.location.href='/prescriptions'" class="off-screen-menu__container__chat">
            	Чат
            	<img src="images/icons/chat2.svg" class="icon" alt="chat"/>
            </div>
            <div onclick="window.location.href='/message'" class="off-screen-menu__container__chat">
            	Ваша скринька
            	<img src="images/icons/mail.svg" class="icon" alt="chat"/>
            </div>
            <div onclick="window.location.href='/chat'" class="off-screen-menu__container__chat">
            	Надіслати
            	<img src="images/icons/chat.svg" class="icon" alt="chat"/>
            </div>
            <div onclick="window.location.href='/'" class="off-screen-menu__container__chat">
            	Головна сторінка
            	<img src="images/logo.png" class="icon" alt='logo'/>
            </div>
            <div onclick="console.log('Змінити фото профілю')"  class="off-screen-menu__container__photo">Змінити фото профілю</div>
            <div onclick="console.log('Змінити пароль')" class="off-screen-menu__container__password">Змінити пароль</div>
            <div onclick="console.log('Вийти з запису')" class="off-screen-menu__container__logout">
            	Вийти з запису
            	<img src="images/icons/logout2.svg" class="icon" alt="logout"/>
            </div>
            <div onclick="console.log('Записатись')" class="off-screen-menu__container__button">
            	<button class="button text24">Записатись</button>
        		</div>
        </div>
    </div>
</div>
`;
