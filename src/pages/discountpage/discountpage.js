import { initLeftbar, leftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "./discount.css";

export const discountpage = () => {
  setTimeout(renderHeader, 0);
  setTimeout(initLeftbar, 0);
  return `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
			 <div class="discount-card">
          <div class="discount-card__header text64 bold">Дисконтна картка</div>
          <div class="discount-card__description1 text24">Дисконтна картка — це ваш ключ до вигідних покупок! Вона надає можливість отримувати знижки, накопичувати бонуси або користуватися спеціальними пропозиціями в нашому магазині чи партнерській мережі</div>
          <div class="discount-card__description2 text24">Завдяки дисконтній картці ви економите кошти при кожній покупці, а також отримуєте привілеї, доступні лише для постійних клієнтів. </div>
          <div class="discount-card__advantages text40 bold">Переваги дисконтної картки:</div>
          <ul class="discount-card__advantages__list">
             <li>Фіксовані або прогресивні знижки</li>
             <li>Накопичення бонусів за кожну покупку</li>
             <li>Доступ до ексклюзивних акцій і пропозицій</li>
             <li>Просте використання — лише покажіть картку на касі чи введіть її номер онлайн</li>
          </ul>
        </div>
			</div>
</div>`;
};
