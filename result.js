const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".center");

const renderResult = async () => {

    const res = await fetch("https://event-api-fzjs.onrender.com/events/" + id);
    const object = await res.json();

    const template = `
        <div class="poster">
            <a href="${object.youtube}" target="_blank">
                <img src="${object.poster}" alt="poster"></img>
                <i class='bx bxl-youtube'></i>
            </a>
        </div>
        <div class="data">
            <p class="event">${object.event}</p>
            <p class="heading">${object.heading}</p>
            <p class="desc">${object.desc}</p>
            <p class="promotion" style="font-size: 15px;"><span>Promotion: </span>${object.promotion}</p>
            <p class="promotion" style="font-size: 15px; margin-top: 5px;"><span>Date: </span>${object.date}</p>
            <p class="promotion" style="font-size: 15px; margin-top: 5px;"><span>Venue: </span>${object.venue}</p>
            <p class="promotion" style="font-size: 15px; margin-top: 5px;"><span>City: </span>${object.city}</p>
        </div>
    `

    container.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderResult());
