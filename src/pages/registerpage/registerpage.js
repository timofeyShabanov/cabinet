import "./registerpage.css";
import "../../style.css";

export const registerpage = () => `
<div class="register">
    <div class="register__container box">
        <span class="register__container__close-btn">
            <img class="icon" onclick="console.log('нажали на крестик')" src='images/icons/cross.svg' alt="close"/>
        </span>
        
        <form class="register__form">
            <div class="register__form-group">
                <input type="text" placeholder="Прізвище*" required />
            </div>
            
            <div class="register__form-group">
                <input type="text" placeholder="Ім’я*" required />
            </div>
            
            <div class="register__form-group">
                <input type="text" placeholder="По батькові  (Не обов’язково)" />
            </div>
            
            <div class="register__form-row">
                <div class="register__form-group register__gender-select">
                    <select>
                        <option value="">Стать</option>
                        <option value="male">Чоловіча</option>
                        <option value="female">Жіноча</option>
                    </select>
                </div>
                
                <div class="register__form-group">
                    <input 
                    	placeholder="Дата народження" 
                    	type="text" 
  										onfocus="this.type='date'" 
  										onblur="if(this.value==''){this.type='text'}"/>
                </div>
            </div>
            
            <button onclick="window.location.href='/'" type="submit" class="button register__btn">Продовжити</button>
        </form>
    </div>
</div>
`;
