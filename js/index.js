import {dates} from "./data.js";

const header = document.createElement("h1");
header.innerHTML = "MAYME'S BAKERY TIMELINE";
document.body.appendChild(header);

const timeLine = document.querySelector(".timeline");

for (let counter = 0; counter < dates.length; counter++) {
  const div = document.createElement("div");
  div.className = "timeline-item";
  timeLine.appendChild(div);

  const title = document.createElement("h2");
  title.className = "timeline-item-title";
  title.innerHTML = dates[counter].title;
  timeLine.appendChild(title);

  const date = document.createElement("span");
  date.className = "timeline-item-date";
  date.innerHTML = dates[counter].date;
  timeLine.appendChild(date);

  const summaryText = document.createElement("p");
  summaryText.className = "timeline-item-summary";
  summaryText.innerHTML = dates[counter].summary;
  timeLine.appendChild(summaryText);
  
  const infoBtn = document.createElement("button");
  infoBtn.className = "timeline-item-more-info";
  infoBtn.innerHTML = "More info";
  timeLine.appendChild(infoBtn);

};

  for (let counter = 0; counter < dates.length; counter++) {

  const modal = document.createElement("div");
  modal.setAttribute ("div", "modal-container");
  modal.style.display = "none";
  document.body.appendChild(modal);

  // const modalContent = document.createElement("div");
  // modalContent.className = "modal-content";
  // document.body.appendChild(modalContent);

  // const modalCloseBtn = document.createElement("span");
  // modalCloseBtn.className = "closeBtn";
  // modalCloseBtn.setAttribute ("id", "modal-close-button");
  // document.body.appendChild(modalCloseBtn);

  const modalDate = document.createElement("p");
  modalDate.setAttribute ("id", "modal-date")
  modalDate.innerHTML = dates[counter].date;
  modal.appendChild(modalDate);

  const modalTitle = document.createElement("h2");
  modalTitle.setAttribute ("id", "modal-title");
  modalTitle.innerHTML = dates[counter].title;
  modal.appendChild(modalTitle);

  const modalImage = document.createElement("img");
  modalImage.setAttribute ("id", "modal-image");
  modalImage.scr = dates[counter].image;
  modal.appendChild(modalImage);

  const modalDescription = document.createElement("p");
  modalDescription.setAttribute ("id", "modal-full-description");
  modalDate.innerHTML = dates[counter].fullDescription;
  modal.appendChild(modalDescription);

  const close = document.createElement("span");
  close.setAttribute("id", "modal-close-button");
  close.className = "close";
  close.innerHTML = "&times;"
  modal.appendChild(close);

  // for (let counter = 0; counter < dates.length; counter++) {

 function openModal() {
    modal.style.display = "none";
  };

  function closeModal() {
    modal.style.display = "block";
  };

  // const modalBtn = document.querySelector("#modal-container");
  // const openModalBtn = document.querySelectorAll(".timeline-item-more-info");
  // const closeModalBtn = document.querySelector(".close");

  infoBtn.onclick = () => openModal(dates[counter]);
  close.onclick = () => closeModal(dates[counter]);


  openModal.addEventListener("click", openModal);
  closeModal.addEventListener("click", closeModal);
  };
