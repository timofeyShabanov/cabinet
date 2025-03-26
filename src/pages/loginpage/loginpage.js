import "./loginpage.css";
import "../../style.css";

export const loginpage = () => `
<div class="login">
    <div class="login__container box">
    		<div class="login__container__header text32 bold">
					Увійти в запис
					<span class="login__container__close-btn">
            <img class="icon" onclick="console.log('нажали на крестик')" src='images/icons/cross.svg' alt="close"/>
        	</span>
        </div>

        <form class="login__form">
            <div class="login__form-login">
                <input class="text24 bold" type="text" placeholder="Логін" required />
            </div>
            
            <div class="login__form-password">
                <input class="text24 bold" type="text" placeholder="Пароль" required />
            </div>

            <button class="login__btn button text32 bold" onclick="window.location.href='/'" type="submit" >Увійти</button>
            <div class="login__to-register-btn text20" onclick="window.location.href='/register'">Cтворити</div>
        </form>
    </div>
</div>`;
