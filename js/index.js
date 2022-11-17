import { dates } from "./data.js";


const container = document.querySelector(".timeline");

for (let counter =0; counter < dates.length; counter++){


    if (counter % 2 == 0) {

        // date box
        const span =  document.createElement("span");
        span.className= "timeline-item-date";
        span.innerHTML = dates[counter].date;
        container.appendChild(span);


        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);


        // box with content
        

        const div3 = document.createElement("div");
        div3.className = "timeline_item";

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

        
        // const div3 = document.createElement("div");
        // div3.className = "timeline_item";

        // const title = document.createElement("h2");
        // title.className = "timeline-item-title";
        // title.innerHTML = dates[counter].title;
        // div3.appendChild(title);

        // const summaryText = document.createElement("p");
        // summaryText.className = "timeline-item-summary";
        // summaryText.innerHTML = dates[counter].summary;
        // div3.appendChild(summaryText);

        // const infoButton = document.createElement("button");
        // infoButton.className = "timeline-item-more-info";
        // infoButton.innerHTML = "More info";
        // div3.appendChild(infoButton);
        // container.appendChild(div3);

        // // line in the middle
        // const div2 = document.createElement("div");
        // div2.className = "timeline__middle";
        // container.appendChild(div2);


        // // date box
        // const span =  document.createElement("span");
        // span.className= "timeline-item-date";
        // span.innerHTML = dates[counter].date;
        // container.appendChild(span);
      
    }
};
  