import "./loginpage.css";
import "../../style.css";

export const loginpage = () => `
<div class="login">
    <div class="login__container box">
        <span class="login__container__close-btn">
            <img class="icon" onclick="console.log('нажали на крестик')" src='images/icons/cross.svg' alt="close"/>
        </span>
        
        <form class="login__form">
            <div class="login__form-group">
                <input type="text" placeholder="Логін" required />
            </div>
            
            <div class="login__form-group">
                <input type="text" placeholder="Пароль" required />
            </div>

            <button onclick="window.location.href='/'" type="submit" class="button login__btn">Увійти</button>
            <div onclick="window.location.href='/register'" class="login__to-register-btn">Cтворити</div>
        </form>
    </div>
</div>`;
