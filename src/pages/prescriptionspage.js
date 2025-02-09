import { leftbar } from "../components/leftbar.js";
import { header } from "../components/header.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "submit-button") {
    const prescriptionText = document.getElementById("prescription-text");
    if (prescriptionText) {
      console.log(prescriptionText.innerText.trim());
      prescriptionText.innerText = "";
    }
  }
});

export const prescriptionspage = () => `
${leftbar()}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
			<div class="main-container__content3">
        <div class="main-container__content3__header text64 bold">Повторне призначення ліків</div>
        <div class="main-container__content3__description text24">
            Ви маєте можливість надіслати запит на повторне призначення лікарських засобів через систему без необхідності додаткового прийому.
        </div>
        <div class="main-container__content3__message-container">
            <form id="prescription-form" class="text24">
                <div 
                    id="prescription-text" 
                    class="bold main-container__content3__message-container__form__text" 
                    contenteditable="true"></div>
            </form>
           <span>
                <button class="button bold" id="submit-button">Записатись</button>
           </span>
        </div>
      </div>
			</div>
</div>`;
