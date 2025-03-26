import "./registerpage.css";
import "../../style.css";

export const registerpage = () => `
<div class="register">
    <div class="register__container box">
    		<div class="register__container__header text32 bold">
					Реєстрація
					<span class="register__container__close-btn">
							<img class="icon" onclick="console.log('нажали на крестик')" src='images/icons/cross.svg' alt="close"/>
					</span>
        </div>
        
        <form class="register__form">
            <div class="register__form-group">
                <input class="text24 bold" type="text" placeholder="Прізвище*" required />
            </div>
            <div class="register__form-group">
                <input class="text24 bold" type="text" placeholder="Ім’я*" required />
            </div>
            <div class="register__form-group">
                <input class="text24 bold" type="text" placeholder="По батькові  (Не обов’язково)" />
            </div>
            <div class="register__form-row">
                <div class="register__form-group register__gender-select">
                    <select class="text24 bold">
                        <option value="">Стать</option>
                        <option value="male">Чоловіча</option>
                        <option value="female">Жіноча</option>
                    </select>
                </div>
                <div class="register__form-group register__form-group__date">
                    <input 
                    	class="text24 bold"
                    	placeholder="Дата народження" 
                    	type="text" 
  										onfocus="this.type='date'" 
  										onblur="if(this.value==''){this.type='text'}"/>
                </div>
            </div>
            <button class="button text24 bold register__btn" onclick="window.location.href='/'" type="submit">Продовжити</button>
        </form>
    </div>
</div>
`;
