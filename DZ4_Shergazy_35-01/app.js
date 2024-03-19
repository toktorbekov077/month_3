let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let persons = JSON.parse(xhr.responseText);
        let cards = document.getElementById("cards");
        persons.forEach(function(person) {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
          <img src="${person.person_photo}" alt="${person.name}" style="width:100%">
          <div class="container">
            <h2>${person.name}</h2>
            <p>${person.occupation}</p>
          </div>
        `;
            cards.appendChild(card);
        });
    }
};
xhr.open("GET", "person.json", true);
xhr.send();