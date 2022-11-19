import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

const header = document.createElement("h1");
header.innerHTML = "MAYME'S BAKERY TIMELINE";
timeline.appendChild(header);


for (let counter = 0; counter < dates.length; counter++) {
  
  const div = document.createElement("div");
  div.className = "timeline-item";
  timeline.appendChild(div)

  const title = document.createElement("h2");
  title.className = "timeline-item-title";
  title.innerHTML = dates[counter].title;
  timeline.appendChild(title);

  const date = document.createElement("span");
  date.className = "timeline-item-date";
  date.innerHTML = dates[counter].date;
  timeline.appendChild(date);

  const summaryText = document.createElement("p");
  summaryText.className = "timeline-item-summary";
  summaryText.innerHTML = dates[counter].summary;
  timeline.appendChild(summaryText);

  const infoButton = document.createElement("button");
  infoButton.className = "timeline-item-more-info";
  infoButton.innerHTML = "More info";
  timeline.appendChild(infoButton);
  timeline.appendChild(div);

  //MODAL

  // const modal = document.createElement("div");
  // modal.setAttribute('id','modal');
  // modal.className = "modal";
  // document.body.appendChild(modal)

  const modalId = document.createElement("div");
  modalId.setAttribute('id','modal-container');
  modalId.style.display = 'none';
  timeline.appendChild(modalId);
  
  const timeId = document.createElement("modal-date");
  timeId.setAttribute('id','modal-date');
  timeId.innerHTML = dates[counter].date;
  modalId.appendChild(timeId);

  const titleId = document.createElement("modal-title");
  titleId.setAttribute('id','modal-title');
  titleId.innerHTML = dates[counter].title;
  modalId.appendChild(titleId);
  
  const imageId = document.createElement("img");
  imageId.setAttribute('id','modal-image');
  imageId.src = dates[counter].image;
  modalId.appendChild(imageId);
  
  const description = document.createElement("p");
  description.setAttribute('id','modal-full-description');
  description.innerHTML = dates[counter].fullDescription
  modalId.appendChild(description);


  const close = document.createElement("span");
  close.setAttribute('id','modal-close-button')
  close.className = "close";
  close.innerHTML = "&times;"
  modalId.appendChild(close);
  timeline.appendChild(modalId)

// for (let counter = 0; counter < dates.length; counter++) {

// Get DOM Elements
// const modalBtn = document.querySelector("#modal-container");
// const openModalBtn = document.querySelectorAll(".timeline-item-more-info");
// const closeModalBtn = document.querySelector(".close");

// openModalBtn.onclick = () => openModal(dates[counter]);

infoButton.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function closeModal()
 {modalId.style.display = 'none';}

function openModal() 
{ modalId.style.display = 'block';}
};




  


