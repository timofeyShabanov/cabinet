import { initLeftbar, leftbar } from "../../components/leftbar/leftbar.js";
import { header, renderHeader } from "../../components/header/header.js";
import "./sciencepage.css";

export const sciencepage = () => {
  setTimeout(renderHeader, 0);
  setTimeout(initLeftbar, 0);
  return `
${leftbar("science")}
    <div class="right-column-container"> 
			${header()}
			<div class="main-container">
			<div class="main-container__content2">
        <div class="bold main-container__content2__header text64">
            Результати досліджень
        </div>
        <div class="box content bold text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content bold text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 bold main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
                <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
        <div class="box content text20 main-container__content2__content">
            <div class="main-container__content2__content__science-name" >
                УЗД судин
            </div>
            <div class="text20 bold main-container__content2__content__science-data">
               <span>01.11.2024</span>
                <img class='icon' src="images/icons/download.svg" alt="download"/>
            </div>
        </div>
      </div>
			</div>
</div>`;
};
