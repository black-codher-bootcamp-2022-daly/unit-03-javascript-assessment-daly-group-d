import { dates } from "./data.js";


const container = document.querySelector(".timeline");

for (let counter =0; counter < dates.length; counter++){

    if (counter % 2 == 0) {

        // empty box
        const div1 = document.createElement("div");
        div1.className = "timeline__component";
        container.appendChild(div1);

        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);

        // box with content
        const div3 = document.createElement("div");
        div3.className = "timeline__component--bg";

        const title = document.createElement("h2");
        title.className = "timeline__title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline__summary";
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
        div3.className = "timeline__component--bg";

        const title = document.createElement("h2");
        title.className = "timeline__title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline__summary";
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

        // empty box
        const div1 = document.createElement("div");
        div1.className = "timeline__component";
        container.appendChild(div1);

    }

}


// dates.map((dates) => {

//   const divContainer = document.createElement ("div");
//   divContainer.className = "timeline-item";
//   const content = document.createTextNode (dates);
//   document.body.appendChild(divContainer);
  
//   const title = document.createElement("h2");
//   title.className = "timeline-item-title";
//   const titleContent = document.createTextNode (dates.title);
//   document.body.appendChild(title);
  
//   const span = document.createElement("span");
//   span.className = "timeline-item-date";
//   const spanContent = document.createTextNode (dates.date);
//   document.body.appendChild(span);

//   const summaryText = document.createElement("p");
//   summaryText.className = "timeline-item-summary";
//   const summaryTextContent = document.createTextNode (dates.summary);
//   document.body.appendChild(summaryText);

//   const infoButton = document.createElement("button");
//   infoButton.className = "timeline-item-more-info";
//   const infoButtonContent = document.createTextNode (dates.fullDescription);
//   document.body.appendChild(infoButton);


//     });













    
