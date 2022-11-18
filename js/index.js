import { dates } from "./data.js";


const container = document.querySelector(".timeline");


for (let counter =0; counter < dates.length; counter++){


    if (counter % 2 == 0) {
        const div3 = document.createElement("div");
        div3.className = "timeline-item";

        // date box
        const emptyBox =  document.createElement("span");
        emptyBox.className= "empty-box-space";
        container.appendChild(emptyBox);

        const span =  document.createElement("span");
        span.className= "timeline-item-date";
        span.innerHTML = dates[counter].date;
        div3.appendChild(span);

        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);


        // box with content
        

        const title = document.createElement("h2");
        title.className = "timeline-item-title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline-item-summary";
        summaryText.innerHTML = dates[counter].summary;
        div3.appendChild(summaryText);

        const infoButton = document.createElement("button");
        infoButton.className = "timeline-item-more-info";
        infoButton.innerHTML = "More info";
        div3.appendChild(infoButton);
        container.appendChild(div3);

       

    } else {

        // box with content

        
        const div3 = document.createElement("div");
        div3.className = "timeline-item";


          const span =  document.createElement("span");
        span.className= "timeline-item-date";
        span.innerHTML = dates[counter].date;
        div3.appendChild(span);


        const title = document.createElement("h2");
        title.className = "timeline-item-title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline-item-summary";
        summaryText.innerHTML = dates[counter].summary;
        div3.appendChild(summaryText);

        const infoButton = document.createElement("button");
        infoButton.className = "timeline-item-more-info";
        infoButton.innerHTML = "More info";
        div3.appendChild(infoButton);
        container.appendChild(div3);

        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);


        // date box
        const emptyBox =  document.createElement("span");
        emptyBox.className= "empty-box-space";
        container.appendChild(emptyBox);

      

};
  
};

// const modalDiv = document.createElement("div");
// modalDiv.className = "modal";
// modalDiv.id= "modal-container";
// container.appendChild(modalDiv);


// const modalSpan = document.createElement("span");
// modalSpan.className = "closeBtn";
// modalSpan.id="modal-close-button";
// modalDiv.appendChild(modalSpan);


// const modalDate = document.createElement("p");
// modalDate.id= "modal-date";
// modalDate.innerHTML = dates[counter].date;
// modalDiv.appendChild(modalDate);

// const modalTitle = document.createElement("h2");
// modalTitle.id= "modal-title";
// modalTitle.innerHTML = dates[counter].title;
// modalDiv.appendChild(modalTitle);

// const modalImage = document.createElement("image");
// modalImage.id= "modal-image";
// modalImage.innerHTML = dates[counter].image;
// modalDiv.appendChild(modalImage);


// const modalMoreInfo = document.createElement("p");
// modalMoreInfo.id= "modal-full-description";
// modalMoreInfo.innerHTML = dates[counter].fullDescription;
// modalDiv.appendChild(modalMoreInfo);


// const openBtn = document.createElement("button");
// openBtn.className = "timeline-item-more-info";
// openBtn.id= "More-info";

// const close = document.createElement("span");
//   close.id= "modal-close-button";
//   close.className = "close";
//   close.innerHTML = "&times;"
//   modalId.appendChild(close);


//   const modalBtn = document.querySelector("#modal-container");
//   const openModalBtn = document.querySelector(".timeline-item-more-info");
//   const closeModalBtn = document.querySelector(".close");
  
//   // openModalBtn.onclick = () => openModal(dates[counter]);
  
//   openModalBtn.addEventListener("click", openModal);
//   closeModalBtn.addEventListener("click", closeModal);
  
//   function closeModal()
//    {modalBtn.style.display = 'none';}
  
//   function openModal() 
//   { modalBtn.style.display = 'block';};
  

  

