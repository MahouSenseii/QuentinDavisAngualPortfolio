import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projectsbody',
  templateUrl: './projectsbody.component.html',
  styleUrls: ['./projectsbody.component.css']
})
export class ProjectsbodyComponent {
  constructor() {}
  WebsiteImgSrc = "./assets/Images/Website.png";
  RandomLootSrc = "./assets/Images/RandomLoot.mp4";
  ComingSoonImgSrc = "./assets/Images/ComingSoon.jpg";
  FirstFiveImgSrc = "./assets/Images/FirstFive.png";
  FirstFiveEmbedSrc = "http://pixidev.azurewebsites.net/VisualNovel/FirstFive"
  ProjectHunterImgSc = "./assets/Images/Interaction.png"
  @ViewChild('popupBox') popupBoxRef: ElementRef;
  @ViewChild('categoryInfo') categoryInfoRef: ElementRef;
  isShowingCategoryInfo: boolean = false;


  showCategory(category,mediaType,mediaSrc) {

    const imgSrc = mediaSrc;
    const popupBox = document.createElement('div');
    if (imgSrc.endsWith(".png") || imgSrc.endsWith(".jpg")){
      popupBox.classList.add('popup-box');
      const popupImage = document.createElement('img');
      popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
      popupImage.src = imgSrc;
      popupBox.style.display = "flex";
      popupImage.style.height = "600px";
      popupBox.style.width = "100%";
      popupBox.style.height = "100vh";
      popupBox.style.position = "absolute";
      popupBox.style.left = "0";
      popupBox.style.right = "0";
      popupBox.style.top = "0";
      popupBox.style
      popupBox.style.bottom = "0";
      const mediaQuery = window.matchMedia("(max-width: 1368px)");
      function handleMediaQuery(mediaQuery: MediaQueryList) {
        if (mediaQuery.matches) {
          popupBox.style.paddingTop = "50%";
          popupImage.style.height = "400px";
          popupImage.style.width = "700px";

        } else {
          popupBox.style.paddingTop = "6%"; // reset the property to its default value
        }
      }
      handleMediaQuery(mediaQuery); 
      popupBox.style.justifyContent = "center";
      popupBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
      
      popupBox.appendChild(popupImage);
      document.body.appendChild(popupBox);
    }else if (mediaType === "video"){
    popupBox.classList.add('popup-box');
    const popupImage = document.createElement('video');
    popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
    popupImage.src = imgSrc;
    popupBox.style.display = "flex";
    popupImage.style.height = "600px";
    popupBox.style.width = "100%";
    popupBox.style.height = "100vh";
    popupBox.style.position = "absolute";
    popupBox.style.left = "0";
    popupBox.style.right = "0";
    popupBox.style.top = "0";
    popupBox.style.bottom = "0";
    popupBox.style.paddingTop = "6%";
    const mediaQuery = window.matchMedia("(max-width: 1368px)");
    function handleMediaQuery(mediaQuery: MediaQueryList) {
      if (mediaQuery.matches) {
        popupBox.style.paddingTop = "80%";
        popupImage.style.height = "400px";
        popupImage.style.width = "700px";

      } else {
        popupBox.style.paddingTop = "6%"; // reset the property to its default value
      }
    }
    handleMediaQuery(mediaQuery); 
    popupBox.style.justifyContent = "center";
    popupBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    popupImage.controls = true; // show the controls on the video
    popupImage.autoplay = true;
    popupImage.loop = true;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    }else if (mediaType === "embed"){
    popupBox.classList.add('popup-box');
    const popupImage = document.createElement('embed');
    popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
    
    popupImage.src =  imgSrc;
    popupBox.style.display = "flex";
    popupImage.style.height = "600px";
    popupBox.style.width = "100%";
    popupBox.style.height = "100vh";
    popupBox.style.position = "absolute";
    popupBox.style.left = "0";
    popupBox.style.right = "0";
    popupBox.style.top = "0";
    popupBox.style.bottom = "0";
    popupBox.style.paddingTop = "6%";
    const mediaQuery = window.matchMedia("(max-width: 1368px)");
    function handleMediaQuery(mediaQuery: MediaQueryList) {
      if (mediaQuery.matches) {
        popupBox.style.paddingTop = "50%";
        popupImage.style.height = "400px";
        popupImage.style.width = "700px";

      } else {
        popupBox.style.paddingTop = "6%"; // reset the property to its default value
      }
    }
    handleMediaQuery(mediaQuery); 
    popupBox.style.justifyContent = "center";
    popupImage.style.width = "1200px";
    popupImage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    }
   // show the category info
   const categoryInfo = document.querySelector(".category-info") as HTMLElement;
   categoryInfo.classList.add('category-info--visible');
   const container = document.querySelector(".container-fluid") as HTMLElement;
   this.isShowingCategoryInfo = true;
  
   
    
    // update the category title and description      
    var categoryTitle = document.getElementById("category-title");
    var categoryDescription = document.getElementById("category-description");
    var categoryTeam = document.getElementById("category-team");
    var categoryEngine = document.getElementById("category-engine");
    var categoryTenure = document.getElementById("category-tenure");
    var categoryGenre = document.getElementById("category-genre");
    var categoryPlatform = document.getElementById("category-platform");
    switch (category) {
    case "FirstFive":
    categoryTitle.textContent = "First Five";
    categoryTeam.textContent = "Solo Developer";
    categoryEngine.textContent = "Pixi.js";
    categoryTenure.textContent = "June 2017 - Nov 2017";
    categoryGenre.textContent = "Dating Sim";
    categoryPlatform.textContent = "Web Browser"
    categoryDescription.textContent = "Introducing First Five, a passion project that showcases the fundamentals of a dating sim game. Developed from scratch, this game allows players to dive into various levels, while interacting with the main heroine, Karen. As the developer, I designed and developed every aspect of this game to showcase the immersive experience that players engage in while playing a dating sim game.";
    break;
    case "ComingSoon":
    categoryTitle.textContent = "ComingSoon";
    categoryTeam.textContent = "ComingSoon";
    categoryEngine.textContent = "ComingSoon";
    categoryTenure.textContent = "ComingSoon";
    categoryGenre.textContent = "ComingSoon";
    categoryPlatform.textContent = "ComingSoon"
    categoryDescription.textContent = "ComingSoon.";
    break;
    case "ProjectHunter":
    categoryTitle.textContent = "Project Hunter";
    categoryTeam.textContent = "Solo Developer";
    categoryEngine.textContent = "Unreal Engine";
    categoryTenure.textContent = "Jan 2022 - Present";
    categoryGenre.textContent = "ARPG";
    categoryPlatform.textContent = "PC/Console"
    categoryDescription.textContent = "Project Hunter is an exciting in-development game that I have been working on, which combines seamless ARPG features with innovative game mechanics. To learn more.";
    // create a link element
    var link = document.createElement("a");
    link.textContent = "Click here";
    link.href = "/projectHunter";
     
    // append the link element to the categoryDescription element
    categoryDescription.appendChild(link);
 
    break;
    case "Website":
    categoryTitle.textContent = "Portfolio";
    categoryTeam.textContent = "Solo Developer";
    categoryEngine.textContent = "Visual Studio Code";
    categoryTenure.textContent = "Feb 2023- March 2023";
    categoryGenre.textContent = "Website";
    categoryPlatform.textContent = "Web Browser"
    categoryDescription.textContent = "Built a responsive website using HTML, CSS, and JavaScript that allows users to easily browse  online. Implemented a user-friendly interface that features intuitive navigation.Included a interactive 3D rotation to showcase multiply projects that I've work on.";
    break;
    
 
  }
  }
  hideCategoryInfo() {
    const popupBox = document.getElementById('popup-box');
    var categoryInfo = document.getElementById("category-info");
    categoryInfo.classList.remove('category-info--visible');
    document.body.removeChild(popupBox);
    let isShowingCategoryInfo = false;
  }

}