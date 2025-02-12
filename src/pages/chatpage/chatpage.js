import { leftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "../../style.css";
import "./chatpage.css";

export const chatpage = () => {
  setTimeout(renderHeader, 0);
  return `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
				<div class="chat">
					<div class="chat-header text64 bold">
						Повідомлення
					</div>
					<div class="chat-description text24">
						Ви маєте можливість надіслати повідомлення лікарям або іншим медичним працівникам
					</div>
					<div class="chat-message content box text24">
						<div class="chat-message__address">
							Кому надіслати?
							<div class="chat-message__address__choice">
								<div class="chat-message__address__choice__select">
									<select class="text20 bold">
													<option value="likar1">Лікар</option>
													<option value="likar2">Лікар 2</option>
													<option value="likar3">Лікар 3</option>
									</select>
                </div>
								<span>Адміністатор</span>
							</div>
						</div>
						<div class="chat-message__address__message">
            <form id="prescription-form" class="text24">
                <div 
                    id="prescription-text" 
                    class="bold chat-message__address__message__form__text" 
                    contenteditable="true"></div>
            </form>
						<span>
								<button class="button bold" id="submit-button">Записатись</button>
						</span>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>`;
};
