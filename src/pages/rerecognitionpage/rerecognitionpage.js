import { initLeftbar, leftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "../messagepage/messagepage.css";
import "../../style.css";

export const rerecognitionpage = () => {
  setTimeout(renderHeader, 0);
  setTimeout(initLeftbar, 0);
  return `
${leftbar("rerecognition")}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
				<div class="message">
					<div class="message__header text64 bold">Повторне призначення ліків</div>
					<div class="message__container box content">
						<div class="message__container__header">
							<img src="#" class="avatar" alt="avatar"/>
							<span>
								<div class="message__container__header__name text24 bold">Іван Іванович</div>
								<div class="message__container__header__date text16 bold">01.12.2024</div>
							</span>
						</div>
						<div class="message__container__content">
							<div class="message__container__content__text text28">Так, звісно.</div>
						</div>
						<div class="message__container__button">
							<button class="button text24">Відповісти</button>
						</div>
					</div>	
				</div>
			</div>
</div>`;
};
