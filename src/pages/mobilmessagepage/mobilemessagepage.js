import { initLeftbar, leftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "./mobilemessagepage.css";
import "../../style.css";

export const mobilemessagepage = () => {
  setTimeout(initLeftbar, 0);
  setTimeout(renderHeader, 0);
  return `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
				<div class="mobilemessage">
					<div class="mobilemessage__header bold">
						Повідомлення
					</div>
					<div class="mobilemessage__container box">
						<div class="mobilemessage__container__header">
							<div class="bold"> Візит відбувся </div>
							<div class="green mobilemessage__container__header__date"> 17.11.2024</div>
						</div>
						<div class="mobilemessage__container__content">
							Дякуємо за візит! Чи хочете ви оцінити працю персонала та лікаря?
						</div>
					</div>
				</div>
			</div>
</div>`;
};
