import { leftbar } from "../../components/leftbar.js";
import { header } from "../../components/header.js";
import "../messagepage/messagepage.css";

export const rerecognitionpage = () => `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
				<div class="message">
					<div class="message__header text64">Повторне призначення ліків</div>
					<div class="message__container box content">
						<div class="message__container__header">
							<span>
								<img src="#" class="avatar" alt="avatar"/>
								<div class="message__container__header__name text24 bold">Іван Іванович</div>
							</span>
							<div class="message__container__header__date text16 bold">01.12.2024</div>
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
