import "./reviewpage.css";

export const reviewpage = () => `
<div class="review">
  <div class="review__container box">
   	<div class="review__container__header">
   		<span>
   			<img class="icon" onclick="console.log('нажали на review')" src='images/icons/review.svg' alt="review"/>
				<div class="text24">Відгук</div>
			</span>
   		<img class="icon" onclick="console.log('нажали на крестик')" src='images/icons/cross.svg' alt="close"/>
		</div>	
		<div class="review__container__content">
			 <form id="prescription-form" class="text24">
                <div 
                    id="prescription-text" 
                    class="bold review__container__content__text" 
                    contenteditable="true"></div>
            </form>
		</div>
		<div class="review__container__button">
			<button class="button text32 bold">Залишити відгук</button>
		</div>
	</div>
</div>`;
