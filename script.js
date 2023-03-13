function searchFunc() {
  fetch("https://event-api-fzjs.onrender.com/events")
    .then(res => res.json())
    .then(data => {

      let input = document.getElementById("search").value;
      input = input.toLowerCase();
      let result = document.querySelector(".search-result");
      result.innerHTML = "";

      for(i = 0; i < data.length; i++) {
        let object = data[i];

        if (object.event.toLowerCase().includes(input) || object.heading.toLowerCase().includes(input)) {
          const elem = document.createElement("div");

          elem.innerHTML = `
            <a href="result.html?id=${object.id}">
              <div class="result">
                <div class="result-banner">
                  <img src="${object.poster}" alt="poster"></img>
                </div>
                <p>${object.event}: ${object.heading}</p>
              </div>
            </a>
          `

          result.appendChild(elem);
        }

        if(input.length == "") {
          result.innerHTML = "";
        }
      }
    })
    .catch(error => console.log(error));
}